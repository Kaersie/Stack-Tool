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
<script>

import {ChatCompletion, setEnvVariable} from "@baiducloud/qianfan";
setEnvVariable('QIANFAN_AK',"2wQRMiOAHsbaZuwgg4P5yzyT");
setEnvVariable('QIANFAN_SK',"qGi6zl7aKEdl4FjsmaJoXvClZrR3NWCs");

const client = new ChatCompletion({Endpoint: 'ERNIE-Lite-8K'});
async function main() {
    const resp = await client.chat({
                "messages": [
                        {
                                "role": "user",
                                "content": "nihao"
                        }
                ],
                "temperature": 0.95,
                "top_p": 0.7,
                "penalty_score": 1
        });
    console.log(resp);
}
main();


</script>