<template>
  <div id="app">
    <Row>
      <Menu mode="horizontal" active-name="">
        <router-link to="/exportCsv"><menu-item name="exportCsv">收集报表</menu-item></router-link>
        <router-link to="/showTable"><menu-item name="Wait.">统计报表</menu-item></router-link>
        <router-link to="/home"><menu-item name="Wait..">Wait..</menu-item></router-link>
        <router-link to="/home"><menu-item name="Wait...">Wait...</menu-item></router-link>
      </Menu>
    </Row>
    <Row class="content">
      <router-view></router-view>
    </Row>
  </div>
</template>
<style>
  .title-icon{
    height: 80px;
  }
  .content{
    margin: 10px 10px 0 10px
  }
</style>
<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
}
</script>
  

