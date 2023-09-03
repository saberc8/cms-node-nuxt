declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module '@wangeditor/editor' {
  // 扩展 Text
  interface SlateText {
      text: string
  }

  // 扩展 Element
  interface SlateElement {
      type: string
      children: SlateDescendant[]
  }
}
