<template>
    <div class="container">
      <div class="container-donut">
        <donut v-bind="donutProps" v-on="listeners">
          <div v-html="donutHTML"></div>
        </donut>
      </div>
      <div class="container-body">
          <div class="donut-sections">
            <div class="control-group" v-for="(section, idx) in sections" :key="idx">
              <div class="control">
                <pre><small>{{ idx + 1 }}.</small></pre>
              </div>
              <div class="control">
                <label :for="`section-value-${idx + 1}`">Hours Spent In Total</label>
                <input
                  class="sm" name="`section-value-${idx + 1}`" :min="0" :max="section.value + remaining"
                  type="number" v-model.number="section.value">
              </div>
              <div class="control">
                <label :for="`section-label-${idx + 1}`">Type</label>
                <input name="`section-label-${idx + 1}`" type="text" v-model="section.label">
              </div>
              <div class="control">
                <label :for="`section-color-${idx + 1}`">Identification</label>
                <input class="sm" name="`section-color-${idx + 1}`" type="color" v-model="section.color">
              </div>
             
            </div>
          </div>
    
        </div>
      </div>
    </template>
    
    <script>
    import Donut from './Donut.vue';
    import colors from './colors';
    import { nativeSectionEvents } from './actions';
    import { version } from '../../../package.json';
    import './site.css';
    
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const getObjectWithoutReactiveKeys = obj => JSON.parse(JSON.stringify(obj));
    const toFixed = num => Number(Number(num).toFixed(2));
    
    export default {
      data() {
        const unitOptions = ['px', '%'];
        const placementOptions = ['top', 'right', 'bottom', 'left'];
        const textTypeOptions = ['text', 'HTML'];
    
        const labels = ['Eat', 'Sleep', 'Working Out', 'Rest of the day'];
    
        const total = 100;
    
        const sections = Array(4).fill(true).map((_, i, arr) => ({
          value: getRandomIntInclusive((total / arr.length) / 2, total / arr.length),
          label: labels[i],
          color: colors[i]
        }));
    
        const initialConsumed = sections.reduce((a, c) => a + c.value, 0);
    
        const initiallyEnabledEvents = ['click'];
        const events = nativeSectionEvents.map(event => ({
          ...event,
          enabled: initiallyEnabledEvents.includes(event.nativeEventName)
        }));
    
        return {
          background: '#ffffff',
          foreground: '#eeeeee',
          size: 200,
          unit: 'px',
          thickness: 20,
          startAngle: 0,
    
          total,
    
          hasLegend: true,
          legendPlacement: 'bottom',
          unitOptions,
          placementOptions,
          textTypeOptions,
    
          sections,
          events,
    
          version
        };
      },
      computed: {
        donutProps() {
          const {
            background, foreground,
            size, unit, thickness,
            hasLegend, legendPlacement,
            validatedSections, total,
            startAngle, autoAdjustTextSize
          } = this;
          const [computedSize, computedThickness, computedTotal, computedStartAngle] =
            [size, thickness, total, startAngle].map(val => toFixed(val));
          return {
            background, foreground,
            size: computedSize > 0 ? computedSize : 200, unit,
            thickness: computedThickness >= 0 && computedThickness <= 100 ? computedThickness : 20,
            hasLegend, legendPlacement,
            autoAdjustTextSize,
            sections: validatedSections, total: computedTotal > 0 ? computedTotal : 100,
            startAngle: computedStartAngle || 0
          };
        },
        consumed() {
          return this.sections.reduce((a, c) => a + c.value, 0);
        },
        remaining() {
          return this.total - this.consumed;
        },
        validatedSections() {
          const { consumed, total } = this;
          if (
            [consumed, total].some(val => typeof val !== 'number') ||
            toFixed(this.consumed) > toFixed(this.total)
          ) return [];
          return this.sections;
        },
        listeners() {
          return this.events.filter(event => event.enabled).reduce((acc, curr) => ({
            ...acc,
            [curr.sectionEventName]: (...args) => this.handleSectionEvent(curr, ...args)
          }), {});
        }
      },
      methods: {
        addSection() {
          this.sections.push({
            value: 0,
            label: null,
            color: colors[this.sections.length] || null
          });
        },
        removeSection(idx) {
          this.sections.splice(idx, 1);
        },
        handleSectionEvent({ sectionEventName }, section, event) {
          const info = [
            ['-'.repeat(10)],
            [`"${sectionEventName}" occurred on "${section.label || 'Unnamed section'}"`],
            ['Section object:', getObjectWithoutReactiveKeys(section)],
            ['Native event:', event]
          ];
          info.forEach(args => console.log(...args));
        },
        handleVersionSelectChange(evt) {
          window.location.href = evt.target.value;
        }
      },
      components: { Donut }
    };
    </script>