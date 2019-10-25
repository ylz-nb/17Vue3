import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sex:'',
        list:[],
        big:''
    },
    mutations: {
        addSex(state,obj){
            state.sex=obj;
        },
        addList(state,obj){
            state.list.push(obj);
        },
        addBig(state,obj){
            state.big=obj;
        }
    },
    actions: {

    }
})