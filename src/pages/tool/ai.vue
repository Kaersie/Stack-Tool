<template>
    <el-card style="margin:30px" v-loading="loading" >
      <h2 style="margin:10px"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"   viewBox="0 0 16 16">
			<path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
				</svg>  AI 优化助手</h2>
      <el-input v-model="tq" :rows="2" type="textarea" style="width: 80%;margin:20px" placeholder="提问内容....."/><br>
      <el-input v-model="tcode"  style="width: 80px;margin-left:20px" placeholder="验证码"/>
      <img style="width: 100px; margin-left:20px" @click="codeget" :src="url"/><br><br>
      <el-button style="margin:20px" @click="main" bg text>生成</el-button><br>
      <el-input v-model="ta" :rows="8" type="textarea" style="width: 80%;margin:20px" placeholder="这里会显示ai回答....."/><br>
      <br><br>
    </el-card>
</template>
<script setup>
import { ElLoading } from 'element-plus'
import { ref } from "vue"
import OpenAI from "openai"
const loading=ref(false)
 const ta=ref('')
 const tcode=ref('')
 const ttcode=ref('')
 const tq=ref('')
  const url=ref('')
 
 function codeget(){
  fetch(`https://www.zhiyanx.cn/api/checkcode/`).then(res=>res.json()).then((data)=>{
    url.value=data.base64Image;
      ttcode.value=data.verifyCode;
    })
 }
codeget()
 let client = new OpenAI({
     apiKey: "sk-osT1NJ6pzmKTo5jK2UA4L0m1FE8bYFmfgfTi5Y8kWsxHedJn",
     dangerouslyAllowBrowser: true,
     baseURL: "https://api.moonshot.cn/v1",
 })
  
 async function main(){
  loading.value=true;
  let a=tq.value;
   if(tcode.value==ttcode.value){
    try{
      let  completion = await client.chat.completions.create({
         model: "moonshot-v1-8k",
         messages: [
             {"role": "system", "content": "你是 小栈，是工具栈的一个AI助手，你精通电脑系统优化，要给用户们优化建议"},
             {"role": "user", "content": a}
         ],
         temperature: 0.3,
     })
     ta.value=completion.choices[0].message.content
     loading.value=false;
     ElMessage.success("加载完毕")
     console.log(ta.value)
    }catch(err){
      loading.value=false;
      ElMessage.error("错误！")
    }
   }else{
    loading.value=false;
    ElMessage.error("验证码错误！")
    l1.close()
   }
   codeget()
 }


</script>