<template>
    <div class="form-group">
       <label class="col-sm-2 control-label">密码</label>
       <div class="col-sm-10">
         <input type="password" class="form-control" :placeholder="placeholder" v-model="userpassword" v-on:change="userNameChange">
       </div>
    </div>
</template>
<style>
    
</style>
<script>
    export default{
        props:["placeholder"],
        data(){
          return {
            userpassword:""
          }
        },
        methods:{
            userNameChange:function(){
                this.$emit("childChange","userpassword",this.userpassword);
            }
        }
    }
</script>
