<template>
    <div>
      <button @click="generateQRCode">生成二维码</button>
      <div v-if="showQrCode">
        <img :src="qrCodeUrl" alt="QR Code" />
      </div>
    </div>
  </template>
  
  <script>
  import QRCode from 'qrcode'
  
  export default {
    data() {
      return {
        qrCodeUrl: null,
        showQrCode: false,
      };
    },
    methods: {
      generateQRCode() {
        const url = 'https://www.example.com'; // 这里设置你想要的链接
        QRCode.toDataURL(url, (err, url) => {
          if (err) console.error(err)
          this.qrCodeUrl = url;
          this.showQrCode = true;
        });
      }
    }
  }
  </script>
  
  <style>
  /* 你可以在这里添加样式，以确保二维码不会影响其他内容的布局 */
  </style>
