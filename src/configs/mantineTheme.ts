import {
	type DefaultMantineColor,
	type MantineColorsTuple,
	createTheme,
	DEFAULT_THEME,
	SegmentedControl,
} from '@mantine/core'

type ExtendedCustomColors = 'primary' | DefaultMantineColor

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, MantineColorsTuple>
	}
}

const mantineTheme = createTheme({
	primaryColor: 'primary',
	defaultRadius: 'md',
	activeClassName: 'active:brightness-90',
	fontFamily: `'Inter Variable', 'Noto Sans SC Variable', ${DEFAULT_THEME.fontFamily}`,
	components: {
		SegmentedControl: SegmentedControl.extend({
			vars: (theme) => ({
				root: {
					'--sc-padding': theme.spacing.md,
					'--sc-shadow': 'none',
				},
			}),
			classNames: {
				root: 'bg-transparent',
				control: 'before:hidden',
				label: 'text-start',
			},
		}),
	},
	colors: {
		primary: [
			'#e5f4ff',
			'#cde2ff',
			'#9bc2ff',
			'#64a0ff',
			'#3984fe',
			'#1d72fe',
			'#0969ff',
			'#0058e4',
			'#004ecc',
			'#0043b5',
		],
	},
})

export default mantineTheme
