<template>
  <div id="app">
    <div class="bootstrap-table">
      <div class="fixed-table-toolbar"></div>
      <div class="fixed-table-container" style="padding-bottom: 0px;">
        <button type="button" class="btn btn-primary" @click="addlayer">新增</button>
        <button type="button" class="btn btn-success">修改</button>
        <button type="button" class="btn btn-danger">删除</button>
        <div class="fixed-table-body">
          <div class="fixed-table-loading" style="top: 41px; display: none;">正在努力地加载数据中，请稍候……</div>
          <table id="table" class="table table-hover table-condensed table-striped">
            <thead>
              <tr>
                <th class="bs-checkbox" style="width: 36px; " data-field="status" tabindex="0">
                  <div class="th-inner">
                    <input name="btSelectAll" type="checkbox" @click="checkall" v-model="mychecked" />
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
              <tr data-index="index" v-for="(user,index) in tableData" :key="index">
                <td class="bs-checkbox">
                  <input
                    data-index="0"
                    name="btSelectItem"
                    type="checkbox"
                    :value="user.id"
                    v-model="mycheckedNames"
                    @click="checkchoose(user)"
                  />
                </td>
                <td style>{{user.username}}</td>
                <td style>{{user.account}}</td>
                <td style>{{user.days}}</td>
                <td style>{{user.isavailable}}</td>
                <td style>{{user.perform}}</td>
                <td style>{{user.createtime}}</td>
                <td style>{{user.mystate}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="addlayer" style="display:none">
      <div>123</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Table",
  props: {
    tableData: {
      type: Array
    },
    checkednames: {
      type: Array,
      default: []
    },
    checked: {
      default: false,
      required:true
    },
    currentPage: {},
    pageSize: {}
  },
  data() {
    return {
      mycheckedNames: this.checkednames,
      mychecked: this.checked
    };
  },
  watch:{
    checkednames(val){
      this.mycheckedNames = val
    },
    checked(val){
      this.mychecked = val
    }
  },
  methods: {
    checkchoose(item) {
      console.log(item.state);
      var mycheckedNames = this.mycheckedNames;
      var length = mycheckedNames.length;
      if (item.state == false) {
        length -= 1;
      } else {
        length += 1;
      }
      console.log(length+" "+this.pageSize)
      if (length == this.pageSize) {
        this.mychecked = true;
      } else {
        this.mychecked = false;
      }
    },
    checkall() {
      var newlist = []
      var mychecked = this.mychecked;
      if (mychecked) {
        this.mycheckedNames = [];
        mychecked = false;
      } else {
        this.mycheckedNames = [];
        var start = (this.currentPage - 1) * this.pageSize;
        var end = start + this.pageSize;
        console.log(start+" "+end)
        for (let i = 0; i < this.pageSize; i++) {
          console.log(this.tableData[i].id)
          newlist.push(this.tableData[i].id);
        }
        this.mycheckedNames = newlist
        console.log(this.mycheckedNames)
        mychecked = true;
      }
    },
    addlayer() {
      //墨绿深蓝风

      layer.open(
        {
          type: 1,
          title: "title",
          area: ["420px", "240px"], //宽高
          content: $("#addlayer"),
          shadeClose: true,
          closeBtn: 1
        },
        function() {
          console.log("22");
        },
        function() {
          layer.msg("取消");
        }
      );
      // layer.confirm(
      //   "",
      //   {
      //     title: "title",
      //     anim: 2,
      //     closeBtn: 1,
      //     skin: "layui-layer-demo", //样式类名
      //     content: $("#addlayer"),
      //     btn: ["确定", "取消"],
      //     area: ["600px"]
      //   },
      //   function() {
      //     layer.msg("确定");
      //   },
      //   function() {
      //     layer.msg("取消")
      //   }
      // );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bootstrap-table .table,
.bootstrap-table .table > tbody > tr > th,
.bootstrap-table .table > tfoot > tr > th,
.bootstrap-table .table > thead > tr > td,
.bootstrap-table .table > tbody > tr > td,
.bootstrap-table .table > tfoot > tr > td {
  padding: 8px !important;
}
.bootstrap-table .table {
  margin-bottom: 0 !important;
  border: 1px solid #dddddd;
  border-collapse: collapse !important;
  border-radius: 1px;
}
.bootstrap-table .table > thead > tr > th {
  vertical-align: bottom;
  border: 1px solid #ddd;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border: 1px solid #ddd;
}
</style>