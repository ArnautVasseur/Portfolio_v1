<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '', '', ''],
        datasets: [
          {
            label: '',
            backgroundColor: ['#39AFAF', '#3945af', '#7039af'],
            data: [40, 20, 12]
          }
        ]
      }
    }
  }
}
</script>