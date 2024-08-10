<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px">AI</h2>
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
async function get(){
  try{
    fetch(`https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=mgbQpoHrAkCzKMp7Ze9NV65G&client_secret=9cZ3egAtxJWcqkZXKPnUH8BeiyejI4sR`,{mode: "no-cors",}).then((res)=>res.json)
    .then((data)=>{
      if (data.access_token) {
            let { access_token } = data
            localStorage.setItem("access_token", access_token)
            console.log(access_token)
        }
    })
  }catch(err){
    ElMessage.error(err)
  }
}


async function send(mess){
  let token = localStorage.getItem("access_token")
  fetch(`https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=`+token,{
        mode: "no-cors",
        method: 'POST',
        headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
        },
         body: JSON.stringify({ "messages": [
                {
                    "role": "function",
                    "content": mess
                }
            ]})
    }
    ).then((res)=>res.json)
    .then((data)=>{
      console.log(data)
    })
}
send("你好")
</script>