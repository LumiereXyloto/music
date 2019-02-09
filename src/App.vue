<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="stylus" scoped>
// 前面加 ~ 表示你后面的值为 alias, 然后就会去 webpack alias 配置中找相应的值, 然后拼接成最后的地址
@import "~common/stylus/variable"
#app
  color $color-theme
</style>
