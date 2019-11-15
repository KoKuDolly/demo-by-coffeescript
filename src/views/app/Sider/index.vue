<template>
  <el-aside width="200px">
    <Menu
      background-color="#b3c0d1"
      :unique-opened="true"
      @select="handleMenuSelect"
    >
      <template v-for="(item, index) in MenuData">
        <template v-if="item.children">
          <template v-if="item.children.length > 0">
            <Submenu
              :key="index"
              :index="`${index}`"
              popper-class="ami-sub-menu"
            >
              <template slot="title">
                <span>{{item.meta.title}}</span>
              </template>
              <template v-for="(_item, _index) in item.children">
                <MenuItem :index="`${_item.name}`" :key="_index">
                  <span slot="title" :key="_index">{{_item.meta.title}}</span>
                  <!-- eslint-disable-next-line -->
                </MenuItem>
              </template>
            </Submenu>
          </template>
          <template v-else>
            <MenuItem :index="`${item.name}`" :key="index">
              <span slot="title" :key="index">{{item.meta.title}}</span>
              <!-- eslint-disable-next-line -->
            </MenuItem>
          </template>
        </template>
      </template>
    </Menu>
  </el-aside>
</template>
<script>
import { Menu, Submenu, MenuItem, MenuItemGroup, DropdownMenu } from 'element-ui'
import routerMap from '@/router/map/'
export default {
  name: 'ElSider',
  components: {
    Menu, Submenu, MenuItem, MenuItemGroup, DropdownMenu
  },
  mounted () {
    // console.log(routerMap)
  },
  watch: {
    routerMap () {}
  },
  data () {
    return {
      MenuData: routerMap[0].children
    }
  },
  methods: {
    handleMenuSelect (index, indexPath) {
      console.log(index, indexPath)
      this.$router.push({
        name: index
      })
    }
  }
}
</script>
<style lang="scss">
  .el-aside {
    padding-top: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
</style>
