<template>
  <div ref="chart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';

export default {
  name: 'BarChart',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    async fetchData() {
      const response = await axios.get('http://127.0.0.1:5000/api/device_types');
      return response.data; 
    },
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.updateChart();
    },
    async updateChart() {
      const data = await this.fetchData();

      const option = {
        title: {
          text: '示例柱状图'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };

      this.chart.setOption(option);
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>