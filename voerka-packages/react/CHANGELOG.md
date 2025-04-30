# @voerka/react

## 2.0.18

### Patch Changes

-   376815a: 创建 autostore 时将 app.options.debug 传入，以便可以使用@autostorejs/devtools 进行调试
-   Updated dependencies [376815a]
    -   @voerka/core@2.0.16
    -   @voerka/browser@2.0.18

## 2.0.17

### Patch Changes

-   Updated dependencies [fb49716]
    -   @voerka/core@2.0.15
    -   @voerka/browser@2.0.17

## 2.0.16

### Patch Changes

-   d8247b2: 升级 autostore 依赖
-   Updated dependencies [d8247b2]
    -   @voerka/core@2.0.14
    -   @voerka/browser@2.0.16

## 2.0.15

### Patch Changes

-   Updated dependencies [361984e]
    -   @voerka/core@2.0.13
    -   @voerka/browser@2.0.15

## 2.0.14

### Patch Changes

-   Updated dependencies [7321a8e]
    -   @voerka/core@2.0.12
    -   @voerka/browser@2.0.14

## 2.0.13

### Patch Changes

-   Updated dependencies [9a3b63e]
    -   @voerka/browser@2.0.13

## 2.0.12

### Patch Changes

-   Updated dependencies [3cadc94]
    -   @voerka/core@2.0.11
    -   @voerka/browser@2.0.12

## 2.0.11

### Patch Changes

-   Updated dependencies [7df4ae0]
    -   @voerka/browser@2.0.11
    -   @voerka/core@2.0.10

## 2.0.10

### Patch Changes

-   Updated dependencies [d86e477]
    -   @voerka/core@2.0.9
    -   @voerka/browser@2.0.10

## 2.0.9

### Patch Changes

-   Updated dependencies [fe37383]
    -   @voerka/browser@2.0.9

## 2.0.8

### Patch Changes

-   41629af: 修复@voerka/browser 导出错误
-   Updated dependencies [41629af]
    -   @voerka/browser@2.0.8
    -   @voerka/core@2.0.8

## 2.0.7

### Patch Changes

-   d236e84: 更新版本绑定策略
-   Updated dependencies [d236e84]
    -   @voerka/browser@2.0.7
    -   @voerka/core@2.0.7

## 2.0.6

### Patch Changes

-   4dff418: 更新优化配置功能
-   Updated dependencies [4dff418]
    -   @voerka/browser@2.0.6
    -   @voerka/core@2.0.5

## 2.0.5

### Patch Changes

-   e0f644b: fix release
    -   @voerka/browser@2.0.5

## 2.0.3

### Patch Changes

-   Updated dependencies [4661a11]
    -   @voerka/browser@2.0.3
    -   @voerka/core@2.0.3
    -   @voerka/exchange@2.0.3
    -   @voerka/fiber@2.0.3

## 2.0.2

### Patch Changes

-   82ddb77: [特性 ✈️] 新增加模块装饰器`computed`，用来在模块中声明一个属性，其值来自`state`的计算

    以下示例中，`c`属性的值是`state.a+state.b`的计算结果，当`a`或`b`发生变化时，`c`会自动更新

    ```ts
    @Module({ observable: true })
    class MyModule extends ModuleBase {
        state = { a: 1, b: 2 };
        @computed((state) => {
            fn();
            return state.a + state.b;
        })
        c: number = 3;
    }
    ```

    [特性 ✈️] 新增加模块装饰器`watch`，用来在模块中声明一个属性，其值来自`state`的计算

    ```ts
    @Module({ observable: true })
    class MyModule extends ModuleBase {
        state = { a: 1, b: 2 };
        @watch('a')
        onState(value) {
            console.log('a change to', value);
        }
    }
    ```

    [特性 ✈️] `appserver`现在暴露出`httpsever`对象

-   Updated dependencies [82ddb77]
    -   @voerka/exchange@2.0.2
    -   @voerka/browser@2.0.2
    -   @voerka/fiber@2.0.2
    -   @voerka/core@2.0.2

