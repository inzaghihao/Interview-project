export default{
    install(Vue){
        Vue.component("hao-input",{
            template:'<div><input type="text" class="form-control" :placeholder="placeholder" v-model="textValue" /><label class="label label-danger" v-if="showError">{{this.message}}</label></div>',
            data(){
                return{
                    textValue:"",
                    message:"用户名不合法啊"
                }
            },
            props:["placeholder"],
            computed:{
                showError(){
                    if(/\w{6,20}/.test(this.textValue) || this.textValue==""){
                        return false
                    }else{
                        return true
                    }
                }
            }
        })


        Vue.prototype.checkName=(value)=>{
            if(!value) return true;
            return /\w{6,20}/.test(value)?true:false;
        }
        Vue.prototype.errorLabel=null;
        Vue.prototype.hasError=false;
        Vue.directive("ckname",{
            bind(){
                let error = Vue.extend({
                    template:'<label class="label label-danger">{{message}}</label>',
                    data(){
                        return {
                            message:"用户名不合法"
                        }
                        
                    }
                })
                Vue.errorLabel = (new error()).$mount().$el;
            },
            update(el,bind,vnode){
                if(/\w{6,20}/.test(el.value)){
                    if(Vue.hasError){
                        el.parentNode.removeChild(Vue.errorLabel);
                        Vue.hasError=!Vue.hasError;
                    }
                    //vnode.context[bind.expression]=false
                }else{
                    if(!Vue.hasError){
                        el.parentNode.appendChild(Vue.errorLabel);
                        Vue.hasError=!Vue.hasError;
                    }
                    //vnode.context[bind.expression]=true
                }
            }
        })
    }
}
