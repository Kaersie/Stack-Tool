<template>
    <el-card style="margin:30px">
      <h2 style="margin:10px"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
			<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
  </svg>  IP 查询</h2>
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