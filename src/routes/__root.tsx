import { createRootRoute, Outlet } from '@tanstack/react-router'

const AppRoot = () => <Outlet />

export const Route = createRootRoute({
	component: AppRoot,
})
