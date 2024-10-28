import { Box, Button, Stack, Text, Title, getGradient } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import Section from './Section'

const CallToAction = () => {
	return (
		<Box
			className="w-full py-16"
			style={(theme) => ({
				backgroundImage: getGradient(
					{
						from: 'primary.0',
						to: 'violet.0',
						deg: 45,
					},
					theme,
				),
			})}
		>
			<Section id="cta">
				<Stack align="center" gap="xl">
					<Title ta="center">Ready to boost Your Productivity?</Title>
					<Text ta="center">
						Take your productivity to the next level with our powerful tools.
					</Text>
					<Button leftSection={<IconSparkles />} size="md">
						Get started in minutes
					</Button>
				</Stack>
			</Section>
		</Box>
	)
}

export default CallToAction
