<script setup>
import Title from "./components/title.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();
watch(
	() => route.name,
	(titles) => {
		document.title = "时间栈-" + titles;
	},
	{ immediate: true, deep: true }
);
</script>

<template>
	<Title></Title>
	<RouterView />
</template>

<style scoped></style>
