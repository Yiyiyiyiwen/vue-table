<template>
  <div id="app">
    <div class="add_btn">
      <button type="button" class="btn btn-primary" @click="addmessage">新增</button>
    </div>
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
          <tr v-for="(user,index) in perlist" :key="index">
            <td>
              <input type="checkbox" :value="index" v-model="checkedRows" />
            </td>
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

      <div class="row mx-auto">
        <ul class="pagination">
          <li>
            <a href="#">&laquo;</a>
          </li>
          <li class="page-item" v-for="n in totalPages" :class="{active:n==pageNow}" :key="n">
            <a href="#" @click="switchToPage(n)" class="page-link">{{n}}</a>
          </li>
          <li>
            <a href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userList: [
        {
          username: "aaa",
          account: "abc",
          days: 23,
          isavailable: "有效",
          perform: "管理员",
          createtime: "2018-03-21",
          state: "有效"
        },
        {
          username: "aaa",
          account: "abc",
          days: 23,
          isavailable: "有效",
          perform: "管理员",
          createtime: "2018-03-21",
          state: "有效"
        },
        {
          username: "aaa",
          account: "abc",
          days: 23,
          isavailable: "有效",
          perform: "管理员",
          createtime: "2018-03-21",
          state: "有效"
        },
        {
          username: "aaa",
          account: "abc",
          days: 23,
          isavailable: "有效",
          perform: "管理员",
          createtime: "2018-03-21",
          state: "有效"
        }
      ],
      perPage: 2,
      pageNow: 1,
      totalPages: 6,
      checkedRows: [],
      
    };
  },
  methods: {
    switchToPage: function(pageNo) {
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }
      this.getUserByPage(pageNo);
    },
    getUserByPage:function(pageNo){
      var start = (pageNo-1)*this.perPage
      var end = start+this.perPage
      var newlist = this.userList.slice(start,end)
      this.perlist = newlist
    },
    addmessage: function() {
      layer.open({
        type: 1,
        area: ["600px", "360px"],
        shadeClose: true, //点击遮罩关闭
        content: '<div style="padding:20px;">自定义内容</div>'
      });
    }
  },
  computed: {
    perlist:{
      get(){
      return this.userList.slice(0,this.perPage)
      }
    }
  }
};
</script>

