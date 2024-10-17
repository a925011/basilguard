<template>
    <div class="threshold-manager">
      <h2>阈值更改</h2>
  
      <!-- 温度阈值设置 -->
      <div class="form-container">
        <h3>温度（Temperature）阈值设置</h3>
        <form @submit.prevent="updateTemperatureThresholds">
          <label>低温度阈值:</label>
          <input type="number" v-model.number="temperatureThresholds.low" required />
          <label>高温度阈值:</label>
          <input type="number" v-model.number="temperatureThresholds.high" required />
          <button type="submit">更新温度阈值</button>
        </form>
      </div>
  
      <!-- 湿度阈值设置 -->
      <div class="form-container">
        <h3>湿度阈值设置</h3>
        <form @submit.prevent="updateHumidityThresholds">
          <label>低湿度阈值:</label>
          <input type="number" v-model.number="humidityThresholds.low" required />
          <label>高湿度阈值:</label>
          <input type="number" v-model.number="humidityThresholds.high" required />
          <button type="submit">更新湿度阈值</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        temperatureThresholds: {
          low: 10, // 低温阈值默认值
          high: 30, // 高温阈值默认值
        },
        humidityThresholds: {
          low: 20, // 低湿度阈值默认值
          high: 80, // 高湿度阈值默认值
        },
      };
    },
    methods: {
      updateTemperatureThresholds() {
        axios.post('http://127.0.0.1:5000/thresholds/temperature', this.temperatureThresholds)
          .then(response => {
            alert('温度阈值更新成功！');
          })
          .catch(error => {
            console.error('更新温度阈值失败:', error);
            alert('更新温度阈值失败。');
          });
      },
      updateHumidityThresholds() {
        axios.post('http://127.0.0.1:5000/thresholds/humidity', this.humidityThresholds)
          .then(response => {
            alert('湿度阈值更新成功！');
          })
          .catch(error => {
            console.error('更新湿度阈值失败:', error);
            alert('更新湿度阈值失败。');
          });
      },
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  .threshold-manager {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-container {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-container h3 {
    margin-bottom: 10px;
  }
  
  button {
    display: block;
    width: auto;
    margin: 10px 0;
  }
  </style>