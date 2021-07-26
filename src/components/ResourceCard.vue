<template>
  <div>
    <h2>{{ title }} </h2>
    <h4> {{ description }} </h4>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        Required: true
      },
      description: {
        type: String,
        Required: false,
        default: ''
      },
    }
  }

</script>

<style scoped>
  div {
    width: 50%;
    margin-left: 10%;
    border: 1px solid;
    padding: .25rem;
    border-radius: 20%;
    border-color: rgba(110, 110, 110,.4);

  }
</style>
