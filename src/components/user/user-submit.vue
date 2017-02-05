<template>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-success" @click="click">登陆</button>
        </div>
    </div>
</template>
<style>
    
</style>
<script>
    export default{
        props:["placeholder"],
        methods:{
            click(){
                // alert(this.$parent.$data.username);
                this.$store.commit("showUserName");
            }
        }
    }
</script>
