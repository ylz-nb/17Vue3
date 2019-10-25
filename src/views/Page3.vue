<template>
    <div class="page3">
        <p>3.请介绍一下自己</p>
        <textarea style="width: 400px;height: 100px; " id="box" v-model="big"></textarea>
        <p> <a href="#" to="/page4" @click="doBlick">提交</a>
            &nbsp;&nbsp;<a href="#" @click="doClick()">上一步</a>
            &nbsp;&nbsp;<a href="#" @click="del()">重置</a></p>
    </div>
</template>

<script>
    export default {
        name: "Page3",
        data(){
            return {
                big:''
            }
        },
        methods:{
            doBlick() {
                this.$store.commit("addBig",{big:this.big});
                this.$router.push('/page4');
            },del(){
                this.big=''
            },doClick() {
                this.$store.state.list=[]
                this.$router.push('/page2');

            }
        }

    }
</script>