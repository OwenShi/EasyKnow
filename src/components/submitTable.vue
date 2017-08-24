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
      <div v-for="item in columns">
        <Tag>{{item.title}}</Tag>
        <Tag>{{item.key}}</Tag>
      </div>
    </Row>
    <div class="toolBox">
      <Button type="info" @click="submit">提交信息</Button>
    </div>
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
        columns:[],
        isDelete:false,
        addColumnsName:'',
        addColumnsTitle:'',
        deleteIndex:0,
        totalCount:100,
      }
    },
    methods:{
      addColumns(){
        var _this = this
        _this.columns.push({title:_this.addColumnsName,key:_this.addColumnsTitle})
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
      },
      submit(){
        var _this = this
        
      }
    }
  }
  

</script>
