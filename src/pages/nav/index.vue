<template>
  <div class="min-h-[100vh] w-[100vw] flex flex-col">
    <header class="header">
      <NavHeader />
    </header>
    <main class="main">
      main
    </main>
    <NavFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  --at-apply: h-[var(--layout-nav-header-height)] flex-shrink-0;
}

.main {
  --at-apply: flex-grow-[2] overflow-y-auto;
}

.footer {
  --at-apply: flex-shrink-0;
}
</style>
