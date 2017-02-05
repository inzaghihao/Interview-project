import Vue from "vue"
import VueRouter from "vue-router"
import userlogin from "../components/user-login.vue"
import pagenav from "./../components/page-nav.vue"
import newslist from "./../components/news-list.vue"
import newsdetail from "./../components/newsdetail.vue"
import VueResource from "vue-resource"
import Myplugin from "./../components/myplugin.js"
import Vuex from "vuex"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import eltable from "./../components/el-table.vue"
import navbar from "./../components/navBar.vue"

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Myplugin);
Vue.use(Vuex);
Vue.use(ElementUI);

import usermodule from "./../store/modules/UserModules.js"
import newsmodule from "./../store/modules/NewsModules.js"

const vuex_store = new Vuex.Store({
    modules: {
        userStore: usermodule,
        newsStore: newsmodule
    }
})

const routes = [
  { path: '/', component: userlogin },
  { path: '/news', component: newslist,name:"newslist" },
  { path: '/newsdetail/:newsid', component: newsdetail,name:"newsdetail" },
  { path: '/login', component: userlogin,name:"userlogin" },
  { path: '/eltable', component: eltable,name:"eltable" },
  { path: '/navbar', component: navbar,name:"navbar" }
]

const router = new VueRouter({
   routes 
})

Vue.component("page-nav",pagenav);
var mv = new Vue({
    el:".container",
    router:router,
    store:vuex_store,
    mounted(){
        this.$http.post("http://localhost/vue/text.php",{name:"hao"},{emulateJSON:true}).then(function(res){
            // alert(res.body);
        },function(res){
            //error
        })
    }
})

// window.onhashchange=function(){
//     if(window.location.hash=="#admin"){
//         mv.$children[0].$data.isadmin=true
//     }else{
//         mv.$children[0].$data.isadmin=false
//     }
// }
