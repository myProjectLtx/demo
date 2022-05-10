<template>
  <div class="ele-body">
    <el-card shadow="never">
      <!-- 搜索表单 -->
      <el-form
        :model="where"
        label-width="77px"
        class="ele-form-search"
        @keyup.enter.native="reload"
        @submit.native.prevent>
        <el-row :gutter="15">
          <el-col :lg="6" :md="12">
            <el-form-item label="用户账号:">
              <el-input
                v-model="where.username"
                placeholder="请输入用户账号"
                clearable/>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <div class="ele-form-actions">
              <el-button
                type="primary"
                @click="reload"
                icon="el-icon-search"
                class="ele-btn-icon">查询
              </el-button>
              <el-button @click="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <!-- 数据表格 -->
      <ele-pro-table
        ref="table"
        :datasource="url"
        :columns="columns"
        :where="where"
        height="calc(100vh - 315px)">
        <!-- 表头工具栏 -->
<!--        <template slot="toolbar">-->
<!--          <el-button-->
<!--            @click="exportData"-->
<!--            type="primary"-->
<!--            icon="el-icon-download"-->
<!--            class="ele-btn-icon"-->
<!--            size="small"-->
<!--            v-if="permission.includes('sys:loginlog:export')">导出-->
<!--          </el-button>-->
<!--        </template>-->
        <!-- 操作类型列 -->
        <template slot="type" slot-scope="{row}">
          <el-tag
            :type="['success','danger','warning','info'][row.type-1]"
            size="mini">
            {{ ['登录系统', '注销系统', '操作日志'][row.type - 1] }}
          </el-tag>
        </template>
        <!-- 操作状态列 -->
        <template slot="status" slot-scope="{row}">
          <ele-dot :type="['', 'success'][row.status]" :ripple="row.status===0"
                   :text="['操作成功', '操作失败'][row.status]"/>
        </template>
        <!-- 操作列 -->
        <template slot="action" slot-scope="{row}">
          <el-popconfirm
            class="ele-action"
            title="确定要删除此登录日志吗？"
            @confirm="remove(row)">
            <el-link
              type="danger"
              slot="reference"
              :underline="false"
              icon="el-icon-delete"
              v-if="permission.includes('sys:loginlog:delete')">删除
            </el-link>
          </el-popconfirm>
        </template>
      </ele-pro-table>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import XLSX from 'xlsx';

  export default {
    name: 'SystemLoginLog',
    computed: {
      ...mapGetters(["permission"]),
    },
    data() {
      return {
        // 表格数据接口
        url: '/log/wx/pages',
        // 表格列配置
        columns: [
          {
            prop: 'id',
            label: 'ID',
            width: 60,
            align: 'center',
            showOverflowTooltip: true,
            fixed: "left"
          },
          {
            prop: 'ip',
            label: 'ip',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'logTitile',
            label: '日志标题',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'operateAccount',
            label: '操作账号',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 100
          },
          {
            prop: 'operateSystem',
            label: '操作系统',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 130
          },
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
    }
  }
</script>

<style scoped>
</style>
