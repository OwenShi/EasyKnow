<template>
	<div class="wrapper">
		<div class="toolBox">
			<Button type="info">导出CSV文件</Button>
		</div>
		<Table stripe border :columns="columnsList" :data="columnsData"></Table>
    <div class="footer">
      <Page class="flex-center":total="totalCount"></Page>
    </div>
	</div>
</template>
<style></style>
<script>
	import IC from '../../InterfaceConfig'
	export default{
		data(){
			return{
				columnsData:[],
				columnsList:[
					{
					  title:'姓名',
					  key:'name'
					},
					{
					  title:'学院',
					  key:'faculty'
					},
					{
					  title:'专业',
					  key:'major'
					}
				],
				columnsData:[],
        totalCount:100
			}
		},
		mounted(){
			var _this = this;
			getAllTable(_this, 0)
		}
	}

  function getAllTable(_this,curr) {
    var opts = {
      param:{
      	'pageSize':10,
      	'pageIndex': curr - 1 || 0
      }
    }
    _this.$Common.ajax('post',IC.INTERFACE.QUERYALL,opts, (err)=>{
      console.log('err')
    },(res)=>{
      if (res.data.success){
        _this.columnsData = res.data.data
      }
    })
  }
</script>
