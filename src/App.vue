<script lang="ts" setup>
import { cursorInit, cursorRefresh } from '~/utils/cursor'
import { isDark } from '~/composables/dark'
onMounted(() => {
  // 自定义鼠标
  cursorInit()
})

watch(
  () => isDark.value,
  () => {
    cursorRefresh()
  },
)
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
