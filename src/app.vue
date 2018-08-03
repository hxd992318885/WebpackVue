<template>
    <div id="test">{{text}}</div>
</template>
<script>
export default {
    data(){
        return {
            text:'test<span>1111</span>!'
        }
    }
}
</script>
<style>
#test{
    color:red;
}

</style>

