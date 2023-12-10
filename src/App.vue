<script lang="ts" setup>
import cursorInit from '~/utils/cursor'
onMounted(() => {
  // 自定义鼠标
  cursorInit()
})
</script>

<template>
  <main font-sans class="h-full w-full" text="gray-700 dark:gray-200">
    <RouterView />
  </main>
</template>

<style lang="scss">
#app {
  --at-apply: h-full w-full
}
</style>
