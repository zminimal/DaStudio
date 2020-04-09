<template lang="html">
  <div class="jumbo">
    <h1>Network.<br>Collaborate.<br>Create.</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .jumbo {
    height: 35vh;
    width: 100%;
    background-image: url('../assets/img/jumbo.jpg');
    background-size: cover;
    position: relative;
    h1 {
      font-family: 'Helvetica', sans-serif;
      font-weight: lighter;
      font-size: 1.7em;
      color: white;
      margin: 0;
      text-align: left;
      width: 50%;
      position: absolute;
      bottom: 30px;
      left: 30px;
    }
  }
</style>
