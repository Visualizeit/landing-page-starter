import {
	Container,
	SimpleGrid,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core'
import { IconBolt, IconRocket, IconShieldBolt } from '@tabler/icons-react'
import Section from './Section'

const USP = () => {
	return (
		<Section id="usp">
			<Stack align="center" gap="xl">
				<Title>Revolutionize your workflow</Title>
				<Container size="sm">
					<Text ta="center" c="gray">
						We offer innovative solutions to help your business grow rapidly.
						Explore our core features and discover how we can drive your
						success.
					</Text>
				</Container>
				<Container size="lg">
					<SimpleGrid cols={3} spacing="xl">
						<Stack>
							<ThemeIcon variant="light" radius="xl" size="xl">
								<IconBolt />
							</ThemeIcon>
							<Title order={4}>Rapid Deployment</Title>
							<Text size="sm" c="gray">
								Our solutions can be deployed in minutes, allowing you to start
								using them right away.
							</Text>
						</Stack>
						<Stack>
							<ThemeIcon variant="light" radius="xl" size="xl">
								<IconShieldBolt />
							</ThemeIcon>
							<Title order={4}>Secure and Reliable</Title>
							<Text size="sm" c="gray">
								We use cutting-edge security technology to ensure your data is
								always protected.
							</Text>
						</Stack>
						<Stack>
							<ThemeIcon variant="light" radius="xl" size="xl">
								<IconRocket />
							</ThemeIcon>
							<Title order={4}>Continuous Innovation</Title>
							<Text size="sm" c="gray">
								We constantly update and improve our products to keep you ahead
								of the competition.
							</Text>
						</Stack>
					</SimpleGrid>
				</Container>
			</Stack>
		</Section>
	)
}

export default USP
