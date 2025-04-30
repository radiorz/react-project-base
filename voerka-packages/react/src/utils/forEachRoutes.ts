import { RouteObject } from "react-router";

export function forEachRoutes(routes: RouteObject[], callback: (route: RouteObject) => void): void {
    routes.forEach(route => {
        callback(route);
        if (route.children) {
            forEachRoutes(route.children, callback);
        }
    });
}
