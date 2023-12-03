export interface MainSetting {
  imgLoadStatus: boolean, // 壁纸加载状态
  innerWidth: number | null, // 当前窗口宽度
  coverType: string, // 壁纸种类
  siteStartShow: boolean, // 建站日期显示
  musicClick: boolean, // 音乐链接是否跳转
  musicIsOk: boolean, // 音乐是否加载完成
  musicVolume: 0, // 音乐音量;
  musicOpenState: boolean, // 音乐面板开启状态
  backgroundShow: boolean, // 壁纸展示状态
  boxOpenState: boolean, // 盒子开启状态
  mobileOpenState: boolean, // 移动端开启状态
  mobileFuncState: boolean, // 移动端功能区开启状态
  setOpenState: boolean, // 设置页面开启状态
  playerState: boolean, // 当前播放状态
  playerTitle: string | null, // 当前播放歌曲名
  playerArtist?: string | null, // 当前播放歌手名
  playerLrc: string, // 当前播放歌词
  playerLrcShow: boolean, // 是否显示底栏歌词
  footerBlur: boolean, // 底栏模糊
}
