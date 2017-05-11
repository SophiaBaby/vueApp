<template>
  <div>
    这是一个自组件
      <h1>{{message}}</h1>
  </div>
</template>
<script>
  export default{
    props: ['message'],
    name: 'child'
  }
</script>
