<template>
    <h2 style="margin: 30px;">MBTI 测试器</h2>
    <p  style="margin: 30px;">结果仅供参考</p>
    <el-button style="margin: 30px;" @click="ff" text bg>简易版</el-button>
    <el-button style="margin: 30px;" text bg>完整版</el-button><br>
    <div   style="margin: 30px;" v-for="item in t">
    <p>{{ item.q }}</p><br>
    <el-radio-group v-model="item.r">
    <el-radio-button value="a">{{ item.a }}</el-radio-button><br>
    <el-radio-button value="b">{{ item.b }}</el-radio-button>
    </el-radio-group><br>
    </div>
</template>
<script setup>
import data from './data/mbti1.json'
import { ref } from 'vue'
data.sort(function(){
      return Math.random()-0.5
  })
const t=ref(data)
function ff(){
   t.value.forEach(function(item){
    console.log(item.r)
   })
}
</script>