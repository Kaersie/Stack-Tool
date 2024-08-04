    <style>
    @media screen and (max-width: 350px) {
        .times{width: 200px;height: 200px;}
   .contents {font-size: 60px;}
  /*fold竖屏*/
}

@media screen and (max-width: 500px) and (min-width:350px){
       .times{width: 350px;height: 350px;}
   .contents {font-size: 90px;}
  
}/*手机竖屏*/
@media screen and (max-width: 768px) and (min-width:500px){
      .times{width: 350px;height:350px;}
   .contents {font-size: 60px;}
}/*小手机横*/

@media screen and (min-width:768px) and (max-width:1000px) {
   .times{width: 250px;height:250px;}
   .contents {font-size: 60px;} /*手机横屏*/
}

@media screen and (min-width: 1000px) and (max-width:1300px) {
   .times{width: 500px;height: 500px;}
   .contents {font-size: 120px;}
}

  @media screen and (min-width: 1300px) {
   .times{width: 400px;height: 400px;}
   .contents {font-size: 100px;}
}
        * {
            margin: 0;
            padding: 0;
        }

        .mains {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .times {
            text-align: center; /*让div内部文字居中*/
            background-color:#3375b9;
            border-radius: 100%;
            box-shadow: 0 0 20px #3375b9;
            margin: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            cursor: pointer;
        }
        .contents {
            color: #d6d2d3;
            margin: auto;
            text-shadow: 0 0 22px #1d3043;
              display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;height:100%;width:100%;
        }
#now_times{
    margin-left:auto;
    margin-right:auto;
}
    </style>
<template>
<div class="mains" id="fulleles">
    <div class="times" id="times" @click="run">
        <div class="contents" >
            <div class="texting"><span id="now_times" >
                00:00
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
	const activeIndex = ref('2-1')

function full(){
     if (screenfull.isEnabled) {
      let x=document.getElementById("fulleles");
    screenfull.toggle(x);
  }
}
function back1(){
   document.getElementById('fulleles').setAttribute('style', 'background-color:#141414')
}
function back2(){
   document.getElementById('fulleles').setAttribute('style', 'background-color:#93b5cf')
}
function back3(){
       document.getElementById('fulleles').setAttribute('style', 'background-color:#142334')
}
function back4(){
       document.getElementById('fulleles').setAttribute('style', 'background-color:#f7f7f7')

}
function back5(){
       document.getElementById('fulleles').setAttribute('style', 'background-color:#b6a476')

}

let t=0;
let open=0;
let tf=undefined;

function reset(){
	var countdown = document.getElementById('now_times');
	open=0;
	clearInterval(tf)
    tf=undefined;
	t=0;
	countdown.innerHTML="00:00"

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
	var countdown = document.getElementById('now_times');
	t+=1;
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
</script>
