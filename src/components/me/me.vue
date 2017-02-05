
<template>
    <div id="me">
        <myname :name="name"></myname>
        <myage :age="age"></myage>
    </div>
</template>

<script>
    import myname from "./myname.vue";
    import myage from "./myage.vue";

    export default {
        props:["name","age"],
        components:{
            "myname":myname,
            "myage":myage
        }
    }

</script>


