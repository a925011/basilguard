<template>
  <div class="guanyuwomen">
    <div class="text-content">
        <h2>帮助中心</h2>
        <p>欢迎来到我们的罗勒生长监测系统帮助中心。</p>
        <p>在这里，您可以找到使用我们网站和系统时可能需要的所有信息和指导。</p>
        <p>如果您在使用过程中遇到任何问题，或者有任何疑问，以下是一些常见问题的解答。</p>
        <h3># 查看数据</h3>
        <h4>—> 查看数据—> 温度监测数据/湿度监测数据</h4>
        <p>进入页面后，您可以在首页看到罗勒生长环境的实时温/湿度数据。</p>
        <p>这些数据通过W601开发板实时收集并更新。您还可以查看过去一段时间内的环境数据记录。</p>
        <p>这有助于您分析罗勒生长环境的变化趋势。</p>
        <h4>—> echart</h4>
        <p>在“echart”页面,您可以查看温湿度的数据折线图,直观的查看温湿度变化趋势。</p>
        <h3># 报警与订阅</h3>
        <h4>—> 报警与订阅</h4>
        <p>您可以在“阈值更改”页面中设置温湿度的报警阈值。一旦实际数据超过这些阈值，</p>
        <p>系统将通过电子邮件或短信通知您。</p>
        <h3># 植物介绍</h3>
        <h4>—> 更多—> 植物介绍—关于罗勒</h4>
        <p>在此页面，您可以了解到关于罗勒的详细信息，包括罗勒的品种介绍、特点、用途等。</p>
        <h3># 阈值更改</h3>
        <h4>—> 更多—> 阈值更改</h4>
        <p>在此页面，您可以根据罗勒的生长阶段和环境需求，随时调整温湿度的报警阈值。</p>
        <h3># 关于我们</h3>
        <h4>—> 更多—> 关于我们</h4>
        <p>在“关于我们”页面，您可以了解到我们团队的背景、使命和git init愿景。</p>
        <p>如果您需要进一步的帮助或有合作意向，可以通过页面提供的联系方式与我们联系。</p>
        <h3># 最后</h3>
        <p>如果您在帮助中心找不到答案，或者需要进一步的帮助，请通过以下方式联系我们：</p>
        <p>- 邮箱:3406669656@qq.com</p>
        <p>- 电话:18622410335</p>
        <p>- 地址:天津市西青区天津师范大学德邻公寓10号楼217</p>
        <p>我们期待您的反馈，以便我们不断改进服务，更好地满足您的需求。</p>
      </div>
  </div>
</template>

<style scoped>
.guanyuwomen {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.text-content {
  border: 4px solid #90EE90;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  margin: 20px auto;
  text-align: left;
}

h4 {
  color: #42b983;
}

a {
  color: #2c3e50;
  font-weight: bold;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>