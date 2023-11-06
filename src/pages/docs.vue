<template>
  <div class="doc mx-auto my-0 mt-[--layout-nav-header-height] h-full w-full container">
    <div
      class="fixed top-0 z-1020 h-[--layout-nav-header-height] rounded-none bg-[#f9f9f9] container dark:bg-[#212121]"
      role="menu"
    >
      header
    </div>
    <aside id="aside" class="fixed h-full w-[220px] bg-[#f9f9f9] dark:bg-[#212121]">
      <div class="aside-wrap">
        <div class="navi-wrap">
          <div class="clearfix" />
          <div class="clearfix navi" />
          <div id="left_footer" />
        </div>
      </div>
    </aside>
    <div class="h-full w-full container">
      <div class="ml-[220px]">
        <RouterView />
      </div>
    </div>
    <div class="container">
      <GFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 1px 1px 1px #00000040;
}

::deep(.footer) {
  margin-left: 220px;
}
</style>
