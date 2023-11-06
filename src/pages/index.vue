<script setup lang="ts">

</script>

<template>
  <div id="wrapper">
    <img
      class="logo rounded-full" src="https://blog-1257980368.cos.ap-shanghai.myqcloud.com/avatar.jpg" alt="logo"
      width="150"
    >
    <h1>lytree</h1>
    <h2>回忆的地方</h2>
    <p>
      <a href="https://github.com/lytree">
        <img src="https://img.shields.io/badge/GitHub-181717?logo=Github&logoColor=fff" alt="Github">
      </a>
      <a href="https://space.bilibili.com/89673196">
        <img src="https://img.shields.io/badge/bilibili-181717?logo=bilibili&logoColor=fff" alt="Bilibili">
      </a>
      <a href="https://www.zhihu.com/people/zang-xin-18-71">
        <img src="https://img.shields.io/badge/知乎-181717?logo=zhihu&logoColor=fff" alt="Zhihu">
      </a>
      <a href="https://weibo.com/u/5648434038">
        <img src="https://img.shields.io/badge/微博-181717?logo=sinaweibo&logoColor=fff" alt="Github">
      </a>
      <a href="https://juejin.cn/user/307518986271495">
        <img src="https://img.shields.io/badge/掘金-181717?logo=juejin&logoColor=fff" alt="Github">
      </a>
      <a href="/docs">
        <img src="https://img.shields.io/badge/博客-181717?logo=bloglovin&logoColor=fff" alt="Github">
      </a>
      <a href="/nav">
        <img src="https://img.shields.io/badge/导航-181717?logo=accenture&logoColor=fff" alt="Github">
      </a>
    </p>
  </div>
  <GFooter />
</template>

<style lang="scss" scoped>
#wrapper {
  position: fixed;
  top: 38.2%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    display: inline;
  }
}

.logo:hover {
  transform: rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.footer {
  bottom: 10px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>
