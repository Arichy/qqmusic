<template>
  <div class="main-header">
    <div class="left-arrow">
      <i class="fas fa-angle-left icon"></i>
    </div>
    <div class="right-arrow">
      <i class="fas fa-angle-right icon"></i>
    </div>
    <div class="redo">
      <i class="fas fa-redo-alt icon"></i>
    </div>

    <div class="search_box">
      <div ref="magnifier" class="magnifier">
        <i class="fas fa-search icon"></i>
      </div>

      <input
        type="text"
        placeholder="搜索"
        class="search"
        ref="input"
        @focus="focusHandler"
        @blur="blurHandler"
      >
    </div>

    <div class="feedback">
      <i class="far fa-envelope icon"></i>
    </div>

    <div class="settings">
      <i class="fas fa-cog icon"></i>
    </div>

    <div class="resize">
      <i class="far fa-window-restore icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    focusHandler() {
      const oInput = this.$refs.input;
      const oMagnifier = this.$refs.magnifier;
      oMagnifier.classList.add("focus");
      oInput.classList.add("focus");
    },
    blurHandler() {
      this.$refs.input.classList.remove('focus');
      this.$refs.magnifier.classList.remove('focus');
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  height: 46px;
  border-bottom: 1px solid #e6e6e6;

  display: flex;
  align-items: center;

  > div {
    flex-grow: 0;
  }

  .left-arrow {
    margin-left: 16px;
    font-size: 20px;
    // color: #7b7b7b;
  }
  .right-arrow {
    margin-left: 20px;
    font-size: 20px;
    color: #e4e4e4;
  }

  .redo {
    margin-left: 18px;
    font-size: 13px;
  }

  .search_box {
    // background-color: red;
    display: flex;
    flex-grow: 1;
    .magnifier {
      font-size: 10px;
      // display: none;
      margin-left: 2px;
      // border: 1px solid #d3d3d3;
      // height: 20px;;
      display: flex;
      align-items: center;
      // color: #bbb;
      color: #444;
      transform: translateX(102px);
      // transform: translateX(18px);
    }

    .search {
      // margin-left: 14px;
      box-sizing: border-box;
      border: 1px solid #d3d3d3;
      background-color: #dfdfdf;
      border-radius: 20px;
      outline: none;
      height: 21px;
      width: 242px;

      padding-left: 110px;
      // padding-left: 23px;
    }

    .search::-webkit-input-placeholder {
      color: #696969;
    }

    .magnifier.focus {
      transform: translateX(18px) !important;
    }
    .search.focus {
      padding-left: 23px !important;
    }

    .magnifier,
    .search {
      transition: .3s;
    }
  }

  .search_box ~ div {
    margin-right: 20px;
    font-size: 15px;
  }
}
</style>
