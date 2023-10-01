<script setup lang="ts">
</script>

<template>
  <div class="nav">
    <div class="navbar">
      <div class="navbar-container">
        <slot name="navbar-title" />
        <div class="context">
          <slot name="navbar-context" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  --at-apply: z-[var(--layout-nav-header-z-index)] top-0 left-0;

  .navbar {
    --at-apply: border-bottom h-[var(--layout-nav-header-height)];
    padding: 0 12px 0 24px;
    transition: border-color 0.5s, background-color 0.5s;

    &-container {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      .context {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
      }
    }

  }
}
</style>