## 2.0.1

### Patch Changes

-   8dcbd39: update
-   Updated dependencies [8dcbd39]
    -   @voerka/exchange@2.0.1
    -   @voerka/browser@2.0.1
    -   @voerka/fiber@2.0.1
    -   @voerka/core@2.0.1

## 2.0.0

### Minor Changes

-   257d7a1: 引入 AutoStore 并新增加 appserver

### Patch Changes

-   Updated dependencies [257d7a1]
    -   @voerka/core@2.0.0
    -   @voerka/browser@2.0.0
    -   @voerka/exchange@2.0.0
    -   @voerka/fiber@2.0.0

## 1.0.25

### Patch Changes

-   Updated dependencies [b1ef0bf]
    -   @voerka/core@1.0.25
    -   @voerka/browser@1.0.25
    -   @voerka/exchange@1.0.25
    -   @voerka/fiber@1.0.25
    -   @voerka/zustand@1.0.25

## 1.0.24

### Patch Changes

-   Updated dependencies [9adff4f]
    -   @voerka/core@1.0.24
    -   @voerka/browser@1.0.24
    -   @voerka/exchange@1.0.24
    -   @voerka/fiber@1.0.24
    -   @voerka/zustand@1.0.24

## 1.0.23

### Patch Changes

-   Updated dependencies [e53317e]
    -   @voerka/core@1.0.23
    -   @voerka/browser@1.0.23
    -   @voerka/exchange@1.0.23
    -   @voerka/fiber@1.0.23
    -   @voerka/zustand@1.0.23

## 1.0.22

### Patch Changes

-   607a02e: add appserver
-   Updated dependencies [607a02e]
    -   @voerka/browser@1.0.22
    -   @voerka/core@1.0.22
    -   @voerka/exchange@1.0.22
    -   @voerka/fiber@1.0.22
    -   @voerka/zustand@1.0.22

## 1.0.21

### Patch Changes

-   bcbf7bf: 升级 flex-tools 依赖至 1.4.0
-   Updated dependencies [bcbf7bf]
    -   @voerka/exchange@1.0.21
    -   @voerka/zustand@1.0.21
    -   @voerka/fiber@1.0.21
    -   @voerka/core@1.0.21
    -   @voerka/browser@1.0.21

## 1.0.20

### Patch Changes

-   2a29360: update deps
-   Updated dependencies [2a29360]
    -   @voerka/browser@1.0.20
    -   @voerka/core@1.0.20
    -   @voerka/exchange@1.0.20
    -   @voerka/fiber@1.0.20
    -   @voerka/zustand@1.0.20

## 1.0.19

### Patch Changes

-   ece5f9f: 统一模块的生命周期方法命名
-   c5d0a7f: update
-   Updated dependencies [ece5f9f]
-   Updated dependencies [c5d0a7f]
    -   @voerka/exchange@1.0.19
    -   @voerka/zustand@1.0.19
    -   @voerka/core@1.0.19
    -   @voerka/browser@1.0.19
    -   @voerka/fiber@1.0.19

## 1.0.18

### Patch Changes

-   2296965: 修复未编译发布的问题
-   Updated dependencies [2296965]
    -   @voerka/exchange@1.0.18
    -   @voerka/zustand@1.0.18
    -   @voerka/core@1.0.18
    -   @voerka/browser@1.0.18
    -   @voerka/fiber@1.0.18

## 1.0.17

### Patch Changes

-   072000a: 修复包未构建就发布的问题
-   Updated dependencies [072000a]
    -   @voerka/browser@1.0.17
    -   @voerka/core@1.0.17
    -   @voerka/exchange@1.0.17
    -   @voerka/fiber@1.0.17
    -   @voerka/zustand@1.0.17

## 1.0.16

### Patch Changes

