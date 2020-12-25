<template>
  <div class="projectManagement">
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400, 500]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="allData"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectManagement",
  components: {},
  props: {},
  data() {
    return {
      currentPage4: 1,
      dataNum: 100,
      pageNum: 1,
      allData: 700,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.dataNum = val;
      if (this.pageNum * this.dataNum - 1 < this.allData) {
        console.log(
          `页面条数当前页: ${(this.pageNum - 1) * this.dataNum} - ${
            this.pageNum * this.dataNum - 1
          }`
        );
      } else {
        console.log(123456);
      }
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(
        `页面数当前页: ${(this.pageNum - 1) * this.dataNum} - ${
          this.pageNum * this.dataNum - 1
        }`
      );
    },
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style>
.projectManagement {
  display: flex;
}
</style>