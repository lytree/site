<template>
  <header id="header" class="app-header navbar box-shadow-bottom-lg fix-padding" role="menu">
    <div id="header_left" class="navbar-header text-ellipsis light:bg-white">
      <button
        class="pull-right md:hidden" ui-toggle-class="show animated animated-lento fadeIn"
        target=".navbar-collapse"
      >
        <span class="menu-icons"><svg
          xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg></span>
      </button>
      <button class="pull-left md:hidden" ui-toggle-class="off-screen animated" target=".app-aside" ui-scroll="app">
        <span class="menu-icons"><svg
          xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg></span>
      </button>
      <a href="https://www.ihewro.com/" class="navbar-brand text-lt">
        <span id="navbar-brand-day" class="dark:hidden">
          <img
            src=" https://www.ihewro.com/logo.svg" type="image/svg+xml"
            style="width: 130px;height: 40px;margin-top: -18px;max-height: 40px;"
          >
        </span>
        <span id="navbar-brand-dark" class="light:hidden">
          <img
            src="https://www.ihewro.com/logo_dark.svg" type="image/svg+xml"
            style="width: 130px;height: 40px;margin-top: -18px;max-height: 40px;"
          >
        </span>
      </a>
    </div>
    <div id="header_right" class="collapse navbar-collapse pos-rlt light:bg-white">
      <ul class="nav navbar-nav">
        <li class="dropdown pos-stc md:hidden">
          <a
            id="statistic_pane" data-status="true" href="#" data-toggle="dropdown"
            class="dropdown-toggle dropdown-toggle feathericons" aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-pie-chart"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            <span class="caret" />
          </a>
          <!-- <div class="dropdown-menu wrapper w-full bg-white">
                    <div class="row">
                        <div class="col-sm-8 b-l b-light">
                            <div class="m-l-xs m-t-xs  font-bold">动态日历 </div>
                            <div class="text-muted m-l-xs " style="font-size: 12px">统计近10个月的博主文章和评论数目</div>
                            <div class="text-center">
                                <nav class="loading-echart text-center m-t-lg m-b-lg hide">
                                    <p class="infinite-scroll-request"><i
                                            class="animate-spin fontello fontello-refresh"></i>Loading...</p>
                                </nav>
                                <div id="post-calendar" class="top-echart"
                                    style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                                    _echarts_instance_="ec_1700803732509">
                                    <div
                                        style="position: relative; width: 100px; height: 185px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" width="100" height="185"
                                            style="position: absolute; left: 0px; top: 0px; width: 100px; height: 185px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 b-l b-light">
                            <div class="m-l-xs m-t-xs m-b-sm font-bold">分类雷达图</div>
                            <div class="text-center">
                                <nav class="loading-echart text-center m-t-lg m-b-lg hide">
                                    <p class="infinite-scroll-request"><i
                                            class="animate-spin fontello fontello-refresh"></i>Loading...</p>
                                </nav>
                                <div id="category-radar" class="top-echart"
                                    style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                                    _echarts_instance_="ec_1700803732513">
                                    <div
                                        style="position: relative; width: 100px; height: 185px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" width="100" height="185"
                                            style="position: absolute; left: 0px; top: 0px; width: 100px; height: 185px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 b-l b-light">
                            <div class="m-l-xs m-t-xs m-b-sm font-bold">发布统计图</div>
                            <div class="text-center">
                                <nav class="loading-echart text-center m-t-lg m-b-lg hide">
                                    <p class="infinite-scroll-request"><i
                                            class="animate-spin fontello fontello-refresh"></i>Loading...</p>
                                </nav>
                                <div id="posts-chart" class="top-echart"
                                    style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                                    _echarts_instance_="ec_1700803732510">
                                    <div
                                        style="position: relative; width: 90px; height: 240px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" width="90" height="240"
                                            style="position: absolute; left: 0px; top: 0px; width: 90px; height: 240px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 b-l b-light">
                            <div class="m-l-xs m-t-xs m-b-sm font-bold">分类统计图</div>
                            <div class="text-center">
                                <nav class="loading-echart text-center m-t-lg m-b-lg hide">
                                    <p class="infinite-scroll-request"><i
                                            class="animate-spin fontello fontello-refresh"></i>Loading...</p>
                                </nav>
                                <div id="categories-chart" class="top-echart"
                                    style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                                    _echarts_instance_="ec_1700803732511">
                                    <div
                                        style="position: relative; width: 90px; height: 240px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" width="90" height="240"
                                            style="position: absolute; left: 0px; top: 0px; width: 90px; height: 240px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 b-l b-light">
                            <div class="m-l-xs m-t-xs m-b-sm font-bold">标签统计图</div>
                            <div class="text-center">
                                <nav class="loading-echart text-center m-t-lg m-b-lg hide">
                                    <p class="infinite-scroll-request"><i
                                            class="animate-spin fontello fontello-refresh"></i>Loading...</p>
                                </nav>
                                <div id="tags-chart" class="top-echart"
                                    style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                                    _echarts_instance_="ec_1700803732512">
                                    <div
                                        style="position: relative; width: 90px; height: 240px; padding: 0px; margin: 0px; border-width: 0px;">
                                        <canvas data-zr-dom-id="zr_0" width="90" height="240"
                                            style="position: absolute; left: 0px; top: 0px; width: 90px; height: 240px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
        </li>
      </ul>
      <form id="searchform1" class="searchform navbar-form navbar-form-sm shift float-left" method="post" role="search">
        <div class="form-group">
          <div class="box-shadow-wrap-normal input-group rounded bg-white-pure">
            <input
              id="search_input" autocomplete="off" type="search" name="s"
              class="no-borders transparent form-control input-sm padder rounded" placeholder="搜索（Ctrl + K）"
            >
            <ul
              id="search_tips_drop" class="dropdown-menu search_modal_list small-scroll-bar hide overflow-y-auto"
              style="display:block;top:30px; left: 0px;"
            />
            <span id="search_submit" class="transparent input-group-btn">
              <button type="submit" class="transparent btn-sm btn">
                <span class="feathericons icon-search"><svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg></span>
                <span class="feathericons hide spin-search animate-spin"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"
                >
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg></span>
              </button>
            </span>
          </div>
          <a class="btn-sm btn-icon open_search_modal_mobile btn"><svg
            xmlns="http://www.w3.org/2000/svg" width="16px"
            height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-external-link"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg></a>
        </div>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li id="handsome_global_player" class="music-box hidden-xs hidden-sm">
          <div
            class="aplayer aplayer-withlrc aplayer-withlist aplayer-arrow handsome_aplayer player-global"
            data-preload="false" data-autoplay="false" data-listmaxheight="200px" data-order="list" data-theme="#8ea9a7"
            data-listfolded="true" data-fix_position="true" data-i_autoplay=""
          />
        </li>
        <li class="dropdown hidden-xs hidden-sm">
          <a id="global_player_toggle" class="dropdown-toggle feathericons skPlayer-list-switch"><svg
            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-disc"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg><span class="visible-xs-inline" /></a>
        </li>

        <li class="dropdown">
          <a href="#" data-toggle="dropdown" class="feathericons dropdown-toggle" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-twitch"
            >
              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
            </svg>
            <span class="visible-xs-inline">
              时光机 </span>
            <span class="badge badge-sm up notify_talk pull-right-xs bg-danger">新</span>
          </a>
        </li>

        <li id="easyLogin" class="dropdown">
          <a
            onclick="if (!window.__cfRLUnblockHandlers) return false; return false" data-toggle="dropdown"
            class="dropdown-toggle clear" aria-expanded="false"
          >
            <span class="feathericons"><svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="feather feather-key"
            >
              <path
                d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
              />
            </svg></span>
            <b class="caret" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
