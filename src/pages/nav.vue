<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div
    class="nav h-full w-full bg-cover bg-scroll bg-center"
    style="background-image:url('https://cn.bing.com//th?id=OHR.HuntsMesa_JA-JP3140979616_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp')"
  >
    <div class="h-64px" />
    <div class="mx-auto flex flex-col container space-y-64px">
      <!-- 搜索开始 -->
      <div>
        <el-card shadow="always" class="p-20px">
          <div class="">
            <el-button-group>
              <el-button>百度一下</el-button>
              <el-button>
                谷歌搜索
              </el-button>
              <el-button>
                影视
              </el-button>
              <el-button>
                微博
              </el-button>
            </el-button-group>
          </div>
          <form id="super-search-fm" action="https://www.baidu.com/s?wd=" method="get" target="_blank">
            <el-input placeholder="搜索" class="input-with-select">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </form>
        </el-card>
      </div> <!-- 搜索结束 -->
      <div>
        <el-card shadow="always">
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-remen" />
            </svg>
            <span class="text-black">热门常用</span>
          </template>
          <div class="flex flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://v.qq.com/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tengxunshipin" />
                </svg><span>腾讯视频</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.youku.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youku" />
              </svg><span>优酷</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.iqiyi.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aiqiyi" />
              </svg><span>爱奇艺</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.taobao.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-taobao" />
              </svg><span>淘宝网</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.pinterest.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinterest" />
              </svg><span>Pinterest</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://huaban.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huaban" />
              </svg><span>花瓣</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.weibo.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo" />
              </svg><span>微博</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.nfmovies.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-netfdivx" />
              </svg><span>奈非影视</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card shadow="always">
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shipin" />
            </svg> 视频媒体
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://tv.cctv.com/divve/index.shtml" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cctv" />
                </svg><span>CCTV直播</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.youtube.com/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youtube" />
                </svg><span>Youtube</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="http://www.acfun.cn/index.html" target="_blank"><svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-acfun" />
              </svg><span>ACFUN</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.bidivbidiv.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bidiv" />
              </svg><span>哔哩哔哩</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://k1080.net/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yingshi" />
              </svg><span>K1080</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://yunbtv.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yunbo" />
              </svg><span>云播TV</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche" />
            </svg>购物
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a
                rel="nofollow"
                href="https://temai.m.taobao.com/index.htm?pid=mm_30753570_11166349_39936732&union_lens=lensId%3APUB%401609381375%400b092c84_0de3_176b69aecf8_03eb%4001"
                target="_blank"
              >
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-temai" />
                </svg><span>淘宝特卖</span></a>
            </div>
            <div class="label">
              <a
                rel="nofollow"
                href="https://mobile.yangkeduo.com/duo_cms_mall.html?pid=8742514_71211367&cpsSign=CM_190605_8742514_71211367_92fdd9f7fb637fec599bf556f263ed1f&duoduo_type=2&launch_wx=1"
                title="拼多多手机端专属商城，超低价商品火热抢购中，更有超多大额优惠券持续发放，一键立抢>>" target="_blank"
              ><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-99" />
              </svg><span>拼多多</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.jd.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jingdong" />
              </svg><span>京东</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.suning.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-suning" />
              </svg><span>苏宁易购</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="http://you.163.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yanxuan" />
              </svg><span>网易严选</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.amazon.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-amazon" />
              </svg><span>亚马逊</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="http://www.dangdang.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dangdang" />
              </svg><span>当当</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sheji" />
            </svg>设计视觉
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://hao.5iux.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daohang1" />
              </svg><span>设计导航</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.behance.net/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-behance" />
              </svg><span>Behance</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.dribbble.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dribbble" />
              </svg><span>Dribbble</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.zcool.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhanku" />
              </svg><span>站酷</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.iconfont.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfont" />
              </svg><span>阿里图标</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.iconfinder.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-eye" />
              </svg><span>IconFinder</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://uiiiuiii.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiaocheng" />
              </svg><span>优设教程</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-msg" />
            </svg>社交资讯
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://www.zhihu.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhihu" />
              </svg><span>知乎</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.douban.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-douban" />
              </svg><span>豆瓣</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.jianshu.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jianshu" />
              </svg><span>简书</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.v2ex.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-v2ex" />
              </svg><span>V2EX</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.instagram.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-instagram" />
              </svg><span>Instagram</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.twitter.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-twitter" />
              </svg><span>Twitter</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.facebook.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-facebook" />
              </svg><span>Facebook</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youxiang" />
            </svg>邮箱
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-gmail" />
              </svg><span>Gmail</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://outlook.divve.com/mail/" target="_blank"><svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-windows" />
              </svg><span>Hotmail</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://mail.163.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyi" />
              </svg><span>网易邮箱</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://mail.sina.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinlangwang" />
              </svg><span>新浪邮箱</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://mail.qq.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ" />
              </svg><span>QQ邮箱</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://qiye.adivyun.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yunyouxiang" />
              </svg><span>阿里邮箱</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ai-tool" />
            </svg>工具
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://tools.miku.ac/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-ai-tool" />
                </svg><span>Miku工具</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://ip233.cn/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wangluo" />
                </svg><span>IP查询</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://translate.google.cn/?hl=zh-CN" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fanyi" />
                </svg><span>谷歌翻译</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="http://www.sdivmego.cn/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shilaimu" />
                </svg><span>史莱姆</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://feedly.com" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-feedly" />
                </svg><span>Feedly</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://pandao.github.io/editor.md/index.html" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-md" />
                </svg><span>MD编辑器</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="http://cubic-bezier.com" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-quxian" />
              </svg><span>贝赛尔曲线</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://5iux.cn/base64/" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-base64" />
                </svg><span>Base64</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://javascriptobfuscator.com/Javascript-Obfuscator.aspx" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jshunxiao" />
                </svg><span>JS混淆器</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://ping.pe" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangluo1" />
              </svg><span>Ping.pe</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://ping.chinaz.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pingup" />
              </svg><span>站长Ping</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://apkdl.in/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-anzhuo" />
              </svg><span>APK下载</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kongzhitai" />
            </svg>开发
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="http://www.w3school.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-h5" />
              </svg><span>W3school</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://github.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github" />
              </svg><span>Github</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://codepen.io/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-codepen" />
              </svg><span>Codepen</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.52pojie.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-theater-masks" />
              </svg><span>吾爱破解</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://segmentfadivt.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-msg" />
              </svg><span>SF思否</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://cdnjs.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-cdnjs" />
              </svg><span>CdnJs</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank"><svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-font-awesome" />
              </svg><span>Font A.</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://msdn.itellyou.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-windows" />
              </svg><span>MSDN下载</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://dash.cloudflare.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-cloudflare" />
              </svg><span>C. flare</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.swiper.com.cn/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-S" />
              </svg><span>Swiper</span></a>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <el-card>
          <template #header>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo" />
            </svg>搜索引擎
          </template>
          <div class="flex flex-row flex-wrap">
            <div class="label">
              <a rel="nofollow" href="https://www.google.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-google" />
              </svg><span>Google</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https:/m.baidu.com/?pu=sz%401321_480&wpo=btmfast" target="_blank"><svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-icon_baiddivogo" />
              </svg><span>百度</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://duckduckgo.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duck" />
              </svg><span>DuckGo</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.bing.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bing" />
              </svg><span>Bing</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.sogou.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sougou" />
              </svg><span>搜狗</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.naver.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test" />
              </svg><span>NAVER</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://mijisou.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-miji" />
              </svg><span>秘迹</span></a>
            </div>
            <div class="label">
              <a rel="nofollow" href="https://www.dogedoge.com/" target="_blank"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gougou" />
              </svg><span>多吉</span></a>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  .label {
    --at-apply: overflow-hidden rounded-lg px-10px text-14px transition col-1;

    svg.icon {
      --at-apply: mx-0 block h-42px w-42px rounded-10px p-8px;
    }
  }

  svg.icon {
    width: 14px;
    height: 14px;
    margin: 0 5px 0 8px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
