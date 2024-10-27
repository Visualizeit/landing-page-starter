import { Accordion, Container, Title, Text, Anchor, Stack } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import Section from './Section'

const faqs = [
	{
		emoji: '🍎',
		value: 'What are the benefits of apples?',
		description:
			'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
	},
	{
		emoji: '🥭',
		value: 'What is the best way to cut a mango?',
		description:
			'Mango is a tropical fruit with a sweet and tangy flavor. To cut a mango, slice off the sides of the fruit, avoiding the large pit in the center. Score the flesh in a crisscross pattern, then scoop out the cubes with a spoon.',
	},
	{
		emoji: '🥦',
		value: 'Why is broccoli good for you?',
		description:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
	{
		emoji: '🍋',
		value: 'Where do lemons get their sour taste?',
		description:
			'Sour and tangy citrus fruit. Lemons are known for their high vitamin C content and are commonly used in cooking, baking, and beverages. They add a bright and refreshing flavor to dishes.',
	},
]

const FAQ = () => {
	return (
		<Section id="faq">
			<Stack align="center">
				<Title ta="center">Frequently asked questions</Title>
				<Text ta="center">
					If you have additional questions, please feel free to{' '}
					<Anchor component={Link}>contact us.</Anchor>
				</Text>
				<Container size="sm" className="w-full">
					<Accordion className="w-full" variant="filled">
						{faqs.map((faq) => (
							<Accordion.Item key={faq.value} value={faq.value}>
								<Accordion.Control icon={faq.emoji}>
									{faq.value}
								</Accordion.Control>
								<Accordion.Panel>{faq.description}</Accordion.Panel>
							</Accordion.Item>
						))}
					</Accordion>
				</Container>
			</Stack>
		</Section>
	)
}

export default FAQ
