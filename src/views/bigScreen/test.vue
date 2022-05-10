<template>
  <div class="earthmap" id="earth">

  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import 'echarts/map/js/world.js'
  import 'echarts-gl'
  import img from '../../assets/bigSreen/8.png'
  import "echarts/map/js/china.js"; // 引入中国地图数据
  export default {
    data(){
      return{
        mapChart:{},
        //立体球形纹路
        option :{
          globe: {
            silent: true,
            environment:require('../../assets/bigSreen/charity_top.png'),
            heightTexture: require('../../assets/bigSreen/bathymetry_bw_composite_4k-back.jpg'),
            baseTexture:  require('../../assets/bigSreen/8.png'),
            shading: 'lambert',
            light: {
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
            postEffect: {//为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
              enable: true, //是否开启
              SSAO: {//环境光遮蔽
                radius: 1,//环境光遮蔽的采样半径。半径越大效果越自然
                intensity: 1,//环境光遮蔽的强度
                enable: true
              }
            },
            //地球是否自己转动 autoRotate为true时自己转动
            viewControl: {
              alpha: 30,
              beta: 160,
//			            targetCoord: [116.46, 39.92],
              autoRotate: true,
              autoRotateAfterStill: 10,
              distance: 240,
              autoRotateSpeed:4
            },
            // layers: [{
            //   type: 'blend',
            //   blendTo: 'emission',
            //   texture: contourChart,
            //   intensity: config.intensity
            // }]
          },
          series: [
            {
              name: 'lines3D',
              type: 'lines3D',
              coordinateSystem: 'globe',
              effect: {
                show: true,
                period: 2,
                trailWidth: 3,
                trailLength: 0.5,
                trailOpacity: 1,
                trailColor: '#0087f4'
              },
              blendMode: 'lighter',
              lineStyle: {
                width: 1,
                color: '#0087f4',
                opacity: 0.2
              },
              data:[],
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
              symbolSize: 15,
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
                    color: '#f5d909',
                    fontWeight:'bold',
//			                    backgroundColor:'rgba(255,255,255,0.2)'
                    backgroundColor:'transparent'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(29,183,255)'
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
                [117.11, 34.15],
                [118.58, 32.01],
                [123.38, 41.8],
                [112.01, 38.01],
                [139.46, 35.42],
                [116.58, 6.10],
                [102.90, 25.31]
              ]

            }
          ]

        },

        //平面地球 主要是设置地球的样式
        mapOption: {
          backgroundColor: 'rgba(20,104,121,0.71)',//当和立体球形贴图是海洋的颜色
          visualMap: {
            show: false,
            min: 0,
            max: 100000
          },
          series: [
            {
              type: 'map',
              map: 'world',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              environment: 'rgba(0,0,0,0)',
              boundingCoords: [
                [-180, 90],
                [180, -90]
              ],
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'rgb(0,232,232)',//地球纹路的颜色
                  areaColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    //相邻每个板块 从上到下的颜色变化
                    colorStops: [{
                      offset: 0.2, color: 'rgb(0,48,62)' // 0% 处的颜色
                    }, {
                      offset: 0.8, color: 'rgba(0,179,188,0.8)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
                }
              }
            }
          ]
        },
        img

      }
    },
    mounted(){
      setTimeout(()=>{
        this.initMap()
      },1000)

    },
    methods:{
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
          debugger
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


          var myChart = echarts.init(document.getElementById('earth'))
          debugger
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
          debugger
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
              environment:require('../../assets/bigSreen/charity_top.png'),
              heightTexture: require('../../assets/bigSreen/bathymetry_bw_composite_4k-back.jpg'),
              baseTexture: 'img/8.png',
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
                distance: 240,
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
                trailColor: '#0087f4'
              },
              blendMode: 'lighter',
              lineStyle: {
                width: 1,
                color: '#0087f4',
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
                symbolSize: 15,
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
                      color: '#f5d909',
                      fontWeight:'bold',
//			                    backgroundColor:'rgba(255,255,255,0.2)'
                      backgroundColor:'transparent'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(29,183,255)'
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
                  [117.11, 34.15],
                  [118.58, 32.01],
                  [123.38, 41.8],
                  [112.01, 38.01],
                  [139.46, 35.42],
                  [116.58, 6.10],
                  [102.90, 25.31]
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
      }


     }
  }

</script>


<style>
  .earthmap{
    width: 100%;
    height: 700px;
    background: rgba(16, 167, 202, 0.39);
  }


</style>
