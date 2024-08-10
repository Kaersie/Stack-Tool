<template>

	<el-menu :router="true" :default-active="activeIndex" mode="horizontal">
		<el-menu-item onclick="location.reload()" index="/"><el-text style="color:#3375b9;font-size:19px;left:0">
				<el-icon>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96"></path><path fill="currentColor" d="M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32"></path></svg>
				</el-icon>工具栈</el-text></el-menu-item>
		<el-menu-item v-for="item in list" :index="item.link">
			{{item.name}}
		</el-menu-item>
	</el-menu>
</template>



<script setup>

import { ref,reactive } from 'vue'
const activeIndex = ref('1')
const list=reactive([
{name: 'AI 优化助手', link: '/ai'},
{name: 'MBTI测试', link: '/mbtitest'},
{name: '分屏时钟', link: '/splitclock'},
{name: 'TTS 文本朗读', link: '/tts'},
{name: '数字时钟', link: '/numberclock'},
{name: '番茄时钟', link: '/tomatoclock'},
{name: '天气查询', link: '/weather'},
{name: 'IP 查询', link: '/ip'}
])
</script>

<style></style>