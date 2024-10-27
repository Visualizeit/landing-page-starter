import { Box, Container } from '@mantine/core'
import { type PropsWithChildren } from 'react'

interface SectionProps {
	id?: string
}

const Section = ({ children, id }: PropsWithChildren<SectionProps>) => {
	return (
		<Box component="section" id={id} className="w-full py-16">
			<Container size="xl">{children}</Container>
		</Box>
	)
}

export default Section
