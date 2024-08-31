<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"   viewBox="0 0 16 16">
			<path d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/></svg>  当地天气</h2>
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