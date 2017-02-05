export default{
    state:{
        newslist:[],
    },
    mutations:{
        setList(state,setlist){
            state.newslist = setlist;
        }
    },
    actions:{
        newslists(context){
            fetch("http://localhost/vue/newslist1.php",{
                method:"get"
            }).then((res)=>{
                if(res.ok){
                    res.json().then((res)=>{
                        context.commit("setList",res);
                        console.log(res)
                    })
                }
            },function(){

            })
        }
    },
    getters:{
        getNews(state){
            return state.newslist.filter(function(item){
                return !item.isdeleted;
            })
        }
    }
}
