// 加载显示进度
export const handleShowProgress = (state, content = '加载数据中，请稍候...') => {
  if (state) {
    plus.nativeUI.showWaiting(content, {
      size: '16px',
      background: '#40434A',
    });
  } else {
    plus.nativeUI.closeWaiting();
  }
};

// 消息提示
export const handleShowToast = (title, position = 'bottom', duration = 1500) => {
  uni.hideToast();
  uni.showToast({
    title,
    position,
    duration,
    icon: 'none',
  });
};

// 加载loading弹窗
export const handleTextLoading = (state, title = '数据加载中', mask = true) => {
  if (state) {
    uni.showLoading({
      title,
      mask,
    });
  } else {
    uni.hideLoading();
  }
};

// 动态设置页面标题
export const setNavBarTitle = () => {
  let routes = getCurrentPages();
  let currentParam = routes[routes.length - 1].options;
  let params = JSON.parse(currentParam.params);
  let title = '';
  for (let key in params) {
    if (key == 'title') {
      title = params['title'];
    }
  }
  uni.setNavigationBarTitle({ title });
  return params;
};

// 日期格式化
export const dateFormat = (fmt, date) => {
  let ret;
  let opt = {
    'Y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 年
    'D+': date.getDate().toString(), // 年
    'h+': date.getHours().toString(), // 年
    'm+': date.getMinutes().toString(), // 年
    's+': date.getSeconds().toString(), // 年
    'md+': date.getMilliseconds().toString(), // 年
  };
  for (let k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      let fill = ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0');
      fmt = fmt.replace(ret[1], fill);
    }
  }
  return fmt;
};

export const setStatusBarStyle = () => {
  let { statusBarHeight, pixelRatio } = uni.getSystemInfoSync();
  return { paddingTop: `${statusBarHeight * pixelRatio}upx` };
};
