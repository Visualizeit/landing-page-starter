import { Anchor, Button, Stack, Text, Title } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

const CallToAction = () => {
	return (
		<Stack id="cta" component="section" className="w-full py-16" align="center">
			<Title ta="center">
				Build your project with{' '}
				<Anchor component={Link} inherit>
					Surpass
				</Anchor>
			</Title>
			<Text>
				Join the thousands of developers who have already used our platform to
				build their projects.
			</Text>
			<Button leftSection={<IconSparkles />} size="md">
				Get started in minutes
			</Button>
		</Stack>
	)
}

export default CallToAction
