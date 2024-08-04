    <style>
    @media screen and (max-width: 350px) {
        .time{width: 220px;height: 220px;}
   .time2{width: 200px;font-size:30px;height:50px;}
   .content {font-size: 65px;}
  /*fold竖屏*/
}

@media screen and (max-width: 500px) and (min-width:350px){
       .time{width: 350px;height: 350px;}
   .time2{width: 260px;font-size:30px;height:60px;}
   .content {font-size: 90px;}
  
}/*手机竖屏*/
@media screen and (max-width: 768px) and (min-width:500px){
      .time{width: 400px;height:400px;}
   .time2{width: 300px;font-size:30px;height:60px;}
   .content {font-size: 100px;}
}/*小手机横*/

@media screen and (min-width:768px) and (max-width:1000px) {
   .time{width: 500px;height:500px;}
   .time2{width: 400px;font-size:30px;height:60px;}
   .content {font-size: 120px;} /*手机横屏*/
}

@media screen and (min-width: 1000px) and (max-width:1300px) {
   .time{width: 600px;height: 600px;}
   .time2{width: 300px;font-size:30px;height:60px;}
   .content {font-size: 130px;}
}

  @media screen and (min-width: 1300px) {
   .time{width: 400px;height: 400px;}
   .time2{width: 300px;font-size:30px;height:50px;}
   .content {font-size: 100px;}
}
        * {
            margin: 0;
            padding: 0;
        }

        .main {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .time {
            text-align: center; /*让div内部文字居中*/
            background-color:#a8553e;
            border-radius: 100%;
            box-shadow: 0 0 20px #984d38;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            cursor: pointer;
        }
        .time2 {
           
            
            margin: auto;
            position: absolute;
            top: 10px;
            left:0;
            right:0;
            display: flex;
            cursor: pointer;
        }
        .content {
            color: #d6d2d3;
            margin: auto;
            text-shadow: 0 0 22px #984d38;
              display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;height:100%;width:100%;
        }
#now_time{
    margin-left:auto;
    margin-right:auto;
}
    </style>
<template>
<div class="main" id="fullele">
    <div><el-input  class="time2"
    placeholder="任务目标..."
    v-model="ins"
    clearable
  ></el-input>
</div>
    <div class="time" id="time" @click="run">
        <div class="content">
            <div class="texting"><span id="now_time" >
                25:00
            </span></div>
        </div>
    </div>
</div>
<el-alert title="手机端竖屏体验更佳哦" type="warning" center show-icon />
 <el-affix position="bottom" :offset="2">
			<el-menu
       :default-active="activeIndex"
    mode="horizontal"
    style="position:fixed;bottom:0px;z-index:999;width:100%"
  >
    <el-menu-item index="1" style="" @click="full" >全屏</el-menu-item>
    <el-menu-item index="2">专注时间 (分钟) <el-input-number v-model="time" :min="1" style="margin-left:20px"  :step="1 " :precision="0" @change="handleChange" /></el-menu-item>
    <el-menu-item index="3">总番茄:{{tomato}}个     总时长:{{tomatot}}分钟</el-menu-item>
  </el-menu>
		</el-affix>
</template>
<script setup>
import screenfull from "screenfull";
import { ref } from 'vue'
	const activeIndex = ref('2-1')

function full(){
     if (screenfull.isEnabled) {
      let x=document.getElementById("fullele");
    screenfull.toggle(x);
  }
}

  function setCookie(cname, cvalue, exdays = 720) {
    var d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    var expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + "; " + expires
  }

  function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") c = c.substring(1)
      if (c.indexOf(name) != -1) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  function clearCookie(cname) {
    var d = new Date()
    d.setTime(-1)
    var expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=''; " + expires
  }

 const time = ref(25)
 let t=time.value*60
 var open=false;
 const handleChange = (value) => {
  value=time.value;
   var countdown = document.getElementById('now_time');
  countdown.innerHTML=time.value+":00"
   t=time.value*60
}
const ins=ref()
const tomato=ref(0)
tomato.value=parseInt(getCookie('tomato'));
if (getCookie('tomato')==""){
    setCookie('tomato',0);
    tomato.value==getCookie('tomato');
}
if(tomato.value==NaN){tomato.value=0}
console.log(tomato.value)

const tomatot=ref(0)
tomatot.value=parseInt(getCookie('tomatot'));
if (getCookie('tomatot')==""){
    setCookie('tomatot',0);
    tomato.value==getCookie('tomatot');
}
if(tomatot.value==NaN){tomatot.value=0}
console.log(tomatot.value)

let tf;
      

    function tick(){
         var countdown = document.getElementById('now_time');
            if (t==0){
                open=false;
                t=time.value*60;
                countdown.innerHTML="Finish!"
                tomato.value+=1;
                tomatot.value=tomatot.value+time.value
                setCookie('tomato',tomato.value);
                setCookie('tomatot',tomatot.value);
                clearInterval(tf)
                tf=undefined;
                alert('专注目标达成！今日 Tomato +1')
            }else{
                t = t - 1;
                    var minute = parseInt(t / 60);
                var second = parseInt(t % 60);
                    if (t/60 < 10){minute="0"+minute}
                    if(t % 60 < 10){second="0"+second}
                countdown.innerHTML = minute + ':' + second;
                }
    }

    function run() {
        if(open==true){
             open=false;
             clearInterval(tf)
             tf=undefined;
        }else{
          open=true;
          tf=setInterval(tick,1000)
        }
    }   
</script>
