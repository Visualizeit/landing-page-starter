import {
	Avatar,
	Card,
	Group,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import Section from './Section'

interface Testimonial {
	name: string
	social: string
	quote: string
}

const testimonials1: Testimonial[] = [
	{
		name: 'Pomni',
		social: '@pomni',
		quote:
			"The mobile app is fantastic. I can manage our operations on-the-go, which has greatly improved our team's responsiveness.",
	},
	{
		name: 'Caine',
		social: '@caine',
		quote:
			'Security is paramount in our industry, and this platform has exceeded our expectations.',
	},
	{
		name: 'Jax',
		social: '@jax',
		quote:
			'The data insights provided by this tool have been game-changing for our decision-making process. We are now able to make informed decisions quickly.',
	},
]

const testimonials2: Testimonial[] = [
	{
		name: 'Ragatha',
		social: '@ragatha',
		quote:
			"The scalability of this platform is unmatched. It's grown with us every step of the way.",
	},
	{
		name: 'Gangle',
		social: '@gangle',
		quote:
			'The user interface is intuitive and clean. Our team was able to get up and running in no time. We are now able to focus on what matters most.',
	},
	{
		name: 'Kinger',
		social: '@kinger',
		quote:
			'The customer support team is top-notch. They are always available to help us when we need it.',
	},
]

const testimonials3: Testimonial[] = [
	{
		name: 'Zooble',
		social: '@zooble',
		quote:
			'The platform has helped us streamline our processes and increase our efficiency. We are now able to focus on what matters most.',
	},
	{
		name: 'Bubble',
		social: '@bubble',
		quote:
			' Incredible insights. The data provided by this platform has been invaluable to our team.',
	},
	{
		name: 'Gummigoo',
		social: '@gummigoo',
		quote:
			"We've been able to reduce our costs and improve our bottom line since implementing this tool. It's been a game-changer for us.",
	},
]

interface TestimonialCardProps {
	testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
	return (
		<Card key={testimonial.name} withBorder radius="lg">
			<Stack gap="sm">
				<Group>
					<Avatar color="primary" />
					<Stack gap={0}>
						<Title order={6}>{testimonial.name}</Title>
						<Text size="xs" c="gray">
							{testimonial.social}
						</Text>
					</Stack>
				</Group>
				<Text size="sm" pr="md">
					{testimonial.quote}
				</Text>
			</Stack>
		</Card>
	)
}

const Testimonials = () => {
	return (
		<Section id="testimonials">
			<Stack gap="xl">
				<Title ta="center">
					What people are saying
					<Text inherit span c="primary" ml="xs">
						:
					</Text>
				</Title>
				<SimpleGrid
					cols={{ base: 1, sm: 2, md: 3 }}
					spacing="xl"
					verticalSpacing="xl"
					className="self-center"
				>
					{[testimonials1, testimonials2, testimonials3].map(
						(testimonials, index) => (
							<Stack key={index} className="max-w-80" gap="xl">
								{testimonials.map((testimonial) => (
									<TestimonialCard
										key={testimonial.name}
										testimonial={testimonial}
									/>
								))}
							</Stack>
						),
					)}
				</SimpleGrid>
			</Stack>
		</Section>
	)
}

export default Testimonials
