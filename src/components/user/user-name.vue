<template>
    <div>
        <div class="form-group">
           <label class="col-sm-2 control-label">用户名</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" :placeholder="placeholder" v-model="username" v-on:change="userNameChange" v-ckname />
           </div>
        </div>
        <div class="form-group">
           <label class="col-sm-2 control-label">用户名测试</label>
           <div class="col-sm-10">
             <hao-input placeholder="请再次输入测试"></hao-input>
             
           </div>
        </div>

    </div>
</template>
<style>
    
</style>
<script>
    export default{
        props:["placeholder"],
        data:function(){
            return{
                username:"",
                showErrorLabel:false
            }
        },
        methods:{
            userNameChange(){
                // if(this.checkName(this.username)){
                //     this.showErrorLabel=false
                // }else{
                //     this.showErrorLabel=true
                // }
                //this.$emit("childChange","username",this.username);
                this.$store.state.userStore.user_name=this.username
            }
        }
    }
</script>
