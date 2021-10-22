export function ms() {
  return new Date().getTime();
}

/**
 * 其实moment.js有简便
 *
 * return the str time passed
 * 刚刚 < 1分
 * xx分前 < 1小时
 * xx小时前 < 24小时
 * x月x日 this year
 * x年x月x日 not this year
 * @param srcTime the need calc time
 */
export function timePassed(srcTime: Date): string {
  // let s = src_time.getUTCFullYear();
  let curTime = new Date();
  if (srcTime.getMilliseconds() < curTime.getMilliseconds()) {
    let srcMilliSeconds = srcTime.getUTCMilliseconds();
    let curMilliSeconds = curTime.getUTCMilliseconds();
    let timeDiffSecond = Math.floor((curMilliSeconds - srcMilliSeconds) / 1000);
    if (timeDiffSecond < 60) {
      return "刚刚";
    }

    if (timeDiffSecond < 60 * 60) {
      return Math.floor(timeDiffSecond / 60) + "分前";
    }

    if (timeDiffSecond < 24 * 60 * 60) {
      return Math.floor(timeDiffSecond / (24 * 60)) + "小时前";
    }

    if (curTime.getFullYear() != srcTime.getFullYear()) {
      return srcTime.getMonth() + "月" + srcTime.getDay() + "日";
    }
  }

  return srcTime.getFullYear() + "年" + srcTime.getMonth() + "月" + srcTime.getDay() + "日";
}
