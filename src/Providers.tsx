import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import mantineTheme from './configs/mantineTheme'
import queryClient from './configs/queryClient'

import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-sc'
import '@mantine/core/styles.css'

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider defaultColorScheme="auto" theme={mantineTheme}>
				{children}
			</MantineProvider>
		</QueryClientProvider>
	)
}

export default Providers
