<script setup></script>

<template>
  <div id="content" class="app-content">
    <!-- loading animate -->
    <div id="loading" class="butterbar active hide">
      <span class="bar" />
    </div>
    <slot />
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
