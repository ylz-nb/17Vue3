<template>
    <div class="Page1">
        <p>1.请问您的性别是：</p>
        <input type="radio" name="sex" value="男" v-model="sex">男
        <input type="radio" name="sex" value="女" v-model="sex">女
        <input name="sex" type="radio" value="保密" v-model="sex" checked>保密
        <p>
            <a href="#" @click="doClick()">下一步</a>
            <a href="#" @click="doBlick()">重置</a>
        </p>
    </div>
</template>


<script>
    export default {
        name: "Page1",
        data(){
            return {
                sex:'',
            }
        },
        methods:{
            doClick() {
                this.$store.commit("addSex",{sex:this.sex});
                this.$router.push('/Page2');
            },
            doBlick() {
                this.sex=""
            }
        }
    }
</script>

<style type="text/css">
    .page1{height: 300px}
    .page1 h1{ padding-top: 50px}
    a{text-decoration: none; color: blue; font-weight: bolder; margin:0px 10px}
</style>