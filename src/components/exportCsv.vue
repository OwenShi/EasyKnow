<template>
  <div class="wrapper">
    <div class="toolBox">
      <Input v-model="addColumnsName" placeholder="请输入增加列的名称" style="width: 200px"></Input>
      <Input v-model="addColumnsTitle" placeholder="请输入增加列的key值" style="width: 200px"></Input>
      <Button type="info" @click="addColumns">ADD</Button>
      <Button v-if="!isDelete" @click="deleteColumns">DELETE</Button>
      <Input v-if="isDelete" v-model="deleteIndex" number placeholder="需要删除第几列（从1开始）" style="width:100px"></Input>
      <Button v-if="isDelete" @click="deleteCommit" type="error">确认删除</Button>
      <Button v-if="isDelete" @click="cancelDelete" type="primary">取消</Button>
    </div>
    <Row>
      <Table border stripe :columns="columns1" :data="studentMsg"></Table>
      <div class="footer">
        <Page class="flex-center":total="totalCount"></Page>
      </div>
    </Row>
  </div>
</template>
<style>
.toolBox{
  margin: 0 0 20px 0;
}
.footer{
  display: flex;
  justify-content: center;
}
.flex-center{
  display: flex;
  margin-top: 20px;
}
</style>
<script>
  export default{
    data(){
      return{
        isDelete:false,
        columns1:[
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
        studentMsg:[
          {
            name:'AAAA',
            faculty:'信息学院',
            major:'通信工程'
          },
          {
            name:'BBBB',
            faculty:'信息学院',
            major:'通信工程'
          },
          {
            name:'CCCC',
            faculty:'信息学院',
            major:'通信工程'
          }
        ],
        addColumnsName:'',
        addColumnsTitle:'',
        deleteIndex:0,
        totalCount:100,
      }
    },
    methods:{
      addColumns(){
        var _this = this
        var columns = _this.columns1
        columns.push({title:_this.addColumnsName,key:_this.addColumnsTitle})
      },
      deleteColumns(){
        var _this = this
        _this.isDelete = true
      },
      deleteCommit(){
        var _this = this
        var columns = _this.columns1
        var data = _this.studentMsg
        columns.forEach((value,index,array)=>{
          if(_this.deleteIndex == 0){
            _this.$Message.error('您输入的列数不存在')
            return
          }else{
            if(_this.deleteIndex == (index + 1)){
              array.splice(index,1)
              _this.deleteIndex = 0
              _this.isDelete = false
            }
          }
        })
      },
      cancelDelete(){
        var _this = this
        _this.isDelete = false
      }
    }
  }
</script>
