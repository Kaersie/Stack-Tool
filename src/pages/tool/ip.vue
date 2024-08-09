<template>
    <el-card style="margin:30px">
      {{ isv }}
      <h2>您的ip地址<code>{{ ips }}</code></h2>
    </el-card>
</template>
<script setup>
import  { ref } from 'vue'
const isv=ref('')
const ips=ref('')
var k
  fetch('https://api.ipify.org?format=json').
     then(response => response.json()).
     then(data => {
     const ip = data.ip
     //通过ip地址获取所在地
     fetch(`https://api.vore.top/api/IPdata?ip=${ip}`).
         then((res) => res.json()
         .then((data1) => {
          isv.value=data1;
          ips.value=JSON.stringify(data1).ipinfo
         })
      )
  })
  .catch(error => { console.error(error) })

</script>