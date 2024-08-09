<template>
    <el-card>{{ isv }}</el-card>
</template>
<script setup>
import  { ref } from 'vue'
const isv=ref('')
function getUserIP() {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          isv.value = data.ip;
        })
        .catch(error => {
          console.log(error);
        });
    }
    getUserIP()
</script>