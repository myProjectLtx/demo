<template>
  <div class="ele-body ele-body-card" >
    <el-tabs v-model="mainActiveName" @tab-click="handleClick">
      <el-tab-pane  label="在线总数" name="0">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="数据分析" name="0">
              <div v-if="first">
                <analysis  key="analysisOne"></analysis>
              </div>
          </el-tab-pane>
          <el-tab-pane label="对比" name="1">
              <contrast v-if="second" key="contraskOne"></contrast>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane  label="在线流量" name="1">
        <el-tabs  v-model="online" @tab-click="handleClick">
          <el-tab-pane label="数据分析" name="0">
            <analysis v-if="third" key="analysisTwo"></analysis>
          </el-tab-pane>
          <el-tab-pane label="对比" name="1">
            <contrast v-if="fourth" key="contraskTwo"></contrast>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  import analysis from './components/analysis'
  import contrast from './components/contrast'
  export default {
    data(){
      return{
        activeName:0,
        mainActiveName:0,
        online:0,
      }
    },
    components:{analysis, contrast},
    created() {
      console.log(this.activeName)
    },
    computed:{
      first(){
        if(this.mainActiveName==0&&this.activeName==0){
          return true
        }
        return false
      },
      second(){
        if(this.mainActiveName==0&&this.activeName==1){
          return true
        }
        return false
      },
      third(){
        if(this.mainActiveName==1&&this.activeName==0){
          return true
        }
        return false
      },
      fourth(){
        if(this.mainActiveName==1&&this.activeName==1){
          return true
        }
        return false
      },
    },
    mounted() {
      console.log(this.mainActiveName,this.activeName)
    },
    methods:{
      handleClick(value){
        console.log(this.activeName)
      }
    }
  }
</script>
