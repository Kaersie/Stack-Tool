<template>
    <div>
    <h2 style="margin: 30px;">MBTI 测试器</h2>
    <p  style="margin: 30px;">
        注意事项: 1.请在心态平和及时间充足的情况下才开始答题。<br>
        2.每道题目均有两个答案:A和B。请仔细阅读题目,按照与你性格相符的程度选择。 <br>
        3.请注意,题目的答案无对错之分,你不需要考虑哪个答案“应该”更好,而且不要在任何问题上思考太久,而是应该凭你心里的第一反应做出选择。 <br>
        4.如果你觉得在不同的情境里,两个答案或许都能反映你的倾向,请选择一个对于你的行为方式来说最自然、最顺畅和最从容的答案。<br>
        5.空题将视作中立,过多中立答案会影响结果
    </p>
    <el-button style="margin: 30px;" @click="ff3" text bg>极速版(12题，不大准确)</el-button>
    <el-button style="margin: 30px;" @click="ff2" text bg>简易版(48题，还算准确)</el-button>
    <el-button style="margin: 30px;" @click="ff1" text bg>完整版(93题，较为准确)</el-button><br>
        <div v-for="(item,index) in res">
    <p style="margin: 20px;font-weight: bold;" >{{index+1}}.{{ item.q }}</p>
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
    <el-button style="margin: 30px;" @click="ff" text bg>提交</el-button>
</template>
<script setup>
import data1 from './data/mbti1.json'
import data2 from './data/mbti2.json'
import data3 from './data/test.json'
import { ref } from 'vue'

const res=ref([{"q":"请先选择", "a":"", "b":"", "r":""}])
function ff1(){
    data1.sort(function(){
      return Math.random()-0.5
  })
    res.value=data1
}
function ff3(){
    data3.sort(function(){
      return Math.random()-0.5
  })
    res.value=data3
}

function ff2(){
    data2.sort(function(){
      return Math.random()-0.5
  })
    res.value=data2
}

function ff(){
    let e=0,i=0,s=0,n=0,t=0,f=0,j=0,p=0,k=0,result1,result2,result3,result4;
   const a=res.value
    a.map(function ree(item){
        console.log(item.aa)
        console.log(item.r,parseInt(item.r))
    switch(item.aa){
        case "E": 
                if(parseInt(item.r)>3){
                    e+=parseInt(parseInt(item.r))-3
                }else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    i+=3-parseInt(item.r)
                    
                }
                break;
        case "I": 
                if(parseInt(item.r)>3){
                    i+=parseInt(item.r)-3
                }
                else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    e+=3-parseInt(item.r)
                };
                break;
        case "S": 
                if(parseInt(item.r)>3){
                    s+=parseInt(item.r)-3
                }
                else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    n+=3-parseInt(item.r)
                };               
                break;
        case "N":
                if(parseInt(item.r)>3){
                    n+=parseInt(item.r)-3
                }else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    s+=3-parseInt(item.r)
                };
                break;
        case "T":
        if(parseInt(item.r)>3){
                    t+=parseInt(item.r)-3
                    console.log(t)
                }
                else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    f+=3-parseInt(item.r)
                };
                break;
        case "F": 
        if(parseInt(item.r)>3){
                    f+=parseInt(item.r)-3
                }
                else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    t+=3-parseInt(item.r)
                };        
        break;
        case "J": 
        if(parseInt(item.r)>3){
                    j+=parseInt(item.r)-3
                }else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    p+=3-parseInt(item.r)
                };
        break;
        case "P":
        if(parseInt(item.r)>3){
                    p+=parseInt(item.r)-3
                    console.log(p)
                }else if(parseInt(item.r)==3 || parseInt(item.r)==0){}
                else{
                    j+=3-parseInt(item.r)
                };    
        break;
    }
   })
   console.log("e,i,s,n,t,f,j,p",e,i,s,n,t,f,j,p)
   
   if(e>=i){
    result1="E"
   }else{
    result1="I"
   }
   if(s>=n){
    result2="S"
   }else{
    result2="N"
   }
   if(t>=f){
    result3="T"
   }else{
    result3="F"
   }
   if(j>=p){
    result4="J"
   }else{
    result4="P"
   }
  
   console.log(result1,result2,result3,result4)
   console.log(result1+result2+result3+result4)
   }
</script>

<style>
.pp{
    margin: 0 20px;
    width:100px
}

</style>