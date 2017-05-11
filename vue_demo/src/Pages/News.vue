<template>
  <div>
    news hhhhhhh
    <child message="快点让我看到你"></child>
  </div>
</template>

<script>
  import child from '../components/login'

  export default{
    name: 'news',
    components: {
      child
    }
  }
</script>

<style scoped>
    div{
        width: 100%;
        height: 500px;
        background: lightgrey;
        font-size: 20px;
    }
</style>
