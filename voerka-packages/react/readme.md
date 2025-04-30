

# Question

##  Q: 为什么不使用`@`别名来引用源码根而便用丑陋的相对引用方式？

因为在`monorepo`工程中，当`templates/react`中引用本工程时使用的是`templates/react/tsconfig.json`，而`packages/react`中引用本工程时使用的是`packages/react/tsconfig.json`，如果在两处均配置了`@`指向，这样就会导致`@`别名分别指向在的是不同的位置。
当运行`templates/react`时，`@`指向`templates/react`，而`packages/react`中引用`@`时，`@`指向`packages/react`，这样就会导致`@`别名指向不一致，导致引用错误。

如果使用相对引用方式，就不会有这个问题，因为相对引用是相对于当前文件的路径，不会受到`tsconfig.json`配置的影响。

如果`templates/react`引用的是编译后的`packages/react`，那么可以使用`@`别名，因为编译后的代码不会受到`tsconfig.json`配置的影响。


