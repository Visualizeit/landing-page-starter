import { Box, Container, type ContainerProps } from '@mantine/core'
import { type PropsWithChildren } from 'react'

interface SectionProps {
	id?: string
	size?: ContainerProps['size']
}

const Section = ({
	children,
	id,
	size = 'xl',
}: PropsWithChildren<SectionProps>) => {
	return (
		<Box component="section" id={id} className="w-full py-16">
			<Container size={size}>{children}</Container>
		</Box>
	)
}

export default Section
