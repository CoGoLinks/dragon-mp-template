const path = require("path");

const config = {
  // 项目名称
  projectName: "龙年Taro模板", // 替换为自己的项目名称
  // 项目创建日期
  date: "2023-02-22",
  // 设计稿尺寸
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, "/").indexOf("@nutui") > -1) {
      return 375;
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750;
  },
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  // 项目源码目录
  sourceRoot: "src",
  // 项目产出目录
  outputRoot: "dist",
  // Taro 插件配置
  plugins: ["@tarojs/plugin-html"],
  // 全局变量设置
  defineConstants: {},
  // 文件 copy 配置
  copy: {
    patterns: [],
    options: {},
  },
  // 框架，react，nerv，vue, vue3 等
  framework: "react",
  // compiler: "webpack5",
  compiler: {
    type: "webpack5",
    prebundle: { enable: false },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
    "@/pages": path.resolve(__dirname, "..", "src/pages"),
    "@/enum": path.resolve(__dirname, "..", "src/enum"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/images": path.resolve(__dirname, "..", "src/images"),
    "@/store": path.resolve(__dirname, "..", "src/store"),
    "package": path.resolve(__dirname, "..", "package.json"),
  },
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ["nut-"],
        },
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  // H5 端专用配置
  h5: {
    // esnextModules: ['nutui-react'],
    publicPath: "/taro-h5-app/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
