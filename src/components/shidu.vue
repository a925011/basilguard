<template>
    <div id="app">
      <h1>土壤湿度数据</h1>
      <table>
        <thead>
          <tr>
            <td></td>
            <th style="line-height: 30px; border: 1px solid black;">监测编号</th>
            <!-- <th style="line-height: 30px; border: 1px solid black;">温度水平</th> -->
            <th style="line-height: 30px; border: 1px solid black;">土壤湿度</th>
            <th style="line-height: 30px; border: 1px solid black;">监测时间</th>
            <!-- <th style="line-height: 30px; border: 1px solid black;">时间</th> -->
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(device, index) in devices" :key="index">
            <td></td>
            <td>{{ device.监测编号 }}</td>
            <!-- <td>{{ device.温度水平 }}</td> -->
            <td>{{ device.湿度水平 }}</td>
            <td>{{ device.监测时间 }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        devices: [],// 用于存储从API获取的设备数据
        humidityDevices: []
      };
    },
    async created() {
        try {
        const response = await fetch('http://127.0.0.1:5000/devices'); // 替换为实际的API端点
        const data = await response.json();
        this.devices = data; // 将获取到的数据赋值给data中的devices
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
};
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid ddd;
    padding: 18px;
    text-align: center;
  }
  
  th {
    background-color: f2f2f2;
    font-weight: bold;
    text-align: center;
  }
  </style>