<template>
    <el-card style="margin:30px" >
      <h2 style="margin:10px">成语词典</h2>
      <el-input v-model="tq" style="width: 30%;margin:20px" placeholder="成语"/><br>
      <el-button class="search" @click="main" bg text>查询</el-button><br>
      <el-input v-model="ta" :rows="6" type="textarea" style="width: 80%;margin:20px" placeholder="这里会显示结果....."/><br>
      <br><br>
    </el-card>
    <div>
  <h3 style="text-align: center;">网站浏览次数</h3><br>
  <div style="text-align: center; width:100%;height:100%; display: table;">
   <span style="display: table-cell; vertical-align: middle; ">
    <img style="margin:0 auto" src="https://api.vore.top/api/ACGcount?code=toolstack">
   </span>
</div>
 </div>
</template>
<script setup>
import { ref } from "vue"
 const ta=ref('')
 const tq=ref('')

  
 async function main(){
 if(tq.value==""){
  ElMessage.error('起码先输入点东西吧...')
 }else{
  fetch(`https://api.vore.top/api/idiom?q=`+tq.value).then((res)=>res.json())
  .then((datas)=>{
    const{data}=datas
    if(data.成语==undefined){
          ElMessage.error('成语不存在')
    }else{
      ElMessage.success('查询成功')
      ta.value="成语: "+data.成语+"\n 拼音: "+data.拼音+"\n 释义: "+data.释义+"\n 出处: "+data.出处+"\n 例句: "+data.例句;

    }
   })
 }
 }


</script>