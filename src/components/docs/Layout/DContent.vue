<script setup></script>

<template>
  <div id="content" class="app-content">
    <!-- loading animate -->
    <div id="loading" class="butterbar active hide">
      <span class="bar" />
    </div>
    <main class="app-content-body">
      <div class="hbox hbox-auto-xs hbox-auto-sm">
        <div id="post-panel" class="gpu-speed center-part col">
          <header class="lter wrapper-md light:bg-white">
            <h1 class="l-h m-n font-thin light:text-black">
              友人C
            </h1>
            <small class="letterspacing indexWords text-muted">悲剧，是把美好的东西毁灭给人看。</small>
          </header>
        </div>
      </div>
    </main>
    <RouterView />
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
