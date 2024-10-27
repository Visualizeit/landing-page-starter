import { Accordion, Container, Title, Text, Anchor, Stack } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import Section from './Section'

const faqs = [
	{
		emoji: '🍎',
		question: 'What are the benefits of apples?',
		answer:
			'Apples are a good source of fiber and vitamin C. They also contain antioxidants that help protect your cells from damage.',
	},
	{
		emoji: '🥭',
		question: 'What is the best way to cut a mango?',
		answer:
			'The best way to cut a mango is to slice off the sides, score the flesh, and then scoop it out with a spoon.',
	},
	{
		emoji: '🥦',
		question: 'Why is broccoli good for you?',
		answer:
			'Broccoli is high in fiber, vitamin C, and other nutrients that help support a healthy immune system.',
	},
	{
		emoji: '🍋',
		question: 'Where do lemons get their sour taste?',
		answer:
			'Lemons get their sour taste from citric acid, which is a natural compound found in many fruits.',
	},
]

const FAQ = () => {
	return (
		<Section id="faq">
			<Stack align="center">
				<Title ta="center">Frequently asked questions</Title>
				<Container size="sm" className="w-full">
					<Accordion className="w-full" variant="filled">
						{faqs.map((faq) => (
							<Accordion.Item key={faq.question} value={faq.question}>
								<Accordion.Control icon={faq.emoji}>
									{faq.question}
								</Accordion.Control>
								<Accordion.Panel>{faq.answer}</Accordion.Panel>
							</Accordion.Item>
						))}
					</Accordion>
				</Container>
				<Text size="sm" c="gray" ta="center">
					Have additional questions?{' '}
					<Anchor component={Link} c="gray" underline="always">
						contact us
					</Anchor>
					.
				</Text>
			</Stack>
		</Section>
	)
}

export default FAQ
