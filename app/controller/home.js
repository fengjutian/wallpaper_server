'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const { ctx } = this;
    const data = {name: 'egg'};
    await ctx.render('login.nj', data)
  }

  async imgList() {
    const { ctx } = this;
    const fs = require('fs');
    const imgs = fs.readdirSync('app/public/wallpaper')

    let imgsInfoList = [];
    let urlPre = 'http://127.0.0.1:7001/public/wallpaper/';

    for (const i of imgs) {
      imgsInfoList.push({
        imgUrl: urlPre + i,
        name: i,
        info: ''
      })
    }

    ctx.body = {
      code: 1,
      data: {
        data: imgsInfoList
      },
      msg: 'OK'
    }
  }

  // async getImgList() {
  //   const ctx = this.ctx;
  //   const imgs = await ctx.service.home.getImgs({})
  //   console.log('imgs', imgs)
  // }
}

module.exports = HomeController;
