import { Stack } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import UseCases from '@/components/UseCases'
import USP from '@/components/USP'

const HomePage = () => {
	return (
		<Stack align="center" gap={0}>
			<Hero />
			<UseCases />
			<Features />
			<Testimonials />
			<USP />
			<CallToAction />
			<FAQ />
			<Footer />
		</Stack>
	)
}

export const Route = createFileRoute('/_layout/')({
	component: HomePage,
})
