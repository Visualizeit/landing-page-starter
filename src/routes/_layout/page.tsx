import { Container, Stack, Title } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import FAQ from '@/components/FAQ'

const HomePage = () => {
	return (
		<Container size="xl">
			<Stack align="center" gap="xl">
				<Title c="primary">Welcome Home!</Title>
				<FAQ />
			</Stack>
		</Container>
	)
}

export const Route = createFileRoute('/_layout/')({
	component: HomePage,
})
