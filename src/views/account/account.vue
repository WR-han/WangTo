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
      :on-change="chooseFile"
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

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="fileName" label="文件名称"> </el-table-column>
      <el-table-column prop="fileSize" label="文件大小" width="180">
      </el-table-column>
      <el-table-column prop="fileState" label="文件状态" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import JSZip from "jszip";
import { PutZipFile } from "@/network/dataManagement.js";
export default {
  name: "account",
  components: {},
  props: {},
  data() {
    return {
      // fileList: [],
      abc: 123,
      fileList: [],
      allTableData: [],
      tableData: [],
    };
  },
  methods: {
    submitUpload() {
      console.log(123456);
      console.log(this.allTableData);

      this.allTableData.forEach((item) => {
        let formData = new FormData();
        console.log(item);
        // formData.append("files", item.file);
        PutZipFile(
          item.fileName,
          item.file,
          "q-sign-algorithm=sha1&q-ak=AKIDahmXIGCShOq57Mr202KPJ1TN8EG7I9QQ&q-sign-time=1608802635;1608806235&q-key-time=1608802635;1608806235&q-header-list=&q-url-param-list=&q-signature=2a3ab9c99254ec7837a3b181d32703fa3b44414f",
          "image/jpg"
        ).then(
          (suc) => {
            console.log(suc);
          },
          (err) => {
            console.log(err);
          }
        );
        // console.log(formData)
      });

      // console.log(formData)

      // axios
      //   .put({
      //     url: `https://demo1-1302289492.cos.ap-nanjing.myqcloud.com/demo1/留学ewm.png`,
      //     headers: [
      //       {
      //         Authorization:
      //           "q-sign-algorithm=sha1&q-ak=AKIDahmXIGCShOq57Mr202KPJ1TN8EG7I9QQ&q-sign-time=1608794942;1608798542&q-key-time=1608794942;1608798542&q-header-list=&q-url-param-list=&q-signature=addbfe7a67d01c9ad1ab721025e549a3e7247713",
      //       },
      //       {
      //         "Content-Type": "image/png",
      //       },
      //     ],
      //     data: {
      //       File: formData,
      //     },
      //   })
      //   .then(
      //     (suc) => {
      //       console.log(suc);
      //     },
      //     (err) => {
      //       console.log(err);
      //     }
      //   );
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
    chooseFile(file, fileList) {
      this.handleFile(file.raw);
      // console.log("on-change", file);
      // console.log(this.$refs);
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
                console.log(new_file);
                vue_obj.allTableData.push({
                  fileName: new_file.name,
                  fileSize: `${new_file.size}KB`,
                  fileState: "解压成功",
                  file:new_file
                });
                vue_obj.tableData = vue_obj.allTableData.slice(0, 10);
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