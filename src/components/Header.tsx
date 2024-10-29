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
				<Button
					hiddenFrom="xs"
					variant="subtle"
					renderRoot={(props) => <Link to="/" {...props} />}
				>
					Get Started
				</Button>
				<Group visibleFrom="xs">
					<Button
						variant="subtle"
						renderRoot={(props) => <Link to="/" {...props} />}
					>
						Log in
					</Button>
					<Button
						leftSection={<IconSparkles />}
						renderRoot={(props) => <Link to="/" {...props} />}
					>
						Get Started
					</Button>
				</Group>
			</Group>
		</Container>
	)
}

export default Header
