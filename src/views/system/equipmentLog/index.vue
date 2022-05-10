<template>
  <div class="ele-body">
    <el-card shadow="never">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="小程序操作日志" name="first">
          <miniLog></miniLog>
        </el-tab-pane>
        <el-tab-pane label="系统操作日志" name="second">
          <sysLog></sysLog>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import XLSX from 'xlsx';
  import miniLog from './commpoents/miniLog'
  import sysLog from './commpoents/sysLog'
  export default {
    name: 'SystemLoginLog',
    computed: {
      ...mapGetters(["permission"]),
    },
    components:{
      miniLog,
      sysLog
    },
    data() {
      return {
        // 表格数据接口
        url: '/loginlog/index',
        // 表格列配置
        columns: [
          {
            columnKey: 'selection',
            type: 'selection',
            width: 45,
            align: 'center',
            fixed: "left"
          },
          {
            prop: 'id',
            label: 'ID',
            width: 60,
            align: 'center',
            showOverflowTooltip: true,
            fixed: "left"
          },
          {
            prop: 'title',
            label: '日志标题',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'username',
            label: '操作账号',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'loginIp',
            label: 'IP地址',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 130
          },
          {
            prop: 'os',
            label: '操作系统',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'browser',
            label: '浏览器',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'type',
            label: '操作类型',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100,
            slot: 'type'
          },
          {
            prop: 'status',
            label: '操作状态',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100,
            slot: 'status'
          },


          {
            prop: 'note',
            label: '备注',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'createTime',
            label: '操作时间',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 160,
            formatter: (row, column, cellValue) => {
              return this.$util.toDateString(cellValue);
            }
          },
          {
            columnKey: 'action',
            label: '操作',
            width: 90,
            align: 'center',
            resizable: false,
            slot: 'action',
            fixed: "right"
          }
        ],
        // 表格搜索条件
        where: {},
        activeName:'first'
      };
    },
    methods: {
      /* 刷新表格 */
      reload() {
        this.$refs.table.reload({where: this.where});
      },
      /* 重置搜索 */
      reset() {
        this.where = {};
        this.reload();
      },
      /* 导出数据 */
      exportData() {
        let array = [['ID', '登录账号', '用户姓名', 'IP地址', '设备型号', '操作系统', '浏览器', '操作类型', '备注', '登录时间']];
        const loading = this.$loading({lock: true});
        this.$http.get('/loginlog/index?page=1&limit=2000').then(res => {
          loading.close();
          if (res.data.code === 0) {
            res.data.data.records.forEach(d => {
              array.push([
                d.id,
                d.username,
                d.realname,
                d.loginIp,
                d.device,
                d.os,
                d.browser,
                ['登录成功', '登录失败', '退出登录', '刷新TOKEN'][d.type - 1],
                this.$util.toDateString(d.createTime)
              ]);
            });
            this.$util.exportSheet(XLSX, array, '登录日志');
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch(e => {
          loading.close();
          this.$message.error(e.message);
        });
      },
      /* 删除 */
      remove(row) {
        const loading = this.$loading({lock: true});
        this.$http.delete('/loginlog/delete/' + row.id).then(res => {
          loading.close();
          if (res.data.code === 0) {
            this.$message.success(res.data.msg);
            this.reload();
          } else {
            this.$message.error(res.data.msg);
          }
        }).catch(e => {
          loading.close();
          this.$message.error(e.message);
        });
      },
      //切换tab卡
      handleClick(tab){
        console.log(tab)
      }
    }
  }
</script>

<style scoped>
</style>
