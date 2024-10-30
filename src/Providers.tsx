import { MantineProvider } from '@mantine/core'
import { LazyMotion } from 'framer-motion'
import { type PropsWithChildren } from 'react'
import mantineTheme from './configs/mantineTheme'

import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-sc'
import '@mantine/core/styles.css'

const loadMotionFeatures = () =>
	import('./configs/motionFeatures').then((module) => module.default)

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<MantineProvider defaultColorScheme="auto" theme={mantineTheme}>
			<LazyMotion features={loadMotionFeatures}>{children}</LazyMotion>
		</MantineProvider>
	)
}

export default Providers
