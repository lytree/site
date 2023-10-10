<template>
  <div class="min-h-[100vh] w-full flex flex-col">
    <main class="main">
      <RouterView />
    </main>
    <NavFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  --at-apply: container flex flex-col flex-grow-[1] overflow-y-auto mx-auto mt-[10px];
}

.footer {
  --at-apply: flex-shrink-0;
}
</style>
