<template>
    <MLoading />
      <!-- 壁纸 -->
    <MBackground @loadComplete="loadComplete" />
</template>
<script lang="ts" setup>



// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
  });
};
</script>

