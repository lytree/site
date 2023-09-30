<script setup lang="ts">
import { watch } from 'vue'
import DarkIcon from './components/Dark.vue'
import LightIcon from './components/Light.vue'
import { isDark, toggleDark } from '~/composables/dark'

const darkMode = ref(isDark.value)

watch(
  () => darkMode.value,
  () => {
    toggleDark()
  },
)
</script>

<template>
  <ElSwitch v-model="darkMode" :active-action-icon="DarkIcon" :inactive-action-icon="LightIcon" />
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: var(--bg-color-mute);
  --el-switch-off-color: var(--bg-color-mute);
  --el-switch-border-color: var(--border-color);

  .el-switch__action {
    width: 14px;
    height: 14px;
  }
}

:deep(.dark-icon) {
  border-radius: 50%;
  color: #cfd3dc;
  background-color: #141414;
}

:deep(.light-icon) {
  color: #606266;
}
</style>
