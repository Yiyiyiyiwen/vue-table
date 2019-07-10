<!--  -->
<template>
  <div class="loadhtml">
    <div id="toolbar" class="panel panel-default" style="margin:5 0 0 5;">
      <div class="panel-body">
        <div class="form-inline" role="form" id="form">
          <div class="input-group" style="width: 300px;margin-bottom: 5px;">
            <span class="input-group-addon">&nbsp;&nbsp;院系编号&nbsp;&nbsp;</span>
            <select
              id="xnxq"
              class="form-control"
              style="width:200px;margin-right: 5px;"
              v-model="xueqi"
            >
              <option value>--请选择--</option>

              <option value="01">01</option>

              <option value="02">02</option>
              <option value="06">06</option>
            </select>
          </div>

          <div class="input-group" style="width: 300px;margin-bottom: 5px;">
            <span class="input-group-addon">&nbsp;&nbsp;工号/姓名&nbsp;&nbsp;</span>
            <input
              id="ghxm"
              class="form-control"
              style="width:200px;margin-right: 5px;"
              v-model="search_name"
            />
          </div>

          <div class="input-group" style="margin-bottom: 5px;">
            <span class="input-group-addon">课程编号</span>
            <div
              class="select2-container select2-container-multi form-control select2"
              id="s2id_gradeNo"
              style="margin-right: 10px;"
            >
              <ul class="select2-choices">
                <li class="select2-search-field">
                  <label for="s2id_autogen1" class="select2-offscreen"></label>
                  <input
                    type="text"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    class="select2-input select2-default"
                    id="s2id_autogen1"
                    placeholder
                    style="width: 157px;"
                    aria-activedescendant="select2-result-label-32"
                  />
                </li>
              </ul>
            </div>
            <select
              id="gradeNo"
              class="form-control select2 select2-offscreen"
              multiple="true"
              style="margin-right: 10px;"
              tabindex="-1"
            >
              <option>01</option>
              <option>12</option>
              <option>060012</option>
              <option>013015</option>
            </select>
          </div>
          <div>
            <button type="button" id="searchBtn" class="btn btn-success btn-sm" @click="search">
              <i class="fa fa-search"></i>查询
            </button>
            <button
              type="button"
              id="exportBtn"
              class="btn btn-primary btn-sm"
              @click="exportExcel"
            >
              <i class="fa fa-search"></i>导出
            </button>
            <button type="button" id="editBtn" class="btn btn-info btn-sm" @click="edittable">
              <i class="fa fa-edit"></i>编辑
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pagclass" style="overflow-x:scroll;">
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
              data-side-pagination="server"
              data-pagination="true"
              data-striped="true"
              data-click-to-select="true"
              data-detail-view="false"
              class="table table-hover table-striped"
            >
              <thead>
                <tr>
                  <th class="bs-checkbox" style="width: 36px; " data-field="status" tabindex="0">
                    <div class="th-inner">
                      <input name="btSelectAll" type="checkbox" />
                    </div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="teacherno" tabindex="0">
                    <div class="th-inner">教师工号</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="teachername" tabindex="0">
                    <div class="th-inner">教师姓名</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="departmentno" tabindex="0">
                    <div class="th-inner">所在院系编号</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="departmentname" tabindex="0">
                    <div class="th-inner">所在院系</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="courseno" tabindex="0">
                    <div class="th-inner">课程编号</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="coursename" tabindex="0">
                    <div class="th-inner">课程名称</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="djz" tabindex="0">
                    <div class="th-inner">周次</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="weekday" tabindex="0">
                    <div class="th-inner">星期几</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="ksjc" tabindex="0">
                    <div class="th-inner">开始节次</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="jc" tabindex="0">
                    <div class="th-inner">节次</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="kccd" tabindex="0">
                    <div class="th-inner">课程长度</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="teachtime" tabindex="0">
                    <div class="th-inner">上课日期</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="jxdd" tabindex="0">
                    <div class="th-inner">教学地点</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="jxbbh" tabindex="0">
                    <div class="th-inner">教学班编号</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="jxbmc" tabindex="0">
                    <div class="th-inner">教学班名称</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="teachcontent" tabindex="0">
                    <div class="th-inner">教学内容</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="homework" tabindex="0">
                    <div class="th-inner">作业，课外阅读</div>
                    <div class="fht-cell"></div>
                  </th>
                  <th style data-field="remake" tabindex="0">
                    <div class="th-inner">备注</div>
                    <div class="fht-cell"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <td
                  colspan="18"
                  v-if="showlist.length==0"
                  style="text-align:center;background-color: #f9f9f9;padding:5px 0;border:1px solid #ddd;}"
                >没有找到匹配的记录</td>
                <tr
                  data-index="0"
                  v-for="(item,index) in showlist"
                  :key="item.id"
                  @click="chooseline(index)"
                >
                  <td class="bs-checkbox">
                    <input
                      data-index="0"
                      name="btSelectItem"
                      type="checkbox"
                      v-model="checknames"
                      :value="index"
                    />
                  </td>
                  <td style>{{item.teacherno}}</td>
                  <td style>{{item.teachername}}</td>
                  <td style>{{item.departmentno}}</td>
                  <td style>{{item.departmentname}}</td>
                  <td style>{{item.courseno}}</td>
                  <td style>{{item.coursename}}</td>
                  <td style>{{item.djz}}</td>
                  <td style>{{item.weekday}}</td>
                  <td style>{{item.ksjc}}</td>
                  <td style>{{item.jc}}</td>
                  <td style>{{item.kccd}}</td>
                  <td style>{{item.teachtime}}</td>

                  <td style>{{item.jxdd}}</td>
                  <td style>{{item.jxbbh}}</td>
                  <td style>{{item.jxbmc}}</td>
                  <td
                    style
                  >3333##[{"url":"/university-facade/file/download?id=96927d299186432c9b1a03ad7faafe45","caption":"支撑材料.doc","type":".doc"},{"url":"/university-facade/file/download?id=296cc3a951a94c8289770f850869faa3","caption":"资料.txt","type":".txt"}]</td>
                  <td
                    style
                  >##[{"url":"/university-facade/file/download?id=167c83696fb34a1a9633fdb3fe214b21","caption":"77_dowebok.zip","type":".zip"}]</td>
                  <td style>-</td>
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
          <div class="fixed-table-pagination" style="display: block;">
            <!-- <Pagination
              :currentPage="currentPage"
              :pageSize="pageSize"
              :total="total"
              :handlePageChange="handlePageChange"
              :handlepagesize="handlepagesize"
            />-->
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div id="editlayer" style="display:none">
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="firstname" class="col-sm-2 control-label">教师工号</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="请输入教师工号"
              :value="teacherno"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="lastname" class="col-sm-2 control-label">教师姓名</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="请输入教师姓名"
              :value="teachername"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="name" class="col-sm-2">院系编号</label>
          <div class="col-sm-10">
            <select class="form-control" v-model="departmentno">
              <option>01</option>
              <option>02</option>
              <option>06</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="name" class="col-sm-2">课程编号</label>
          <div class="col-sm-10">
            <select multiple class="form-control">
              <option>01</option>
              <option>12</option>
              <option>060012</option>
              <option>013015</option>
            </select>
          </div>
        </div>
      </form>
      <div style="width:100%;text-align:center">
        <button type="button" class="btn btn-success">确认</button>
        <button type="button" class="btn btn-default">取消</button>
      </div>
    </div>

    <loading></loading>
    <pagination
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :handlePageChange="handlePageChange"
      :handlepagesize="handlepagesize"
    ></pagination>
  </div>
