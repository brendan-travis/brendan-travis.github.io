<template>
  <div class="top-container">
    <img class="image" src="../../public/assets/profile.jpg" />
    <h1>Brendan Travis</h1>
  </div>
  <div class="page-container">
    <h2>Full-Stack Software Engineer</h2>
    <p class="scroll-indicator">scroll down →</p>
    <about-me />
    <work-timeline />
    <project-list />
    <siteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import aboutMe from "@/pages/components/about-me.vue";
import workTimeline from "@/pages/components/work-timeline.vue";
import projectList from "@/pages/components/project-list.vue";
import siteFooter from "@/pages/components/site-footer.vue";
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.top-container {
  height: 50vh;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: $break-mobile-max) {
    height: 66vh;
  }

  h1 {
    margin-bottom: 8px;

    @media (max-width: $break-mobile-max) {
      align-self: center;
    }

    @media (min-width: $break-mobile-min) {
      margin-left: 20%;
    }
  }

  .image {
    width: 300px;
    height: 300px;
    position: absolute;
    right: 20%;
    border-radius: 150px;
    top: calc(50vh - 150px);
    object-fit: cover;

    @media (max-width: $break-mobile-max) {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      top: 20%;
      right: calc(50vw - 100px);
    }
  }
}

.page-container {
  background: $col-base-1;
  display: flex;
  flex-direction: column;

  h2 {
    color: $col-base-3;
    margin-top: 8px;

    @media (max-width: $break-mobile-max) {
      align-self: center;
      margin-bottom: 33vh;
    }

    @media (min-width: $break-mobile-min) {
      margin-left: 20%;
      margin-bottom: 50vh;
    }
  }

  p {
    color: $col-base-3;
    align-self: center;
  }

  .scroll-indicator {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    margin: 0;
    bottom: 8px;
    left: 8px;
    animation: bounce-bottom 2s ease infinite;
  }
}

@keyframes bounce-bottom {
  0% {
    padding-bottom: 0;
  }
  50% {
    padding-bottom: 16px;
  }
  100% {
    padding-bottom: 0;
  }
}
</style>
