<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件 -->
    </router-view>
  </div>
</template>

<style lang="scss">
  @supports (bottom: env(safe-area-inset-bottom)) {
    div {
      margin-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
