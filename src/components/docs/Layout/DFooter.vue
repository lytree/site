<script  setup lang="ts">
</script>

<template>
  <footer id="footer" class="app-footer" role="footer">
    <div class="box-shadow-wrap-normal b-normal footer_wrapper padder-sm light:bg-white">
      <div class="pull-right hidden-xs text-ellipsis">
        <a href="https://typecho.org/" style="margin-left: 5px" target="_blank">
          <svg
            style="width: 16px;height: 16px;vertical-align: -4px;" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="26px" viewBox="0 0 30 26"
            version="1.1"
          >
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">

              <path
                id="icon"
                d="M13,26 C3.36833333,26 0,22.631 0,13 C0,3.36866667 3.36833333,0 13,0 C22.6316667,0 26,3.36866667 26,13 C26,22.631 22.6316667,26 13,26 Z M6,9 L20,9 L20,7 L6,7 L6,9 Z M6,14 L16,14 L16,12 L6,12 L6,14 Z M6,19 L18,19 L18,17 L6,17 L6,19 Z" fill="#000000" sketch:type="MSShapeGroup"
              />
            </g>
          </svg>
        </a>
        <a class="highlightlink" href="https://www.ihewro.com/archives/489/" target="_blank">
          <span>Theme by handsome</span>
        </a>
      </div>
      <span class="text-ellipsis">&copy;&nbsp;
        {{ new Date().getFullYear() }} All rights reserved.
      </span>
    </div>
  </footer>
</template>
