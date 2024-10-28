import {
	Group,
	Stack,
	ThemeIcon,
	Title,
	Text,
	Anchor,
	Container,
} from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

const Footer = () => {
	return (
		<footer className="w-full">
			<Container size="xl">
				<Stack gap="sm" py="xl">
					<Group justify="space-between" align="center">
						<Stack gap="sm">
							<Group gap="xs">
								<ThemeIcon variant="transparent" size="lg">
									<IconSparkles className="size-full" />
								</ThemeIcon>
								<Title order={3}>Surpass</Title>
							</Group>
							<Text size="sm">
								© {new Date().getFullYear()} Surpass Studio. All Rights
								Reserved.
							</Text>
						</Stack>
						<Group align="start" gap="xl">
							<Stack gap="xs">
								<Title order={6}>Product</Title>
								<Anchor component={Link} c="gray" size="sm">
									All Features
								</Anchor>
								<Anchor component={Link} c="gray" size="sm">
									Release Notes
								</Anchor>
								<Anchor component={Link} c="gray" size="sm">
									Documentation
								</Anchor>
							</Stack>
							<Stack gap="xs">
								<Title order={6}>Support</Title>
								<Anchor component={Link} c="gray" size="sm">
									FAQ
								</Anchor>
								<Anchor component={Link} c="gray" size="sm">
									Privacy Policy
								</Anchor>
								<Anchor component={Link} c="gray" size="sm">
									Terms of Service
								</Anchor>
							</Stack>
						</Group>
					</Group>
				</Stack>
			</Container>
		</footer>
	)
}

export default Footer
