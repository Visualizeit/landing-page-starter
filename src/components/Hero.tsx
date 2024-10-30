import { Button, Space, Stack, Text, Title } from '@mantine/core'
import { IconSparkles } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import Safari from './Safari'
import Section from './Section'
import Sparkles from './Sparkles'
import placeholderImage from '@/assets/placeholderImage'

export const Hero = () => {
	return (
		<Section id="hero">
			<Stack align="center" gap="xl">
				<Space />
				<Sparkles>
					<Title ta="center" className="text-6xl font-semibold">
						The best way to <br />
						design and build apps
					</Title>
				</Sparkles>
				<Text ta="center">
					AI-powered tools to help you speed up your workflow and create better
					apps.
				</Text>
				<Link>
					<Button leftSection={<IconSparkles />} size="md">
						Get Surpass free
					</Button>
				</Link>
				<Safari
					className="size-full"
					url={location.href}
					src={placeholderImage}
					width={1200}
					height={750}
				/>
			</Stack>
		</Section>
	)
}
