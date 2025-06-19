# 切换主题模式。

## 模式

一种就是固定亮
固定暗
一种是跟随系统

## tailwindcss 的方式是修改 class 或者 html的 data-theme 属性

```typescript
export function toggleTheme(theme: ) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark' ||
      (!'theme' && window.matchMedia('(prefers-color-scheme: dark)').matches),
  );
}
```
