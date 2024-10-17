<!-- <template>
  <div id="app">
    <h1>数据信息列表</h1>
    <canvas id="lineChart" width="800" height="500"></canvas> <!-- 修改canvas的大小 -->
    <div class="table-container">
      <table>
        <thead>
            <tr>
              <th style="line-height: 30px; border: 1px solid black;">监测编号</th>
              <th style="line-height: 30px; border: 1px solid black;">温度水平</th>
              <!--<th style="line-height: 30px; border: 1px solid black;">土壤湿度</th> -->
              <th style="line-height: 30px; border: 1px solid black;">监测时间</th>
              <!-- <th style="line-height: 30px; border: 1px solid black;">时间</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(device, index) in devices" :key="index">
              <td>{{ device.监测编号 }}</td>
              <td>{{ device.温度水平 }}</td>
              <!--<td>{{ device.土壤湿度 }}</td> -->
              <td>{{ device.监测时间 }}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <table class="humidity-table">
      <!-- 湿度表格的头部 -->
      <thead>
        <tr>
          <th>监测编号</th>
          <th>湿度水平</th>
          <th>监测时间</th>
        </tr>
      </thead>
      <!-- 湿度表格的主体 -->
      <tbody>
        <tr v-for="(device, index) in devices" :key="index">
          <td>{{ device.监测编号 }}</td>
          <td>{{ device.湿度水平 }}</td>
          <td>{{ device.监测时间 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template> -->

<template>
  <div id="app">
    <h1>数据一览表</h1>
    <canvas id="lineChart" width="800" height="500"></canvas>
    <div class="table-container">
      <!-- 温度表格 -->
      <h1>温度表</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th style="line-height: 30px; border: 1px solid black;">监测编号</th>
            <th style="line-height: 30px; border: 1px solid black;">温度水平</th>
            <!--<th style="line-height: 30px; border: 1px solid black;">土壤湿度</th> -->
            <th style="line-height: 30px; border: 1px solid black;">监测时间</th>
            <!-- <th style="line-height: 30px; border: 1px solid black;">时间</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, index) in devices" :key="index">
            <td>{{ device.监测编号 }}</td>
            <td>{{ device.温度水平 }}</td>
            <!--<td>{{ device.土壤湿度 }}</td> -->
            <td>{{ device.监测时间 }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 湿度表格 -->
      <h1>湿度表</h1>
      <table class="data-table">
        <thead>
          <tr>
            <th style="line-height: 30px; border: 1px solid black;">监测编号</th>
            <!-- <th style="line-height: 30px; border: 1px solid black;">温度水平</th> -->
            <th style="line-height: 30px; border: 1px solid black;">土壤湿度</th>
            <th style="line-height: 30px; border: 1px solid black;">监测时间</th>
            <!-- <th style="line-height: 30px; border: 1px solid black;">时间</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, index) in devices" :key="index">
            <td>{{ device.监测编号 }}</td>
            <td>{{ device.湿度水平 }}</td>
            <td>{{ device.监测时间 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  mounted() {
    this.fetchDataAndRenderChart();
    this.dataRefreshInterval = setInterval(() => {
      this.fetchDataAndRenderChart();
    }, 30000); // 每30秒刷新数据
  },
  beforeDestroy() {
    clearInterval(this.dataRefreshInterval); // 清除定时器
  },
  data() {
    return {
      devices: [], // 用于存储从API获取的设备数据
      chart: null, // 用于存储图表实例
      dataRefreshInterval: null // 定时器ID
    };
  },
  methods: {
    async fetchDataAndRenderChart() {
      try {
        const response = await fetch('http://127.0.0.1:5000/devices'); // 替换为实际的API端点
        const data = await response.json();

        // 将获取到的数据中的时间转换为中国标准时间
        this.devices = data.map(device => ({
          ...device,
          reading_time: new Date(device.reading_time).toLocaleString('zh-CN', {
            timeZone: 'Asia/Shanghai',
            hour12: false
          })
        }));

        // 准备图表数据
        const labels = this.devices.map(device => device.监测时间);
        const values = this.devices.map(device => device.温度水平);
        const humidityValues = this.devices.map(device => device.湿度水平);
        // 渲染折线图
        const ctx = document.getElementById('lineChart').getContext('2d');
        if (this.chart) {
          this.chart.destroy(); // 清除之前的图表实例
        }
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: '温度值',
              data: values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 3 // 增加折线的宽度
            }, 
            {
            label: '湿度值',
            data: humidityValues,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 3
        }]
          },
          options: {
            scales: {
              x: {
                beginAtZero: true
              },
              y: {
                beginAtZero: true
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  created() {
    // Initial data fetch when the component is created
    this.fetchDataAndRenderChart();
  }
}
</script>

<style>
/* 可选：添加样式来调整图表和表格的显示 */
/* 居中显示折线图 */
canvas {
  display: block;
  margin: 0 auto;
}
/* 表格容器，使表格居中 */
.table-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
/* 表格样式 */
table {
  width: 80%; /* 设置表格宽度为80%，可以根据需要调整 */
  border-collapse: collapse;
}
/* 表格头部和数据单元格样式 */
table th, table td {
  padding: 8px;
  border: 1px solid black;
  text-align: center;
}
</style>
