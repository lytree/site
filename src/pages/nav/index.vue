<script setup lang="ts">
import { NAV_DATA } from './data'
</script>

<template>
  <div class="min-h-[100vh] w-[100vw] flex flex-col">
    <header class="header">
      <NavHeader />
    </header>
    <main class="main">
      <ElCard v-for="nav in NAV_DATA" :key="nav.title" shadow="always" class="m-5">
        <template #header>
          <div class="card-header">
            <span>{{ nav.title }}</span>
          </div>
        </template>
        <div class="m-nav-links">
          <NavLink
            v-for="{ icon, title, desc, link } in nav.items" :key="link" :icon="icon" :title="title" :desc="desc"
            :link="link"
          />
        </div>
      </ElCard>
    </main>
    <NavFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  --at-apply: h-[var(--layout-nav-header-height)] flex-shrink-0;
}

.main {
  --at-apply: container flex flex-col flex-grow-[1] overflow-y-auto mx-auto mt-[10px];
}

.footer {
  --at-apply: flex-shrink-0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.m-nav-links {
  --at-apply: grid gap-x-10px gap-y-10px grid-auto-flow-dense justify-center mt-[10px];
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
</style>
