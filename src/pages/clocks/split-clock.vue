<template>
	<div class="layout">
		<keep-alive>
			<VueDragSplit :generateWindowConfig="generateWindowConfig"
	v-model:windowListSync="windowList"
	v-model:activeTabKeySync="activeTabKey"
	@closeWindow="onCloseWindow"
	@resize="onResize"
	@dragEnd="onDragend">
				<template #Tab="win">
					<p style="color: white; font-size: 12px" :title="win.label">{{ win.label }}</p>
				</template>
				<template #TabView="win">
					<div style="height:100%">
						<iframe src="#/" scrolling="yes" frameborder="0"
							style="width:100%;height:100%;background-color:#141414"></iframe>
					</div>
				</template>
			</VueDragSplit>
		</keep-alive>
	</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import "../../components/split/style.css";
import { VueDragSplit, splitDirectionMap } from "../../components/split/index";
const activeTabKey = ref("");
const windowList = ref(
new Array(2)
	.fill(1)
	.map((item, index) => ({ key: index.toString(), label: `Tab` }))
);
function generateWindowConfig(params) {
return {
	key: Date.now(),
	label: "Tab"
};
}
</script>
<script>
export default {};
</script>


<style lang="scss">
#split_window {
border-radius: 4px;
overflow: hidden;

.header_item {
	width: 100px;
	border-right: 1px solid #444;
}
}

.layout {
box-sizing: border-box;
height: 100vh;
width: 100%;
display: flex;
align-items: stretch;
padding: 0px;
overflow: hidden;
display: flex;
gap: 20px;

.left {
	.menu {
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		gap: 10px;

		.menu_item {
			cursor: pointer;
			text-align: center;
			padding: 10px 20px;
			border: 1px solid rgb(237, 237, 253);
			border-radius: 4px;
			transition: all 0.2s ease-out;
			color: rgb(109, 109, 109);
			background-color: #fff;

			&:hover {
				background: rgb(165, 165, 250);
				border: 1px solid rgb(165, 165, 250);
				color: white;
			}
		}

		.active {
			color: white;
			background: rgb(165, 165, 250);
			border: 1px solid rgb(165, 165, 250);
		}
	}
}

.right {
	flex: 1;
	display: flex;
	overflow: hidden;
	gap: 10px;
	flex-direction: column;

	button {
		background-color: white;
		outline: none;
		border: none;
		margin-right: 10px;
		padding: 10px 20px;
		cursor: pointer;
		transition: all 0.2s ease-out;

		&:hover {
			background: rgb(165, 165, 250);
			color: white;
		}
	}
}
}
</style>
<style>
#split_window {
border-radius: 4px;
overflow: hidden;
}
</style>
