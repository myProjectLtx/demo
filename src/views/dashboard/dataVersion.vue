<template>
  <div class="ele-body ele-body-card">
    <!-- 顶部统计卡片 -->
    <el-row :gutter="15">
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" class="ele-tag-round">
            <i class="el-icon-s-custom"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.facilityTotalNum||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">设备总量</div>
        </el-card>
      </el-col>
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="warning" class="ele-tag-round">
            <i class="el-icon-_sent"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.onLine||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">在线数</div>
        </el-card>
      </el-col>
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="danger" class="ele-tag-round">
            <i class="el-icon-s-flag"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.offLine||0}}</div>
          <div class="monitor-count-card-text ele-text-secondary">离线数</div>
        </el-card>
      </el-col>
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="success" class="ele-tag-round">
            <i class="el-icon-_flash-solid"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.users||0}}</div>
          <div class="monitor-count-card-text">活跃用户数</div>
        </el-card>
      </el-col>
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="info" class="ele-tag-round">
            <i class="el-icon-_flash-solid"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.facilityType||0}}</div>
          <div class="monitor-count-card-text">产品总类</div>
        </el-card>
      </el-col>
      <el-col :md="4" :sm="8">
        <el-card shadow="never" class="monitor-count-card">
          <el-tag size="large" type="danger" class="ele-tag-round">
            <i class="el-icon-_flash-solid"></i>
          </el-tag>
          <div class="monitor-count-card-num">{{facilityData.flow?`${facilityData.flow}G`:0}}</div>
          <div class="monitor-count-card-text">流量数</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :lg="8">
        <el-card shadow="never" header="设备状态">
          <div class="ele-cell ele-cell-align-bottom" style="height: 214px" id="equipmentZhuangtai">

          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :md="12">
        <el-card shadow="never" header="用户活跃度">
          <div class="ele-cell" style="padding: 34px 0;justify-content: center;">
            <div class="monitor-progress-group">
              <el-progress
                type="circle"
                :percentage="facilityData.userStatus?facilityData.userStatus['活跃率']:0"
                status="success"
                :show-text="false"
                :width="140"/>
              <el-progress
                type="circle"
                :percentage="facilityData.userStatus?facilityData.userStatus['留存率']:0"
                :show-text="false"
                :width="115"
                :stroke-width="5"/>
              <el-progress
                type="circle"
                :percentage="facilityData.userStatus?facilityData.userStatus['跳出率']:0"
                status="exception"
                :show-text="false"
                :width="90"
                :stroke-width="4"/>
            </div>
            <div class="monitor-progress-legends" style="padding-left: 12px;">
              <div class="ele-text-small">
                <ele-dot :ripple="false" :text="`活跃率: ${facilityData.userStatus?facilityData.userStatus['活跃率']:0}%`"/>
              </div>
              <div class="ele-text-small">
                <ele-dot type="success" :ripple="false" :text="`留存率: ${facilityData.userStatus?facilityData.userStatus['留存率']:0}%`"/>
              </div>
              <div class="ele-text-small">
                <ele-dot type="danger" :ripple="false" :text="`跳出率: ${facilityData.userStatus?facilityData.userStatus['跳出率']:0}%`"/>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :md="12">
        <el-card shadow="never" header="设备类型">
          <div class="ele-cell" style="height: 214px" id="equipmentTongBi">

          </div>
        </el-card>
      </el-col>

    </el-row>
    <!-- 用户分布、浏览器分布 -->
    <el-row :gutter="15">
      <el-col :lg="18">
        <el-card shadow="never" header="用户分布">
          <el-row>
            <el-col :sm="18">
              <ele-chart
                ref="userCountMapChart"
                style="height: 438px;"
                :option="userCountMapOption"/>
            </el-col>
            <el-col :sm="6">
              <ele-chart
                ref="userCountChart"
                style="height: 438px;"
                :option="userCountChartOption"/>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :lg="6">
        <el-row :gutter="15">
          <el-col :lg="24">
            <el-card shadow="never" header="设备趋势预测">
              <div class="ele-cell ele-cell-align-bottom" style="height: 438px" id="equipmentTrend">

              </div>
            </el-card>
          </el-col>
