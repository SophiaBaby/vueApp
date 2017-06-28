<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
    export default{
      name: 'news',
      props: ['msg']
    }
</script>

<style scoped>
    div{
        width: 100%;
        height: 200px;
        background: #ffc685;
        font-size: 50px;
    }
</style>
