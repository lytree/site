<script setup></script>

<template>
  <div id="content" class="app-content">
    <div class="resize-pane">
      <div id="trigger_left_content" class="trigger_content" style="display: block; left: 260px;">
        <div class="trigger_drag_content" />
      </div>
      <div
        id="trigger_left_button" data-placement="right" data-toggle="tooltip" data-original-title="点击展开左侧边栏"
        class="normal-widget resize-pane-trigger box-shadow-wrap-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-sidebar"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
        </svg>
      </div>
    </div>
    <!-- loading animate -->
    <div id="loading" class="hide butterbar active">
      <span class="bar" />
    </div>
    <a class="hide off-screen-toggle" />
    <div id="post_category" class="hide">
      <a href="https://www.ihewro.com/" />
    </div>
    <main class="app-content-body">
      <div class="hbox hbox-auto-xs hbox-auto-sm">
        <div id="post-panel" class="gpu-speed col center-part">
          <header class="lter wrapper-md light:bg-white">
            <h1 class="l-h m-n font-thin light:text-black">
              友人C
            </h1>
            <small class="text-muted letterspacing indexWords">悲剧，是把美好的东西毁灭给人看。</small>
          </header>
        </div>
      </div>
    </main>
    <!-- footer -->
  </div>
</template>

<style>
.page-navigator>li>a,
.page-navigator>li>span {
  line-height: 1.42857143;
  padding: 6px 12px;
}
</style>