<!--          <el-col :lg="24" :md="12" :sm="24">-->
<!--            <el-card shadow="never" header="在线人数">-->
<!--              <div class="monitor-online-num-card">-->
<!--                <div class="monitor-online-num-text">{{ currentTime }}</div>-->
<!--                <div class="monitor-online-num-title">-->
<!--                  <vue-count-up-->
<!--                    :end-val="228"-->
<!--                    @ready="(ins) => { onlineNumAnimIns = ins; }"/>-->
<!--                </div>-->
<!--                <div class="monitor-online-num-text">在线总人数</div>-->
<!--                <ele-dot :text="updateTimeText"/>-->
<!--              </div>-->
<!--            </el-card>-->
<!--          </el-col>-->
<!--          <el-col :lg="24" :md="12" :sm="24">-->
<!--            <el-card-->
<!--              shadow="never"-->
<!--              header="浏览器分布"-->
<!--              body-style="padding: 0 10px;">-->
<!--              <ele-chart-->
<!--                ref="browserChart"-->
<!--                style="height: 240px;"-->
<!--                :option="browserChartOption"/>-->
<!--            </el-card>-->
<!--          </el-col>-->
        </el-row>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import VueCountUp from 'vue-countup-v2';
  import EleChart from 'ele-admin/packages/ele-chart';
  import {points} from './res'
  export default {
    name: 'DashboardMonitor',
    components: {VueCountUp, EleChart},
    data() {
      return {
        // 访问人数
        visitUsers: [
          {
            name: '用户1',
            avatar: require('@/assets/logo.png')
          },
          {
            name: '用户2',
            avatar: require('@/assets/logo.png')
          },
          {
            name: '用户3',
            avatar: require('@/assets/logo.png')
          },
          {
            name: '用户3',
            avatar: require('@/assets/logo.png')
          },
          {
            name: '用户4',
            avatar: require('@/assets/logo.png')
          },
          {
            name: '管理员',
            avatar: require('@/assets/logo.png')
          }
        ],
        // 在线总人数倒计时
        updateTime: 5,
        // 中国地图轮廓数据
        chinaMapData: null,
        // 用户分布数据
        userCountData: [],
        // 当前时间
        currentTime: '20:58:22',
        // 在线人数动画数字组件实例
        onlineNumAnimIns: null,
        // 在线人数更新定时器
        onlineNumTimer: null,
        // 浏览器分布环形图数据
        browserCountData: [],
        // 用户评分
        userRate: 4.5,
        points,
        facilityData:{},
      };
    },
    computed: {
      // 在线人数倒计时文字
      updateTimeText() {
        return this.updateTime + ' 秒后更新';
      },
      // 用户分布地图配置
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
      // 浏览器分布饼图配置
      browserChartOption() {
        return {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            data: this.browserCountData.map(d => d.name),
            bottom: 5,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'circle'
          },
          series: [
            {
              type: 'pie',
              radius: ['45%', '70%'],
              center: ['50%', '43%'],
              label: {
                show: false
              },
              data: this.browserCountData
            }
          ]
        };
      }
    },
    mounted() {
      this.doUpdateOnlineNum();
      this.getChinaMapData();
      this.getUserCountData();
      this.getBrowserCountData();
      this.getEquipmentForecast();//设备预测
      this.getFacilityDataBoard();
    },
    methods: {
      getEquipmentForecast(params={}){
        this.$http.get('/mf-facility/getEquipmentForecas', params).then(res=>{
          console.log(res)
          let data = res.data.data||{}
          this.initEquipmentTrend({
            xList:data.xList,
            yList:data.yList
          });
        })
        //this.initEquipmentTrend();
      },
      getFacilityDataBoard(){
        this.$http.get('/mf-facility/getFacilityDataBoard', {}).then(res=>{
            console.log(res)
            this.facilityData = res.data.data||{}
            this.initEquipmentZhuangtai(this.facilityData.facilityStatus);
            this.initEquipmentTongBi(this.facilityData.mfFacilityType);
        })
      },
      /* 在线人数更新倒计时 */
      doUpdateOnlineNum() {
        this.currentTime = this.$util.toDateString(new Date(), 'HH:mm:ss');
        this.onlineNumTimer = setInterval(() => {
          this.currentTime = this.$util.toDateString(new Date(), 'HH:mm:ss');
          if (this.updateTime === 1) {
            this.updateTime = 5;
            if (this.onlineNumAnimIns) {
              this.onlineNumAnimIns.update(100 + Math.round(Math.random() * 900));
            }
          } else {
            this.updateTime--;
          }
        }, 1000);
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
        this.$http.get('/mf-facility/getFacilityMap', {}).then(res=>{
          console.log(res)
          this.userCountData = res.data.data||[]
        })
        //this.userCountData = [
          // {name: "贵州", value: 570},
          // {name: "云南", value: 8890},
          // {name: "重庆", value: 10010},
          // {name: "吉林", value: 5056},
          // {name: "山西", value: 2123},
          // {name: "天津", value: 9130},
          // {name: "江西", value: 10170},
          // {name: "广西", value: 6172},
          // {name: "陕西", value: 9251},
          // {name: "黑龙江", value: 5125},
          // {name: "安徽", value: 9530},
          // {name: "北京", value: 51919},
          // {name: "福建", value: 3756},
          // {name: "上海", value: 59190},
          // {name: "湖北", value: 37109},
          // {name: "湖南", value: 8966},
          // {name: "四川", value: 31020},
          // {name: "辽宁", value: 7222},
          // {name: "河北", value: 3451},
          // {name: "河南", value: 9693},
          // {name: "浙江", value: 62310},
          // {name: "山东", value: 39231},
          //{name: "江苏", value: 35911},
          //{name: "广东", value: 55891}
        //];
      },
      /* 获取用户浏览器分布数据 */
      getBrowserCountData() {
        this.browserCountData = [
          {name: 'Chrome', value: 9052},
          {name: 'Safari', value: 535},
          {name: 'Firefox', value: 1610},
          {name: 'Edge', value: 2800},
          {name: 'IE', value: 3200},
          {name: 'Other', value: 1700}
        ];
      },
      //获取设备趋势数据
      initEquipmentTrend(data){
        this.drawEquipmentTrend(data)
      },
      drawEquipmentTrend(data){
        var chartDom = document.getElementById('equipmentTrend');
        var myChart = echarts.init(chartDom);
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {},
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data:data.xList||[],
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} 台'
            }
          },
          series: [
            {
              name: 'Highest',
              type: 'line',
              data: data.yList||[],
              // markPoint: {
              //   data: [
              //     { type: 'max', name: 'Max' },
              //     { type: 'min', name: 'Min' }
              //   ]
              // },
              // markLine: {
              //   data: [{ type: 'average', name: 'Avg' }]
              // }
            },
          ]
        };
        myChart.setOption(option)
      },
      initEquipmentTongBi(data){
        this.drawEquipmentTongBi(data);
      },
      drawEquipmentTongBi(data){
        let showData = [];
        for(let key in data){
          showData.push({name:key,value:data[key]})
        }
        var chartDom = document.getElementById('equipmentTongBi');
        var myChart = echarts.init(chartDom);
        const colors = ['#5470C6', '#91CC75', '#EE6666'];
        let option =  {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: showData,
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
      },
      initEquipmentZhuangtai(data){
        this.drawEquipmentZhuangtai(data);
      },
      drawEquipmentZhuangtai(data){
        var chartDom = document.getElementById('equipmentZhuangtai');
        var myChart = echarts.init(chartDom);
        let option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
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
              data: [
                { value: data['离线'], name: '离线' },
                { value: data['在线'], name: '在线' },
                { value: data['未激活'], name: '未激活' },
              ]
            }
          ]
        };
        option && myChart.setOption(option);
      }
    },
    activated() {
      ['userCountMapChart', 'userCountChart'].forEach((name) => {
        this.$refs[name].resize();
      });
    },
    beforeDestroy() {
      // 销毁定时器
      if (this.onlineNumTimer) {
        clearInterval(this.onlineNumTimer);
      }
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
