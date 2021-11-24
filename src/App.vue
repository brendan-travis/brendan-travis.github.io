<template>
  <welcome></welcome>
  <landing-page></landing-page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import landingPage from "@/components/landing-page.vue";
import welcome from "@/components/welcome.vue";

@Options({
  components: {
    landingPage,
    welcome,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "styles/variables";
@import "styles/fonts";

html {
  background: $col-base-3;
  color: $col-base-1;
  user-select: none;
}

body {
  margin: 0;
}
</style>
