<template>
  <div class="singer">
    歌手页面
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
export default {
  name: 'Singer',
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
// Bscroll必须父容器高度固定子元素撑开父容器才能滚动

</style>
