<template>
    <div>
    <h2 style="margin: 30px;">MBTI 测试器</h2>
    <p  style="margin: 30px;">
        注意事项: 1.请在心态平和及时间充足的情况下才开始答题。<br>
        2.每道题目均有两个答案:A和B。请仔细阅读题目,按照与你性格相符的程度选择。 <br>
        3.请注意,题目的答案无对错之分,你不需要考虑哪个答案“应该”更好,而且不要在任何问题上思考太久,而是应该凭你心里的第一反应做出选择。 <br>
        4.如果你觉得在不同的情境里,两个答案或许都能反映你的倾向,请选择一个对于你的行为方式来说最自然、最顺畅和最从容的答案。<br>
    </p>
    <el-button style="margin: 30px;" @click="ff" text bg>简易版</el-button>
    <el-button style="margin: 30px;" text bg>完整版</el-button><br>
        <div v-for="item in t">
    <p style="margin: 20px;font-weight: bold;" >{{ item.q }}</p>
    <div style="display: flex;">
    <p class="pp" style="margin-left:20px">{{ item.a }}</p>
    <el-radio-group v-model="item.r"  style="margin-left:10px;margin-right:10px;min-width:175px">
    <el-radio-button size="small" value="5">2</el-radio-button>
    <el-radio-button size="small" value="4">1</el-radio-button>
    <el-radio-button size="small" value="3">0</el-radio-button>
    <el-radio-button size="small" value="2">1</el-radio-button>
    <el-radio-button size="small" value="1">2</el-radio-button>
</el-radio-group>
    <p class="pp"  style="margin-right:20px">{{ item.b }}</p>
</div><br><br>
    </div>
    </div>
</template>
<script setup>
import data from './data/mbti1.json'
import { ref } from 'vue'
data.sort(function(){
      return Math.random()-0.5
  })
const t=ref(data)
function ff(){
   t.value.forEach(function(item){
    console.log(item.r)
   })
}
</script>

<style>
.pp{
    margin: 0 20px;
    width:100px
}

</style>