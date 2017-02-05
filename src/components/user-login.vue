<template>
    <div id="user" class="col-md-8 col-md-offser-2">
        <h2 class="text-center" v-if="isadmin">管理员登陆</h2>
        <h2 class="text-center" v-else>用户登陆</h2>
        <form class="form-horizontal">
            <user-name placeholder="请输入用户名"></user-name>
            <user-password placeholder="请输入密码"></user-password>
            <user-area></user-area>
            <user-favs placeholder="请输入爱好"></user-favs>
            <user-submit></user-submit>
            <input type="button" value="测试父组件" @click="show"/>
        </form>
    </div>
</template>
<style>
    @import "./../css/bootstrap.min.css";
    #user{margin-top: 50px }
</style>
<script>
    import username from "./user/user-name.vue";
    import usersubmit from "./user/user-submit.vue";
    import userpassword from "./user/user-password.vue";
    import userarea from "./user/user-area.vue";
    import userfavs from "./user/user-favs.vue";
    export default {
        mounted(){
            this.$children.forEach(function(item){
                item.$on("childChange",this.setValue)
            }.bind(this))
        },
        data:function(){
            return {
                username:"",
                userpassword:"",
                isadmin:false ,
                userarea:0  
            }
        },
        methods:{
            setValue(key,value){
                this[key]=value;
            },
            show(){
                alert(this.userarea);
            }
        },
        components:{
            "user-name":username,
            "user-password":userpassword,
            "user-submit":usersubmit,
            "user-area":userarea,
            "user-favs":userfavs
        }
    }
</script>

