<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header" v-for="news in this.$store.getters.getNews">
                <h2> <router-link :to="{name:'newsdetail',params:{newsid:news.newsid}}"> {{news.title}}</router-link> <small>{{news.pubtime}}</small></h2>
                <p>
                    {{news.desc}}
                </p>
            </div>

        </div>
    </div>

</template>
<style>
     
</style>
<script>
     
    export default{
        created(){
            if(this.$store.state.newsStore.newslist.length==0){
                this.$store.dispatch("newslists")

                // let getObj = fetch("http://localhost/vue/newslist1.php",{
                //     method:"get"
                // });
                // getObj.then((res)=>{
                //     if(res.ok){
                //         res.text().then((res)=>{
                //             this.$store.state.newsStore.newslist = res;
                //             console.log(this.$store.state.newsStore.newslist)
                //         })
                //     }
                // },function(){

                // })

                // this.$http.get("http://localhost/vue/newslist1.php")
                // .then(function(res){
                //     this.$store.state.newsStore.newslist = res.body;
                // },function(){

                // })
            }
        },
        mounted(){
            console.log()
        }

    }
</script>
