<template>
  <div>
    <div class="open">
      <div id="nav" class="nav">
        <ul class="nav-ul">
          <li>
            <div class="nav-app">
              <img class="nav-app-img" src="~styles/icon/application.png" alt="应用" />
              <p class="nav-app-name">应用</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="main">
        <div class="main-top">
          <button class="btn-create">+ 创建应用</button>
          <div class="user-msg">
            <img src="~styles/icon/people_fill.png" />
            <p id="name" class="name"></p>
            <p id="logout" class="logout">登出</p>
          </div>
        </div>
        <div class="main-middle"></div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4>创建应用</h4>
          <button class="btn-close">×</button>
        </div>
        <div>
          <div class="modal-body">
            <div class="form-group">
              <label>应用名称：</label>
              <input id="app-name" type="text" class="formControl" placeholder="必填" />
              <span class="error"></span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button btn-close" type="button">关闭</button>
          <button id="btn" class="submit" type="submit">创建应用</button>
        </div>
      </div>
    </div>
    <div id="hide"></div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style lang="stylus" scoped>
.open {
  height: 100%;
  overflow: hidden;

  .nav {
    height: 100%;
    width: 60px;
    background: #272b31;
    display: inline-block;
    vertical-align: top;

    .nav-ul {
      width: 100%;
      list-style: none;
      text-align: center;
      background: rgb(53, 147, 255);
      margin: 0;

      .nav-app {
        vertical-align: middle;
        padding: 10%;

        .nav-app-name {
          color: #fff;
          font-size: 13px;
        }

        .nav-app-img {
          width: 26px;
          margin-top: 3px;
          margin-bottom: 3px;
        }
      }
    }
  }

  #main {
    width: calc(100% - 180px);
    font-size: 16px;
    vertical-align: top;
    padding: 2%;
    display: inline-block;

    .main-top {
      width: 100%;

      .btn-create {
        width: 200px;
        height: 40px;
        font-family: '微软雅黑';
        font-size: 16px;
        text-align: center;
        margin-bottom: 1.5%;
        background: #3593ff;
        border-radius: 2px;
        color: #fff;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
      }

      .user-msg {
        width: 265px;
        height: 40px;
        float: right;
        text-align: center;
        font-size: 14px;
        margin-bottom: 1.4%;
        line-height: 40px;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
        background: #fff;
        color: #646464;

        img {
          width: 20px;
          vertical-align: middle;
          display: inline-block;
        }

        .name {
          width: 150px;
          display: inline-block;
          vertical-align: middle;
        }

        .logout {
          width: 50px;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
        }
      }
    }

    .main-middle {
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      height: calc(100vh - 98px);

      .list {
        border: 1px solid #e6e6e6;
        border-radius: 6px;
        background: #fff;
        margin: 20px;
      }

      .list:hover {
        box-shadow: 2px 2px 10px #646464;
        cursor: pointer;
      }
    }
  }
}
</style>

