<template>
  <div id="app">
    <nav>
      <router-link to="/">主界面</router-link> |
      <!-- <router-link to="/about">关于</router-link> | -->
      <router-link to="/app1">图表</router-link> |
      <router-link to="/post">数据操作</router-link> 
      <button @click="showQrCodeModal = true">生成二维码</button>
    </nav>
    <router-view/>
    
    <!-- 二维码模态框 -->
    <div v-if="showQrCodeModal" class="qr-code-modal">
      <div class="qr-code-container">
        <button @click="showQrCodeModal = false">关闭</button>
        <h2>扫描二维码访问链接</h2>
        <img :src="qrCodeUrl" alt="QR Code" />
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      showQrCodeModal: false,
      qrCodeUrl: null,
    };
  },
  methods: {
    generateQRCode() {
      const url = 'https://www.example.com'; // 这里设置你想要的链接
      QRCode.toDataURL(url, (err, url) => {
        if (err) console.error(err)
        this.qrCodeUrl = url;
      });
    }
  },
  mounted() {
    this.generateQRCode();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3d4d5d;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  button {
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
  }
}

.qr-code-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-code-container {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  button {
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>



