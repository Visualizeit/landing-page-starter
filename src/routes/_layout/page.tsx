import { Container, Stack, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'

const HomePage = () => {
	return (
		<Container size="xl">
			<Stack align="center" gap={0}>
				<Title c="primary">Welcome Home!</Title>
				<CallToAction />
				<FAQ />
			</Stack>
		</Container>
	)
}

export const Route = createFileRoute('/_layout/')({
	component: HomePage,
})