-   47c75c8: fix error
-   Updated dependencies [47c75c8]
    -   @voerka/browser@1.0.16
    -   @voerka/core@1.0.16
    -   @voerka/exchange@1.0.16
    -   @voerka/fiber@1.0.16
    -   @voerka/zustand@1.0.16

## 1.0.15

### Patch Changes

-   492e6c7: 修复一些错误
-   Updated dependencies [492e6c7]
    -   @voerka/browser@1.0.15
    -   @voerka/core@1.0.15
    -   @voerka/exchange@1.0.15
    -   @voerka/fiber@1.0.15
    -   @voerka/zustand@1.0.15

## 1.0.14

### Patch Changes

-   6880c46: 统一 app 和模块生命周期事件的命名方式
-   Updated dependencies [6880c46]
    -   @voerka/exchange@1.0.14
    -   @voerka/browser@1.0.14
    -   @voerka/fiber@1.0.14
    -   @voerka/core@1.0.14
    -   @voerka/zustand@1.0.14

## 1.0.13

### Patch Changes

-   a5dc720: 更新 electron
-   Updated dependencies [a5dc720]
    -   @voerka/exchange@1.0.13
    -   @voerka/fiber@1.0.13
    -   @voerka/core@1.0.13
    -   @voerka/browser@1.0.13
    -   @voerka/zustand@1.0.13

## 1.0.12

### Patch Changes

-   0dda4cd: 引入 flexstyled 重构 CSS 方案
    -   @voerka/core@1.0.12
    -   @voerka/browser@1.0.12
    -   @voerka/fiber@1.0.12
    -   @voerka/zustand@1.0.12
    -   @voerka/exchange@1.0.12

## 1.0.11

### Patch Changes

-   e9d6118: update
-   d9b7eee: 更新依赖
-   c5a249c: update
-   Updated dependencies [e9d6118]
-   Updated dependencies [d9b7eee]
-   Updated dependencies [c5a249c]
    -   @voerka/fiber@1.0.11
    -   @voerka/core@1.0.11
    -   @voerka/browser@1.0.11
    -   @voerka/zustand@1.0.11
    -   @voerka/exchange@1.0.11

## 1.0.10

### Patch Changes

-   aaf5a22: 移除 react 包里面对@voerka/fiber 的默认引用
    -   @voerka/core@1.0.10
    -   @voerka/browser@1.0.10

## 1.0.9

### Patch Changes

-   aa08e48: 优化依赖
-   Updated dependencies [aa08e48]
    -   @voerka/browser@1.0.9
    -   @voerka/core@1.0.9

## 1.0.8

### Patch Changes

-   0adf611: 优化依赖
-   Updated dependencies [0adf611]
    -   @voerka/browser@1.0.8
    -   @voerka/core@1.0.8

## 1.0.7

### Patch Changes

-   577aeb0: 修复当运行 voerka init 时执行 git remote remove origin 可能出错的问题
-   Updated dependencies [577aeb0]
    -   @voerka/browser@1.0.7
    -   @voerka/core@1.0.7

## 1.0.6

### Patch Changes

-   9efa158: update electron template
-   Updated dependencies [9efa158]
    -   @voerka/browser@1.0.6
    -   @voerka/core@1.0.6

## 1.0.5

### Patch Changes

-   ae457c5: 更新版本号依赖
-   Updated dependencies [ae457c5]
    -   @voerka/browser@1.0.5
    -   @voerka/core@1.0.5

## 1.0.3

### Patch Changes

-   23a7edd: 修复 VoerkaContainer 导出问题

## 1.0.2

### Patch Changes

-   a6a8b91: 修复构建错误
-   Updated dependencies [a6a8b91]
    -   @voerka/core@1.0.2
    -   @voerka/browser@1.0.2

## 1.0.1

### Patch Changes

-   6e0c4ec: 更新发布脚本
-   Updated dependencies [6e0c4ec]
    -   @voerka/browser@1.0.1
    -   @voerka/zustand@1.0.1
    -   @voerka/core@1.0.1
