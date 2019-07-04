<template>
  <div id="app">
    <div class="mytable row">
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
    </div>
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
.mytable {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.mytable .table {
  margin: 0 auto;
}
.mytable .table th {
  text-align: center;
}
.add_btn {
  width: 100%;
  text-align: left;
  padding-left: 20px;
}
</style>