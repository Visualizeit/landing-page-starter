import { Button, Container, Group, ThemeIcon, Title } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

const Header = () => {
	return (
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
	)
}

export default Header
