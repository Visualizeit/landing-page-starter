import { MantineProvider } from '@mantine/core'
import { type PropsWithChildren } from 'react'
import mantineTheme from './configs/mantineTheme'

import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-sc'
import '@mantine/core/styles.css'

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<MantineProvider defaultColorScheme="auto" theme={mantineTheme}>
			{children}
		</MantineProvider>
	)
}

export default Providers
