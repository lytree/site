<template>
  <div class="doc mx-auto my-0 w-full pt-[--layout-nav-header-height] container">
    <div class="header fixed top-0 h-[--layout-nav-header-height] bg-[#f9f9f9] container dark:bg-[#212121]" role="menu">
      header
    </div>
    <div class="main">
      <aside id="aside" class="fixed h-full w-[220px] bg-[#f9f9f9] dark:bg-[#212121]">
        <div class="aside-wrap flex">
          <div class="navi-wrap overflow-y-auto">
            <div class="clearfix" />
            <div class="clearfix navi" />
            <div id="left_footer" />
          </div>
        </div>
      </aside>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc {
  overflow: hidden;
}

.header {
  --at-apply: z-1020 rounded-none;
  box-shadow: 0 1px 1px 1px #00000040;
}

.content {
  margin-left: 220px;
}
</style>
