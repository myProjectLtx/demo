<template>
  <div>
    <el-card shadow="never">
      <img :src="exportsData" alt="" class="exportImg" @click="exportData">
    </el-card>
  </div>
</template>
<script>
  import exportsData from '../../assets/exportData.jpg'
  export default {
    data(){
      return{
        exportsData,
      }
    },
    created() {

    },
    methods:{
      exportData(){
        this.$http
          .post("/level/exportExcel")
          .then((res) => {
            let data = res.data;
            if (data.code == 0) {
              // 下载文件
              window.location.href = process.env.VUE_APP_API_BASE_URL + "/common/download?fileName=" + encodeURI(data.data) + "&isDelete=" + true;
              this.$message({
                type: "success",
                message: "导出成功",
              });
            } else {
              this.$message.error("导出失败");
            }
          })
      }
    },
  }
</script>
<style scoped>
  .exportImg{
    border: 1px black solid;
  }
</style>
