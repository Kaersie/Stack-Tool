import { createApp } from "vue";
//import ElementPlus from "element-plus";
//import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";

import Index from "./components/index.vue";
import Index2 from "./components/index2.vue";
import Number_Clock from "./components/number-clock.vue";
import Tomato_Clock from "./components/tomato-clock.vue";
import Muti_Clock from "./components/muti-clock.vue";
import Float_Clock from "./components/float-clock.vue";
import Unfloat_Clock from "./components/unfloat-clock.vue";
import Split_Clock from "./components/split-clock.vue";
const routes = [
  { path: "/", name: "首页", component: Index },
  { path: "/index2", name: "首页2", component: Index2 },
  { path: "/numberclock", name: "数字时钟", component: Number_Clock },
  { path: "/muticlock", name: "模拟时钟", component: Muti_Clock },
  { path: "/tomatoclock", name: "番茄时钟", component: Tomato_Clock },
  { path: "/floatclock", name: "正计时器", component: Float_Clock },
  { path: "/unfloatclock", name: "倒计时器", component: Unfloat_Clock },
  { path: "/splitclock", name: "分屏计时", component: Split_Clock },
  {
    path: "/:error*", // 会匹配所有路径
    name: "404",
    component: () => import("./components/404.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

//import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//  app.component(key, component);
//}

//app.use(ElementPlus)
app.use(router).mount("#app");
