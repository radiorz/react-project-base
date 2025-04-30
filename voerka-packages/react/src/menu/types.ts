// 原子类型
export type AtomType = string | number | boolean | null | undefined

export type RouteHashGenerator = (context: { location: Location; params: Record<string, AtomType> }) => string

//Required<MenuProps>['items'][number] &
export type MenuItem<Path = string> = {
    // 菜单项唯一标识，必须指定
    key: string
    // 显示页签或对话框的标题
    label: string | React.ReactNode
    // 页面路由路径
    path?: Path
    // 是否可见
    visible?: boolean
    // 菜单项图标
    icon?: React.ReactNode
    // 传递给路由的默认参数
    params?: string | Record<string, AtomType>
    // 当有子菜单项时是否默认展开
    expand?: boolean
    // 是否为默认路由,即在打开页面时默认打开的路由
    default?: boolean
    // 传递给路由的URL查询参数,如a=1&b=2,或{a:1,b:2}
    query?: string | Record<string, boolean | string | number>
    // 生成路由页面的Hash模式,该值决定了相同路由的页面,当query/params等产一致时如何打开页签
    // {path}:    默认值,等效于hash="{path}"",如果是带参数的路由,则不同参数的路由会被认为是不同的页面
    //           如post/:id,post/1和post/2会被认为是不同的页面,这样可以在不同的页签面中打开
    // {new}:      代表总是在新页面中打开,此时等效于"{path}{key}"
    // {params}:   如果想让带参数的路由在同一个页签中打开,如post/:id,post/1和post/2均在同一个页面中打开
    //           等效于'{path}{params}
    // {<string>}:  自定义hash,可选插值变量:
    //            {path}=路径, {query}=查询参数即?xxx=xxx
    //            {key}=路由访问hash键,每次访问均不一样,当hash中包含{key}总是会在新页面中打开
    //            {params}=路由路径参数,
    //            {<参数名称>}=路由路径参数中的一个,例如,如post/:user/:id,则{user}和{id}均为参数名称
    //             如果配置hash=`{path}{user}`,则代表不同用户的post/1会被认为是不同的页面,相同用户不同id则会被认为是同一个页面
    // {Function({location,params})}: 自定义hash函数返回字符串hash,参数为当前路由的location和params
    hash?: 'path' | 'new' | 'params' | string | RouteHashGenerator
    // 打开路由页面的页签位置
    tabPos?: 'before' | 'after' | 'active-before' | 'active-after' | 'active'
    // 是否显示在底部
    bottom?: boolean
    // 子菜单
    children?: MenuItem[]
}

export type NormalizedMenuItem = MenuItem