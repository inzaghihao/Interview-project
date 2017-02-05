<template>
    <div class="form-group">
       <label class="col-sm-2 control-label">城市</label>
       <div class="col-sm-4">
         <select class="form-control" v-model="selectNum" @change="changeSelect">
            <option v-for="item in areas"
                   :value="item.area_id"
                   v-text="item.area_text" ></option>
         </select>
       </div>
    </div>
</template>
<style>
    
</style>
<script>
    export default{
        data(){
          return {
            selectNum:0,
            areas:[
              {"area_id":0,"area_text":"——请选择——"},
              {"area_id":1,"area_text":"北京"},
              {"area_id":2,"area_text":"上海"},
            ]
          }
        },
        methods:{
          changeSelect(){
            this.$emit("childChange","userarea",this.selectNum);
          }
        }
    }
</script>
