'use strict';

/** @type Egg.EggPlugin */
const path = require('path');
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
    // prefix: 'wallpaper',
    // dir: path.join(appInfo.baseDir, 'app/public/wallpaper'),
    // dynamic: true,
    // preload: false
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  }
};
