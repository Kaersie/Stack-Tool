<script setup>
import Title from "./pages/title.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();
watch(
	() => route.name,
	(titles) => {
		if (titles=="首页") {
			document.title = "对角工具巷 | 极简成就高效";
		}else{
			document.title =  titles+" | 对角工具巷";
		}
	},
	{ immediate: true, deep: true }
);
</script>

<template>
	<Title></Title>
	<RouterView />
    <img style="visibility: hidden" src="https://api.vore.top/api/ACGcount?code=toolstack">
</template>

<style scoped></style>
