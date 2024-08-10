import { createApp } from "vue";
//import ElementPlus from "element-plus";
//import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";

import Index from "./pages/index.vue";
import Index2 from "./pages/clocks/index2.vue";
import Number_Clock from "./pages/clocks/number-clock.vue";
import Tomato_Clock from "./pages/clocks/tomato-clock.vue";
import Muti_Clock from "./pages/clocks/muti-clock.vue";
import Float_Clock from "./pages/clocks/float-clock.vue";
import Unfloat_Clock from "./pages/clocks/unfloat-clock.vue";
import Split_Clock from "./pages/clocks/split-clock.vue";
import Ip from "./pages/tool/ip.vue";
import Qr from "./pages/tool/qrcode.vue";
import Weather from "./pages/tool/weather.vue";
import Tts from "./pages/tool/tts.vue";
import Ai from "./pages/tool/ai.vue";
import Text from "./pages/tool/text.vue";
import Mbti from "./pages/tests/mbti.vue";
import Not from "./pages/404.vue";
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
