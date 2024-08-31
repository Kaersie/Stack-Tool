<script setup>
import Title from "./pages/title.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();
watch(
	() => route.name,
	(titles) => {
		document.title = "工具栈(原时间栈)-" + titles;
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
