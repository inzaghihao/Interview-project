<style>
    #myname{color: red;}
</style>
<template>
    <div id="myname">
        我的名字是{{name}}
    </div>
</template>
<script>

    export default {
        props:["name"]
    }
</script>
