<template>
  <div class="ele-body">
    <el-card shadow="never">
      <el-form
        :model="where"
        label-width="77px"
        class="ele-form-search"
        @keyup.enter.native="reload"
        @submit.native.prevent>
        <el-row :gutter="15">
          <el-col :lg="6" :md="12">
            <el-form-item label="设备名称:">
              <el-input
                clearable
                v-model="where.name"
                placeholder="请输入设备名称"/>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12">
            <div class="ele-form-actions">
              <el-button
                type="primary"
                icon="el-icon-search"
                class="ele-btn-icon"
                @click="reload">查询
              </el-button>
              <el-button @click="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <ele-pro-table
      ref="table"
      :where="where"
      :datasource="url"
      :columns="columns"
      :selection.sync="selection"
      height="calc(100vh - 315px)">
      <!-- 表头工具栏 -->
      <template slot="toolbar">
        <el-button
          size="small"
          type="primary"
          icon="el-icon-plus"
          class="ele-btn-icon"
          @click="openEdit(null)"
          v-if="permission.includes('sys:level:add')">添加
        </el-button>
<!--        <el-button-->
<!--          size="small"-->
<!--          type="danger"-->
<!--          icon="el-icon-delete"-->
<!--          class="ele-btn-icon"-->
<!--          @click="removeBatch"-->
<!--          v-if="permission.includes('sys:level:dall')">删除-->
<!--        </el-button>-->
<!--        <el-button-->
<!--          @click="showImport=true"-->
<!--          icon="el-icon-upload2"-->
<!--          class="ele-btn-icon"-->
<!--          size="small"-->
<!--          v-if="permission.includes('sys:level:import')">导入-->
<!--        </el-button>-->
<!--        <el-button-->
<!--          size="small"-->
<!--          type="success"-->
<!--          icon="el-icon-download"-->
<!--          class="ele-btn-icon"-->
<!--          @click="exportExcel"-->
<!--          v-if="permission.includes('sys:level:export')">导出-->
<!--        </el-button>-->
      </template>
      <!-- 操作列 -->
      <template slot="action" slot-scope="{row}">
        <el-popconfirm
          class="ele-action"
          title="确定要重启此设备么？"
          @confirm="action(row,'reboot')">
          <el-link
            type="primary"
            slot="reference"
            :underline="false"
            icon="el-icon-delete"
            v-if="permission.includes('sys:level:delete')">重启
          </el-link>
        </el-popconfirm>
        <el-popconfirm
          class="ele-action"
          title="确定要恢复出厂设置？"
          @confirm="action(row,'reset')">
          <el-link
            type="danger"
            slot="reference"
            :underline="false"
            icon="el-icon-delete"
            v-if="permission.includes('sys:level:delete')">恢复出厂设置
          </el-link>
          <el-link
            type="info"
            slot="reference"
            :underline="false"
            icon="el-icon-view"
            @click="showDetail(row)"
          >查看详情
          </el-link>
        </el-popconfirm>

        <el-dropdown>
          <el-button type="primary">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-button
              size="small"
              type="primary"
              class="ele-btn-icon"
              @click="optionWifi(1,row)">
              重置wifi名称
            </el-button>
            <el-button
              size="small"
              type="success"
              class="ele-btn-icon"
              @click="optionWifi(2,row)">
              重置wifi密码
            </el-button>
            <el-button
              size="small"
              type="success"
              class="ele-btn-icon"
              @click="optionWifi(3,row)">
              自定义指令
            </el-button>

          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <!-- 状态列 -->
