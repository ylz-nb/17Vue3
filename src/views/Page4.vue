<template>
    <div class="page4">
        <p v-for="item in sex">您的性别是：{{item}}</p>
        <p v-for="item in list">您的爱好是：{{item.list.join(" ")}}</p>
        <p v-for="item in big">个人简介：{{item}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page4",
        data(){
            return {
                sex:this.$store.state.sex,
                list:this.$store.state.list,
                big:this.$store.state.big,
            }
        }
    }
</script>