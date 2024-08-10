<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px">AI 优化助手</h2>
      <el-input v-model="tq" :rows="2" type="textarea" style="width: 80%;margin:20px" placeholder="提问内容....."/><br>
      <el-input v-model="tcode"  style="width: 80px;margin-left:20px" placeholder="验证码"/>
      <img style="width: 100px; margin-left:20px" @click="codeget" :src="url"/><br><br>
      <el-button style="margin:20px" @click="main" bg text>生成</el-button><br>
      <el-input v-model="ta" :rows="8" type="textarea" style="width: 80%;margin:20px" placeholder="这里会显示ai回答....."/><br>
      <br><br>
    </el-card>
</template>
<script setup>
fetch(`https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=2wQRMiOAHsbaZuwgg4P5yzyT&client_secret=qGi6zl7aKEdl4FjsmaJoXvClZrR3NWCs`)
  .then((res)=>res.json)
  .then((data)=>console.log(data))


</script>