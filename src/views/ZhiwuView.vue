<template>
  <div class="zhiwu" style="font-size: 16px; display: flex; flex-direction: column; align-items: center;">
    <div class="content" v-for="(item, index) in zhiwuInfo" :key="index" style="width: 90%; display: flex; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
      <div class="text-content" style="max-width: 600px; margin-right: 20px;">
        <h2>{{ item.name }}</h2>
        <p>特点: {{ item.features }}</p>
        <p v-for="use in item.uses" :key="use">{{ use }}</p>
      </div>
      <div class="image-content" style="display: flex; justify-content: center; width: 350px;">
        <img :src="item.imageSrc" :alt="`${item.name} 图片`" style="width: 100%;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhiwuInfo: [
        {
          name: '甜罗勒',
          features: '具有甜美、温和的香气和味道，叶片通常为深绿色。',
          uses: [
            '料理: 常用于制作青酱(Pesto)、意大利面、披萨和沙拉。',
            '调味: 增添汤、炖菜和炒菜的风味。',
            '装饰: 作为菜肴的装饰增添新鲜感和风味。'
          ],
          imageSrc: require('../assets/11.jpg') // 使用 require 引用图片
        },
        {
          name: '紫罗勒',
          features: '叶片呈紫色，有时带有红色，味道比甜罗勒稍微辛辣和强烈。',
          uses: [
            '装饰: 由于其独特的颜色，常用于装饰菜肴，提升视觉效果。',
            '沙拉: 可作为沙拉的组成部分，为菜肴增添色彩和风味。',
            '烹饪: 用于调味，但需要注意紫罗勒的色素可能会影响菜肴的颜色。'
          ],
          imageSrc: require('../assets/22.jpg') // 使用 require 引用图片
        },
        {
          name: '圣罗勒',
          features: '具有强烈的香气和辛辣的味道，叶片较小，颜色从绿色到紫色不等。',
          uses: [
            '传统医学: 在印度传统医学（如阿育吠陀）中，用于改善免疫力、减轻压力和改善呼吸系统健康。',
            '茶饮: 常用来制作 Tulsi 茶，被认为具有健康益处。',
            '调味: 用于印度和东南亚菜肴，尤其是在咖喱和炖菜中。'
          ],
          imageSrc: require('../assets/33.jpg') // 使用 require 引用图片
        },
        {
          name: '柠檬罗勒',
          features: '叶片带有明显的柠檬香气，味道清新。',
          uses: [
            '东南亚料理: 主要用于泰国和越南菜肴，如汤、炒菜和腌制品。',
            '调味: 添加到鱼类、海鲜和鸡肉菜肴中，增强风味。',
            '茶饮: 可以用来泡茶，提供清新的柠檬风味。'
          ],
          imageSrc: require('../assets/44.jpg') // 使用 require 引用图片
        }
      ]
    };
  }
}
</script>

<style scoped>
.zhiwu {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.text-content {
  text-align: left;
  flex: 1;
}

.image-content img {
  max-width: 350px;
  margin: 20px;
}
</style>