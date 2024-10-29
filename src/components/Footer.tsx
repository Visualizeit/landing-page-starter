import { Group, Stack, ThemeIcon, Title, Text, Anchor } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import Section from './Section'

const Footer = () => {
	return (
		<footer className="w-full">
			<Section>
				<Group justify="space-evenly" align="start">
					<Stack gap="sm">
						<Group gap="xs">
							<ThemeIcon variant="transparent" size="lg">
								<IconSparkles className="size-full" />
							</ThemeIcon>
							<Title order={3}>Surpass</Title>
						</Group>
						<Text c="gray" size="sm">
							© {new Date().getFullYear()} Surpass Studio.
						</Text>
					</Stack>
					<Stack gap="sm">
						<Title order={5}>Product</Title>
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
					<Stack gap="sm">
						<Title order={5}>Support</Title>
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
					<Stack gap="sm">
						<Title order={5}>About</Title>
						<Anchor component={Link} c="gray" size="sm">
							About Us
						</Anchor>
						<Anchor component={Link} c="gray" size="sm">
							Contact Us
						</Anchor>
					</Stack>
				</Group>
			</Section>
		</footer>
	)
}

export default Footer
