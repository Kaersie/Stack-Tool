
<template>
  <div   class="father" id="fullele" style="background-color:#141414">
  <div class="FlipClock" id="clockitself"  style="background-color:#141414">
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
  </div></div>
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
import Flipper from './flipper.vue'
export default {
  name: 'FlipClock',
  data() {
    return {
      timer: null,
      flipObjs: []
    }
  },
  components: {
    Flipper
  },
  methods: {
    // 初始化数字
    init() {
      let now = new Date()
      let nowTimeStr = this.formatDate(new Date(now.getTime()), 'hhiiss')
       for (let i = 0; i < this.flipObjs.length; i++) {
         this.flipObjs[i].setFront(nowTimeStr[i])
       }
    },
    // 开始计时
    run() {
      this.timer = setInterval(() => {
        // 获取当前时间
        let now = new Date()
        let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss')
        let nextTimeStr = this.formatDate(now, 'hhiiss')
        for (let i = 0; i < this.flipObjs.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
          }
          this.flipObjs[i].flipDown(
            nowTimeStr[i],
            nextTimeStr[i]
          )
        }
      }, 1000)
    },
    // 正则格式化日期
    formatDate(date, dateFormat) {
      /* 单独格式化年份，根据y的字符数量输出年份
     * 例如：yyyy => 2019
            yy => 19
            y => 9
     */
      if (/(y+)/.test(dateFormat)) {
        dateFormat = dateFormat.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      // 格式化月、日、时、分、秒
      let o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'i+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(dateFormat)) {
          // 取出对应的值
          let str = o[k] + ''
          /* 根据设置的格式，输出对应的字符
           * 例如: 早上8时，hh => 08，h => 8
           * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
           * 例如: 下午15时，hh => 15, h => 15
           */
          dateFormat = dateFormat.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          )
        }
      }
      return dateFormat
    },
    // 日期时间补零
    padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }
  },
  mounted() {
    this.flipObjs = [
      this.$refs.flipperHour1,
      this.$refs.flipperHour2,
      this.$refs.flipperMinute1,
      this.$refs.flipperMinute2,
      this.$refs.flipperSecond1,
      this.$refs.flipperSecond2
    ]
    this.init()
    this.run()
  }
}
</script>

<style>
.father{
  display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;height:100%;width:100%;
}
.FlipClock {
    text-align: center;
}
.FlipClock .M-Flipper {
    margin: 0 3px;
}

</style>