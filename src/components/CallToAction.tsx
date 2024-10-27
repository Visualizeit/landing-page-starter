import { Anchor, Button, Stack, Text, Title } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import Section from './Section'

const CallToAction = () => {
	return (
		<Section id="cta">
			<Stack align="center" gap="xl">
				<Title ta="center">
					Build your project with{' '}
					<Anchor component={Link} inherit>
						Surpass
					</Anchor>
				</Title>
				<Text ta="center">
					We provide the tools you need to build your project quickly and
					efficiently.
				</Text>
				<Button leftSection={<IconSparkles />} size="md">
					Get started in minutes
				</Button>
			</Stack>
		</Section>
	)
}

export default CallToAction
