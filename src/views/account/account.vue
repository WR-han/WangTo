<template>
  <div class="account">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-progress="sb1"
      :on-success="sb2"
      :on-error="sb3"
      :before-upload="sb4"
      :on-change="sb5"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import JsZip from "jszip";
export default {
  name: "account",
  components: {},
  props: {},
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log("文件列表移除文件时的钩子", file, fileList);
    },
    handlePreview(file) {
      console.log("点击文件列表中已上传的文件时的钩子", file);
    },
    sb1(file) {
      console.log("文件上传时的钩子", file);
    },
    sb2(file) {
      console.log("cg的钩子", file);
    },
    sb3(file) {
      console.log("sb的钩子", file);
    },
    sb4(file){
      console.log("before-upload",file);
    },
    sb5(file, fileList){
      console.log("on-change",file, fileList);
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.account {
}
</style>