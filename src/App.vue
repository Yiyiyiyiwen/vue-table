<template>
  <div id="app">
    <Table :tableData="tableData" />
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
  name: "app",
  data() {
    return {
      pageSize: 10,
      total: 200,
      currentPage: 1,
      tableData: [],
      totaldata: []
    };
  },
  components: {
    Table,
    Pagination
  },
  methods: {
    handlePageChange(index) {
      this.currentPage = index;
      console.log(index);
      var start = (index - 1) * this.pageSize;
      var end = start + this.pageSize;
      console.log(this.tableData);
    },
    handlepagesize(pageSize) {
      this.pageSize = parseInt(pageSize);
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
        state: "启用"
      };
    }
    var start = (this.currentPage - 1) * this.pageSize;
    var end = start + this.pageSize;
    this.totaldata = newPageInfo;
    this.tableData = newPageInfo.slice(start, end);
  }
};
</script>

<style>
body{
  padding: 50px 5px;
}
</style>
