<template>
  <div>
    <ul class="tip">
      <div class="ltip">
        显示第 {{(currentPage-1)*pageSize+1}} 到第 {{pageSize*currentPage}} 条记录，总共 {{total}} 条记录
        <span class="form-inline">
          每页显示 
          <select class="form-control" v-model="pageSize" v-on:change="showPage(pageSize)" number>
            <option value="10">10</option>
            <option value="50">50</option>
          </select>
           条数据
        </span>
      </div>
      <div>
        <li @click="handlefirst">&laquo;</li>
        <li v-if="currentPage!==1" @click="handlePrev"><</li>
        <li :class="{'btnOn': currentPage == 1}" @click="handleClick">1</li>
        <li v-if="showPrevMore" @click="handleMore(1)">...</li>
        <li
          :class="{'btnOn': page == currentPage}"
          v-for="page in pages"
          @click="handleClick"
          :key="page"
        >{{ page }}</li>
        <li v-if="showNextMore" @click="handleMore(-1)">...</li>
        <li
          :class="{'btnOn': currentPage == pageNum}"
          v-if="pageNum!==1"
          @click="handleClick"
        >{{pageNum}}</li>
        <li v-if="currentPage!==pageNum" @click="handleNext">></li>
        <li @click="handlelast">&raquo;</li>
      </div>
    </ul>
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
    handlepagesize:{
        type:Function
    }
  },
  data() {
    return {
      showPrevMore: false,
      showNextMore: false
    };
  },
  computed: {
    // 总页码
    pageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算页码
    pages() {
      const pagerCount = 6;
      const currentPage = Number(this.currentPage);
      const pageCount = this.pageNum;
      let showPrevMore = false;
      let showNextMore = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 3) {
          showPrevMore = true;
        }
        if (currentPage < pageCount - 3) {
          showNextMore = true;
        }
      }
      const array = [];
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    }
  },
  methods: {
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
      if (!Number.isNaN(index)) {
        this.handlePageChange(index);
      }
    },
    // 点击上一页
    handlePrev() {
      let index = this.currentPage - 1;
      if (!Number.isNaN(index)) {
        this.handlePageChange(index);
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
    showPage(pageSize){
        console.log(pageSize)
        this.handlepagesize(pageSize)
    },
    handlefirst(){
        this.handlePageChange(1)
    },
    handlelast(){
        this.handlePageChange(this.total/this.pageSize)
    }
  }
};
</script>

<style scoped>
div {
  overflow: hidden;
}
ul {
  overflow: hidden;
  float: left;
}
li {
  font-size: 14px;
  float: left;
  list-style-type: none;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border: 0.3px solid rgb(214, 213, 213);
  border-left: 0;
  background: white;
  color: #457ab2;
  cursor: pointer;
}
li:hover,
li.btnOn {
  background: #457ab2;
  color: white;
}
span {
  float: left;
  margin-top: 15px;
  margin-left: 10px;
}
input {
  width: 30px;
  height: 30px;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  background: #e4e4e4;
  margin: 0 2px;
  text-align: center;
  font-size: 16px;
  outline: none;
}
.tip{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
.ltip,.form-inline{
    display: flex;
    align-items: center;
}
.form-inline{
    margin: 0;
    margin-left: 20px;
}
</style>