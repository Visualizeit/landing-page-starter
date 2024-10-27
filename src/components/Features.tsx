import { Card, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import Section from './Section'
import placeholderImage from '@/assets/placeholderImage'

const features = [
	{
		title: 'Intuitive Dashboard',
		description: `Get a bird's-eye view of your project progress with our easy-to-use dashboard. Track tasks, milestones, and team performance at a glance.`,
		image: placeholderImage,
	},
	{
		title: 'Real-time Collaboration',
		description:
			'Work seamlessly with your team in real-time. Edit documents, share ideas, and communicate instantly, no matter where you are.',
		image: placeholderImage,
	},
	{
		title: 'Advanced Analytics',
		description:
			'Make data-driven decisions with our powerful analytics tools. Gain insights into your project metrics and optimize your workflow.',
		image: placeholderImage,
	},
	{
		title: 'Secure File Sharing',
		description: `Share files with confidence using our enterprise-grade security. Control access, set permissions, and track file history effortlessly.`,
		image: placeholderImage,
	},
]

const Features = () => {
	return (
		<Section id="features">
			<Stack gap="xl">
				<Title ta="center">Where magic meets simplicity</Title>
				<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
					{features.map((feature) => (
						<Card key={feature.title} radius="lg" padding="lg">
							<Stack>
								<Title order={3}>{feature.title}</Title>
								<Text>{feature.description}</Text>
								<Image
									className="aspect-[4/3]"
									radius="lg"
									src={feature.image}
									alt={feature.title}
								/>
							</Stack>
						</Card>
					))}
				</SimpleGrid>
			</Stack>
		</Section>
	)
}

export default Features
