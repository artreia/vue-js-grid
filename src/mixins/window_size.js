export default {
  data () {
    return {
      windowHeight: 0,
      windowWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.getWindowSize)
    this.getWindowSize()
  },
  mounted () {
    this.getWindowSize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize () {
      if (this.$el) {
        this.windowHeight = this.$el.clientHeight

        var element = document.getElementById('pills-tabContent');
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height;
        var width = positionInfo.width;

        this.windowWidth = width;  // this.$el.clientWidth
      }
    }
  }
}
