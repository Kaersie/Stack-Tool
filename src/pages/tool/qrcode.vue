<template>
    <el-card style="margin:30px">
      <h2 style="margin:20px">二维码生成</h2>
      <el-input v-model="qrtext" :rows="2" type="textarea" style="width: 80%;margin:20px  " placeholder="二维码内容....."/><br>
      <el-button style="margin:20px" @click="go" bg text>生成</el-button><br>
      <img style="width: 200px; margin:20px" :src="url"/><br><br>
    </el-card>
</template>
<script setup>
import  { ref } from 'vue'
const qrtext=ref('')
const url =ref('https://api.vore.top/api/QRcode?text=text&size=200&frame=1')
function go(){
    url.value="https://api.vore.top/api/QRcode?text="+qrtext.value+"&size=200&frame=1";
}
</script>