<!--      <template slot="status" slot-scope="{row}">-->
<!--        <el-switch-->
<!--          v-model="row.status"-->
<!--          @change="editStatus(row)"-->
<!--          :active-value="1"-->
<!--          :inactive-value="2"/>-->
<!--      </template>-->
    </ele-pro-table>

    <el-dialog
      :title="wifiOptionName"
      :visible="visible"
      width="460px"
      :destroy-on-close="true"
      :lock-scroll="false">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="100px">
        <el-form-item
          v-if="wifiOption===1"
          label="wifi名称:"
          prop="ssidName">
          <el-input
            :maxlength="200"
            v-model="form.ssidName"
            placeholder="请输入wifi名称"
            clearable/>
        </el-form-item>
        <el-form-item
          v-if="wifiOption===2"
          label="wifi密码:"
          prop="ssidPassword">
          <el-input
            :maxlength="200"
            v-model="form.ssidPassword"
            placeholder="请输入wifi标识"
            clearable/>
        </el-form-item>
        <el-form-item
          v-if="wifiOption===3"
          label="自定义指令:"
          prop="cmd">
          <el-input
            :maxlength="200"
            v-model="form.cmd"
            placeholder="请输入自定义指令"
            clearable/>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="updateVisible(false)">取消</el-button>
        <el-button
          type="primary"
          @click="save"
          :loading="loading">保存
        </el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="MIFI 设备详情"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose">
      <el-form ref="form" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="设备号: ">
              {{crueentDeatail.imei}}
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="设备热点名称: ">
              <el-input disabled v-model="crueentDeatail.ssidName" placeholder="请输入设备热点名称" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="软件版本: ">
              {{crueentDeatail.swVersion}}
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="热点密码: ">
              <el-input disabled v-model="crueentDeatail.ssidPassword" placeholder="请输入设备热点密码" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="IMSI: ">
              {{crueentDeatail.imsi}}
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="ICCID: ">
              {{crueentDeatail.iccid}}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="设备型号: ">
              {{crueentDeatail.devModel}}
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="MAC地址: ">
              {{crueentDeatail.macAddr}}
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="型号强度: ">
              {{crueentDeatail.networkStrength}}
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="其他操作: ">
              <el-button type="primary" @click="restart">重启</el-button>
              <el-button type="primary" @click="returnPlay">恢复出厂设置</el-button>
              <br>
              <el-button style="margin-top: 10px" type="primary" @click="handleDHCP" :disabled="Object.keys(DHCPform)>1">DHCP设置</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="DHCP设置"
      :visible.sync="HDdialogVisible"
      width="70%"
      :before-close="DHhandleClose">
      <el-form ref="HDForm" label-width="180px" :model="DHCPform" :rules="HDrules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="IP地址: " prop="ipAddr">
              <el-input v-model="DHCPform.ipAddr" placeholder="输入IP地址" clearable></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="子网掩码: " prop="subnetMask">
              <el-input v-model="DHCPform.subnetMask" placeholder="请输入子网掩码" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="IP地址池开始地址: " prop="ipPoolBegin">
              <el-input v-model="DHCPform.ipPoolBegin" placeholder="输入IP地址池开始地址" clearable></el-input>
            </el-form-item>
          </el-col >
          <el-col :span="12">
            <el-form-item label="IP地址池结束地址: " prop="ipPoolEnd">
              <el-input v-model="DHCPform.ipPoolEnd" placeholder="请输入IP地址池结束地址" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="HDdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitDHCP">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  export default {
    data(){
      let validateName = (rule, value, callback) => {
        if(value && "..." === value){
          callback(new Error('请输入IP地址'))
        }if (value && !(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/).test(value)) {
          callback(new Error('IP地址不规范'))
        } else {
          callback()
        }
      }
      return {
        where: {

        },
        url: '/mf-facility/getWebFacility',
        columns: [
          {
            columnKey: 'selection',
            type: 'selection',
            width: 45,
            align: 'center',
            fixed: "left"
          },
          {
            prop: 'facilityStatus',
            label: '在线状态',
            align: 'center',
            showOverflowTooltip: true,
            formatter: (row, column, cellValue) => {
              console.log(row)
              if(row.facilityStatus == 1){
                return '在线'
              }else if(row.facilityStatus == 2){
                return '离线'
              }
            }
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
            prop: 'userId',
            label: '用户ID',
            showOverflowTooltip: true,
            minWidth: 200,
            align: 'center',
          },
          {
            prop: 'facilityName',
            label: '设备名称',
            sortable: 'custom',
            align: 'center',
            width: 150,
            resizable: false,
            slot: 'status',
          },
          {
            prop: 'facilityImei',
            label: '设备号',
            align: 'center',
            showOverflowTooltip: true,
            minWidth: 150
          },
          {
            prop: 'ssidName',
            label: 'Wi-Fi名称',
            sortable: 'custom',
            showOverflowTooltip: true,
            minWidth: 160,
            align: 'center',
          },
          {
            prop: 'ssidPwd',
            label: 'Wi-Fi密码',
            sortable: 'custom',
            showOverflowTooltip: true,
            minWidth: 160,
            align: 'center',
          },
          {
            columnKey: 'action',
            label: '操作',
            width: 150,
            align: 'center',
            resizable: false,
            slot: 'action',
            fixed: "right"
          }
        ],
        selection: [],
        // 当前编辑数据
        current: {},
        // 是否显示编辑弹窗
        showEdit: false,
        // 是否显示导入弹窗
        showImport: false,
        wifiOption:null,
        visible:false,
        form:{
          ssidPassword:'',
          ssidName:'',
          cmd:'',
          userId:'',
          id:'',
          facilityImei:''
        },
        rules:{
          ssidName:[
            {required: true, message: '请输入wifi名称', trigger: 'blur'}
          ],
          ssidPassword:[
            {required: true, message: '请输入wifi密码', trigger: 'blur'}
          ]
        },
        HDrules:{
          ipPoolBegin:[
            { required: true, message: '请输入IP地址池开始地址', trigger: 'blur' },
            {  message: '请输入正确IP地址池开始地址', trigger: 'blur',validator: validateName  },
          ],
          ipPoolEnd:[
            { required: true, message: '请输入IP地址池结束地址', trigger: 'blur' },
            {  message: '请输入正确IP地址池结束地址', trigger: 'blur',validator: validateName  },
          ],
        },
        loading:false,
        dialogVisible:false,//弹窗
        crueentDeatail:{},
        userId:'',
        facilityId:'',
        HDdialogVisible:false,
        DHCPform:{}
      }
    },
    computed: {
      ...mapGetters(["permission"]),
      wifiOptionName(){
        if(this.wifiOption === 1){
          return '修改wifi名称'
        }else if(this.wifiOption === 2){
          return '修改wifi密码'
        }else if(this.wifiOption === 3){
          return '自定义指令'
        }
      }
    },
    created() {
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
      /* 显示编辑 */
      openEdit(row) {
        this.current = row;
        this.showEdit = true;
      },
      /* 删除 */
      remove(row) {
        const loading = this.$loading({lock: true});
        this.$http.delete('/level/delete/' + [row.id]).then(res => {
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
      //操作
      action(row,option){
        const loading = this.$loading({lock: true});
        this.$http.post('/common/web/operationFacility',{
          facilityId:row.facilityId,
          operationType:option
        }).then(res => {
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
      updateVisible(){
        this.visible = false;
        this.form = {
          ssidPassword:'',
          ssidName:'',
          cmd:'',
          userId:'',
          id:'',
          facilityImei:''
        }
      },
      optionWifi(type,row){
        this.visible = true;
        this.wifiOption = type;
        this.current = row;
        for(let key in this.form){
         if(row[key]){
           this.form[key] = row[key]
         }
        }
        },
      save(){
        this.$refs['form'].validate((valid) => {
          if(valid){
            let operationType = this.wifiOption===3?'cmd':'wifi'
            this.loading = true;
            this.$http.post('/common/web/operationWebFacility',{
              facilityId:this.current.facilityId,
              operationType:operationType,
              data:this.form
            }).then(res => {
              this.loading = false
              if (res.data.code === 0) {
                this.visible = false;
                this.$message.success(res.data.msg);
                this.reload();
              } else {
                this.$message.error(res.data.msg);
              }
            }).catch(e => {
              this.loading = false
              this.$message.error(e.message);
            });
          }
        })
      },
      showDetail(row){
        debugger
        this.facilityId = row.id;
        this.userId = row.userId
        this.$http.post('/common/web/getFacilityInfo',{facilityId:row.id}).then(res => {
          if (res.data.code === 0) {
            let data = res.data.data||{}
            console.log('data1',data)
            this.crueentDeatail = {...this.crueentDeatail,...data}
          }
        })
        this.$http.post('/common/web/getDhcpInfo',{facilityId:row.id}).then(res => {
          if (res.data.code === 0) {
            let data = res.data.data||{}
            this.DHCPform = data;
            console.log('data2',data)
            this.crueentDeatail = {...this.crueentDeatail,...data}
          }
        })
        this.dialogVisible = true;
        console.log(row)
      },
      DHhandleClose(){
        this.HDdialogVisible = false
      },
      restart(){
        this.$confirm('此操作要重启设备，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('/common/web/operationFacility',{userId:this.userId,facilityId:this.facilityId,operationType:'reboot'}).then(res => {
            if (res.data.code === 0) {
              this.$message({
                type: 'success',
                message: '重启成功'
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重启'
          });
        });
      },
      returnPlay(){
        this.$confirm('此操作要恢复出厂设置此设备，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('/common/web/operationFacility',{userId:this.userId,facilityId:this.facilityId,operationType:'reset'}).then(res => {
            if (res.data.code === 0) {
              this.$message({
                type: 'success',
                message: '恢复出厂设置成功'
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消恢复出厂设置'
          });
        });
      },
      handleDHCP(){
        this.HDdialogVisible = true;
      },
      submitDHCP(){
        this.$refs['HDForm'].validate((valid) => {
          if (valid) {
            let obj = {
              userId:this.userId,
              facilityId:this.facilityId,
              operationType:'dhcp',
              data:{...this.DHCPform}
            }
            this.$http.post('/common/web/operationFacility',obj).then(res => {
              this.HDdialogVisible = false;
              if (res.data.code === 0) {
                this.$message({
                  type: 'success',
                  message: '设置DHCP成功'
                });
              }
            }).catch(err=>{
              this.HDdialogVisible = false;
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      handleClose(){
        this.dialogVisible = false
      },
    }
  }
</script>
