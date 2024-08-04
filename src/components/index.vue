<template>

	<br>
	<div id="introduce" style="margin: 50px;margin-top: 100px;">
		<h1 class="text" style="line-height: 90px;">

		</h1>
		<br><br><br>
		<h1 class="text2">

		</h1>
	</div>
	<br><br><br>

	<el-drawer
	size="50%"
    v-model="drawer"
    title="关于本站"
  >
	<h2>功能</h2><br>
	<p>翻页时钟√</p>
	<p>表盘时钟√</p>
	<p>番茄时钟√</p>
	<p>正计时器√</p>
	<p>倒计时器√</p>
	<p>拖拽分屏时钟√</p>
	<p>时钟精度到达毫秒⚪</p>
	<p>增加抽签工具板块⚪</p>
	<p>增加网页工具板块⚪</p>	
	<br><br>
	<h2>开发</h2><br>
	<p>本项目仍然处于开发阶段，我们期待您给我们一些建议与支持！</p><br><br>
    <h2>作者</h2>
	<p><br>
		卡尔斯厄<br>
		个人网站：<a class="thanks" href="https://kaersie.github.io">kaersie.github.io</a><br>
		B站：<a class="thanks" href="https://space.bilibili.com/1026296481">bilibili@卡尔斯厄</a><br>
		Github：<a class="thanks" href="https://github.com/kaersie">Kaersie</a><br>
	</p><br><br>
	<h2>致谢</h2><br>
		<p>以下是本项目使用到的第三方库和框架：</p>
		<br><a class="thanks" href="https://cn.vuejs.org/">Vue.js</a>
		<br><a class="thanks" href="https://element-plus.org/">Element Plus</a>
		<br><a class="thanks" href="https://vitejs.cn/">Vite.js</a>
		<br><a class="thanks" href="https://router.vuejs.org/">Vue Router</a>
		<br><a class="thanks" href="https://github.com/rongang/vue-drag-split">VueDragSplit</a>
		<br><a class="thanks" href="https://github.com/Yuezi32/flipClock">flipClock</a>
		<br><a class="thanks" href="https://blog.csdn.net/qq_39708228/article/details/114921340">Vue3Cookie</a>
		<br><a class="thanks" href="https://github.com/bestvist/vue-clock2/">Vue-Clock2</a>
		<br><a class="thanks" href="https://github.com/sindresorhus/screenfull">ScreenFull</a>
		<br><a class="thanks" href="https://github.com/unplugin/unplugin-vue-components">unplugin-vue-components</a>
		<br><a class="thanks" href="https://github.com/unplugin/unplugin-auto-import">unplugin-auto-import</a>
  </el-drawer>

	<el-row :gutter="21" style="margin-left: 10px;margin-right: 10px;">
		<el-col v-for="(item, index) in items" :xs="20" :sm="10" :md="8" :lg="7" :xl="5" @click="jump(item.link)"
			style="margin: auto;margin-bottom: 40px;display: block;">
			<el-card style="max-width: 480px" shadow="hover" :key="index">
				<template #header>
					<div class="card-header">
						<div v-html="item.icon"></div>
						<br>
						<p style="text-align: center;">{{ item.name }}</p>
					</div>
				</template>
				<p style="text-align: center;" v-html="item.other"></p>
			</el-card>
		</el-col>
		
	</el-row>
</template>
<style>
.card {
	margin: auto;
	display: block;
	text-align: center;
}

.thanks{
	color:#409EFF
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.text {
	display: inline-block;
	position: relative;
	font-size: 80px;
	height: 100px;
	line-height: 60px;
	color: rgb(245, 245, 245);
	margin-bottom: 20px;
}

.text2 {
	display: inline-block;
	position: relative;
	font-size: 40px;
	height: 40px;
	line-height: 45px;
	color: rgb(245, 245, 245);
}

.text::after {
	content: '';
	position: absolute;
	right: -10px;
	height: 80px;
	width: 3px;
	background-color: #fff;
	animation: san 0.5s steps(1) infinite;
}

@keyframes san {

	0%,
	100% {
		background-color: #fff;
	}

	50% {
		background-color: transparent;
	}

}
</style>
<script setup>
const drawer = ref(false)
import { useRouter } from 'vue-router'
const router = useRouter()
function jump(link) {
	if(link=="about"){
		drawer.value=true
	}else{
	router.push(link)
	}
}
import { reactive,ref } from 'vue'
const items = reactive([
	{
		name: '数字时钟', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"></path></svg></i>',
		other: '极简的翻页数字时间<br>支持背景色、全屏等参数设置<br>适用于考试或自习等场景', link: '/numberclock'
	},
	{
		name: '模拟时钟', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path><path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"></path><path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"></path></svg></i>',
		other: '类似于真实时钟的在线时间<br>支持背景色、全屏、等参数设置<br>适用于自习、工作、会议等场景', link: '/muticlock'
	},
	{
		name: '番茄时钟', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path><path fill="currentColor" d="m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"></path></svg></i>',
		other: '以番茄工作法为基础的计时器<br>支持背景、任务等参数设置<br>让自己于专注工作与学习', link: '/tomatoclock'
	},
	{
		name: '正计时器', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"></path><path fill="currentColor" d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32"></path><path fill="currentColor" d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z"></path></svg></i>',
		other: '秒表计时工具<br>支持暂停、计次等功能<br>适用于考试、自习、比赛等场景', link: '/floatclock'
	},
	{
		name: '倒计时器', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path><path fill="currentColor" d="M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"></path></svg></i>',
		other: '倒计时工具<br>支持播放提示音、暂停、重置、刷新等操作<br>适用于考试、自习、比赛等场景', link: '/unfloatclock'
	},
	{
		name: '分屏时钟', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-d2e47025=""><path fill="currentColor" d="m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"></path><path fill="currentColor" d="M480 192h64v704h-64z"></path></svg></i>',
		other: '实现同一页面多开时间工具<br>支持所有工具<br>适用于辩论、比赛等场景', link: '/splitclock'
	},
	{
		name: '关于网站', icon: '<i class="el-icon card" style="font-size: 40px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-d2e47025=""><path fill="currentColor" d="M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128z"></path><path fill="currentColor" d="M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"></path></svg></i>',
		other: '版本: 0.0.1 Build<br>作者: 卡尔斯厄 ( bilibili@卡尔斯厄 )<br>点此查看更多', link: 'about'
	},
])
console.log(items)
window.onload = () => {
	t1();
	t2();
}

function t1() {
	const text = document.querySelector('.text2');
	const txt = ["我们用极简的技术换取合适的效果", "为您用有限的时间换取无尽的自由"];

	var index = 0;
	var xiaBiao = 0;
	var huan = true;

	setInterval(function () {

		if (huan) {
			text.innerHTML = txt[xiaBiao].slice(0, ++index);
			//console.log(index);
		}
		else {
			text.innerHTML = txt[xiaBiao].slice(0, index--);
			//console.log(index);
		}

		if (index == txt[xiaBiao].length + 3) {
			huan = false;
		}
		else if (index < 0) {
			index = 0;
			huan = true;
			xiaBiao++;
			if (xiaBiao >= txt.length) {
				xiaBiao = 0;
			}
		}

	}, 200)
}

function t2() {
	const text = document.querySelector('.text');
	const txt = ["Less is More."];

	var index = 0;
	var xiaBiao = 0;
	var huan = true;

	setInterval(function () {

		if (huan) {
			text.innerHTML = txt[xiaBiao].slice(0, ++index);
			//console.log(index);
		}

		if (index == txt[xiaBiao].length + 3) {
			huan = false;
		}


	}, 200)
}
</script>
