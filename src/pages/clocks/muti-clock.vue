<template>
    <!-- <div class="clock" :class="{'is-small':size==='small'}" :style="clockStyle"> -->
	<div class="father" id="fullele">
		<br><br><br><br><br>
    <div class="clock" :style="clockStyle" id="clockitself">
        <div class="clock-circle"></div>
        <div class="clock-hour" :style="{transform:hourRotate}"></div>
        <div class="clock-minute" :style="{transform:minuteRotate}"></div>
        <div class="clock-second" :style="{transform:secondRotate}"></div>
        <b class="hour" v-for="h in timeList" :key="h">
            <span>
                <i :style="{transform:transform}">{{h}}</i>
            </span>
        </b>
    </div>
</div>
<el-affix position="bottom" :offset="2">
			<el-menu
       :default-active="activeIndex"
    mode="horizontal"
    style="position:fixed;bottom:0px;z-index:999;width:100%"
  >
    <el-menu-item index="1" style="" @click="full" >全屏</el-menu-item>
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
import {ref} from 'vue'
	const activeIndex = ref('2-1')

function back1(){
   document.getElementById('clockitself').setAttribute('style', 'background-color:#141414')
  document.getElementById('fullele').setAttribute('style', 'background-color:#141414')
}
function back2(){
   document.getElementById('clockitself').setAttribute('style', 'background-color:#93b5cf')
       document.getElementById('fullele').setAttribute('style', 'background-color:#93b5cf')
}
function back3(){
   document.getElementById('clockitself').setAttribute('style', 'background-color:#142334')
       document.getElementById('fullele').setAttribute('style', 'background-color:#142334')
}
function back4(){
   document.getElementById('clockitself').setAttribute('style', 'background-color:#f7f7f7')
       document.getElementById('fullele').setAttribute('style', 'background-color:#f7f7f7')

}
function back5(){
   document.getElementById('clockitself').setAttribute('style', 'background-color:#b6a476')
       document.getElementById('fullele').setAttribute('style', 'background-color:#b6a476')

}

function full(){
     if (screenfull.isEnabled) {
      let x=document.getElementById("fullele");
    screenfull.toggle(x);
  }
}

</script>
<script>
export default {
    data() {
        return {
            timeList: ["12"," 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9", "10", "11"],
            transform: "scale(1)",
            hourRotate: "rotatez(0deg)",
            minuteRotate: "rotatez(0deg)",
            secondRotate: "rotatez(0deg)"
        };
    },
    props: ["time", "color", "border", "bg", "size"],
    computed: {
        clockStyle() {
            return {
                height: this.size,
                width: this.size,
                color: this.color,
                border: this.border,
                background: this.bg
            };
        }
    },
    watch: {
        time() {
            this.show();
        }
    },
    methods: {
        show() {
            this.showTime();
            if (this._timer) clearInterval(this._timer);
            if (!this.time) {
                this._timer = setInterval(() => {
                    this.showTime();
                }, 1000);
            }
        },
        showTime() {
            let times;
            if (this.time) {
                times = this.time.split(":");
            } else {
                const now = new Date();
                times = [now.getHours(), now.getMinutes(), now.getSeconds()];
            }

            let hour = +times[0];
            hour = hour > 11 ? hour - 12 : hour;
            let minute = +times[1];
            let second = +times[2] || 0;
            let hourAngle = hour * 30 + minute * 6 / 360 * 30;
            let minuteAngle = minute * 6;
            let secondAngle = second * 6;
            this.hourRotate = `rotatez(${hourAngle}deg)`;
            this.minuteRotate = `rotatez(${minuteAngle}deg)`;
            this.secondRotate = `rotatez(${secondAngle}deg)`;
        }
    },
    mounted() {
        let scale = this.$el.clientWidth / 120;
        scale = scale > 3 ? 3 : scale;
        this.transform = `scale(${scale})`;
        this.show();
    },
    destroyed() {
        if (this._timer) clearInterval(this._timer);
    }
};
</script>
<style>
	
@media screen and (max-width: 350px) {
 .clock {
	margin:15px;
    width: 210px;
    height: 210px;
    border: 10px solid;
    font-size: 12px;
	}/*fold竖屏*/
}

@media screen and (max-width: 500px) and (min-width:350px){
   .clock {
	margin:30px;
    width: 320px;
    height: 320px;
    border: 10px solid;
    font-size: 20px;
	}
}/*手机竖屏*/
@media screen and (max-width: 768px) and (min-width:500px){
  .clock {
	margin:30px;
    width: 320px;
    height: 320px;
    border: 10px solid;
    font-size: 20px;
	}
}/*小手机横*/

@media screen and (min-width:768px) and (max-width:1000px) {
  .clock {
	margin:30px;
    width: 370px;
    height: 370px;
    border: 10px solid;
    font-size: 25px;
	}   /*手机横屏*/
}

@media screen and (min-width: 1000px) and (max-width:1300px) {
   .clock {
	margin:30px;
    width: 700px;
    height: 700px;
    border: 10px solid;
    font-size: 45px;
	} /*平板横屏*/
}

  @media screen and (min-width: 1300px) {
   .clock {
	margin:30px;
    width: 600px;
    height: 600px;
    border: 10px solid;
    font-size: 40px;
	}/*pc横屏*/
}
</style>

<style lang="scss" scoped>
$angle: 30deg;
*{
		font-weight:bold;
}
.father{
	display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;
	height:100%;width:100%;
}
.clock {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
    text-align: center;
	background-color:#272727;
	color:#cccccc;
	box-shadow:rgba(50, 50, 93, 0.25) 20px 20px 60px -120px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    .hour {
        position: absolute;
        top: 0px;
        left: 49.5%;
        display: block;
        width: 20px;
        height: 50%;
        margin-left: -10px;
        padding-top: 4%;
        transform-origin: bottom;
        user-select: none;
        box-sizing: border-box;
        > span {
            display: block;

            > i {
                display: block;
                font-style: normal;
            }
        }
    }

    @for $i from 2 through 12 {
        .hour:nth-of-type(#{$i}) {
            transform: rotatez(#{$angle * ($i - 1)});
            > span {
                transform: rotatez(#{-$angle * ($i - 1)});
            }
        }
    }

    .clock-circle {
        position: absolute;
        top: 49.5%;
        left: 50.5%;
        width:	4%;
        height: 4%;
        transform: translate(-50%, -50%);
        border: 2px solid #ebb563;
        border-radius: 100%;
        background-color: #ebb563;
        z-index: 1;
        box-sizing: border-box;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        &:before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            content: "";
            width: 1%;
            height: 4px;
            border-radius: 100%;
            background-color: #ebb563;
			box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
    }

    .clock-hour,
    .clock-minute,
    .clock-second {
        position: absolute;
        top: 14.5%;
        left: 50%;
        display: block;
        width: 1.2%;
        height: 35%;
        margin-left: -1px;
        border-radius: 5px;
        transform-origin: bottom;
        background-color: #E5EAF3;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }

    .clock-hour {
        top: 30%;
        width: 2%;
        height: 20%;
        margin-left: -2px;
		background-color: #E5EAF3;
    }

    .clock-second {
        width: 0.5%;
		background-color: #ebb563;
    }
}

</style>
