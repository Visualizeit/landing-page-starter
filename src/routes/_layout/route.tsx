import { AppShell } from '@mantine/core'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const AppLayout = () => {
	return (
		<AppShell withBorder={false} header={{ height: 56 }}>
			<AppShell.Header className="bg-transparent backdrop-blur-lg">
				<Header />
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
			<AppShell.Footer>
				<Footer />
			</AppShell.Footer>
		</AppShell>
	)
}

export const Route = createFileRoute('/_layout')({ component: AppLayout })
