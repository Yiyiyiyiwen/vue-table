<template>
  <div id="app">
    <div class="bootstrap-table">
      <div class="fixed-table-toolbar"></div>
      <div class="fixed-table-container" style="padding-bottom: 0px;">
        <div class="fixed-table-header" style="display: none;">
          <table></table>
        </div>
        <div class="fixed-table-body">
          <div class="fixed-table-loading" style="top: 41px; display: none;">正在努力地加载数据中，请稍候……</div>
          <table
            id="table"
            data-url="/university/manage/baseinfo/bjxx/findByPage.shtml"
            data-side-pagination="server"
            data-pagination="true"
            data-search="false"
            data-classes="table table-hover table-condensed"
            data-striped="true"
            data-click-to-select="true"
            data-detail-view="false"
            class="table table-hover table-condensed table-striped"
          >
            <thead>
              <tr>
                <th class="bs-checkbox" style="width: 36px; " data-field="status" tabindex="0">
                  <div class="th-inner">
                    <input name="btSelectAll" type="checkbox" />
                  </div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="classname" tabindex="0">
                  <div class="th-inner">用户名</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="classno" tabindex="0">
                  <div class="th-inner">账号</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="stunumber" tabindex="0">
                  <div class="th-inner">有效天数</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="yearlimit" tabindex="0">
                  <div class="th-inner">是否有效</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="majorno" tabindex="0">
                  <div class="th-inner">角色</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="xq" tabindex="0">
                  <div class="th-inner">创建时间</div>
                  <div class="fht-cell"></div>
                </th>
                <th style data-field="xqmc" tabindex="0">
                  <div class="th-inner">状态</div>
                  <div class="fht-cell"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr data-index="index"  v-for="(user,index) in tableData" :key="index">
                <td class="bs-checkbox">
                  <input data-index="0" name="btSelectItem" type="checkbox" />
                </td>
                <td style="">{{user.username}}</td>
                <td style="">{{user.account}}</td>
                <td style="">{{user.days}}</td>
                <td style="">{{user.isavailable}}</td>
                <td style="">{{user.perform}}</td>
                <td style="">{{user.createtime}}</td>
                <td style="">{{user.state}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="fixed-table-footer" style="display: none;">
          <table>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <!-- <div class="mytable row">
      <table class="table table-striped table-hover">
        <thead class>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>用户名</th>
            <th>账号</th>
            <th>有效天数</th>
            <th>是否有效</th>
            <th>角色</th>
            <th>创建时间</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in tableData" :key="index">
            <th>
              <input type="checkbox" />
            </th>
            <td>{{user.username}}</td>
            <td>{{user.account}}</td>
            <td>{{user.days}}</td>
            <td>{{user.isavailable}}</td>
            <td>{{user.perform}}</td>
            <td>{{user.createtime}}</td>
            <td>{{user.state}}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>


<script>
export default {
  name: "Table",
  props: {
    tableData: {
      type: Array
    }
  },
  methods: {
    addmessage() {
      console.log("111");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bootstrap-table .table, .bootstrap-table .table > tbody > tr > th, .bootstrap-table .table > tfoot > tr > th, .bootstrap-table .table > thead > tr > td, .bootstrap-table .table > tbody > tr > td, .bootstrap-table .table > tfoot > tr > td {
    padding: 8px !important;
}
.bootstrap-table .table {
    margin-bottom: 0 !important;
    border: 1px solid #dddddd;
    border-collapse: collapse !important;
    border-radius: 1px;
}
.bootstrap-table .table > thead > tr > th{
    vertical-align: bottom;
    border: 1px solid #ddd;
}
.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border: 1px solid #ddd;
}
</style>