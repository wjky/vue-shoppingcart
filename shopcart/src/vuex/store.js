import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    state:{
      cart:JSON.parse(localStorage.getItem('cart')) || []
    },
    getters:{
     filterCount(state){
       return  state.cart.reduce((a, b) => {
        return a + b.price * b.count;
      }, 0)
     }
    },
    mutations:{
        addlistcart(state,obj){
            let result=state.cart.find(element=>element.id==obj.id);
            if (result) {
              result.count++
            }else{
              state.cart.unshift({...obj,count:1})
            }
            //并没有把加减永久存储
            /* localStorage.setItem('cart',JSON.stringify(state.cart)) */
          },
          onAdd(state,obj){
            let result=state.cart.findIndex((item)=>{
              return item.id==obj.id
            })
            state.cart[result].count++
          },
          onReduce(state,obj){
            let result=state.cart.findIndex((item)=>{
              return item.id==obj.id
            })
            if (state.cart[result].count>1) {
              state.cart[result].count--
            }
          },
    }
});

//保存所有的
store.subscribe((mutation,state)=>{
  localStorage.setItem('cart',JSON.stringify(state.cart))
})

export default store