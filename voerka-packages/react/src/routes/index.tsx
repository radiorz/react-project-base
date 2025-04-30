import { Fragment, Suspense } from 'react'
import { createBrowserRouter, createMemoryRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import type { ActionFunction, RouteObject, LoaderFunction } from 'react-router-dom'
import { generateModalRoutes, generatePreservedRoutes, generateRegularRoutes } from '@generouted/react-router/core'
import { forEachRoutes } from '../utils/forEachRoutes'

let pageId = 0

type Element = () => JSX.Element
type Module = { default: Element; Loader?: LoaderFunction; Action?: ActionFunction; Catch?: Element; Pending?: Element }

const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', { eager: true })
const MODALS = import.meta.glob<Pick<Module, 'default'>>('/src/pages/**/[+]*.{jsx,tsx}', { eager: true })
const ROUTES = import.meta.glob<Module>(['/src/pages/**/[\\w[-]*.{jsx,tsx}', '!**/(_app|404).*'], { eager: true })

const preservedRoutes = generatePreservedRoutes<Omit<Module, 'Action'>>(PRESERVED)
const modalRoutes = generateModalRoutes<Element>(MODALS)
const ExternalRoutes: any[] = []
// 导入内置的页面路由 暂时没有内置的页面如果需要在这里添加.
// importInlinePages(ROUTES, ExternalRoutes)

const regularRoutes = generateRegularRoutes<RouteObject, Partial<Module>>(ROUTES, (module, key) => {
    const index = /index\.(jsx|tsx)$/.test(key) && !key.includes('pages/index') ? { index: true } : {}
    const Element = module?.default || Fragment
    const Page = () => {
        return module?.Pending ? (
            <Suspense fallback={<module.Pending />}>
                <Element />
            </Suspense>
        ) : (
            <Element />
        )
    }
    // 每个页面提供唯一的id, 页面通过Meta提供额外的元数据
    const pageMeta = Object.assign({ id: ++pageId }, (module as any)?.Meta || {})
    return { ...index, Component: Page, ErrorBoundary: module?.Catch, loader: module?.Loader, action: module?.Action, meta: pageMeta }
})

const _app = preservedRoutes?.['_app']
const _404 = preservedRoutes?.['404']

const Element = _app?.default || Fragment
const App = () =>
    _app?.Pending ? (
        <Suspense fallback={<_app.Pending />}>
            <Element />
        </Suspense>
    ) : (
        <Element />
    )

const app = { Component: _app?.default ? App : Outlet, ErrorBoundary: _app?.Catch, loader: _app?.Loader }
const fallback = { path: '*', Component: _404?.default || Fragment }

export interface RoutesOptions {
    basename?: string
}

export const routes: RouteObject[] = [
    {
        ...app,
        children: [...regularRoutes, fallback],
    },
    ...ExternalRoutes,
]

if (import.meta.env.MODE === 'development') {
    forEachRoutes(routes, (route) => {
        console.log(`[Route] id= ${route.id}, path= ${route.path}`)
    })
}
export const Routes = (options?: RoutesOptions & { mode: 'memory' }) => {
    const { mode, ...routeOptions } = options || {}
    return <RouterProvider router={mode === 'memory' ? createMemoryRouter(routes, routeOptions) : createBrowserRouter(routes, routeOptions)} />
}

export const Modals = () => {
    const Modal = modalRoutes[useLocation().state?.modal] || Fragment
    return <Modal />
}
