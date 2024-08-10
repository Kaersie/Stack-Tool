<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px">IP 查询</h2>
      <h3 style="margin:20px">公网 IP 地址: <el-input v-model="ips" style="width: 150px  " size="large"/></h3>
      <h3 style="margin:20px">IP 协议: <el-input v-model="ipx" style="width: 150px " size="large"/></h3>
      <br>
      <h3 style="margin:20px">所在位置: <el-input v-model="ipp" style="width: 150px " size="large"/></h3>
      <h3 style="margin:20px">邮政编码: <el-input v-model="ipy" style="width: 150px " size="large"/></h3>
      <h3 style="margin:20px">服务商: <el-input v-model="ipf" style="width: 150px " size="large"/></h3><br><br>
     
      <p>{{ isv }}</p>
    </el-card>
</template>
<script setup>
import  { ref } from 'vue'
const isv=ref('')
const ips=ref('')
const ipx=ref('')
const ipp=ref('')
const ipf=ref('')
const ipy=ref('')
  fetch('https://api.ipify.org?format=json').
     then(response => response.json()).
     then(data => {
     const ip = data.ip
     //通过ip地址获取所在地
     fetch(`https://api.vore.top/api/IPdata?ip=${ip}`).
         then((res) => res.json()
         .then((data1) => {
          isv.value=data1;
         const {ipinfo:{text}}=data1;
         ips.value= text
         const {ipinfo:{type}}=data1;
         ipx.value= type
         const{adcode:{n}}=data1;
         ipp.value=n;
         const{ipdata:{isp}}=data1;
         ipf.value=isp;
         const{adcode:{a}}=data1;
         ipy.value=a;
         })
      )
  })
  .catch(error => { console.error(error) })

</script>