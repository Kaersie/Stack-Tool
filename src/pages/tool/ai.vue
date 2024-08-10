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
import { ElLoading } from 'element-plus'
import { ref } from "vue"
import OpenAI from "openai"
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
  const l1 = ElLoading.service({ fullscreen: true })
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
     l1.close()
     ElMessage.success("加载完毕")
     console.log(ta.value)
    }catch(err){
      ElMessage.error("error")
      l1.close()
    }
   }else{
    ElMessage.error("验证码错误！")
    l1.close()
   }
   codeget()
 }


</script>