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
          <span class="bigHeaderContentSpan">信丰伟业移动终端全球可视化系统</span>
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
    getMonthNewCount, getFacilityCountryRatio, getFacilityTypeRatio, getActivatedCount} from './api'
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
         this.initMap();
         this.getActivatedCount();
         setInterval(()=>{
           this.initToDayCheck();
           this.initMonthMax();
           this.initMonthMaxCountries();
           this.getTotalCount();
           this.getMonthNewCount();
           this.getFacilityCountryRatio();
           this.getFacilityTypeRatio();
           //this.initMap();
           this.getActivatedCount();
         },5000)
       },
      initMap() {
        let self = this;
        var config = {
          color: '#750be8',
          levels: 1,
          intensity: 4,
          threshold: 0.01
        }

        var canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        let context = canvas.getContext("2d");

        context.lineWidth = 0.5;
        context.strokeStyle = config.color;
        context.fillStyle = config.color;
        context.shadowColor = config.color;
        image(self.img).then(function(image) {
          var m = image.height,
            n = image.width,
            values = new Array(n * m),
            contours = d3.contours().size([n, m]).smooth(true),
            projection = d3.geoIdentity().scale(canvas.width / n),
            path = d3.geoPath(projection, context);

          //   StackBlur.R(image, 5);

          for (var j = 0, k = 0; j < m; ++j) {
            for (var i = 0; i < n; ++i, ++k) {
              values[k] = image.data[(k << 2)] / 255;
            }
          }

          var opt = {
            image: canvas
          }

          var results = [];
          function update(threshold, levels) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            var thresholds = [];
            for (var i = 0; i < levels; i++) {
              thresholds.push((threshold + 1 / levels * i) % 1);
            }
            results = contours.thresholds(thresholds)(values);
            redraw();
          }

          function redraw() {
            results.forEach(function (d, idx) {
              context.beginPath();
              path(d);
              context.globalAlpha = 1;
              context.stroke();
              if (idx > config.levels / 5 * 3) {
                context.globalAlpha = 0.01;
                context.fill();
              }
            });
            opt.onupdate();
          }

          initCharts(opt);
          d3.timer(function(t) {
            var threshold = (t % 10000) / 10000;
            update(threshold, 1);
          });
          update(config.threshold, config.levels);

        });

        function image(url) {
          return new Promise(function(resolve) {
            var image = new Image();
            image.src = url;
            image.onload = function() {
              var canvas = document.createElement("canvas");
              canvas.width = image.width / 8;
              canvas.height = image.height / 8;
              var context = canvas.getContext("2d");
              context.drawImage(image, 0, 0, canvas.width, canvas.height);
              resolve(context.getImageData(0, 0, canvas.width, canvas.height));
            };
          });
        }

        function initCharts(opt) {


          var myChart = echarts.init(document.getElementById('map'))
          let canvas2 = document.createElement('canvas');
          let mapChart = echarts.init(canvas2, null, {
            width: 2048,
            height: 1024
          });


          var contourChart = echarts.init(document.createElement('canvas'), null, {
            width: 2048,
            height: 1024
          });

          var img = new echarts.graphic.Image({
            style: {
              image: opt.image,
              x: -1,
              y: -1,
              width: opt.image.width + 2,
              height: opt.image.height + 2
            }
          });
          contourChart.getZr().add(img);
          opt.onupdate = function () {
            img.dirty();
          };
          mapChart.setOption({
            series: [{
              type: 'map',
              map: 'world',
              // 绘制完整尺寸的 echarts 实例
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boundingCoords: [
                [-180, 90],
                [180, -90]
              ]
            }]
          });
          var canvas1 = document.createElement('canvas');
          var mapChart1 = echarts.init(canvas1, null, {
            width: 2048,
            height: 1024
          });
          mapChart1.setOption({
            backgroundColor: 'transparent',
            series: [{
              type: 'map',
              map: 'china',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              //   environment: '#000',
              boundingCoords: [
                [-180, 90],
                [180, -90]
              ],
              label: {
                normal: {
                  show: false,
                  fontSize: 4,
                  lineHeigh: 4,
                  color: '#000',

                }
              },
              itemStyle: {
                normal: {
                  areaColor: 'transparent',
                  borderWidth: 1,

                  borderType: 'solid',
                  borderColor: '#a85000'
                }
              },

            }]
          });

          var option = {
            title: {
//			        text: '点击地球获取该区域地图',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip: {
              show: true
            },
            //		    visualMap: [{
            //		        // show: false,
            //		        type: 'continuous',
            //		        seriesIndex: 0,
            //		        text: ['scatter3D'],
            //		        textStyle: {
            //		            color: '#fff'
            //		        },
            //		        calculable: true,
            //		        max: 3000,
            //		        inRange: {
            //		            color: ['#87aa66', '#eba438', '#d94d4c']
            //		        }
            //		    }],
            globe: {
              //		        baseTexture: mapChart,
              //			    environment:'none',//背景
              //environment:require('../../assets/bigSreen/charity_top.png'),
              heightTexture: require('../../assets/bigSreen/bathymetry_bw_composite_4k-back.jpg'),
              baseTexture: self.img8,
              shading: 'lambert',
              light: { // 光照阴影
                main: {
                  color: 'blue', // 光照颜色
                  intensity: 14.2, // 光照强度
                  shadowQuality: 'ultra', //阴影亮度
                  shadow: true, // 是否显示阴影
                  alpha: 40,
                  beta: -30
                },
                ambient: {
                  intensity: 4.6
                }
              },
              viewControl: {
                alpha: 30,
                beta: 160,
//			            targetCoord: [116.46, 39.92],
                autoRotate: true,
                autoRotateAfterStill: 10,
                distance: 180,
                autoRotateSpeed:4
              },
              postEffect: {//为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
                enable: true, //是否开启
                SSAO: {//环境光遮蔽
                  radius: 1,//环境光遮蔽的采样半径。半径越大效果越自然
                  intensity: 1,//环境光遮蔽的强度
                  enable: true
                }
              },

              layers: [{
                type: 'blend',
                blendTo: 'emission',
                texture: contourChart,
                intensity: config.intensity
              }]
            },
            series: [{
              name: 'lines3D',
              type: 'lines3D',
              coordinateSystem: 'globe',
              effect: {
                show: true,
                period: 2,
                trailWidth: 3,
                trailLength: 0.5,
                trailOpacity: 1,
                trailColor: '#19BDA2'
              },
              blendMode: 'lighter',
              lineStyle: {
                width: 1,
                color: '#19BDA2',
                opacity: 0.2
              },
              data: [],
              //		        data: [{
              //		            from: 'A',
              //		            to: 'B',
              //		            coords: [
              //		                [-83.69501541554166, -75.76453333240994],
              //						[105.18, 37.51]
              //		            ],
              //		            value:"2013.48"
              //		        }, {
              //		            from: 'A',
              //		            to: 'C',
              //		            coords: [
              //		                [118.377173, 31.337123],
              //		                [105.18, 37.51]
              //		            ],
              //		            value:"2013.48"
              //		        }],
              silent: false
            },
              { //点
                name: '景区',
                //		        type: 'effectScatter',
                //		        coordinateSystem: 'bmap',
                type: 'scatter3D',
                blendMode: 'lighter',
                coordinateSystem: 'globe',
                showEffectOn: 'render',
                zlevel: 2,
                effectType:"ripple",
                symbolSize: function (val,key) {
                  console.log('val', val)
                  if(val.length>3){
                    return val[3]/1000 * 5
                  }else {
                    return 1;
                  }
                },
                rippleEffect: {
                  period: 4,
                  scale: 4,
                  brushType: 'fill'
                },

                //		        showEffectOn: 'hover',
                hoverAnimation: true,
                label: {
                  normal: {
                    show: true,
                    position: 'right',
//			                formatter: '{b}',
                    formatter:function(params){
                      if(params.dataIndex == 1){
                        return '南京'
                      }else if(params.dataIndex == 2){
                        return '沈阳'
                      }else if(params.dataIndex == 3){
                        return '太原'
                      }else if(params.dataIndex == 4){
                        return '日本'
                      }else if(params.dataIndex == 5){
                        return '雅加达'
                      }else if(params.dataIndex == 0){
                        return '徐州'
                      }else if(params.dataIndex == 6){
                        return '昆明'
                      }
                    },
                    textStyle: {
                      fontSize: 18,
                      color: '#EBFA29',
                      fontWeight:'bold',
//			                    backgroundColor:'rgba(255,255,255,0.2)'
                      backgroundColor:'transparent'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#EBFA29'
                  }
                },
                //		        data: [{
                //		            'name': 'A',
                //		            'value': [105.18, 37.51, 1500]
                //		        }, {
                //		            'name': 'B',
                //		            'value': [118.393252, 31.15576, 1500]
                //		        }, {
                //		            'name': 'C',
                //		            'value': [117.989662, 31.293115, 1500]
                //		        }]
                data:[
                  [117.11, 34.15, 0, 1200],
                  [118.58, 32.01, 0, 2000],
                  [123.38, 41.8, 0, 3100],
                  [112.01, 38.01, 0,4000],
                  [139.46, 35.42, 0, 900],
                  [116.58, 6.10, 0, 700],
                  [102.90, 25.31, 0, 5000]
                ]

              }]
          }
          // 随机数据

          option.series[0].data = [
            {
              coords:[
                [117.11, 34.15],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            },
            {
              coords:[
                [123.38, 41.8],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            },
            {
              coords:[
                [112.01, 38.01],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            },
            {
              coords:[
                [139.46, 35.42],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            },
            {
              coords:[
                [116.58, 6.10],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            },
            {
              coords:[
                [102.90, 25.31],
                [118.58, 32.01]
              ],
              value: (Math.random() * 3000).toFixed(2)
            }
          ]

          for (let i = 0; i < 10; i++) {
            option.series[0].data = option.series[0].data.concat(rodamData())
          }

          function rodamData() {
            let name = '随机点' + Math.random().toFixed(5) * 100000
            // let longitude = Math.random() * 62 + 73
            let longitude = 118.58
            let longitude2 = Math.random() * 360 - 180
            // let latitude = Math.random() * 50 + 3.52
            let latitude = 32.01
            let latitude2 = Math.random() * 180 - 90
            return {
              coords: [
                [longitude2, latitude2],
                [longitude, latitude]
              ],
              value: (Math.random() * 3000).toFixed(2)
            }
          }
          myChart.setOption(option)
        }
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
          areaType:2
        }).then(res=>{
          let data = res.data.data
          this.totalCount = data?.totalCount? this.forMatNumber(data?.totalCount.toString()):'00000000';
          this.onlineCount = data?.onlineCount?this.forMatNumber(data?.onlineCount.toString()):'00000000'
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
           areaType:2
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
                    symbolSize:8,
                    type: 'max',
                    name: 'Max' ,
                    itemStyle:{
                      color:'#FDDB65'
                    },
                    label:{
                      formatter: '今日最高：{c}',
                      backgroundColor:'#FDDB65',
                      padding:6,
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
           areaType:2
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
            },
            itemWidth:7,
            itemHeight:7
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
          areaType:2
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
              }
            },
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
          areaType:2
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
          areaType:2
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
          areaType:2
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
                length: 10,
                length2: 5,
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
              },
            }
          ]
        }
        option && chart1.setOption(option);
      },
      // initMap(){
      //   var chart1 = echarts.init(document.getElementById('map'))
      //   var geoCoordMap = {
      //     '福州': [119.4543, 25.9222],
      //     '长春': [125.8154, 44.2584],
      //     '重庆': [107.7539, 30.1904],
      //     '西安': [109.1162, 34.2004],
      //     '成都': [103.9526, 30.7617],
      //     '常州': [119.4543, 31.5582],
      //     '北京': [116.4551, 40.2539],
      //     '北海': [109.314, 21.6211],
      //     '海口': [110.3893, 19.8516],
      //     '长沙': [113.019455,28.200103],
      //     '上海': [121.40, 31.73],
      //     '内蒙古': [106.82, 39.67]
      //   };
      //
      //   var GZData = [
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '福州',
      //       value: 95
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '长春',
      //       value: 80
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '重庆',
      //       value: 70
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '西安',
      //       value: 60
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '成都',
      //       value: 50
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '常州',
      //       value: 40
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '北京',
      //       value: 30
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '北海',
      //       value: 20
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '海口',
      //       value: 10
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '上海',
      //       value: 80
      //     }],
      //     [{
      //       name: '长沙'
      //     }, {
      //       name: '内蒙古',
      //       value: 80
      //     }]
      //   ];
      //
      //   var convertData = function (data) {
      //     var res = [];
      //     for (var i = 0; i < data.length; i++) {
      //       var dataItem = data[i];
      //       var fromCoord = geoCoordMap[dataItem[0].name];
      //       var toCoord = geoCoordMap[dataItem[1].name];
      //       if (fromCoord && toCoord) {
      //         res.push({
      //           fromName: dataItem[0].name,
      //           toName: dataItem[1].name,
      //           coords: [fromCoord, toCoord]
      //         });
      //       }
      //     }
      //     return res;
      //   };
      //
      //   var color = ['#c5f80e'];
      //   var series = [];
      //   [
      //     ['石家庄', GZData]
      //   ].forEach(function (item, i) {
      //     series.push({
      //       name: item[0],
      //       type: 'lines',
      //       zlevel: 2,
      //       symbol: ['none', 'arrow'],
      //       symbolSize: 10,
      //       effect: {
      //         show: true,
      //         period: 6,
      //         trailLength: 0,
      //         symbol: 'arrow',
      //         symbolSize: 5
      //       },
      //       lineStyle: {
      //         normal: {
      //           color: color[i],
      //           width: 1,
      //           opacity: 0.6,
      //           curveness: 0.2
      //         }
      //       },
      //       data: convertData(item[1])
      //     }, {
      //       name: item[0],
      //       type: 'effectScatter',
      //       coordinateSystem: 'geo',
      //       zlevel: 2,
      //       rippleEffect: {
      //         brushType: 'stroke'
      //       },
      //       label: {
      //         normal: {
      //           show: true,
      //           position: 'right',
      //           formatter: '{b}'
      //         }
      //       },
      //       symbolSize: function (val) {
      //         return val[2] / 8;
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: color[i]
      //         }
      //       },
      //       data: item[1].map(function (dataItem) {
      //         return {
      //           name: dataItem[1].name,
      //           value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
      //         };
      //       })
      //     });
      //   });
      //   let option = {
      //     tooltip: {
      //       show: false
      //     },
      //     geo: {
      //       map: 'china',
      //       label: {
      //         emphasis: {
      //           show: false
      //         }
      //       },
      //       roam: true,
      //       itemStyle: {
      //         normal: {
      //           borderColor: 'rgba(147, 235, 248, 1)',
      //           borderWidth: 1,
      //           areaColor: {
      //             type: 'radial',
      //             x: 0.5,
      //             y: 0.5,
      //             r: 0.8,
      //             colorStops: [{
      //               offset: 0,
      //               color: 'rgba(175,238,238, 0)' // 0% 处的颜色
      //             }, {
      //               offset: 1,
      //               color: 'rgba(47,79,79, .1)' // 100% 处的颜色
      //             }],
      //             globalCoord: false // 缺省为 false
      //           },
      //           shadowColor: 'rgba(128, 217, 248, 1)',
      //           // shadowColor: 'rgba(255, 255, 255, 1)',
      //           shadowOffsetX: -2,
      //           shadowOffsetY: 2,
      //           shadowBlur: 10
      //         },
      //         emphasis: {
      //           areaColor: '#389BB7',
      //           borderWidth: 0
      //         }
      //       }
      //     },
      //     series: series
      //   };
      //   option && chart1.setOption(option);
      // }
      //获取今日激活数检测
      getActivatedCount(){
        getActivatedCount(this,{
          areaType:2
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
