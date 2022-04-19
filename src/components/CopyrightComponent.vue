<template>
  <div class="copyright-section container-fluid">
    <div class="copyright container d-flex align-items-center justify-content-center">
      <p class="my-2">Copyright &copy; {{currentYear }}  Mary Rose Avenido. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          currentYear: new Date().getFullYear()
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.copyright-section{
    min-height: 40px;
    // width: 100vw;
    background-color: #849690;
    overflow: none;
  }

  p{
    color: #D7E0DD;
    text-align: center;
  }
</style>