import { AppShell } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/Header'

const AppLayout = () => {
	const [scroll] = useWindowScroll()

	return (
		<AppShell
			className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
			withBorder={false}
			header={{ height: 56 }}
		>
			<AppShell.Header
				className="bg-transparent backdrop-blur-lg"
				withBorder
				classNames={{
					header: scroll.y === 0 ? 'border-b-transparent' : undefined,
				}}
			>
				<Header />
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}

export const Route = createFileRoute('/_layout')({ component: AppLayout })
