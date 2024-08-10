<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px">当地天气</h2>
      <h3 style="margin:20px">所在地(IP 所在地): <el-input v-model="wa" style="width: 150px  " size="large"/></h3>
      <h3 style="margin:20px">天气更新时间: <el-input v-model="wb" style="width: 180px  " size="large"/></h3>
      <br>
      <h3 style="margin:20px">天气: <el-input v-model="wc" style="width: 100px " size="large"/></h3>
      <h3 style="margin:20px">温度: <el-input v-model="wd" style="width: 100px " size="large"/> °C</h3>
      <h3 style="margin:20px">风向: <el-input v-model="we" style="width: 100px " size="large"/></h3>
      <h3 style="margin:20px">风力: <el-input v-model="wf" style="width: 100px " size="large"/> 级</h3>
      <h3 style="margin:20px">湿度: <el-input v-model="wg" style="width: 100px " size="large"/> %</h3><br><br>

      <br><br>
      
     
    </el-card>
</template>
<script setup>
import  { ref } from 'vue'
const wa=ref('')
const wb=ref('')
const wc=ref('')
const wd=ref('')
const we=ref('')
const wf=ref('')
const wg=ref('')
const isv=ref('')

     fetch(`https://api.vore.top/api/Weather`).
         then((res) => res.json()
         .then((data1) => {
          isv.value=data1;
          const{data:{ipdata:{area}}}=data1;
            wa.value=area;
            const{data:{tianqi:{reporttime,weather,temperature,winddirection,windpower,humidity}}}=data1;
            wb.value=reporttime;
            wc.value=weather;
            wd.value=temperature;
            we.value=winddirection;
            wf.value=windpower;
            wg.value=humidity;
         })
      )

</script>