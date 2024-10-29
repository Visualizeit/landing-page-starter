import { Box, Button, Stack, Text, Title } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import Section from './Section'

const CallToAction = () => {
	return (
		<Box className="w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] py-16">
			<Section id="cta">
				<Stack align="center" gap="xl">
					<Title ta="center">
						<Text
							inherit
							variant="gradient"
							gradient={{ from: 'primary.5', to: 'violet.5', deg: 45 }}
						>
							Ready to boost Your Productivity?
						</Text>
					</Title>
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
