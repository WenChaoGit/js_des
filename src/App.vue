<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { encrypt, decrypt } from "./utils/DesUtils";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      encryptedStr:
        "AtYrGCLWGp11IJfLTRVbpeHb2+4gkGZd81WFV9PJzik3Aag+rjkvcHDsKscjOLZzQY/KwLB3s4soL04NDIP41YIXRbVWmZZD+CNRs3bIchA=",
      toEncryptStr:
        '{"o":"2,2,3,11","t":20200206221553,"d":"低风险","s":18,"u":"1100000001"}'
    };
  },
  mounted() {
    let result = decrypt(this.encryptedStr);
    let str = encrypt(this.toEncryptStr);
    console.log("加密后", str);
    console.log("解密后", result);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
