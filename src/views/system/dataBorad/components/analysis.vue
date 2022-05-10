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
            <el-form-item label="国家" prop="country">
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
            <el-form-item label="省份" prop="province">
              <el-select v-model="form.province" placeholder="请选择">
                <el-option
                  v-for="item in provinceList"
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
    <el-row :gutter="15">
      <el-col :span="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" class="ele-tag-round">
            <i class="el-icon-s-custom"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.facilityTotalNum||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">在线总量</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="warning" class="ele-tag-round">
            <i class="el-icon-_sent"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.facilityTotalNuYear||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">在线总量（同比）</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="danger" class="ele-tag-round">
            <i class="el-icon-s-flag"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.facilityTotalNuMonth||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">在线总量（环比）</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :lg="16">
        <el-card shadow="never" header="在线设备分布统计">
          <el-row>
            <el-col :sm="18">
              <ele-chart
                ref="analysisUserCountMapChart"
                style="height: 438px;"
                :option="userCountMapOption"/>
            </el-col>
            <el-col :sm="6">
              <ele-chart
                ref="analysisUserCountChart"
                style="height: 438px;"
                :option="userCountChartOption"/>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :lg="8">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never" header="在线设备类型统计">
              <div class="ele-cell ele-cell-align-bottom" style="height: 438px" id="analysisEquipmentTrend">

              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>

    </el-row>
    <el-row :gutter="15">
      <el-col :lg="16">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never">
              <div slot="header" class="cardTitle">
                <span>去年设备数年度统计</span>
                <div>
                  <el-form ref="selectYear" :model="selectForm" label-width="80px" >
                    <el-form-item label="年份" prop="equipmentStatusYear">
                      <el-select v-model="selectForm.equipmentStatusYear" placeholder="请选择" @change="changeEquipmentStatusYear">
                        <el-option
                          v-for="item in yearList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="ele-cell ele-cell-align-bottom" style="height: 300px" id="equipmentTotal">

              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="8">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never" header="全部设备状态统计">
              <div slot="header" style="height: 36px"  class="cardTitle">
                <span>全部设备状态统计</span>
              </div>
              <div class="ele-cell ele-cell-align-bottom" style="height: 300px" id="equipmentStatus">

              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="15">

      <el-col :lg="16">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never" header="在线设备月度统计">
              <div slot="header" style="height: 36px"  class="cardTitle">
                <span>在线设备月度统计</span>
              </div>
              <div class="ele-cell ele-cell-align-bottom" style="height: 300px" id="equipmentMouth">

              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="8">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never">
              <div slot="header" class="cardTitle">
                <span>去年设备数趋势预测</span>
                <div>
                  <el-form ref="selectYear" :model="selectForm" label-width="80px" >
                    <el-form-item label="年份" prop="equipmentForecastYear">
                      <el-select v-model="selectForm.equipmentForecastYear" placeholder="请选择">
                        <el-option
                          v-for="item in yearList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="ele-cell ele-cell-align-bottom" style="height: 300px" id="equipmentForecast">

              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  import VueCountUp from 'vue-countup-v2';
  import EleChart from 'ele-admin/packages/ele-chart';
  import {points} from '../../../dashboard/res'
  export default {
    components:{EleChart, VueCountUp},
    data(){
      return{
        form:{
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
            label:'中国'
          },
          {
            value:'2',
            label:'美国'
          },
        ],
        provinceList:[
          {
            value:'1',
            label:'安徽省'
          },
          {
            value:'2',
            label:'江苏省'
          },
        ],
        facilityData:{
          facilityTotalNum:123123,
          facilityTotalNuYear:12321312,
          facilityTotalNuMonth:123213
        },
        // 中国地图轮廓数据
        chinaMapData: null,
        // 用户分布数据
        userCountData: [],
        points,
        selectYear:'',
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
        selectForm:{
          equipmentStatusYear:'2022',
          equipmentForecastYear:'2022'
        }
      }
    },
    computed:{
      userCountMapOption() {
        if (!this.chinaMapData) {
          return {};
        }
        let data = this.userCountData.map(d => d.value).sort((a, b) => (a - b));
        return {
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            min: data[data.length - 1] || 0,
            max: data[0] || 0,
            text: ['高', '低'],
            calculable: true,
            color: ['#1890FF', '#EBF3FF']
          },
          series: [
            {
              name: '用户数',
              type: 'map',
              map: 'china',
              label: {
                show: true
              },
              data: this.userCountData
            }
          ]
        };
      },
      // 用户分布柱状图配置
      userCountChartOption() {
        let data = this.userCountData
          .filter(d => d.value > 0)
          .sort((a, b) => {
            return a.value - b.value;
          });
        return {
          tooltip: {
            trigger: 'axis',
            formatter: '<i class="ele-chart-dot" style="background: #3aa1ff;"></i>{b0}: {c0}'
          },
          grid: {
            top: 0,
            bottom: 0,
            left: 50,
            right: 0
          },
          yAxis: [
            {
              type: 'category',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              data: data.map(d => d.name)
            }
          ],
          xAxis: [
            {
              show: false,
              type: 'value',
              splitLine: {
                show: false
              }
            }
          ],
          series: [
            {
              type: 'bar',
              data: data.map(d => d.value)
            }
          ]
        };
      },
    },
    created() {

    },
    mounted() {
      let self = this;
      setTimeout(()=>{
        this.getData(this.form);
        this.getFacilityYearMonth({year:this.selectForm.equipmentStatusYear});
        this.getEquipmentForecast({year:this.selectForm.equipmentForecastYear});
        self.getChinaMapData();
        self.getUserCountData();
        self.$refs['analysisUserCountMapChart']&&self.$refs['analysisUserCountMapChart'].resize();
        self.$refs['analysisUserCountChart']&&self.$refs['analysisUserCountChart'].resize();
      },500)
    },
    methods:{
      getEquipmentForecast(params){
        this.$http.get('/mf-facility/getEquipmentForecas', {params}).then(res=>{
          console.log(res)
          let data = res.data.data||{}
          this.initequipmentForecast({
            xList:data.xList,
            yList:data.yList
          });
        })
      },
      changeEquipmentStatusYear(){
        this.getFacilityYearMonth({year:this.selectForm.equipmentStatusYear});
      },
      getFacilityYearMonth(params){
        this.$http.get('/mf-facility/getFacilityYearMonth', {params}).then(res=>{
          console.log(res)
          let data = res.data.data||{}
          this.initequipmentTotal({
            yearX:data.monthX,
            yearY:data.monthY
          });
          this.initequipmentMouth({
            monthX:['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号','11号','12号','13号','14号','15号','16号','17号','18号',],
            monthY:[100,200,300,400,500,600,100,700,800,900,1000,1100,1200,1300,1400,1500,1600]
          });
        })
      },
      getFacilityYearMonthClick(params){
        this.$http.get('/mf-facility/getFacilityYearMonth', {params}).then(res=>{
          console.log(res)
          let data = res.data.data||{}
          this.initequipmentMouth({
            monthX:['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号','11号','12号','13号','14号','15号','16号','17号','18号',],
            monthY:[100,200,300,400,500,600,100,700,800,900,1000,1100,1200,1300,1400,1500,1600]
          });
        })
      },
      getData(params={}){
        this.$http.get('/mf-facility/getFacilityDataBoard', {params}).then(res=>{
          console.log(res)
          this.facilityData = res.data.data||{}
          this.facilityData.facilityTotalNuYear= this.facilityData.facilityTotalNum;
          this.facilityData.facilityTotalNuMonth= this.facilityData.facilityTotalNum;
          this.initanalysisEquipmentTrend(this.facilityData.mfFacilityType);
          this.initequipmentStatus(this.facilityData.facilityStatus);
        })
      },
      /* 获取中国地图数据并注册地图 */
      getChinaMapData() {
        EleChart.registerMap('china', this.points);
        this.chinaMapData = this.points;
        // this.$http.get('../../../public/china.geo.json').then(res => {
        //
        // }).catch(e => {
        //   this.$message.error(e.message);
        // });
      },
      /* 获取用户分布数据 */
      getUserCountData() {
        // this.$http.get('/mf-facility/getFacilityMap', {}).then(res=>{
        //   console.log(res)
        //   debugger
        //   this.userCountData = res.data.data||[]
        // })
        this.userCountData = [
        //   {name: "贵州", value: 570},
        //   {name: "云南", value: 8890},
        //   {name: "重庆", value: 10010},
        //   {name: "吉林", value: 5056},
        //   {name: "山西", value: 2123},
        //   {name: "天津", value: 9130},
        //   {name: "江西", value: 10170},
        //   {name: "广西", value: 6172},
        //   {name: "陕西", value: 9251},
        //   {name: "黑龙江", value: 5125},
        //   {name: "安徽", value: 9530},
        //   {name: "北京", value: 51919},
        //   {name: "福建", value: 3756},
        //   {name: "上海", value: 59190},
        //   {name: "湖北", value: 37109},
        //   {name: "湖南", value: 8966},
        //   {name: "四川", value: 31020},
        //   {name: "辽宁", value: 7222},
        //   {name: "河北", value: 3451},
        //   {name: "河南", value: 9693},
        //   {name: "浙江", value: 62310},
          {name: "山东", value: 39231},
           {name: "江苏", value: 35911},
        //   {name: "广东", value: 55891}
         ];
      },
      initanalysisEquipmentTrend(data){
        this.drawanalysisEquipmentTrend(data)
      },
      drawanalysisEquipmentTrend(data){
        if(Object.keys(data).length>0){
          let dataList = [];
          for(let key in data){
            dataList.push({
              name:key,
              value:data[key]
            })
          }
          var chartDom = document.getElementById('analysisEquipmentTrend');
          var myChart = echarts.init(chartDom);
          let option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'right',
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: dataList,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          myChart.setOption(option)
        }
      },
      initequipmentTotal(data){
        this.drawequipmentTotal(data)
      },
      drawequipmentTotal(data){
        var chartDom = document.getElementById('equipmentTotal');
        var myChart = echarts.init(chartDom);
        let option = {
          xAxis: {
            type: 'category',
            data: data.yearX||[]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: data.yearY||[],
              type: 'bar'
            }
          ]
        };
        myChart.setOption(option)
        let self = this;
        myChart.on('click', function(params) {
          console.log(params)
          let obj = {
            month:params.name
          }
          self.getFacilityYearMonthClick(obj)
        });
      },
      initequipmentStatus(data){
        this.draweequipmentStatus(data)
      },
      draweequipmentStatus(data){
        if(Object.keys(data).length>0){
          let dataList = [];
          for(let key in data){
            dataList.push({
              name:key,
              value:data[key]
            })
          }
          var chartDom = document.getElementById('equipmentStatus');
          var myChart = echarts.init(chartDom);
          let option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              left: 'right'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data:dataList
              }
            ]
          };
          myChart.setOption(option)
        }

      },
      initequipmentMouth(data){
        this.drawequipmentMouth(data)
      },
      drawequipmentMouth(data){
        var chartDom = document.getElementById('equipmentMouth');
        var myChart = echarts.init(chartDom);
        let option =  {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['设备数']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: data.monthX||[]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '设备数',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data:data.monthY
            },
          ]
        };
        myChart.setOption(option)
      },
      initequipmentForecast(data){
        this.drawequipmentForecast(data)
      },
      drawequipmentForecast(data){
        var chartDom = document.getElementById('equipmentForecast');
        var myChart = echarts.init(chartDom);
        let option =   {
          xAxis: {
            type: 'category',
            data: data.xList||[],
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: data.yList||[],
              type: 'line'
            }
          ]
        };
        myChart.setOption(option)
      },
    },
    activated() {
      // ['analysisUserCountMapChart', 'analysisUserCountChart'].forEach((name) => {
      //   this.$refs[name].resize();
      // });
    },
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
  .cardTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /deep/ .el-form-item{
    margin-bottom: 0;
  }
</style>
