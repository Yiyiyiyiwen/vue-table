<template>
  <div id="app">
    <Table :tableData="tableData" 
    :currentPage="currentPage"
      :pageSize="pageSize"
      :checkednames="checkednames"
      :checked="checked"
      />
    <Pagination
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :handlePageChange="handlePageChange"
      :handlepagesize="handlepagesize"
    />
  </div>
</template>


<script>
import Table from "./components/Table";
import Pagination from "./components/Pagination";
export default {
  name: "basetable",
  data() {
    return {
      pageSize: 10,
      total: 200,
      currentPage: 1,
      tableData: [],
      totaldata: [],
      checkednames:[],
      checked:false
    };
  },
  components: {
    Table,
    Pagination
  },
  methods: {
    handlePageChange(index) {
      this.currentPage = index;
      this.checkednames = [];
      this.checked = false;
      console.log(index);
      var start = (index - 1) * this.pageSize;
      var end = start + this.pageSize;
      this.tableData = this.totaldata.slice(start, end);
    },
    handlepagesize(pageSize) {
      this.pageSize = parseInt(pageSize);
      this.checkednames = []
      this.checked = false
      console.log(this.pageSize);
      var start = 0;
      var end = start + this.pageSize;
      this.tableData = this.totaldata.slice(0, end);
      this.currentPage = 1;
    }
  },
  created() {
    var newPageInfo = [];
    var root = ["管理员", "院系管理员", "测试", "2", "4", "1231"];
    var time = new Date();
    for (var i = 0; i < this.total; i++) {
      newPageInfo[newPageInfo.length] = {
        username: "aaa",
        account: "a",
        days: Math.ceil(Math.random() * 10),
        isavailable: "有效",
        perform: root[Math.ceil(Math.random() * 5)],
        createtime: time,
        mystate: "启用",
        id:i
      };
    }
    var start = (this.currentPage - 1) * this.pageSize;
    var end = start + this.pageSize;
    this.totaldata = newPageInfo;
    this.tableData = newPageInfo.slice(start, end);
     this.checkednames = [];
      this.checked = false;
  }
};
</script>

<style>
body{
  padding: 50px 5px;
}
</style>
