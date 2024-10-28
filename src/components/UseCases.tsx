import {
	Grid,
	Image,
	SegmentedControl,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import { invariant } from '@tanstack/react-router'
import { useState } from 'react'
import Section from './Section'
import placeholderImage from '@/assets/placeholderImage'

const useCases = [
	{
		title: 'Custom Integration',
		description: 'Seamlessly integrate with your existing tools and workflows.',
		image: placeholderImage,
	},
	{
		title: 'Predictive Analytics',
		description:
			'Utilize historical data to forecast future trends and behaviors.',
		image: placeholderImage,
	},
	{
		title: 'Automated Reporting',
		description:
			'Generate reports automatically to save time and improve accuracy.',
		image: placeholderImage,
	},
	{
		title: 'Data Security',
		description: 'Implement measures to protect user data and ensure privacy.',
		image: placeholderImage,
	},
]

const UseCases = () => {
	const firstUseCase = useCases[0]

	invariant(firstUseCase, 'No use cases found')

	const [value, setValue] = useState(firstUseCase.title)

	const currentUseCase = useCases.find((useCase) => useCase.title === value)

	invariant(currentUseCase, 'No use case found')

	return (
		<Section id="features">
			<Grid align="center" gutter="xl">
				<Grid.Col span={{ base: 12, md: 4 }}>
					<SegmentedControl
						className="w-full"
						orientation="vertical"
						radius="lg"
						value={value}
						onChange={setValue}
						data={useCases.map((useCase) => ({
							label: (
								<Stack gap="xs">
									<Title order={4}>{useCase.title}</Title>
									<Text size="sm" className="text-wrap">
										{useCase.description}
									</Text>
								</Stack>
							),
							value: useCase.title,
						}))}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Image
						className="aspect-video"
						radius="lg"
						src={currentUseCase.image}
						alt={currentUseCase.title}
					/>
				</Grid.Col>
			</Grid>
		</Section>
	)
}

export default UseCases
