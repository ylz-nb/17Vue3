<template>
    <div class="page2">
        <p>2.请选择您的兴趣爱好</p>
        <input type="checkbox" value="看书" v-model="list">看书
        <input type="checkbox"  value="游泳" v-model="list">游泳
        <input type="checkbox"  value="跑步" checked v-model="list">跑步
        <input type="checkbox"  value="看电影" v-model="list">看电影
        <input type="checkbox"  value="听音乐" v-model="list">听音乐
        <input type="checkbox"  value="动漫" v-model="list">动漫
        <p>
            <a href="#" @click="doClick" >上一步</a>
            <a href="#" @click="doBlick">下一步</a>
            <a href="#" @click="doDlick()">重置</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        data(){
            return {
                list:[]
            }
        },
        methods:{
            doClick() {

                this.$router.push('/page1');

            }, doBlick() {
                this.$store.commit("addList",{list:this.list});
                this.$router.push('/page3');

            },doDlick(){
                this.list=[]
            }
        }

    }
</script>
