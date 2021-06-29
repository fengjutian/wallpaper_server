const Service = require('egg').Service;

class UserService extends Service {
  async getImgs({}) {
    const user = await this.ctx.db.query('select * from imgsInfo', );
    return user;
  }
}

module.exports = UserService;
