<template>
  <div>
    <div class="open">
      <div id="nav">
        <ul>
          <li>
            <div>
              <!-- <img src="./static/img/application.png" alt="应用" /> -->
              <p>应用</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="main">
        <div class="main-top">
          <button class="btn-create">+ 创建应用</button>
          <div class="user-msg">
            <!-- <img src="./static/img/people_fill.png" /> -->
            <p id="name"></p>
            <p id="logout">登出</p>
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

<style scoped>

</style>
