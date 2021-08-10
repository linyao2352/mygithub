<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
export default{
  data() {
    return {
      list: [
        {
          title: '课程1',
          del: false
        },
        {
          title: '课程2',
          del: true
        }
      ],
    }
  }
}
</script>
