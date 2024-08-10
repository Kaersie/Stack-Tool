<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px">TTS 文本朗读</h2>
      <el-input v-model="ta" :rows="8" type="textarea" style="width: 80%;margin:20px" placeholder="朗读内容....."/><br>
      <el-button style="margin:20px" @click="go" bg text>生成</el-button><br>
      <audio controls :src="isv" style="margin:20px;width: 80%;"></audio><br>
      <br><br>
     
    </el-card>
</template>
<script setup>
import  { ref } from 'vue'
const ta=ref('')
const isv=ref('')
function go(){
    
    fetch(`https://api.vore.top/api/TTS?text=`+ta.value).
         then((res) => res.json()
         .then((data1) => {
          const{data:{download,info}}=data1;
          isv.value=download;
          if(info=="生成成功"){
            ElMessage({
                message: info,
                type: 'success',
                 })
          }else{
            ElMessage.error(info)
          }
         })
      )
}

</script>