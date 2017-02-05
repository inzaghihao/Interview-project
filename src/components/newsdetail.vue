<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header detail-content">
                <h2>标题： {{newsdetail.title}}<small>发布时间：{{newsdetail.pubtime}}</small></h2>
                <p>
                    {{newsdetail.desc}}
                </p>
            </div>

        </div>
    </div>

</template>
<style>
     .detail-content h2{text-align: center;}
     .detail-content h2 small{display: block;}
     .detail-content p{font-size: 20px;text-indent: 2em;}
</style>
<script>
     
    export default{
        created(){
            this.$http.get("http://localhost/vue/newslist.php?newsid="+this.$route.params.newsid)
            .then(function(res){
                this.newsdetail =res.body;
            },function(res){
                //error
            })
        },
        data(){
            return{
                newsdetail:{}
            }
        }

    }
</script>
