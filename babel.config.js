// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: false,
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "taro-hooks",
        camel2DashComponentName: false,
      },
      "taro-hooks",
    ],
    [
      "import",
      {
        libraryName: "@nutui/nutui-biz",
        libraryDirectory: "dist/esm",
        style: true,
        camel2DashComponentName: false,
      },
      "nutui-biz",
    ],
    [
      "import",
      {
        libraryName: "@nutui/nutui-react-taro",
        libraryDirectory: "dist/esm",
        style: "css",
        camel2DashComponentName: false,
      },
      "nutui-react-taro",
    ],
  ],
};
