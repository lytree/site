<script setup lang="ts">
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="theme-toggler-content">
    <ThemeToggler aria-label="toggle dark mode" :aria-checked="isDark" />
  </div>
</template>

<style scoped lang="scss">
.theme-toggler-content {
  // background-color: var(--bg-color);
  // color: var(--text-color);
  --at-apply: flex items-center;
  transition: border-color var(--el-transition-duration),
    background-color var(--el-transition-duration-fast);
  background-color: transparent;
  padding: 0 12px;
}
</style>
