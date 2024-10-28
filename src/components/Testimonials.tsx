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
	title: string
	quote: string
}

const testimonials1: Testimonial[] = [
	{
		name: 'John Doe',
		title: 'CEO, Company Inc.',
		quote:
			'Your product is exactly what we needed. It has been a pleasure working with your team.',
	},
	{
		name: 'Jane Smith',
		title: 'CTO, Tech Solutions',
		quote:
			'I have been using your product for a while now and I am very impressed with the results.',
	},
]

const testimonials2: Testimonial[] = [
	{
		name: 'Michael Brown',
		title: 'Marketing Director',
		quote:
			'The impact of your product on our marketing strategy has been transformative. Thank you!',
	},
	{
		name: 'Emily White',
		title: 'Product Manager',
		quote:
			'Your product has streamlined our processes and improved our team’s efficiency significantly.',
	},
]

const testimonials3: Testimonial[] = [
	{
		name: 'David Wilson',
		title: 'Founder, StartUp XYZ',
		quote:
			'Your support and product have been critical in our early success. We couldn’t have done it without you!',
	},
	{
		name: 'Sarah Johnson',
		title: 'Lead Designer, Design Co.',
		quote:
			'The innovative features of your product have truly elevated our design workflow.',
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
							{testimonial.title}
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
				<Title ta="center">What our users are saying</Title>
				<SimpleGrid
					cols={{ base: 1, sm: 2, md: 3 }}
					spacing="xl"
					className="self-center"
				>
					{[testimonials1, testimonials2, testimonials3].map(
						(testimonials, index) => (
							<Stack
								key={index}
								visibleFrom={
									index === 0 ? undefined : index === 1 ? 'sm' : 'md'
								}
								className="max-w-72"
							>
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
