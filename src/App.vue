<template>

  <navbar></navbar>
  <router-view></router-view>
  <footer-block></footer-block>
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import FooterBlock from './components/FooterBlock.vue';
export default{
  components: { Navbar, FooterBlock }

}
</script>

<style>
div{
  color: #7F7F7F;
}
.hoverable {
    -webkit-transition: opacity 0.1s ease-in-out;
    -moz-transition: opacity 0.1s ease-in-out;
    -ms-transition: opacity 0.1s ease-in-out;
    -o-transition: opacity 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out;
    -webkit-filter: brightness(100%);
    -moz-filter: brightness(100%);
    -ms-filter: brightness(100%);
    -o-filter: brightness(100%);
    filter: brightness(100%);
    /*opacity: 1;*/
}

.hoverable:hover {
    /*opacity: 0.5;*/
    -webkit-filter: brightness(60%);
    -moz-filter: brightness(60%);
    -ms-filter: brightness(60%);
    -o-filter: brightness(60%);
    filter: brightness(60%);
}

button {
  padding: 0;
  border: none;
  background: none;
  
}

.keycap {
  background: #212529;
  border-radius: 10%;
  -moz-border-radius: 10%;
  -webkit-border-radius: 10%;
  color: #6e6e6e;
  display: inline-block;
  font-weight: bold;
  line-height: 40px;
  margin-right: 3px;
  text-align: center;
  width: 40px;
}

.light{
  color:#F8F9FA;
}

</style>
