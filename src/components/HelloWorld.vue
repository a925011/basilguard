<template>
  <div class="hello">
    <h1>您好, 欢迎进入基于传感器和数据可视化的罗勒生长情况监控系统!</h1>
    <p>
      本系统可以实时监测植物生长温度以及土壤湿度，记录分析数据，帮助使用者更直观的分析数据，如有使用问题请按
      <a href="http://localhost:8080/bangzhu">帮助</a> .
    </p>
    <h3>查看数据</h3>
    <ul>
      <li><a href="http://localhost:8080/excel1" target="_blank" rel="noopener">温度监测数据</a></li>
      <li><a href="http://localhost:8080/excel2" target="_blank" rel="noopener">土壤湿度数据</a></li>
    </ul>
    <h3>更多</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">报警与订阅</a></li>
      <li><a href="http://localhost:8080/zhiwu" target="_blank" rel="noopener">植物介绍--关于罗勒</a></li>
      <li><a href="http://localhost:8080/yuzhi" target="_blank" rel="noopener">阈值更改</a></li>
      <li><a href="http://localhost:8080/guanyuwomen" target="_blank" rel="noopener">关于我们</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
