import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Hydraulik Gdańsk 24h | Szybka pomoc hydrauliczna',
	description:
		'Hydraulik Gdańsk i okolice. Awarie, przecieki, udrażnianie rur, montaż armatury i szybki dojazd. Zadzwoń teraz po pomoc hydrauliczną.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pl">
			<body>{children}</body>
		</html>
	)
}
