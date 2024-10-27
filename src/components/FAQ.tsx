import { Accordion, Container, Stack, Title, Text, Anchor } from '@mantine/core'
import { Link } from '@tanstack/react-router'

const faqs = [
	{
		emoji: '🍎',
		value: 'Apples',
		description:
			'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
	},
	{
		emoji: '🍌',
		value: 'Bananas',
		description:
			'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
	},
	{
		emoji: '🥦',
		value: 'Broccoli',
		description:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
	{
		emoji: '🍋',
		value: 'Lemon',
		description:
			'Sour and tangy citrus fruit. Lemons are known for their high vitamin C content and are commonly used in cooking, baking, and beverages. They add a bright and refreshing flavor to dishes.',
	},
]

const FAQ = () => {
	return (
		<Stack id="faq" component="section" className="w-full">
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
	)
}

export default FAQ
