<script>
import { mavonEditor } from 'mavon-editor'
export default {
  data: function () {
    return {
      handbook: '# 标题1 \n## 标题1-1 \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \nxxxxxxxxxx \n## 标题1-2 \n## 标题1-3 \n## 标题1-4 \n# 标题2 \n## 标题2-1 \n## 标题2-2 \n## 标题2-3',
      htmlCode: '',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  methods: {
    change (value, render) {
      // this.htmlCode = mavonEditor.getMarkdownIt().render(this.handbook)
      this.htmlCode = render
      this.getNavigation()
    },
    /**
 * 生成导航目录
 */
    getNavigation () {
      let navigationContent

      navigationContent = this.$refs.navigationContent
      let md = this.$refs.md
      md.innerHTML = this.htmlCode
      let mdNodes = md.children

      navigationContent.innerHTML = this.htmlCode
      let nodes = navigationContent.children

      if (nodes.length) {
        for (let i = 0; i < nodes.length; i++) {
          judageH(nodes[i], i, nodes, mdNodes[i])
        }
      }
      function judageH (node, i, nodes, mdNode) {
        let reg = /^H[1-6]{1}$/
        if (!reg.exec(node.tagName)) {
          node.style.display = 'none'
        } else {
          node.onclick = () => {
            console.log(mdNode)
            md.scrollTop = mdNode.offsetTop
          }
        }
      }
    }

  },
  mounted () {
    this.htmlCode = mavonEditor.getMarkdownIt().render(this.handbook)
    this.getNavigation()
  }
}
</script>
<template>
  <div>
    <!-- <mavon-editor :toolbars="toolbars"
                  @change="change"
                  v-model="handbook" />
    {{handbook}} -->
    <div class="content">
      <div ref="md"
           class="markdown-body md"
           style="text-align:left;width:80%"></div>
      <div style="text-align:left;width:20%"
           ref="navigationContent">

      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
}
.md {
  text-align: left;
  width: 80%;
  height: 500px;
  overflow-y: auto;
}
</style>
