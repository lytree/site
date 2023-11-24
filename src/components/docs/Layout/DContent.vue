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
          xmlns="http://www.w3.org/2000/svg"
          width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar"
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

    <!-- / aside -->

    <!-- <div id="content" class="app-content"> -->
    <a class="hide off-screen-toggle" />
    <div id="post_category" class="hide">
      <a href="https://www.ihewro.com/" />
    </div>
    <main class="app-content-body">
      <div class="hbox hbox-auto-xs hbox-auto-sm">
        <div id="post-panel" class="col center-part gpu-speed">
          <header class="lter wrapper-md light:bg-white">
            <h1 class="m-n l-h font-thin light:text-black">
              友人C
            </h1>
            <small class="text-muted letterspacing indexWords">悲剧，是把美好的东西毁灭给人看。</small>
          </header>
        </div>
        <!-- 首页右侧栏 -->
        <aside id="rightAside" class="col asideBar no-border-xs w-md bg-auto light:bg-white-only" role="complementary">
          <div id="sidebar">
            <section id="right_first_section" class="clear widget widget_tabs">
              <div class="nav-tabs-alt no-js-hide new-nav-tab-wrap">
                <ul
                  class="nav box-shadow-wrap-normal nav-tabs nav-justified tablist new-nav-tab"
                  role="tablist"
                >
                  <li data-index="0" class="active" role="presentation">
                    <a
                      data-target="#widget-tabs-4-hots" role="tab" aria-controls="widget-tabs-4-hots"
                      aria-expanded="true" data-toggle="tab"
                    >
                      <div
                        class="sidebar-icon" data-toggle="tooltip" title="" data-container="body"
                        data-original-title="热门文章"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-thumbs-up"
                      >
                        <path
                          d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                        />
                      </svg><span class="sr-only">热门文章</span></div>
                    </a>
                  </li>
                  <li role="presentation" data-index="1">
                    <a
                      data-target="#widget-tabs-4-comments"
                      role="tab" aria-controls="widget-tabs-4-comments" aria-expanded="false"
                      data-toggle="tab"
                    >
                      <div
                        data-toggle="tooltip" title="" data-container="body" class="sidebar-icon"
                        data-original-title="最新评论"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg><span class="sr-only">最新评论</span></div>
                    </a>
                  </li>
                  <li data-index="2" role="presentation">
                    <a
                      data-target="#widget-tabs-4-random"
                      role="tab" aria-controls="widget-tabs-4-random" aria-expanded="false"
                      data-toggle="tab"
                    >
                      <div
                        data-toggle="tooltip" title="" data-container="body" class="sidebar-icon"
                        data-original-title="随机文章"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-gift"
                      >
                        <polyline points="20 12 20 22 4 22 4 12" />
                        <rect x="2" y="7" width="20" height="5" />
                        <line x1="12" y1="22" x2="12" y2="7" />
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                      </svg><span class="sr-only">随机文章</span></div>
                    </a>
                  </li>
                  <span class="navs-slider-bar" />
                </ul>
              </div>
              <div class="new-nav-tab-content tab-content">
                <!-- 热门文章 -->
                <div id="widget-tabs-4-hots" class="wrapper-md active fade in tab-pane" role="tabpanel">
                  <!--         <h5 class="widget-title m-t-none text-md"> --><!-- </h5> -->
                  <ul class="no-bg no-borders list-group pull-in m-b-none">
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/489/"
                        class="thumb-sm pull-left m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/7.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/489/"
                            title="handsome —— 一款typecho主题"
                          > handsome —— 一款typecho主题 </a>
                        </h4>
                        <small class="text-muted text-second post-head-icon"><span
                          class="meta-views"
                        > <span class="right-small-icons"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >1844</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/948/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/8.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/948/"
                            title="Focus——不只是RSS订阅器"
                          > Focus——不只是RSS订阅器 </a>
                        </h4>
                        <small class="text-muted post-head-icon text-second"><span
                          class="meta-views"
                        > <span class="right-small-icons"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >114</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/925/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/1.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/925/" title="2019北邮考研我的个人经历"
                          >
                            2019北邮考研我的个人经历 </a>
                        </h4>
                        <small class="text-muted post-head-icon text-second"><span
                          class="meta-views"
                        > <span class="right-small-icons"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >104</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/524/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/6.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/524/" title=" 再见，2016"
                          >
                            再见，2016 </a>
                        </h4>
                        <small class="text-muted post-head-icon text-second"><span
                          class="meta-views"
                        > <span class="right-small-icons"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >96</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/378/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/378/"
                            title="Leaf — A Typecho Theme"
                          > Leaf — A Typecho Theme </a>
                        </h4>
                        <small class="text-muted post-head-icon text-second"><span
                          class="meta-views"
                        > <span class="right-small-icons"><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >94</span>
                        </span></small>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 最新评论 -->
                <div
                  id="widget-tabs-4-comments" class="tab-pane fade wrapper-md no-js-show"
                  role="tabpanel"
                >
                  <!--         <h5 class="widget-title m-t-none text-md"> --><!-- </h5> -->
                  <ul class="list-group no-borders pull-in auto no-bg m-b-none">
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10556"
                        class="pull-left thumb-sm avatar m-r"
                      >
                        <img
                          nogallery=""
                          src="https://cravatar.cn/avatar/1fd6f6445f5a58b6c72835bb49071229?s=65&amp;r=G&amp;d=wavatar"
                          class="img-40px img-square normal-shadow photo"
                        > </a>
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10556"
                        class="text-muted"
                      >
                        <!-- <i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span> -->
                      </a>
                      <div class="clear">
                        <div class="text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10556"
                            title="若志奕鑫"
                          > 若志奕鑫 </a>
                        </div>
                        <small class="text-muted">
                          <span>
                            我博客也慌快一年了都，就是“丧失表达欲，变得越来越冷漠，看很多... </span>
                        </small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10555"
                        class="pull-left thumb-sm avatar m-r"
                      >
                        <img
                          nogallery=""
                          src="https://cravatar.cn/avatar/f2d8175169d78f6c9201ac7070363f9a?s=65&amp;r=G&amp;d=wavatar"
                          class="img-40px photo img-square normal-shadow"
                        > </a>
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10555"
                        class="text-muted"
                      >
                        <!-- <i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span> -->
                      </a>
                      <div class="clear">
                        <div class="text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10555"
                            title="Alan"
                          > Alan </a>
                        </div>
                        <small class="text-muted">
                          <span>
                            不知道怎么的，每个年龄段的人都过的很累，我们真的很难找到自己心... </span>
                        </small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/925/comment-page-1#comment-10545"
                        class="pull-left thumb-sm avatar m-r"
                      >
                        <img
                          nogallery=""
                          src="https://cravatar.cn/avatar/cf691bc105e38be7624da75277eebd41?s=65&amp;r=G&amp;d=wavatar"
                          class="img-40px photo img-square normal-shadow"
                        > </a>
                      <a
                        href="https://www.ihewro.com/archives/925/comment-page-1#comment-10545"
                        class="text-muted"
                      >
                        <!-- <i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span> -->
                      </a>
                      <div class="clear">
                        <div class="text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/925/comment-page-1#comment-10545"
                            title="潜心学习的贫僧"
                          > 潜心学习的贫僧 </a>
                        </div>
                        <small class="text-muted">
                          <span>
                            共勉 </span>
                        </small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10544"
                        class="pull-left thumb-sm avatar m-r"
                      >
                        <img
                          nogallery=""
                          src="https://cravatar.cn/avatar/22b2df453b3d62681f86db09aaf147cb?s=65&amp;r=G&amp;d=wavatar"
                          class="img-40px photo img-square normal-shadow"
                        > </a>
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10544"
                        class="text-muted"
                      >
                        <!-- <i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span> -->
                      </a>
                      <div class="clear">
                        <div class="text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10544"
                            title="Carefree"
                          > Carefree </a>
                        </div>
                        <small class="text-muted">
                          <span>
                            经常长口腔溃疡，要么就是经常熬夜，身体免疫力降低，要么就是身体... </span>
                        </small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10534"
                        class="pull-left thumb-sm avatar m-r"
                      >
                        <img
                          nogallery=""
                          src="https://cravatar.cn/avatar/11cdc7de95319ebb97227c580901c3c1?s=65&amp;r=G&amp;d=wavatar"
                          class="img-40px photo img-square normal-shadow"
                        > </a>
                      <a
                        href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10534"
                        class="text-muted"
                      >
                        <!-- <i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span> -->
                      </a>
                      <div class="clear">
                        <div class="text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/1289/comment-page-1#comment-10534"
                            title="Amarantos475"
                          > Amarantos475 </a>
                        </div>
                        <small class="text-muted">
                          <span>
                            生活也磨平了站长的一些棱角，或许是因为工作，或许这就是适应吧？... </span>
                        </small>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 随机文章 -->
                <div id="widget-tabs-4-random" class="tab-pane fade wrapper-md no-js-show" role="tabpanel">
                  <!--            <h5 class="widget-title m-t-none text-md"> --><!-- </h5> -->
                  <ul class="list-group no-bg no-borders pull-in m-b-none">
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/707/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/7.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/707/" title="遗忘也许不是件坏事"
                          >
                            遗忘也许不是件坏事 </a>
                        </h4>
                        <small class="text-muted post-head-icon"><span class="meta-views"> <span
                          class="right-small-icons"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >20</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/685/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/8.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/685/" title="时间没能解决的问题"
                          >
                            时间没能解决的问题 </a>
                        </h4>
                        <small class="text-muted post-head-icon"><span class="meta-views"> <span
                          class="right-small-icons"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >29</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/230/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/1.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/230/" title="课程设计实训—表达式求值问题"
                          >
                            课程设计实训—表达式求值问题 </a>
                        </h4>
                        <small class="text-muted post-head-icon"><span class="meta-views"> <span
                          class="right-small-icons"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >2</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/293/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/6.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/293/"
                            title="使用calc() 自适应多说表情框"
                          > 使用calc() 自适应多说表情框 </a>
                        </h4>
                        <small class="text-muted post-head-icon"><span class="meta-views"> <span
                          class="right-small-icons"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >9</span>
                        </span></small>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a
                        href="https://www.ihewro.com/archives/563/"
                        class="pull-left thumb-sm m-r"
                      ><img
                        src="https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg"
                        class="img-40px normal-shadow img-square"
                      ></a>
                      <div class="clear">
                        <h4 class="l-h text-second h5 text-ellipsis">
                          <a
                            href="https://www.ihewro.com/archives/563/"
                            title="《西游伏妖篇》：你敢不敢把声音放小一点？&nbsp;"
                          > 《西游伏妖篇》：你敢不敢把声音放小一点？&nbsp; </a>
                        </h4>
                        <small class="text-muted post-head-icon"><span class="meta-views"> <span
                          class="right-small-icons"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg" width="16px"
                          height="16px" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"
                          class="feather feather-message-circle"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                          />
                        </svg></span> <span class="sr-only">评论数：</span> <span
                          class="meta-value"
                        >30</span>
                        </span></small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <!-- 博客信息 -->
            <section id="blog_info" class="widget wrapper-md clear widget_categories padder-v-none">
              <h5 class="widget-title m-t-none">
                博客信息
              </h5>
              <ul class="list-group box-shadow-wrap-normal">
                <li class="list-group-item text-second">
                  <span class="blog-info-icons"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg></span> <span
                    class="badge pull-right"
                  >259</span>文章数目
                </li>
                <li class="list-group-item text-second">
                  <span class="blog-info-icons"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-message-circle"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    />
                  </svg></span>
                  <span
                    class="badge pull-right"
                  >8179</span>评论数目
                </li>
                <li class="list-group-item text-second">
                  <span class="blog-info-icons"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg></span>
                  <span
                    class="badge pull-right"
                  >7年177天</span>运行天数
                </li>
                <li class="list-group-item text-second">
                  <span class="blog-info-icons"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg></span> <span
                    class="badge pull-right"
                  >3 个月前</span>最后活动
                </li>
              </ul>
            </section>
            <!-- 非文章页面 -->
            <section id="tag_cloud" class="widget wrapper-md padder-v-none clear widget_tag_cloud">
              <h5 class="widget-title m-t-none">
                标签云
              </h5>
              <div class="tags l-h-2x panel wrapper-sm padder-v-ssm">
                <a href="https://www.ihewro.com/tag/%E6%97%B6%E5%80%99/" class="badge label">时候</a>
                <a href="https://www.ihewro.com/tag/%E5%96%9C%E6%AC%A2/" class="label badge">喜欢</a>
                <a href="https://www.ihewro.com/tag/%E7%94%9F%E6%B4%BB/" class="label badge">生活</a>
                <a href="https://www.ihewro.com/tag/%E4%BA%8B%E6%83%85/" class="label badge">事情</a>
                <a href="https://www.ihewro.com/tag/%E4%BB%A3%E7%A0%81/" class="label badge">代码</a>
                <a href="https://www.ihewro.com/tag/%E5%86%85%E5%AE%B9/" class="label badge">内容</a>
                <a href="https://www.ihewro.com/tag/%E6%96%87%E7%AB%A0/" class="label badge">文章</a>
                <a href="https://www.ihewro.com/tag/%E5%8D%9A%E5%AE%A2/" class="label badge">博客</a>
                <a href="https://www.ihewro.com/tag/%E6%95%88%E6%9E%9C/" class="label badge">效果</a>
                <a href="https://www.ihewro.com/tag/%E9%AB%98%E4%B8%AD/" class="label badge">高中</a>
                <a href="https://www.ihewro.com/tag/%E5%8A%9E%E6%B3%95/" class="label badge">办法</a>
                <a href="https://www.ihewro.com/tag/%E6%96%87%E4%BB%B6/" class="label badge">文件</a>
                <a href="https://www.ihewro.com/tag/%E5%AD%A6%E6%A0%A1/" class="label badge">学校</a>
                <a href="https://www.ihewro.com/tag/%E4%B8%BB%E9%A2%98/" class="label badge">主题</a>
                <a href="https://www.ihewro.com/tag/css/" class="label badge">css</a>
                <a href="https://www.ihewro.com/tag/%E6%9C%8B%E5%8F%8B/" class="label badge">朋友</a>
                <a href="https://www.ihewro.com/tag/%E5%90%8C%E5%AD%A6/" class="label badge">同学</a>
                <a href="https://www.ihewro.com/tag/%E9%A1%B9%E7%9B%AE/" class="label badge">项目</a>
                <a href="https://www.ihewro.com/tag/%E6%96%87%E5%AD%97/" class="label badge">文字</a>
                <a href="https://www.ihewro.com/tag/%E5%9B%BE%E7%89%87/" class="label badge">图片</a>
                <a href="https://www.ihewro.com/tag/%E5%AE%BF%E8%88%8D/" class="label badge">宿舍</a>
                <a href="https://www.ihewro.com/tag/%E5%AE%A4%E5%8F%8B/" class="label badge">室友</a>
                <a href="https://www.ihewro.com/tag/%E7%95%8C%E9%9D%A2/" class="label badge">界面</a>
                <a href="https://www.ihewro.com/tag/%E7%99%BE%E5%BA%A6/" class="label badge">百度</a>
                <a href="https://www.ihewro.com/tag/%E5%B7%A5%E4%BD%9C/" class="label badge">工作</a>
                <a href="https://www.ihewro.com/tag/%E4%BD%9C%E4%B8%9A/" class="label badge">作业</a>
                <a href="https://www.ihewro.com/tag/%E7%94%B5%E8%84%91/" class="label badge">电脑</a>
                <a href="https://www.ihewro.com/tag/%E5%9C%B0%E5%9D%80/" class="label badge">地址</a>
                <a href="https://www.ihewro.com/tag/%E9%A1%B5%E9%9D%A2/" class="label badge">页面</a>
                <a href="https://www.ihewro.com/tag/%E6%AD%8C/" class="label badge">歌</a>
              </div>
            </section>
          </div>
        </aside>
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
