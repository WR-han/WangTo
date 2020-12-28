<template>
  <div class="HomeEcharts">
    <div :id="chartsName" class="chartsStyle"></div>
  </div>
</template>

<script>
export default {
  name: "HomeEcharts",
  components: {},
  props: {
    chartsName: {
      type: String,
      default: "数据",
    },
    chartsData: {
      type: Array,
      default: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" },
      ],
    },
  },
  data() {
    return {
      legendArr: this.chartsData.forEach((data) => {
        return data.name;
      }),
    };
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById(`${this.chartsName}`)
      );

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{c} / {d}%",
        },
        color: ["#00D7FE", "#43FFEE", "#32FFBE"],
        legend: {
          orient: "vertical",
          right: "4%",
          data: this.legendArr,
          textStyle: {
            color: "#1cdecd",
          },
          formatter: (name) => {
            var nowValue = null;
            this.chartsData.forEach((data) => {
              if (data.name == name) {
                nowValue = data.value;
              }
            });

            return `${name} / ${nowValue}`;
          },
        },
        series: [
          {
            name: this.chartsName,
            type: "pie",
            center: ["30%", "50%"],
            radius: ["50%", "85%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.chartsData,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
.HomeEcharts {
  display: flex;
  transition: 0.5s;
}

.chartsStyle {
  width: 100%;
  height: 220px;
  opacity: 0.7;
  transition: 0.5s;
}

.chartsStyle:hover {
  opacity: 1;
}
</style>