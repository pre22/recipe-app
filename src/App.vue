<template>
  <!-- <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> 
  </div> -->


<router-view /> 
</template>

<script>


export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }

  body {
    background-color: #030e1b;
    color: #fff;
  }
  a {
    color: #2aeb74;
    text-decoration: none;
  }

  button {
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;

    background-color: #2aeb74;
    font-size: 1.125rem;
    color: #030e1b;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

</style>
