import { createApp } from "vue";
//import ElementPlus from "element-plus";
//import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
const Index  = () => import('./pages/index.vue');
const Index2  = () => import('./pages/clocks/index2.vue');
const Number_Clock  = () => import('./pages/clocks/number-clock.vue');
const Tomato_Clock  = () => import('./pages/clocks/tomato-clock.vue');
const Muti_Clock  = () => import('./pages/clocks/muti-clock.vue');
const Float_Clock  = () => import('./pages/clocks/float-clock.vue');
const Unfloat_Clock  = () => import('./pages/clocks/unfloat-clock.vue');
const Split_Clock  = () => import('./pages/clocks/split-clock.vue');
const Ip  = () => import('./pages/tool/ip.vue');
const Qr  = () => import('./pages/tool/qrcode.vue');
const Weather  = () => import('./pages/tool/weather.vue');
const Tts  = () => import('./pages/tool/tts.vue');
const Ai  = () => import('./pages/tool/ai.vue');
const Text  = () => import('./pages/tool/text.vue');
const Mbti  = () => import('./pages/tests/mbti.vue');
const Not  = () => import('./pages/404.vue');
const routes = [
  { path: "/", name: "首页", component: Index },
  { path: "/index2", name: "首页2", component: Index2 },
  { path: "/numberclock", name: "数字时钟", component: Number_Clock },
  { path: "/muticlock", name: "模拟时钟", component: Muti_Clock },
  { path: "/tomatoclock", name: "番茄时钟", component: Tomato_Clock },
  { path: "/floatclock", name: "正计时器", component: Float_Clock },
  { path: "/unfloatclock", name: "倒计时器", component: Unfloat_Clock },
  { path: "/splitclock", name: "分屏计时", component: Split_Clock },
  { path: "/mbtitest", name: "MBTI测试", component: Mbti },
  { path: "/ip", name: "本机IP查询", component: Ip },
  { path: "/qrcode", name: "二维码生成", component: Qr },
  { path: "/weather", name: "天气查询", component: Weather},
  { path: "/tts", name: "TTS 文本朗读", component: Tts},
  { path: "/ai", name: "AI优化助手", component: Ai},
  { path: "/text", name: "成语词典", component: Text},
  {
    path: "/:error*", // 会匹配所有路径
    name: "404",
    component: Not, 
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
