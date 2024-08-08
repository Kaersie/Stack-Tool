    <style>
    @media screen and (max-width: 350px) {
        .time{width: 220px;height: 220px;}
   .time2{width: 200px;font-size:30px;height:50px;}
   .content {font-size: 65px;}
  /*fold竖屏*/
}

@media screen and (max-width: 500px) and (min-width:350px){
       .time{width: 300px;height: 300px;}
   .time2{width: 260px;font-size:15px;height:30px;}
   .content {font-size: 65px;}
  
}/*手机竖屏*/
@media screen and (max-width: 768px) and (min-width:500px){
      .time{width: 220px;height:220px;}
   .time2{width: 200px;font-size:15px;height:30px;}
   .content {font-size: 50px;}
}/*小手机横*/

@media screen and (min-width:768px) and (max-width:1000px) {
   .time{width: 250px;height:250px;}
   .time2{width: 200px;font-size:15px;height:30px;}
   .content {font-size: 75px;} /*手机横屏*/
}

@media screen and (min-width: 1000px) and (max-width:1300px) {
   .time{width: 350px;height: 350px;}
   .time2{width: 300px;font-size:20px;height:40px;}
   .content {font-size: 90px;}
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
            top: 15px;
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

 const time = ref(25)
 let t=time.value*60
 var open=false;
 const handleChange = (value) => {
  value=time.value;
   var countdown = document.getElementById('now_time');
  countdown.innerHTML=time.value+":00"
   t=time.value*60
   //t=time.value
}
const ins=ref()
const tomato=ref(0)
tomato.value=parseInt(localStorage.getItem("tomato"));
if (localStorage.getItem("tomato")==null){
    localStorage.setItem("tomato", 0);
    tomato.value=localStorage.getItem("tomato");
}
console.log(tomato.value)

const tomatot=ref(0)
tomatot.value=parseInt(localStorage.getItem("tomatot"));
if (localStorage.getItem("tomatot")==null){
    localStorage.setItem("tomatot", 0);
    tomatot.value=localStorage.getItem("tomatot");
}

let tf;
      

    function tick(){
         var countdown = document.getElementById('now_time');
            if (t==0){
                open=false;
                t=time.value*60;
                countdown.innerHTML="Finish!"
                tomato.value+=1;
                tomatot.value=tomatot.value+time.value
                localStorage.setItem('tomato',tomato.value);
                localStorage.setItem('tomatot',tomatot.value);
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