</template>

<script>
import { post, get } from "../static/util/http";
import Blob from "../static/excel/Blob";
import Export2Excel from "../static/excel/Export2Excel";
import Vue from "vue";

import pagination from "./components/Pagination";
import loading from "./components/Loading";
Vue.prototype.$post = post;
Vue.prototype.$get = get;
export default {
  name: "layer",
  data() {
    return {
      isLoading: true,
      pageSize: 10,
      currentPage: 1,
      search_name: "",
      showlist: [],
      xueqi: "",
      checknames: [],
      teacherno: "",
      teachername: "",
      departmentno: "",
      totallist: [
        {
          id: "01,(2017-2018-1)-01-9199601025-48,15,4,2017,2,8",
          teacherno: "9199601025",
          teachername: "苏德炎",
          departmentno: "02",
          departmentname: "体育教学研究部",
          courseno: "01",
          coursename: "篮球",
          djz: "15",
          weekday: "4",
          teachtime: "2018-06-14",
          ksjc: 8,
          kccd: 2,
          jc: "8-9",
          teachcontent:
            '3333##[{"url":"/university-facade/file/download?id=96927d299186432c9b1a03ad7faafe45","caption":"支撑材料.doc","type":".doc"},{"url":"/university-facade/file/download?id=296cc3a951a94c8289770f850869faa3","caption":"资料.txt","type":".txt"}]',
          homework:
            '##[{"url":"/university-facade/file/download?id=167c83696fb34a1a9633fdb3fe214b21","caption":"77_dowebok.zip","type":".zip"}]',
          jxdd: "篮球场",
          jxbbh: "(2017-2018-1)-01-9199601025-48",
          jxbmc: "(2017-2018-1)-01-9199601025-48",
          remake: null,
          teachtimeDate: null
        },
        {
          id: "12,(2017-2018-1)-12-9199601025-46,15,4,2017,2,6",
          teacherno: "9199601025",
          teachername: "苏德炎",
          departmentno: "02",
          departmentname: "体育教学研究部",
          courseno: "12",
          coursename: "普体",
          djz: "15",
          weekday: "4",
          teachtime: "2018-06-14",
          ksjc: 6,
          kccd: 2,
          jc: "6-7",
          teachcontent:
            '压缩文件##[{"url":"/university-facade/file/download?id=49928c4117fb4f67a7ddb1c292ba5e63","caption":"77_dowebok.zip","type":".zip"},{"url":"/university-facade/file/download?id=4f43f8ee8353407c8fd8a50fe33063f7","caption":"支撑材料.doc","type":".doc"}]',
          homework:
            'undefined##[{"url":"/university-facade/file/download?id=c060b3f54d904af7a28ce457cae9d7b2","caption":"申请材料.zip","type":".zip"}]',
          jxdd: "风雨操场",
          jxbbh: "(2017-2018-1)-12-9199601025-46",
          jxbmc: "(2017-2018-1)-12-9199601025-46",
          remake: null,
          teachtimeDate: null
        },
        {
          id: "090110,(2016-2017-2)-090110-K14059-3,3,5,2017,2,0",
          teacherno: "20051020",
          teachername: "仲伟波",
          departmentno: "01",
          departmentname: "基础医学院",
          courseno: "0713040-A",
          coursename: "药物研发综合性实验",
          djz: "15",
          weekday: "3",
          teachtime: "2018-06-13",
          ksjc: 1,
          kccd: 2,
          jc: "1-2",
          teachcontent: "好111",
          homework: "好222",
          jxdd: "教学地点",
          jxbbh: "(2017-2018-1)-0000009-9100000001-1",
          jxbmc: "2012级五年制临床医学(普通本科)定向培养",
          remake: "3333",
          teachtimeDate: null
        },
        {
          id: "01,(2017-2018-1)-01-9199601025-36,15,3,2017,2,6",
          teacherno: "9199601025",
          teachername: "苏德炎",
          departmentno: "02",
          departmentname: "体育教学研究部",
          courseno: "01",
          coursename: "篮球",
          djz: "15",
          weekday: "3",
          teachtime: "2018-06-13",
          ksjc: 6,
          kccd: 2,
          jc: "6-7",
          teachcontent:
            '22##[{"url":"/university-facade/file/download?id=139c4f7aee0e4fc6be89a29c01344129","caption":"申请材料.zip","type":".zip"},{"url":"/university-facade/file/download?id=f45246ebde9c4995a900b92a162f7032","caption":"支撑材料.doc","type":".doc"}]',
          homework:
            '11##[{"url":"/university-facade/file/download?id=974d6f7893f845c49e1ef0a687ecdc7d","caption":"支撑材料.doc","type":".doc"}]',
          jxdd: "篮球场",
          jxbbh: "(2017-2018-1)-01-9199601025-36",
          jxbmc: "(2017-2018-1)-01-9199601025-36",
          remake: null,
          teachtimeDate: null
        },
        {
          id: "060012,(2016-2017-2)-060012-lcyxkf-1B,3,6,2017,2,4",
          teacherno: "K14002",
          teachername: "黄异",
          departmentno: "06",
          departmentname: "临床医学部",
          courseno: "060012",
          coursename: "康复机能评定2",
          djz: "3",
          weekday: "6",
          teachtime: "2018-02-24",
          ksjc: 4,
          kccd: 2,
          jc: "4-5",
          teachcontent: "康复机能评定",
          homework: "百度一下",
          jxdd: "11-208",
          jxbbh: "(2016-2017-2)-060012-lcyxkf-1B",
          jxbmc: "1B康复机能评定2",
          remake: "备注",
          teachtimeDate: null
        },
        {
          id: "013015,(2016-2017-2)-013015-rwglgj-1,3,6,2017,2,6",
          teacherno: "N14043",
          teachername: "陈鸣声",
          departmentno: "35",
          departmentname: "附属福州市第一医院",
          courseno: "013015",
          coursename: "卫生经济学",
          djz: "3",
          weekday: "6",
          teachtime: "2018-02-24",
          ksjc: 6,
          kccd: 3,
          jc: "6-8",
          teachcontent:
            "教师记录自己每天都进行的教学活动以及这些活动实施的效果，影响课堂教学的关键细节等情况，有意识地生动地表达教师自己的活动，是教师很好的认识自己的一种方法。",
          homework: "好",
          jxdd: "10-103",
          jxbbh: "(2016-2017-2)-013015-rwglgj-1",
          jxbmc: "1卫生经济学",
          remake: null,
          teachtimeDate: null
        }
      ]
    };
  },
  mounted() {
    $("#gradeNo").selectpicker({});
  },
  components: { pagination, loading },
  created() {
    this.showlist = this.totallist;
    if (this.showlist.length != 0) {
      this.isLoading = false;
    }
  },

  computed: {
    total() {
      return this.totallist.length;
    }
  },

  mounted: {},

  methods: {
    chooseline(id) {
      var newlist = this.checknames;
      if (newlist.indexOf(id) > -1) {
        var index = newlist.indexOf(id);
        newlist.splice(index, 1);
      } else {
        newlist.push(id);
      }
      this.checknames = newlist;
    },
    edittable() {
      if (this.checknames.length != 1) {
        alert("只能选择一项");
      } else {
        var checkedid = this.checknames[0];
        console.log(checkedid);
        var msg = this.showlist[checkedid];
        this.teacherno = msg.teacherno;
        this.teachername = msg.teachername;
        this.departmentno = msg.departmentno;
        console.log(msg);
        layer.open(
          {
            type: 1,
            title: "编辑",
            content: $("#editlayer"),
            shadeClose: true,
            area: ["500px"],
            closeBtn: 1
          },
          function() {
            console.log("22");
          },
          function() {
            layer.msg("取消");
          }
        );
      }
    },
    search() {
      const search_name = this.search_name;
      const xueqi = this.xueqi;
      var newlist;
      if (search_name || xueqi) {
        newlist = this.totallist.filter(data => {
          return Object.keys(data).some(key => {
            return String(data["teacherno"]).indexOf(search_name) > -1;
          });
        });
        if (xueqi) {
          newlist = newlist.filter(data => {
            return Object.keys(data).some(key => {
              return String(data["departmentno"]).indexOf(xueqi) > -1;
            });
          });
        }
      } else {
        newlist = this.totallist;
      }
      this.showlist = newlist;
      console.log(this.showlist);
    },
    exportExcel() {
      require.ensure([], () => {
        const {
          export_json_to_excel
        } = require("../static/excel/Export2Excel");
        const tHeader = [
          "教师工号",
          "教师姓名",
          "教师工号",
          "教师姓名",
          "所在院系编号",
          "所在院系",
          "课程编号",
          "课程名称",
          "周次",
          "星期几",
          "开始节次",
          "节次",
          "课程长度",
          "上课日期",
          "教学地点",
          "教学班编号",
          "教学班名称",
          "教学内容",
          "作业，课外阅读",
          "备注"
        ];
        // 上面设置Excel的表格第一行的标题
        const filterVal = [
          "teachername",
          "departmentno",
          "departmentname",
          "courseno",
          "coursename",
          "djz",
          "weekday",
          "ksjc",
          "jc",
          "kccd",
          "teachtime",
          "jxdd",
          "jxbbh",
          "jxbmc"
        ];
        // 上面的index、nickName、name是tableData里对象的属性
        const list = this.showlist; //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "列表excel");
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    handlePageChange(index) {
      this.currentPage = index;
      console.log(index);
      var start = (index - 1) * this.pageSize;
      var end = start + this.pageSize;
      this.showlist = this.totallist.slice(start, end);
    },
    handlepagesize(pageSize) {
      this.pageSize = parseInt(pageSize);
      console.log(this.pageSize);
      var start = 0;
      var end = start + this.pageSize;
      this.showlist = this.totallist.slice(0, end);
      this.currentPage = 1;
    }
  }
};
</script>
<style scoped>
.table-striped th {
  white-space: nowrap;
}
.bootstrap-table .table > tbody > tr > td {
  vertical-align: bottom;
  border: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border: 1px solid #ddd !important;
}
.bootstrap-table .table > tbody > tr > td[data-v-6dc320a8] {
  vertical-align: top;
}
#editlayer {
  padding: 20px;
  white-space: nowrap;
}

.mock {
  z-index: 4;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50px);
}
.mock img {
  width: 100px;
  height: 100px;
  animation: xz 0.8s linear infinite;
  -webkit-animation: xz 0.8s linear infinite;
}
@-webkit-keyframes xz {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes xz {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>