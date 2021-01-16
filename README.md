# Rollup脚手架
> 基本说明：rollup适合于适用于编译函数库、组件库. 在构建一些应用程序的时候，特别是代码拆分和运行时态的动态导入 `dynamic imports at runtime`，Webpack可能更适合

## 构建过程
```
npm i

# 开发
npm run dev

# 打包构建
npm run build
```

> 配置中会打包成三种类型包: 1. dist/ (umd) 2. lib/ (cjs) 3. es/ (esm)