<template>
  <div>
    <el-card shadow="never" class="monitor-count-card">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="代理商" prop="agent">
              <el-select v-model="form.agent" placeholder="请选择">
                <el-option
                  v-for="item in agentList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="型号" prop="model">
              <el-select v-model="form.model" placeholder="请选择">
                <el-option
                  v-for="item in modelList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地区" prop="country">
              <el-select v-model="form.country" placeholder="请选择">
                <el-option
                  v-for="item in countryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="年份" prop="equipmentStatusYear">
              <el-select v-model="form.equipmentStatusYear" placeholder="请选择">
                <el-option
                  v-for="item in yearList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年份" prop="equipmentStatusMouth">
              <el-select v-model="form.equipmentStatusMouth" placeholder="请选择">
                <el-option
                  v-for="item in mouthList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-form ref="form2" :model="form2" label-width="80px">
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="代理商" prop="agent">
              <el-select v-model="form2.agent" placeholder="请选择">
                <el-option
                  v-for="item in agentList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="型号" prop="model">
              <el-select v-model="form2.model" placeholder="请选择">
                <el-option
                  v-for="item in modelList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地区" prop="country">
              <el-select v-model="form2.country" placeholder="请选择">
                <el-option
                  v-for="item in countryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        form:{
          agent:'1',//代理商
          model:'', //型号
          country:'',//国家
          province:'',//省份
          equipmentStatusYear:'',
          equipmentStatusMouth:'',
        },
        form2:{
          agent:'1',//代理商
          model:'', //型号
          country:'',//国家
          province:'',//省份
        },
        agentList:[
          {
            value:'1',
            label:'南京代理商'
          },
          {
            value:'2',
            label:'北京代理商'
          },
        ],
        modelList:[
          {
            value:'1',
            label:'型号一'
          },
          {
            value:'2',
            label:'型号二'
          },
        ],
        countryList:[
          {
            value:'1',
            label:'南京'
          },
          {
            value:'2',
            label:'北京'
          },
        ],
        yearList:[
          {
            value:'2020',
            label:'2020年'
          },
          {
            value:'2021',
            label:'2021年'
          },
          {
            value:'2022',
            label:'2022年'
          },
        ],
        mouthList:[
          {
            value:'1',
            label:'1月'
          },
          {
            value:'2',
            label:'2月'
          },
          {
            value:'3',
            label:'3月'
          },
          {
            value:'4',
            label:'4月'
          },
          {
            value:'5',
            label:'5月'
          },
          {
            value:'6',
            label:'6月'
          },
          {
            value:'7',
            label:'7月'
          },
          {
            value:'8',
            label:'8月'
          },
          {
            value:'9',
            label:'9月'
          },
          {
            value:'10',
            label:'10月'
          },
          {
            value:'11',
            label:'11月'
          },
          {
            value:'12',
            label:'12月'
          },
        ],
      }
    },
    created() {
    },
    methods:{

    }
  }
</script>
<style scoped>
  /* 统计卡片 */
  .monitor-count-card ::v-deep .el-card__body {
    padding-top: 18px;
    text-align: center;
    position: relative;
  }

  .monitor-count-card ::v-deep .el-tag {
    border-color: transparent;
    font-size: 15px;
  }

  .monitor-count-card .monitor-count-card-num {
    font-weight: 500;
    font-size: 32px;
    margin-top: 12px;
  }

  .monitor-count-card .monitor-count-card-text {
    font-size: 12px;
    margin: 10px 0;
  }

  .monitor-count-card .monitor-count-card-trend {
    font-weight: 600;
    padding: 6px 0;
  }

  .monitor-count-card .monitor-count-card-trend > i {
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
  }

  .monitor-count-card .monitor-count-card-tips {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  /* 当前在线人数卡片 */
  .monitor-online-num-card {
    text-align: center;
    padding: 5px 0;
  }

  .monitor-online-num-text {
    margin-bottom: 5px;
  }

  .monitor-online-num-title {
    font-size: 48px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1200px) {
    .monitor-online-num-card {
      padding: 42px 0;
    }
  }

  /* 笑脸、哭脸 */
  .monitor-face-smile,
  .monitor-face-cry {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-color: #FBD971;
    border-radius: 50%;
    position: relative;
  }

  .monitor-face-smile > span,
  .monitor-face-smile:before,
  .monitor-face-smile:after,
  .monitor-face-cry > span,
  .monitor-face-cry:before,
  .monitor-face-cry:after {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transform: rotate(225deg);
    border: 3px solid #F0C419;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    position: absolute;
    bottom: 8px;
    left: 11px;
  }

  .monitor-face-smile:before,
  .monitor-face-smile:after,
  .monitor-face-cry:before,
  .monitor-face-cry:after {
    content: "";
    width: 6px;
    height: 6px;
    left: 8px;
    top: 14px;
    border-color: #F29C1F;
    transform: rotate(45deg);
  }

  .monitor-face-smile:after,
  .monitor-face-cry:after {
    left: auto;
    right: 8px;
  }

  .monitor-face-cry > span {
    transform: rotate(45deg);
    bottom: -6px;
  }

  /* 圆形进度条组合 */
  .monitor-progress-group {
    position: relative;
    display: inline-block;
  }

  .monitor-progress-group .el-progress:not(:first-child) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -1px;
  }

  .monitor-progress-legends > div + div {
    margin-top: 8px;
  }

</style>
