<template>
  <div class="account">
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-progress="sb1"
      :on-success="sb2"
      :on-error="sb3"
      :before-upload="sb4"
      :on-change="sb5"
      :auto-upload="false"
      :http-request="sb6"
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
import JSZip from "jszip";
import axios from "axios";
export default {
  name: "account",
  components: {},
  props: {},
  data() {
    return {
      fileList: [],
      abc: 123,
    };
  },
  methods: {
    submitUpload() {
      console.log(this.fileList);

      let formData = new FormData();
      this.fileList.forEach((item) => {
        console.log(item)
        formData.append("files", item);
      });

      // console.log(formData)

      axios.post("http://127.0.0.1:8000/test", formData);
      // this.$refs.upload.submit();
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
    sb4(file) {
      console.log("before-upload", file);
    },
    sb5(file, fileList) {
      this.handleFile(file.raw);
      // console.log("on-change", file);
      console.log(this.$refs);
    },
    sb6() {
      console.log("123456");
    },
    handleFile(f) {
      let vue_obj = this;
      JSZip.loadAsync(f).then(
        function (zip) {
          // ---------- 文件总列表 （筛出目录 以/结尾）
          let file_name_list = Object.keys(zip.files).filter((name) => {
            return name.charAt(name.length - 1) != "/";
          });
          // ---------- 文件总数
          let all_file_num = file_name_list.length;
          // ---------- 初始解压数
          let is_zip = 1;
          // ---------- 便利解压后的文件
          zip.forEach(function (relativePath, zipEntry) {
            // 2) print entries
            // ---------- 当前文件大小
            let file_size = zipEntry._data.uncompressedSize;
            // ---------- 判断文件大小是否为0
            if (file_size) {
              zipEntry.async("blob").then((file) => {
                let new_file = new File([file], relativePath);
                vue_obj.fileList.push(new_file);
                // vue_obj.$refs.upload.fileList.push(new_file);
              });
            }
          });
        },
        function (e) {
          console.log("error", e);
        }
      );
    },
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