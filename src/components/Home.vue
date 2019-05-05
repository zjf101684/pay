<!-- 首页 -->
<template>
  <el-container class="home_container">
    <!-- 顶部 -->
    <el-header class="home_header">
      <el-button icon="iconfont icon-menu" size="mini" @click="toggleMenu()" circle></el-button>
      <span class="title">品优购后台管理系统</span>
      <el-button class="logout" type="danger" size="mini" round>退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="collapse?'65px':'200px'">
        <el-menu
        router
        :default-active="$route.name"
        :unique-opened="true"
        :collapse ="collapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- 一级菜单 -->
        <el-submenu index="item.id" v-for="(item,i) in menus" :key="item.id" unique-opened>
          <template slot="title">
            <i :class="['iconfont',iconArr[i]]" style="margin-right: 10px"></i>
            <span>{{item.authName}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item v-for="lastItem in item.children" :key="lastItem.id" index="item.id+'-'+lastItem.id">
            <i class="el-icon-menu"></i>
            <span>{{lastItem.authName}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-main class="home_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      collapse: false,
      menus: [],
      iconArr: ['icon-user-fill', 'icon-cog', 'icon-shoppingcart', 'icon-file', 'icon-chart-area']

    }
  },
  methods: {
    // 切换菜单
    toggleMenu () {
      this.collapse = !this.collapse
    },
    // 获取数据
    async getData () {
      const {data: {data, meta}} = await this.$http.get('menus')
      console.log(data)
      if (meta.status !== 200) return this.$message.error('获取数据失败')
      this.menus = data
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
.home_container{
  height: 100%;
}
.home_header{
  background: #373D41;
  line-height: 60px;
}
.home_aside{
  background: #333744;
}
.home_main{
  background: #fff;
}
  .title{
    color: #ccc;
    font-size: 18px;
    padding-left: 20px;
  }
  .logout{
    float: right;
    margin-top: 15px;
  }
</style>
