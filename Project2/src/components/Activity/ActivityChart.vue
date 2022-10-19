<script lang="ts" >
import Chart, { type ChartItem } from 'chart.js/auto';
export default {
    mounted() {
        console.log('Component mounted.')

        const ctx = document.getElementById('myChart'); // speak to professor about issue with this line
        const data = {
  labels: [
    'Workouts',
    'Sleep',
    'Eating',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [50, 50, 50],
    backgroundColor: [
      'rgb(255, 99, 132)', 
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
        const myChart = new Chart(ctx as ChartItem, {type: 'doughnut', data: data,})

    }
}
</script>
<template>

    <div class ="Chartbox">
        <canvas id="myChart" width="400" height="400"></canvas>

    </div>


</template>


<style lang="scss" scoped>
.Chartbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 30%;
    background-color: #f5f5f500;
}
</style>
