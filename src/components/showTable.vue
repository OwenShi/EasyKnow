<template>
	<div class="wrapper">
		<div class="toolBox">
			<Button type="info">导出CSV文件</Button>
		</div>
		<Table stripe border :columns="columnsList" :data="columnsData"></Table>
	</div>
</template>
<style></style>
<script>
	export default{
		data(){
			return{
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
			}
		}
	}
</script>