import {
	AppShell,
	Button,
	Container,
	Group,
	ThemeIcon,
	Title,
} from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

const AppLayout = () => {
	return (
		<AppShell padding="md" withBorder={false} header={{ height: 56 }}>
			<AppShell.Header className="bg-transparent backdrop-blur-lg">
				<Container className="h-full" size="xl">
					<Group className="h-full" align="center" justify="space-between">
						<Link to="/">
							<Group gap="xs">
								<ThemeIcon variant="transparent" size="lg">
									<IconSparkles className="size-full" />
								</ThemeIcon>
								<Title order={3}>Surpass</Title>
							</Group>
						</Link>
						<Group>
							<Link to="/">
								<Button variant="subtle">Log in</Button>
							</Link>
							<Link to="/">
								<Button leftSection={<IconSparkles />}>Get Started</Button>
							</Link>
						</Group>
					</Group>
				</Container>
			</AppShell.Header>
			<AppShell.Main className="flex">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}

export const Route = createFileRoute('/_layout')({ component: AppLayout })
