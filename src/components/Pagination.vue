<template>
  <div class="fixed-table-pagination" style="display: block;">
    <div class="pull-left pagination-detail">
      <span class="pagination-info">
        显示第 {{(currentPage-1)*pageSize+1}} 到第 {{pageSize*currentPage}} 条记录，总共 {{total}}
        条记录
      </span>
      <span class="page-list">
        每页显示
        <span class="btn-group dropup">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="page-size">{{n}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <template v-for="(item,index) in numbers">
              <li
                class="item"
                :key="index"
                :class="{'checked' : index == n }"
                @click="choose(item.name)"
              >
              <a href="javascript:void(0)">{{ item.name }}</a></li>
            </template>
          </ul>
        </span> 条记录
      </span>
    </div>
    <div class="pull-right pagination">
      <ul class="pagination">
        <li class="page-first" @click="handlefirst">
          <a href="javascript:void(0)">«</a>
        </li>
        <li class="page-pre" @click="handlePrev">
          <a href="javascript:void(0)">‹</a>
        </li>
        <template v-for="page in pages" @click="handleClick">
          <li v-if="page === currentPage" class="page-number active" :key="page">
            <a href="javascript:void(0)">{{page}}</a>
          </li>
          <li v-else :key="page" @click="handleClick" class="page-number">
            <a href="javascript:void(0)">{{page}}</a>
          </li>
        </template>

        <li class="page-next" @click="handleNext">
          <a href="javascript:void(0)">›</a>
        </li>
        <li class="page-last" @click="handlelast">
          <a href="javascript:void(0)">»</a>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script type="es6">
export default {
  name: "Pagination",
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页大小
    pageSize: {
      type: Number,
      default: 10
    },
    // 总数据量
    total: {
      type: Number,
      default: 10
    },
    // 页码改变回调函数
    handlePageChange: {
      type: Function
    },
    //每页数量改变回调函数
    handlepagesize: {
      type: Function
    }
  },
  data() {
    return {
      numbers: [
       
        {
          name: 10,
          checked: true
        },
        {
          name: 20,
          checked: false
        },
        {
          name: 50,
          checked: false
        },
         {
          name:2,
          checked:false
        }
      ],
      n: 10
    };
  },
  computed: {
    // 总页码
    pageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算页码
    pages() {
      var array = [];
      var currentPage = this.currentPage;
      var total = this.pageNum;
      if (currentPage >= 1 && currentPage <= total) {
        if (total < 5) {
          //5页以内
          for (var $i = 1; $i <= total; $i++) {
            array.push($i);
          }
        } else {
          //大于5页
          if (currentPage == 1) {
            array = [
              currentPage,
              currentPage + 1,
              currentPage + 2,
              currentPage + 3,
              currentPage + 4
            ];
          } else if (currentPage == 2) {
            array = [
              currentPage - 1,
              currentPage,
              currentPage + 1,
              currentPage + 2,
              currentPage + 3
            ];
          } else if (currentPage == total - 1) {
            array = [
              currentPage - 3,
              currentPage - 2,
              currentPage - 1,
              currentPage,
              total
            ];
          } else if (currentPage == total) {
            array = [
              currentPage - 4,
              currentPage - 3,
              currentPage - 2,
              currentPage - 1,
              currentPage
            ];
          } else {
            array = [
              currentPage - 2,
              currentPage - 1,
              currentPage,
              currentPage + 1,
              currentPage + 2
            ];
          }
        }
      }

      console.log(array);
      return array;
    }
  },
  methods: {
    choose(index) {
      //控制n的值，变为用户的选中
      this.n = index;
      console.log(this.n)
      this.showPage(index)
    },
    // 点击页码跳转
    handleClick(e) {
      let index = parseInt(e.target.innerHTML);
      if (!Number.isNaN(index)) {
        this.handlePageChange(index);
      }
    },
    // 点击下一页
    handleNext() {
      let index = this.currentPage + 1;
      if (index <= this.pageNum) {
        if (!Number.isNaN(index)) {
          this.handlePageChange(index);
        }
      }
    },
    // 点击上一页
    handlePrev() {
      let index = this.currentPage - 1;
      if (index != 0) {
        if (!Number.isNaN(index)) {
          this.handlePageChange(index);
        }
      }
    },
    // 前往目标页
    handleInputChange(e) {
      let index = parseInt(e.target.value);
      if (Number.isNaN(index)) {
        e.target.value = this.currentPage;
        return;
      }
      if (index > this.pageNum) {
        index = this.pageNum;
      }
      if (index < 1) {
        index = 1;
      }
      this.handlePageChange(index);
    },
    showPage(pageSize) {
      console.log(pageSize);
      this.handlepagesize(pageSize);
    },
    handlefirst() {
      this.handlePageChange(1);
    },
    handlelast() {
      this.handlePageChange(this.total / this.pageSize);
    }
  }
};
</script>

<style scoped>
.pagination{
  margin: 0;
}
.fixed-table-pagination .pagination-detail {
    margin-top: 10px;
    margin-bottom: 10px;
}
.fixed-table-pagination div.pagination, .fixed-table-pagination .pagination-detail {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>