import{S as s}from"./index-BH-0moDe.js";const o=s("quiz",{state:()=>({counter:1,quizResponse:[]}),getters:{getCounter:e=>e.counter,getQuizResponse:e=>e.quizResponse},actions:{counterIncrement(){this.counter++},setQuizResponse(e){this.quizResponse.push(e)},counterReset(){this.counter=1},quizResponseReset(){this.quizResponse=[]}}});export{o as u};