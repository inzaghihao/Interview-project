<template>
    <div class="form-group">
       <label class="col-sm-2 control-label">爱好</label>
       <div class="col-sm-10">
            <input type="text" class="form-control" :placeholder="placeholder" v-model="inputText"/>
         <table class="table table-border" v-if="show()">
             <thead>
                 <th>类别1</th>
                 <th>类别2</th>
             </thead>
             <tbody>
                 <tr v-for="fav in filterFavs">
                     <td>{{fav.class1}}</td>
                     <td>{{fav.class2}}</td>
                 </tr>
             </tbody>
         </table>
       </div>
    </div>
</template>
<style>
    
</style>
<script>
    export default{
        props:["placeholder"],
        data:function(){
            return {
                inputText:"",
                favs:[
                    {"class1":"web开发类","class2":"js"},
                    {"class1":"编程类","class2":"java"}
                ]
            }
        },
        computed:{
            filterFavs(){
                return this.favs.filter(function(item){
                    if(item.class2.indexOf(this.inputText)>=0){
                        return true
                    }else{
                        return false
                    }
                }.bind(this))
            }
        },
        methods:{
            show(){
                return this.inputText=="" ? false:true;
            }

        }
    }
</script>
