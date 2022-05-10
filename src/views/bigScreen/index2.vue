<template>
  <div class="main">
    <div class="bigHeader">
      <img class="bigHeaderContentImg" src="../../assets/bigSreen/top.png" alt="">
      <div class="bigHeaderLeft">
        <div class="bigHeaderLeftContent1">

        </div>
        <div class="bigHeaderLeftContent1Time">
          <span style="font-size: 15px;color: #FFFFFF;">2021-02-04 周四</span>
          <span style="font-size: 22px;color: #66FFFF;margin-left: 15px">12:30:00</span>
        </div>
      </div>
      <div class="bigHeaderContent">

        <div style="margin-top: -20px">
          <span class="bigHeaderContentSpan">信丰伟业移动终端中华区可视化系统</span>
        </div>
      </div>
      <div class="bigHeaderRight">
        <div class="bigHeaderLeftContent1">

        </div>
        <div class="bigHeaderLeftContent1Time" style="justify-content: left">
          <span style="font-size: 15px;color: #FFFFFF;">天气</span>
          <span style="font-size: 22px;color: #66FFFF;margin-left: 15px">晴</span>
        </div>
      </div>
    </div>
    <div class="bigContent">
      <div class="bigContentLeft">
        <div class="bigContentLeftContent1" style="height:260px">
          <img class="bigContentLeftImg" src="../../assets/bigSreen/contentLeft.png" alt="">
          <div class="bigContentLeftContent1Title">
            <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
            <span style="margin-left: 8px">今日在线</span>
          </div>
          <div class="bigContentLeftContent1TitleNumber">
            {{toDayCheckTotal}}
          </div>
          <div id="toDayCheck">

          </div>
        </div>

          <div class="left1 bigContentLeftContent2">
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">最近日活/月活</span>
            </div>
            <div class="left1Content">
              <div class="left1ContentDay">
                <div class="left1ContentDayDiv1" style="height: 24px">
                 <span class="left1ContentDaySpan1">
                    {{offLineData.latestDayCount}}
                 </span>
                </div>
                <div class="left1ContentDayDiv1" style="margin-top: 4px;height: 14px">
                  <span class="left1ContentDaySpan1" style="font-size: 14px">最近日活</span>
                </div>
                <div style="margin-top: 9px" class="left1ContentDayDiv2">
                  <div class="left1ContentDayDiv2Content">
                    <p>{{offLineData.dayOfYearHighestCount}}</p>
                    <p class="marginR5">本年最高日活</p>
                  </div>
                  <div class="fenge">

                  </div>
                  <div class="left1ContentDayDiv2Content">
                    <p>{{offLineData.hisDayHighestCount}}</p>
                    <p class="marginL5">历史最高日活</p>
                  </div>
                </div>
              </div>
              <div class="left1ContentMonth">
                <div class="left1ContentDayDiv1" style="height: 24px">
                 <span class="left1ContentDaySpan1" style="color: #00FFF5;">
                   {{offLineData.latestMonthCount}}
                 </span>
                </div>
                <div class="left1ContentDayDiv1" style="margin-top: 4px;height: 14px">
                  <span class="left1ContentDaySpan1" style="font-size: 14px;color: #00FFF5">最近月活</span>
                </div>
                <div style="margin-top: 9px" class="left1ContentDayDiv2">
                  <div class="left1ContentDayDiv2Content">
                    <p> {{offLineData.monthHighestCount}}</p>
                    <p class="marginR5">本年最高月活</p>
                  </div>
                  <div class="fenge">

                  </div>
                  <div class="left1ContentDayDiv2Content">
                    <p>{{offLineData.hisMonthHighestCount}}</p>
                    <p class="marginL5">历史最高月活</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left2 bigContentLeftContent2">
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">活跃度年度统计</span>
            </div>
            <div id="monthMax" style="height: 77%"></div>
          </div>
          <div class="left3 bigContentLeftContent2" >
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">活跃度区域分布TOP5</span>
            </div>
            <div id="monthMaxCountries" style="height: 224px"></div>
          </div>
        
      </div>
      <div class="bigContentCenter">
        <div class="bigContentCenterHeader">
          <img src="../../assets/bigSreen/centerHeader.png" alt="" class="bigContentCenterHeaderImg">
          <img src="../../assets/bigSreen/loading.png" alt="" class="bigContentCenterHeaderImgLoading" >
          <div class="bigContentCenterHeaderCount">
            <div class="bigContentCenterHeaderCountLeft">
              <img src="../../assets/bigSreen/centerHeaderLeft.png" alt="" width="100%" height="40px">
              <span class="bigContentCenterHeaderCountSpan" style="left: 218px">设备总数</span>
              <div style="margin-top: 0px" class="bigContentCenterHeaderCountBottom">
                <div v-for="(item,index) in totalCount" :key="index" class="bigContentCenterHeaderCountBottomItem">
                  {{item}}
                </div>
              </div>
            </div>
            <div class="bigContentCenterHeaderCountRight">
              <img src="../../assets/bigSreen/centerHeaderRight.png" alt="" width="100%" height="40px">
              <span class="bigContentCenterHeaderCountSpan" style="left: 104px">实时在线设备总数</span>
              <div style="margin-top: 0px" class="bigContentCenterHeaderCountBottom">
                <div v-for="(item,index) in onlineCount" :key="index" class="bigContentCenterHeaderCountBottomItem" style="color: #00FFF4 ">
                  {{item}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bigContentCenterContent">
          <img src="../../assets/bigSreen/centerContent.png" alt="" class="bigContentCenterContentImg">
<!--          <div class="bigContentLeftContent1Title" style="margin: 0 !important;top: 20px;left: 13px">-->
<!--            <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">-->
<!--            <span style="margin-left: 8px">实时展示</span>-->
<!--          </div>-->
          <div id="map"></div>
        </div>
      </div>
      <div class="bigContentRight">
        <div class="bigContentLeftContent1" style="height: 195px">
          <img class="bigContentLeftImg" src="../../assets/bigSreen/contentLeft.png" alt="">
          <div class="bigContentLeftContent1Title">
            <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
            <span style="margin-left: 8px">今日激活</span>
          </div>
          <div class="bigContentLeftContent1TitleNumber">
            {{activatedCount.historyCount}}
          </div>
          <div class="bigContentLeftContent1Main">
            <div class="bigContentLeftContent1MainItem">
              <span class="bigContentLeftContent1MainSpan">昨日激活</span><el-progress style="width: 80%;margin-left: 5px" :text-inside="true" :stroke-width="20" :percentage="mathPricent('todayCount')" status="success" :format="format"></el-progress>
            </div>
            <div class="bigContentLeftContent1MainItem">
              <span class="bigContentLeftContent1MainSpan">本月激活</span><el-progress style="width: 80%;margin-left: 5px" :text-inside="true" :stroke-width="20" :percentage="mathPricent('monthCount')" :format="format2"></el-progress>
            </div>
            <div class="bigContentLeftContent1MainItem">
              <span class="bigContentLeftContent1MainSpan">历史最高</span><el-progress style="width: 80%;margin-left: 5px" :text-inside="true" :stroke-width="20" :percentage="mathPricent('historyCount')" status="warning" :format="format3"></el-progress>
            </div>
          </div>
        </div>
        <div class="bigContentLeftContent2" style="height: 252px;margin-top: 11px">
          <div>
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">激活量年度统计</span>

            </div>
          </div>
          <div id="monthNewCount">

          </div>
        </div>
        <div class="bigContentLeftContent2" style="height: 189px;margin-top: 11px">
          <div>
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">设备区域分布TOP5</span>
            </div>
          </div>
          <div class="facilityCountryRatio">
            <div v-for="item in facilityCountryRatioList">
              <div>
                <img :src="item.img" alt="" class="facilityCountryRatioImg">
              </div>
              <div class="facilityCountryRatioContent">
                <p>{{item.country}}</p>
                <p style="font-size: 10px;margin-top: 5px">{{item.ratio}}%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bigContentLeftContent2" style="height: 258px;margin-top: 11px">
          <div>
            <div class="bigContentLeftContent1Title">
              <img src="../../assets/bigSreen/greenIcon.png" alt="" class="iocn">
              <span style="margin-left: 8px">设备型号分布TOP5</span>
            </div>
          </div>
          <div id="facilityTypeRatio">

          </div>
        </div>
      </div>
      <div class="version">
        <span>MTVS_V1.0.0.20220510</span>
      </div>
    </div>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  import {getTodayOnlineTrend,
    getOffLineData, getTop5Country, getTotalCount,
    getMonthNewCount, getFacilityCountryRatio, getFacilityTypeRatio, getActivatedCount, equipmentMap} from './api'
  import ratio1 from '../../assets/bigSreen/ratio1.png'
  import ratio2 from '../../assets/bigSreen/ratio2.png'
  import ratio3 from '../../assets/bigSreen/ratio3.png'
  import ratio4 from '../../assets/bigSreen/ratio4.png'
  import ratio5 from '../../assets/bigSreen/ratio5.png'
  import "echarts/map/js/china.js"; // 引入中国地图数据
  import 'echarts/map/js/world.js'
  import 'echarts-gl'
  import img from '../../assets/bigSreen/8.png'
  import img8 from '../../../public/img/8.png'
  export default {
    data(){
      return{
        totalCount:'',//设备总数
        onlineCount:'',//设备在线总数
        offLineData:{},//在线量非实时区域数据
        facilityCountryRatioList:[],//设备分布
        ratioList:[ratio1,ratio2,ratio3,ratio4,ratio5],
        img,
        //激活数检测
        activatedCount:{
          "todayCount": 420,
          "yesterdayCount": 650,
          "monthCount": 180000,
          "historyCount": 1020
        },
        img8,
        toDayCheckTotal:0,//今日在线检测总量
      }
    },
    created() {
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){
        this.initToDayCheck();
        this.initMonthMax();
        this.initMonthMaxCountries();
        this.getTotalCount();
        this.getMonthNewCount();
        this.getFacilityCountryRatio();
        this.getFacilityTypeRatio();
        this.equipmentMap();
        //this.initMap();
        this.getActivatedCount();
        setInterval(()=>{
          this.initToDayCheck();
          this.initMonthMax();
          this.initMonthMaxCountries();
          this.getTotalCount();
          this.getMonthNewCount();
          this.getFacilityCountryRatio();
          this.getFacilityTypeRatio();
          this.equipmentMap();
          //this.initMap();
          this.getActivatedCount();
        },5000)
      },
      forMatNumber(val = ''){
        if(val.length<8){
          let bu = 8-val.length;
          for(let i = 0;i<bu;i++){
            val = '0' +val
          }
        }
        return val
      },
      //获取设别总数
      getTotalCount(){
        getTotalCount(this,{
          areaType:1
        }).then(res=>{
          let data = res.data.data
          this.totalCount = data?.totalCount? this.forMatNumber(data?.totalCount.toString()):'';
          this.onlineCount = data?.onlineCount?this.forMatNumber(data?.onlineCount.toString()):''
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": {
        //     "totalCount": 150000,
        //     "onlineCount": 1200
        //   },
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.totalCount = res.data.totalCount.toString();
        // this.onlineCount = res.data.onlineCount.toString()
      },
      //获取今日在线量检测
      initToDayCheck(){
        getTodayOnlineTrend(this,{
          areaType:1
        }).then(res=>{
          console.log(res)
          let data = res.data.data||{};
          this.drawToDayCheck(data)
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": {
        //     "historyHighestCount": 1000,
        //     "monthHighestCount": 400,
        //     "yesterDayHighestCount": 580,
        //     "map": [
        //       {
        //         "xTime": "08:00",
        //         "yCount": 1000,
        //       },
        //       {
        //         "xTime": "09:00",
        //         "yCount": 500,
        //       },
        //       {
        //         "xTime": "10:00",
        //         "yCount": 300,
        //       }
        //     ]
        //   },
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.drawToDayCheck(res.data)
      },
      //画图表今日在线量检测
      drawToDayCheck(data){
        var chart1 = echarts.init(document.getElementById('toDayCheck'))
        if(!data.map || (!data.map.length)){
          return
        }
        let toDayCheckTotal = 0
        let yCount = data.map.map(item=>{
          toDayCheckTotal += item.y
          return item.y
        })
        this.toDayCheckTotal = toDayCheckTotal;
        let xCount = data.map.map(item=>{
          return item.x
        })
        let option = {
          grid:{
            top:'30px',
            bottom:"30px"
          },
          xAxis: {
            type: 'category',
            data: xCount,
            boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            },
            splitLine:{
              show:false
            }
          },
          series: [
            {
              name: '数据',
              data: yCount,
              type: 'line',
              markLine:{
                data:[
                  {
                    name: '历史最高值',
                    yAxis: data.historyHighestCount,
                    lineStyle:{
                      type:"solid",
                      color:'#CC8BFF',
                    },
                    label:{
                      formatter: '历史最高\n {c}',
                      position:'insideEndTop',
                      fontSize: 8,
                      color: '#CC8BFF'
                    }
                  },
                  {
                    name: '本月最高值',
                    yAxis: data.monthHighestCount,
                    lineStyle:{
                      type:"solid",
                      color:'#1480F0',
                    },
                    label:{
                      formatter: '本月最高\n {c}',
                      position:'insideEndTop',
                      fontSize: 8,
                      color: '#1480F0'
                    }
                  },
                  {
                    name: '昨日最高值',
                    yAxis: data.yesterDayHighestCount,
                    lineStyle:{
                      type:"solid",
                      color:'#00FFF4',
                    },
                    label:{
                      formatter: '昨日最高\n {c}',
                      position:'insideEndTop',
                      fontSize: 8,
                      color: '#00FFF4'
                    }
                  },
                ]
              },
              markPoint: {
                data: [
                  {
                    symbol:'circle',
                    symbolSize:10,
                    type: 'max',
                    name: 'Max' ,
                    label:{
                      formatter: '今日最高：{c}',
                      backgroundColor:'#FDDB65',
                      color:'#000000',
                      width:60,
                      height:23,
                      fontSize:8,
                      borderRadius:5,
                      offset:[0,-20]
                    }
                  },
                ]
              },
              lineStyle :{
                color:'#FFDA4A '
              },
              areaStyle:{
                color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#FFDA4A ' // 0% 处的颜色
                  },
                    {
                      offset: 0.7, color: 'rgba(255,218,74,0.5) ' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'rgba(255,218,74,0.1)' // 100% 处的颜色
                    }],
                  global: false // 缺省为 false
                }
              },
              smooth:true
            },
          ]
        };

        option && chart1.setOption(option);
      },
      //获取在线量非实时区域数据
      initMonthMax(){
        getOffLineData(this,{
          areaType:1
        }).then(res=>{
          console.log(res)
          let data = res.data.data||{}
          this.offLineData = data||{}
          this.drawMonthMax(data)
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": {
        //     "latestDayCount": 420,
        //     "latestMonthCount": 18000,
        //     "dayOfYearHighestCount": 890,
        //     "hisDayHighestCount": 890,
        //     "monthHighestCount": 32000,
        //     "hisMonthHighestCount": 32000,
        //     "map": [
        //       {
        //         "month": 1,
        //         "count": 200
        //       },
        //       {
        //         "month": 2,
        //         "count": 400
        //       }
        //     ]
        //   },
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // };
        // this.offLineData = res.data||{}
        // this.drawMonthMax(res.data)
      },
      //画在线量非实时区域数据
      drawMonthMax(data){
        if(!data.map || !data.map.length){
          return
        }
        let yCount = data.map.map(item=>{
          return item.count
        })
        let xCount = data.map.map(item=>{
          return item.month
        })
        var chart1 = echarts.init(document.getElementById('monthMax'))
        let option = {
          grid:{
            top:'15%',
            right:"5px",
            
            left:'12%'
          },
          legend: {
            right:13,
            top:0,
            textStyle :{
              color:'#05A998'
            }
          },
          xAxis: {
            type: 'category',
            data: xCount,
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            },
          },
          yAxis: {
            type: 'value',
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            },
            splitLine:{
              lineStyle:{
                color:'rgba(255,255,255,.15)'
              }
            }
          },
          series: [
            {
              name: '本月最高日活',
              data: yCount,
              type: 'bar',
              itemStyle:{
                color:'#63FBFC'
              },
              barMaxWidth:14
            }
          ]
        };

        option && chart1.setOption(option);
      },
      initMonthMaxCountries(){
        getTop5Country(this,{
          areaType:1
        }).then(res=>{
          console.log(res)
          let data = res.data.data ||[]
          this.drawMonthMaxCountries(data)
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": [
        //     {
        //       "country": "中国",
        //       "count": 1000,
        //     },
        //     {
        //       "country": "日本",
        //       "count": 500,
        //     },
        //     {
        //       "country": "韩国",
        //       "count": 300,
        //     }
        //   ],
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.drawMonthMaxCountries(res.data)

      },
      drawMonthMaxCountries(data){
        var chart1 = echarts.init(document.getElementById('monthMaxCountries'))
        let xCount = data.map((item,index)=>{
          let colors = ['#E7B600','#00B2E2','#48C0C5','#8077EA','#0079EA']
          return {
            value:item.count,
            itemStyle: {
              color: colors[index]
            }
          }
        })
        let yCount = data.map(item=>{
          return item.country
        })
        let option = {
          grid:{
            top:'5px',
          },
          xAxis: {
            type: 'value',
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              },
            },
            // axisLabel:{
            //   color:'rgba(0,0,0)'
            // },
            splitLine:{
              lineStyle:{
                color:'rgba(255,255,255,.15)'
              }
            }
          },
          yAxis: {
            type: 'category',
            data:yCount,
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            },
          },
          series: [
            {
              name: '上月活跃TOP5国家',
              data: xCount,
              type: 'bar',
              itemStyle:{
                color:'#63FBFC'
              },
              barMaxWidth:14,
              label: {
                show: true,
                position: 'insideRight',
                color:'#000000'
              },
            }
          ]
        };

        option && chart1.setOption(option);
      },
      // 每月新增月活
      getMonthNewCount(){
        getMonthNewCount(this,{
          areaType:1
        }).then(res=>{
          console.log(res)
          let data = res.data.data ||[]
          this.drawMonthNewCount(data)
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": [
        //     {
        //       "month": "1",
        //       "count": 200,
        //     },
        //     {
        //       "month": "2",
        //       "count": 300,
        //     },
        //     {
        //       "month": "3",
        //       "count": 100,
        //     },
        //     {
        //       "month": "4",
        //       "count": 150,
        //     },
        //     {
        //       "month": "5",
        //       "count": 180,
        //     }
        //   ],
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.drawMonthNewCount(res.data)
      },
      drawMonthNewCount(data){
        let yCount = data.map((item,index)=>{
          let obj = {};
          if(index===1){
            obj = {
              value:item.count,
              label: {
                show: true,
                position: 'top',
                color:'#FEDB65'
              },
            }
          }else {
            obj = {
              value:item.count,
            }

          }
          return obj
        })
        let xCount = data.map(item=>{
          return item.month
        })
        var chart1 = echarts.init(document.getElementById('monthNewCount'))
        let option = {
          grid:{
            top:'40px',
            bottom:"30px"
          },
          xAxis: {
            type: 'category',
            data: xCount,
            boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine:{
              show:true,
              lineStyle:{
                color:'rgba(255,255,255,.45)'
              }
            },
            splitLine:{
              lineStyle:{
                color:'rgba(255,255,255,.15)'
              }
            }
          },
          series: [
            {
              data: yCount,
              type: 'line',
              lineStyle :{
                color:'#FFDA4A '
              },
              smooth:true,
              itemStyle:{
                color:'#FEDB65'
              },

            }
          ]
        };

        option && chart1.setOption(option);
      },
      //获取设备分布
      getFacilityCountryRatio(){
        getFacilityCountryRatio(this,{
          areaType:1
        }).then(res=>{
          let data = res.data.data ||[];
          this.facilityCountryRatioList = data.map((item,index)=>{
            let obj = {
              ...item,
              img:this.ratioList[index]
            }
            return obj
          })
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": [
        //     {
        //       "country": "中国",
        //       "ratio": 30.5,
        //     },
        //     {
        //       "country": "日本",
        //       "ratio": 30.5,
        //     },
        //     {
        //       "country": "韩国",
        //       "ratio": 39,
        //     }
        //   ],
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.facilityCountryRatioList = res.data.map((item,index)=>{
        //   let obj = {
        //     ...item,
        //     img:this.ratioList[index+1]
        //   }
        //   return obj
        // })

      },
      //型号分布
      getFacilityTypeRatio(){
        getFacilityTypeRatio(this,{
          areaType:1
        }).then(res=>{
          let data = res.data.data||[];
          this.drawFacilityTypeRatio(data)
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": [
        //     {
        //       "type": "mifi-v1",
        //       "ratio": 30.5,
        //     },
        //     {
        //       "type": "mifi-v2",
        //       "ratio": 30.5,
        //     },
        //     {
        //       "type": "mifi-v3",
        //       "ratio": 39,
        //     }
        //   ],
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.drawFacilityTypeRatio(res.data)
      },
      drawFacilityTypeRatio(data){
        let pieData = data.map((item,index)=>{
          return {
            value:item.ratio,
            name:item.type,
            itemStyle:''
          }
        })
        var chart1 = echarts.init(document.getElementById('facilityTypeRatio'))
        let option = {
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['20%', '60%'],
              label: {
                alignTo: 'edge',
                formatter: '{b}\n {d}百分比',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: {
                  time: {
                    fontSize: 10,
                    color: '#999'
                  }
                }
              },
              // labelLine: {
              //   show: true
              // },
              labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80
              },
              data: pieData,
              itemStyle:{
                borderWidth:1,
                borderColor:'#ffffff',
                color:function (parmas,index) {
                  console.log(parmas)
                  console.log(index)
                  let colorList = ['#C87DEE','#4979CB','#50AE89','#EF8E54','#8252DB']
                  return colorList[parmas.dataIndex||0]
                }
              }
            }
          ]
        }
        option && chart1.setOption(option);
      },
      equipmentMap(){
        equipmentMap(this,{
          areaType:1
        }).then(res=>{
          console.log(res)
          let data = res.data.data||{};
          this.initMap(data)
        })
      //   let res = {
      //     "attachment": null,
      //     "code": 200,
      //     "data": {
      //       "spread": [
      //         {"startName": "深圳", "endName": "深圳", "value": 5200},
      //         {"startName": "深圳", "endName": "北京", "value": 3200},
      //         {"startName": "深圳", "endName": "长沙", "value": 2900},
      //       ],
      //       "allCityPoint": {
      //         "福州": [119.4543, 25.9222],
      //         "长春": [125.8154, 44.2584],
      //         "重庆": [107.7539, 30.1904],
      //         "西安": [109.1162, 34.2004],
      //         "成都": [103.9526, 30.7617],
      //         "常州": [119.4543, 31.5582],
      //         "北京": [116.4551, 40.2539],
      //         "北海": [109.314, 21.6211],
      //         "海口": [110.3893, 19.8516],
      //         "长沙": [113.019455, 28.200103],
      //         "上海": [121.40, 31.73],
      //         "内蒙古": [106.82, 39.67],
      //         "深圳":[114.085947,22.547]
      //       }
      // },
      //   "errCode": 200,
      //     "exception": "",
      //     "msg": "成功",
      //     "success": true
      // }
      //  this.initMap(res.data)
      },
      initMap(data){
        var chart1 = echarts.init(document.getElementById('map'))
        var geoCoordMap = data.allCityPoint || {}
        var GZData = data.spread || [];

        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem.startName];
            var toCoord = geoCoordMap[dataItem.endName];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem.startName,
                toName: dataItem.endName,
                coords: [fromCoord, toCoord]
              });
            }
          }
          return res;
        };

        var color = ['#19BDA2'];
        var color2 = ['#EBFA29']
        var series = [];
        [
          ['深圳', GZData]
        ].forEach(function (item, i) {
          series.push(
            {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: 'arrow',
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 2,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
            {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
              effectType:'ripple',
            rippleEffect: {
              brushType: 'fill',
              color:'#19BDA2'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbolSize: function (val) {
              if(val.length>2){
                return val[2]/1000 * 5
              }else {
                return 1;
              }

            },
            itemStyle: {
              normal: {
                color: color2[i]
              }
            },
            data: function (){
              let list = [
                {
                  name:'深圳',
                  value:geoCoordMap[item[0]].concat([6500])
                }
              ]
              list = list.concat(item[1].map(function (dataItem) {
                console.log('dataItem',dataItem)
                if(geoCoordMap[dataItem.endName]){
                  return {
                    name: dataItem.endName,
                    value: geoCoordMap[dataItem.endName].concat([dataItem.value])
                  };
                }
                return {
                  name: dataItem.endName,
                  value: []
                };
              }))
              console.log('list', list)
              return list
            }()
          });
        });
        let option = {
          tooltip: {
            show: false
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                borderColor: '#050D4B',
                borderWidth: 1,
                areaColor: 'rgb(8,12,52)',
                shadowColor:"rgba(69, 148, 246, 1)",
                shadowOffsetX:0,
                shadowOffsetY:8,
                //areaColor: '#389BB7',
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
              }
            },
            zoom:1.2
          },
          series: series
        };
        option && chart1.setOption(option);
      },
      //获取今日激活数检测
      getActivatedCount(){
        getActivatedCount(this,{
          areaType:1
        }).then(res=>{
          let data = res.data.data ||{}
          this.activatedCount = data;
        })
        // let res = {
        //   "attachment": null,
        //   "code": 200,
        //   "data": {
        //     "todayCount": 420,
        //     "yesterdayCount": 650,
        //     "monthCount": 180000,
        //     "historyCount": 1020
        //   },
        //   "errCode": 200,
        //   "exception": "",
        //   "msg": "成功",
        //   "success": true
        // }
        // this.activatedCount = res.data;
      },
      format(e,type){
        console.log(type)
        return this.activatedCount.todayCount
      },
      format2(e,type){
        console.log(type)
        return this.activatedCount.monthCount
      },
      format3(e,type){
        console.log(type)
        return this.activatedCount.historyCount
      },
      //计算占比
      mathPricent(key){
        let count = this.activatedCount[key]? this.activatedCount[key] : 0;
        let total = this.activatedCount.todayCount + this.activatedCount.monthCount + this.activatedCount.historyCount;
        return Number((count/total).toFixed(2))*100
      }
    }
  }
</script>
<style scoped src="./index.css">

</style>
