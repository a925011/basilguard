<template>
    <div>
      <h2>Device Manager</h2>
  
      <!-- 添加温度数据 -->
      <div>
        <h3>添加温度数据</h3>
        <form @submit.prevent="addTemperature">
          <label>监测编号:</label>
          <input type="text" v-model="newTemperature.device_id" required />
          <label>温度水平:</label>
          <input type="text" v-model="newTemperature.temperature_level" required />
          <label>监测时间:</label>
          <input type="datetime-local" v-model="newTemperature.monitor_time" required />
          <button type="submit">Add Temperature Data</button>
        </form>
      </div>
  
      <!-- 添加湿度数据 -->
      <div>
        <h3>添加湿度数据</h3>
        <form @submit.prevent="addHumidity">
          <label>监测编号:</label>
          <input type="text" v-model="newHumidity.device_id" required />
          <label>湿度水平:</label>
          <input type="text" v-model="newHumidity.humidity_level" required />
          <label>监测时间:</label>
          <input type="datetime-local" v-model="newHumidity.monitor_time" required />
          <button type="submit">Add Humidity Data</button>
        </form>
      </div>
  
      <!-- 更新设备 -->
      <div>
        <h3>更新数据</h3>
        <form @submit.prevent="updateDevice">
          <label>Device ID:</label>
          <input type="text" v-model="updatedDevice.id" required />
          <label>New Name:</label>
          <input type="text" v-model="updatedDevice.device_name" />
          <label>New Type:</label>
          <input type="text" v-model="updatedDevice.device_type" />
          <button type="submit">Update Device</button>
        </form>
      </div>
  
      <!-- 删除设备 -->
      <div>
        <h3>删除数据</h3>
        <input type="text" v-model="selectedDeviceId" placeholder="Enter Device ID" />
        <button @click="deleteDevice" :disabled="!selectedDeviceId">Delete Selected Device</button>
        <div v-if="deleteResponse">
          <p>{{ deleteResponse }}</p>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newTemperature: {
          device_id: '',
          temperature_level: '',
          monitor_time: ''
        },
        newHumidity: {
          device_id: '',
          humidity_level: '',
          monitor_time: ''
        },
        updatedDevice: {
          id: '',
          device_name: '',
          device_type: ''
        },
        selectedDeviceId: null,
        deleteResponse: ''
      };
    },
    methods: {
      addTemperature() {
        axios.post('http://127.0.0.1:5000/devicesw', this.newTemperature)
          .then(response => {
            alert('Temperature data added successfully!');
            this.newTemperature.device_id = '';
            this.newTemperature.temperature_level = '';
            this.newTemperature.monitor_time = '';
          })
          .catch(error => {
            console.error('Error adding temperature data:', error);
            alert('Failed to add temperature data.');
          });
      },
      addHumidity() {
        axios.post('http://127.0.0.1:5000/devices', this.newHumidity)
          .then(response => {
            alert('Humidity data added successfully!');
            this.newHumidity.device_id = '';
            this.newHumidity.humidity_level = '';
            this.newHumidity.monitor_time = '';
          })
          .catch(error => {
            console.error('Error adding humidity data:', error);
            alert('Failed to add humidity data.');
          });
      },
      updateDevice() {
        axios.put(`http://127.0.0.1:5000/devices/${this.updatedDevice.id}`, this.updatedDevice)
          .then(response => {
            alert('Device updated successfully!');
            this.updatedDevice.id = '';
            this.updatedDevice.device_name = '';
            this.updatedDevice.device_type = '';
          })
          .catch(error => {
            console.error('Error updating device:', error);
            alert('Failed to update device.');
          });
      },
      deleteDevice() {
        if (!this.selectedDeviceId) {
          alert('Please select a device to delete.');
          return;
        }
        axios.delete(`http://127.0.0.1:5000/devices/${this.selectedDeviceId}`)
          .then(response => {
            alert('Device deleted successfully!');
            this.selectedDeviceId = null;
          })
          .catch(error => {
            console.error('Error deleting device:', error);
            alert('Failed to delete device.');
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>