<template>
    <div class="cdc-container" :style="placementStyles.container">
      <div class="cdc" ref="donut" :style="donutStyles">
        <donut-sections
          v-on="sectionListeners"
          :sections="donutSections"
          :start-angle="startAngle">
        </donut-sections>
        <div class="cdc-overlay" :style="overlayStyles">
          <div class="cdc-text" :style="donutTextStyles">
            <slot>{{ text }}</slot>
          </div>
        </div>
      </div>
    
      <slot name="legend">
        <div class="cdc-legend" v-if="hasLegend" :style="placementStyles.legend">
          <span class="cdc-legend-item" v-for="(item, idx) in legend" :key="idx" :title="item.percent">
            <span class="cdc-legend-item-color" :style="item.styles"></span>
            <span>{{ item.label }}</span>
          </span>
        </div>
      </slot>
    </div>
    </template>
    
    <script>
    import { nativeSectionEvents } from './actions';
    import defaultColors from './colors';
    import { placement, placementStyles, sectionValidator } from './misc';
    import DonutSections from './DonutSections.vue';
    import './main.css';
    
    export default {
      name: 'vc-donut',
      props: {
        size: { type: Number, default: 250, validator: v => v > 0 },
        unit: { type: String, default: 'px' },
        thickness: {
          type: Number,
          default: 20,
          validator: v => v >= 0 && v <= 100
        },
        text: { type: String, default: null },
    
        autoAdjustTextSize: { type: Boolean, default: true },
        background: { type: String, default: '#ffffff' },
        foreground: { type: String, default: '#eeeeee' },
        sections: {
          type: Array,
          default: () => [],
          validator(sections) {
            for (let i = 0; i < sections.length; ++i) {
              if (!sectionValidator(sections[i])) return false;
            }
            return true;
          }
        },
        total: { type: Number, default: 100, validator: v => v > 0 },
        hasLegend: { type: Boolean, default: false },
        legendPlacement: {
          type: String,
          default: placement.BOTTOM,
          validator: val => !!placement[val.toUpperCase()]
        },
        startAngle: { type: Number, default: 0 }
      },
      watch: {
        autoAdjustTextSize(val) {
          if (val) window.addEventListener('resize', this.resizeListener);
          else window.removeEventListener('resize', this.resizeListener);
          this.recalcFontSize();
        },
        size() {
          this.recalcFontSize();
        },
        unit() {
          this.recalcFontSize();
        },
      },
      data() {
        return {
          donutEl: null,
          fontSize: '1em',
    
          resizeListener: null
        };
      },
      computed: {
        donutSections() {
          let valueTotal = this.sections.reduce((a, c) => a + c.value, 0);
          if (typeof valueTotal !== 'number') return [];
          valueTotal = Number(valueTotal.toFixed(2));
    
          if (valueTotal > this.total) {
            const err = `Sum of all the sections' values (${valueTotal}) should not exceed \`total\` (${this.total})`;
            throw new Error(err);
          }
          const degreesInACircle = 360;
          const degreesInASection = 180;
    
          let consumedDegrees = 0;
          let currentDefaultColorIdx = 0;
    
          const sections = [];
          this.sections.forEach(section => {
            const valToDeg = degreesInACircle * (section.value / this.total);
    
            let degreeArr = [valToDeg];
    
            if (valToDeg > degreesInASection) {
              degreeArr = [degreesInASection, valToDeg - degreesInASection];
            }
    
            const color = section.color || defaultColors[currentDefaultColorIdx++];
    
            degreeArr.forEach(degree => {
              const consumedWithCurrent = Number((consumedDegrees + degree).toFixed(2));
              if (consumedWithCurrent > degreesInASection) {
                const remainingDegreesInCurrentSection = degreesInASection - consumedDegrees;
    
                sections.push(
                  { ...section, degree: remainingDegreesInCurrentSection, color, $section: section },
                  { ...section, degree: degree - remainingDegreesInCurrentSection, color, $section: section }
                );
              }
              else {
                sections.push({ ...section, degree, color, $section: section });
              }
    
              consumedDegrees += degree;
    
              if (consumedDegrees >= degreesInASection) {
                consumedDegrees -= degreesInASection;
              }
            });
          });
          return sections;
        },
        legend() {

          if (!this.hasLegend) return null;
          let currentDefaultColorIdx = 0;
    
          return this.sections.map((section, idx) => ({
            label: section.label || `Section ${idx + 1}`,
            percent: `${section.value} (${(section.value / this.total) * 100}%)`,
            styles: {
              backgroundColor: section.color || defaultColors[currentDefaultColorIdx++]
            }
          }));
        },
        placementStyles() {
          if (!this.hasLegend) return {};
          return placementStyles[this.legendPlacement];
        },
        donutStyles() {
          const size = `${this.size}${this.unit}`;
          const styles = {
            width: size,
            paddingBottom: size,
            backgroundColor: this.foreground
          };
          return styles;
        },
        overlayStyles() {
          const availablePercent = 100;
          const size = availablePercent - this.thickness;
    
          const sizePercent = `${size}%`;
          const pos = `calc(50% - ${size / 2}%)`;
    
          return {
            height: sizePercent,
            width: sizePercent,
            top: pos,
            left: pos,
            backgroundColor: this.background
          };
        },
        donutTextStyles() {
          const { fontSize } = this;
          return { fontSize };
        },
        sectionListeners() {
          return nativeSectionEvents.reduce((acc, { sectionEventName }) => ({
            ...acc,
            [sectionEventName]: (...args) => this.emitSectionEvent(sectionEventName, ...args)
          }), {});
        }
      },
      methods: {
        recalcFontSize() {
          if (!this.autoAdjustTextSize) {
            this.fontSize = '1em';
            return;
          }
    
          const scaleDownBy = 0.08;
          let widthInPx = this.size;
    
          this.$nextTick(() => {
            if (this.unit !== 'px') {
              if (this.donutEl) widthInPx = this.donutEl.clientWidth;
              else widthInPx = null;
            }
    
            this.fontSize = widthInPx ? `${(widthInPx * scaleDownBy).toFixed(2)}px` : '1em';
          });
        },
        emitSectionEvent(sectionEventName, ...args) {
          this.$emit(sectionEventName, ...args);
        }
      },
      created() {
        this.resizeListener = this.recalcFontSize.bind(this);
      },
      mounted() {
        this.donutEl = this.$refs.donut;
    
        if (this.autoAdjustTextSize) {
          this.recalcFontSize();
          window.addEventListener('resize', this.resizeListener);
        }
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.resizeListener);
      },
      components: { DonutSections }
    };
    </script>