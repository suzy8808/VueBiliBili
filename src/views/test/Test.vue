<script>
export default {
  data () {
    return {
      models: [
        {
          path: '/static/live2d/live2d-widget-model-chitose/assets/chitose.model.json'
        },
        {
          path: '/static/live2d/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <!-- <div>
      <vue-live2d :modelPath="models"
                  :order="0"
                  :scale="true"
                  :maxScale="2"
                  :minScale="0.5"
                  :defaultScale="1.5"></vue-live2d>
    </div> -->
    <div>
      <vue-live2d :modelPath="models"
                  :order="1"
                  :scale="true"
                  :maxScale="2"
                  :minScale="0.5"
                  :defaultScale="1.5"></vue-live2d>
    </div>
  </div>
</template>

<style scoped>
.live2d-wrap {
  position: relative;
  left: auto;
  bottom: auto;
  z-index: 9999;
}
</style>
