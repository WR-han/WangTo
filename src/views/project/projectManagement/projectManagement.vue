<template>
  <div class="projectManagement">
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400,500]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="700"
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
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.projectManagement {
  display: flex;
}
</style>