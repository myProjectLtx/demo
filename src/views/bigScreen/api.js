export const getTodayOnlineTrend = (that,data={})=>{
  return that.$http.post('/view/todayOnlineTrend',data)
}

//在线量非实时区域
export const getOffLineData = (that,data={})=>{
  return that.$http.post('/view/offLineData',data)
}

//上月活跃top5国家
export const getTop5Country = (that,data={})=>{
  return that.$http.post('/view/top5Country',data)
}

//设备总数
export const getTotalCount = (that,data={})=>{
  return that.$http.post('/view/getTotalCount',data)
}

//每月新增月活
export const getMonthNewCount = (that,data={})=>{
  return that.$http.post('/view/monthNewCount',data)
}

//设备分布
export const getFacilityCountryRatio = (that,data={})=>{
  return that.$http.post('/view/facilityCountryRatio',data)
}

//型号分布基本信息
export const getFacilityTypeRatio = (that,data={})=>{
  return that.$http.post('/view/facilityTypeRatio',data)
}

//今日激活数检测
export const getActivatedCount = (that,data={})=>{
  return that.$http.post('/view/activatedCount',data)
}

//中国地图数据
export const equipmentMap = (that,data={})=>{
  return that.$http.post('/view/equipmentMap',data)
}
