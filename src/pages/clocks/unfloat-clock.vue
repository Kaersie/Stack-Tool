    <style>
    @media screen and (max-width: 350px) {
        .timess{width: 220px;height: 220px;}
   .contentss {font-size: 65px;}
  /*fold竖屏*/
}

@media screen and (max-width: 500px) and (min-width:350px){
       .timess{width: 300px;height: 300px;}
   .contentss {font-size: 70px;}
  
}/*手机竖屏*/
@media screen and (max-width: 768px) and (min-width:500px){
      .timess{width: 220px;height:220px;}
   .contentss {font-size: 50px;}
}/*小手机横*/

@media screen and (min-width:768px) and (max-width:1000px) {
   .timess{width: 250px;height:250px;}
   .contentss {font-size: 75px;} /*手机横屏*/
}

@media screen and (min-width: 1000px) and (max-width:1300px) {
   .timess{width: 450px;height: 450px;}
   .contentss {font-size: 120px;}
}

  @media screen and (min-width: 1300px) {
   .timess{width: 400px;height: 400px;}
   .contentss {font-size: 100px;}
}
        * {
            margin: 0;
            padding: 0;
        }

        .mainss {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .timess {
            text-align: center; /*让div内部文字居中*/
            background-color:#E6A23C;
            border-radius: 100%;
            box-shadow: 0 0 20px #a77730;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            cursor: pointer;
        }
        .contentss {
            color: #d6d2d3;
            margin: auto;
            text-shadow: 0 0 22px #a77730;
              display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;height:100%;width:100%;
        }
#now_timess{
    margin-left:auto;
    margin-right:auto;
}
    </style>
<template>
<div class="mainss" id="fullelesss">
    <div class="timess" id="timess" @click="run">
        <div class="contentss" >
            <div class="texting"><span id="now_timess" >
                01:05
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
	<el-menu-item index="3" style="" @click="reset" >重置</el-menu-item>
        <el-menu-item index="2">计时时长 <el-time-picker v-model="lasttime" style="width:120px;margin-left:10px" value-format = 'HH:mm:ss' arrow-control @change="cg" placeholder="时间" /></el-menu-item>
	<el-sub-menu>
      <template index="2"  #title>背景</template>
      <el-menu-item @click="back1" index="2-1">邃黑</el-menu-item>
      <el-menu-item @click="back2" index="2-2">星蓝</el-menu-item>
      <el-menu-item @click="back3" index="2-3">钢青</el-menu-item>
      <el-menu-item @click="back4" index="2-4">雅白</el-menu-item>
       <el-menu-item @click="back5" index="2-5">尘灰</el-menu-item>
    </el-sub-menu>
	
  </el-menu>
		</el-affix>

        
</template>
<script setup>
import screenfull from "screenfull";
import { ref } from 'vue'
let t=65;
let h,m,s;
let open=0;
let tf=undefined;

	const activeIndex = ref('2-1')
const lasttime=ref('00:01:05')
function cg(){
   let arr=lasttime.value.split(":")
   h=parseInt(arr[0]);
   m=parseInt(arr[1]);
   s=parseInt(arr[2]);
   t=h*3600+m*60+s;
   console.log(t,h,m,s)
   var countdown = document.getElementById('now_timess');
    if (t<3600){
        var minute = parseInt(t / 60);
        var second = parseInt(t % 60);
            if (minute < 10){minute="0"+minute}
            if(t % 60 < 10){second="0"+second}
        countdown.innerHTML = minute + ':' + second;
	    }else{
		 var h=parseInt(t / 3600);
        var minute = parseInt((t%3600)/60);
        var second = parseInt((t%3600)%60);
            if (minute < 10){minute="0"+minute}
            if(t % 60 < 10){second="0"+second}
        countdown.innerHTML = h+':'+minute + ':' + second;
	}
}
function full(){
     if (screenfull.isEnabled) {
      let x=document.getElementById("fullelesss");
    screenfull.toggle(x);
  }
}
function back1(){
   document.getElementById('fullelesss').setAttribute('style', 'background-color:#141414')
}
function back2(){
   document.getElementById('fullelesss').setAttribute('style', 'background-color:#93b5cf')
}
function back3(){
       document.getElementById('fullelesss').setAttribute('style', 'background-color:#142334')
}
function back4(){
       document.getElementById('fullelesss').setAttribute('style', 'background-color:#f7f7f7')

}
function back5(){
       document.getElementById('fullelesss').setAttribute('style', 'background-color:#b6a476')

}



function reset(){
	var countdown = document.getElementById('now_timess');
	open=0;
	clearInterval(tf)
    tf=undefined;
	t=65;
	countdown.innerHTML="01:05"

}

function run(){
	console.log(open,tf)
	if(open==1){
		open=0;
		 clearInterval(tf);
        tf=undefined;
	}else{
		open=1;
		tf=setInterval(ticks,1000)
	}
	console.log(open,tf)
}

function ticks(){
    	var countdown = document.getElementById('now_timess');
	if(t==0){
        open=0;
        t=h*3600+m*60+s;
        countdown.innerHTML="时间到"
        clearInterval(tf)
        tf=undefined;
    }else{
        t-=1
        if (t<3600){
            var minute = parseInt(t / 60);
            var second = parseInt(t % 60);
             if (minute < 10){minute="0"+minute}
            if(t % 60 < 10){second="0"+second}
            countdown.innerHTML = minute + ':' + second;
	    }else{
		 var h=parseInt(t / 3600);
        var minute = parseInt((t%3600)/60);
        var second = parseInt((t%3600)%60);
            if (minute < 10){minute="0"+minute}
            if(t % 60 < 10){second="0"+second}
        countdown.innerHTML = h+':'+minute + ':' + second;
	    }
    }
}
</script>
