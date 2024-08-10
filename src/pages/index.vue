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
    title="关于软件"
  >
	<h1>工具栈(原时间栈)</h1><br>
	<a class="thanks" href="https://toolstack.rth5.com/">https://toolstack.rth5.com/  (复制打开)</a>
	<p>这是一个用 Vue + Element UI 构建的时间工具，以简洁的设计为您高效工作提供帮助</p><br><br>
	<h2>功能</h2><br>
	<p>翻页时钟√</p>
	<p>表盘时钟√</p>
	<p>番茄时钟√</p>
	<p>正计时器√</p>
	<p>倒计时器√</p>
	<p>智能助手√</p>
	<p>TTS朗读√</p>
	<p>天气查询√</p>
	<p>二维码制作√</p>
	<p>IP查询√</p>
	<p>成语查询√</p>
	<p>MBTI√</p>
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
		<br><a class="thanks" href="https://api.vore.top/">OoyonghongoO</a><br><br>
		<h3>本软件基于 GPL-3.0 开源协议</h3>
  </el-drawer>

	<el-row :gutter="21" style="margin-left: 10px;margin-right: 10px;">
		<el-col v-for="(item, index) in items" :xs="20" :sm="10" :md="8" :lg="7" :xl="5" @click="jump(item.link)"
			style="margin: auto;margin-bottom: 40px;display: block;">
			<el-card style="max-width: 480px" shadow="hover" :key="index">
				<template #header>
					<div class="card-header">
						<icon :name="item.icon" size="42px" class="el-icon card" style="margin-bottom:15px"></icon>
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
import { Icon } from 'tdesign-icons-vue-next';
import { useRouter } from 'vue-router'
import { reactive,ref } from 'vue'
const drawer = ref(false)
const router = useRouter()
function jump(link) {
	if(link=="about"){
		drawer.value=true
	} else if(link=="down"){
		location.href="https://grasp.lanzout.com/b00659rdjg"
	}
	else{
	router.push(link)
	}
}

const items = reactive([
	{
		name: 'AI 优化助手', icon: 'crooked-smile',
		other: '用 AI 优化每一件事情<br>支持各类问题<br>适用于“没思路”或“不了解”等情况', link: '/ai'
	},{
		name: '数字时钟', icon: 'watch',
		other: '极简的翻页数字时间<br>支持背景色、全屏等参数设置<br>适用于考试或自习等场景', link: '/numberclock'
	},
	{
		name: '分屏时钟', icon: 'table-split',
		other: '实现同一页面多开时间工具<br>支持所有工具<br>适用于辩论、比赛等场景', link: '/splitclock'
	},
	{
		name: 'MBTI测试', icon: 'personal-information',
		other: '快速的MBTI测试工具<br>简易版，主打效率<br>适用于想要免费快速了解自己的人群', link: '/mbtitest'
	},
	{
		name: '模拟时钟', icon: 'time',
		other: '类似于真实时钟的在线时间<br>支持背景色、全屏、等参数设置<br>适用于自习、工作、会议等场景', link: '/muticlock'
	},
	{
		name: '番茄时钟', icon: 'tomato',
		other: '以番茄工作法为基础的计时器<br>支持背景、任务等参数设置<br>让自己于专注工作与学习', link: '/tomatoclock'
	},
	{
		name: 'TTS 文本朗读', icon: 'sound',
		other: '快速文本转语音<br>基于 TTS 技术<br>适用于全平台', link: '/tts'
	},
	{
		name: 'IP 查询', icon: 'location-parking-place',
		other: '获取本机公网IP<br>支持查看归属地、邮编、运营商<br>适用于全平台', link: '/ip'
	},
	{
		name: '二维码生成', icon: 'qrcode',
		other: '生成高清二维码<br>支持快速生成<br>适用于全平台', link: '/qrcode'
	},
	{
		name: '成语字典', icon: 'address-book',
		other: '在线快速查词<br>支持拼音、释义、例句、出处等<br>适用于全平台', link: '/text'
	},{
		name: '天气查询', icon: 'cloudy-sunny',
		other: '在线快速查天气<br>根据IP属地获取天气<br>支持风力、风向、湿度等数据', link: '/weather'
	},
	{
		name: '正计时器', icon: 'play-circle-stroke',
		other: '秒表计时工具<br>支持暂停、计次等功能<br>适用于考试、自习、比赛等场景', link: '/floatclock'
	},
	{
		name: '倒计时器', icon: 'replay',
		other: '倒计时工具<br>支持播放提示音、暂停、重置、刷新等操作<br>适用于考试、自习、比赛等场景', link: '/unfloatclock'
	},
	{
		name: '关于网站', icon: 'share-1',
		other: '版本: 0.0.2 Build<br>作者: 卡尔斯厄 ( bilibili@卡尔斯厄 )<br>点此查看更多', link: 'about'
	},{
		name: '客户端下载', icon: 'download',
		other: '版本: 0.0.2 Build<br>支持安卓、Windows 平台<br>其他平台可使用vue编译单文件直接运行', link: 'down'
	}
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
