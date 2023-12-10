// 防抖
let timeout: string | number | NodeJS.Timeout | null | undefined

function debounce(func: Function, wait = 300, immediate = false) {
  // 清除定时器
  if (timeout !== null)
    clearTimeout(timeout)

  // 立即执行
  if (immediate) {
    const callNow = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, wait)
    if (callNow)
      typeof func === 'function' && func()
  }
  else {
    timeout = setTimeout(() => {
      typeof func === 'function' && func()
    }, wait)
  }
}

export default debounce
