export default function Home() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
					<div>
						<p className="text-xl font-bold">Hydraulik Gdańsk 24h</p>
						<p className="text-sm text-slate-600">
							Awaria? Szybki dojazd i pomoc na miejscu
						</p>
					</div>

					<a
						href="tel:+48794164707"
						className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:inline-block"
					>
						📞 Zadzwoń teraz
					</a>
				</div>
			</header>

			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-20">
				<div>
					<p className="mb-3 inline-block rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
						Pogotowie hydrauliczne • Gdańsk i okolice • 24/7
					</p>

					<h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
						Hydraulik Gdańsk 24h – dojazd nawet w 30 minut
					</h1>

					<p className="mt-5 text-lg leading-8 text-slate-700">
						Awaria, przeciek, zapchany odpływ albo pilna naprawa? Działamy
						szybko na terenie Gdańska i okolic. Zadzwoń teraz – pomożemy bez
						zbędnego czekania.
					</p>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href="tel:+48794164707"
							className="rounded-full bg-blue-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
						>
							📞 Zadzwoń: +48 794 164 707
						</a>

						<a
							href="sms:+48794164707"
							className="rounded-full border border-slate-300 px-6 py-4 text-center text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
						>
							💬 Wyślij SMS
						</a>
					</div>

					<p className="mt-4 text-sm font-medium text-slate-600">
						Najlepiej zadzwoń od razu – przy awariach liczy się czas.
					</p>

					<div className="mt-8 grid gap-3 sm:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Szybki dojazd</p>
							<p className="mt-1 text-sm text-slate-600">Nawet do 30 minut</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Pomoc 24/7</p>
							<p className="mt-1 text-sm text-slate-600">
								Awarie i pilne naprawy
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Gdańsk i okolice</p>
							<p className="mt-1 text-sm text-slate-600">Dojazd do klienta</p>
						</div>
					</div>
				</div>

				<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
					<h2 className="text-2xl font-bold">Najczęściej realizowane usługi</h2>

					<ul className="mt-6 space-y-4 text-lg text-slate-700">
						<li>✔️ Naprawa przecieków</li>
						<li>✔️ Udrażnianie rur i odpływów</li>
						<li>✔️ Montaż baterii i armatury</li>
						<li>✔️ Naprawa spłuczek i WC</li>
						<li>✔️ Instalacje wod-kan</li>
						<li>✔️ Pogotowie hydrauliczne 24h</li>
					</ul>

					<div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
						<p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
							Szybki kontakt
						</p>
						<p className="mt-2 text-2xl font-extrabold">+48 794 164 707</p>
						<p className="mt-2 text-sm text-slate-600">
							Przy pilnych awariach najlepiej dzwonić – szybciej ustalimy
							dojazd.
						</p>
					</div>

					<a
						href="tel:+48794164707"
						className="mt-8 block rounded-full bg-blue-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
					>
						Zadzwoń po pomoc
					</a>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 pb-4">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="rounded-2xl border border-slate-200 bg-white p-5">
						<p className="text-sm font-semibold text-blue-700">Dostępność</p>
						<p className="mt-2 text-lg font-bold">Poniedziałek – Niedziela</p>
						<p className="mt-1 text-slate-600">
							Pomoc hydrauliczna przez cały tydzień, także przy pilnych
							zgłoszeniach.
						</p>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-5">
						<p className="text-sm font-semibold text-blue-700">
							Obszar działania
						</p>
						<p className="mt-2 text-lg font-bold">Gdańsk i okolice</p>
						<p className="mt-1 text-slate-600">
							Dojazd do klienta przy awariach, przeciekach i typowych naprawach.
						</p>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-5">
						<p className="text-sm font-semibold text-blue-700">Kontakt</p>
						<p className="mt-2 text-lg font-bold">Telefon lub SMS</p>
						<p className="mt-1 text-slate-600">
							Bez formularzy i zbędnych kroków. Szybki kontakt i krótka ścieżka
							do pomocy.
						</p>
					</div>
				</div>
			</section>

			<section className="border-y border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-6xl px-4 py-14">
					<h2 className="text-center text-3xl font-bold">
						Dlaczego warto zadzwonić od razu?
					</h2>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Szybka reakcja</h3>
							<p className="mt-3 text-slate-600">
								Przy awarii liczy się czas. Szybko odbieramy telefon i ustalamy
								dalsze kroki.
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Pomoc na miejscu</h3>
							<p className="mt-3 text-slate-600">
								Dojazd do klienta na terenie Gdańska i okolic przy pilnych i
								standardowych naprawach.
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Prosty kontakt</h3>
							<p className="mt-3 text-slate-600">
								Tylko telefon lub SMS. Bez formularzy, bez czekania, bez
								rozpraszaczy.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14">
				<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
					<h2 className="text-3xl font-bold">Najczęstsze awarie</h2>
					<div className="mt-8 grid gap-6 md:grid-cols-2">
						<div className="rounded-2xl bg-slate-50 p-5">
							<h3 className="text-lg font-semibold">
								Przecieki i cieknące rury
							</h3>
							<p className="mt-2 text-slate-600">
								Szybka reakcja przy wyciekach pod zlewem, przy bateriach i w
								instalacji wodnej.
							</p>
						</div>

						<div className="rounded-2xl bg-slate-50 p-5">
							<h3 className="text-lg font-semibold">Zatkane odpływy</h3>
							<p className="mt-2 text-slate-600">
								Udrażnianie odpływów, rur i typowych zatorów w kuchni oraz
								łazience.
							</p>
						</div>

						<div className="rounded-2xl bg-slate-50 p-5">
							<h3 className="text-lg font-semibold">Spłuczki i WC</h3>
							<p className="mt-2 text-slate-600">
								Naprawa spłuczek, nieszczelności i usterek wymagających szybkiej
								interwencji.
							</p>
						</div>

						<div className="rounded-2xl bg-slate-50 p-5">
							<h3 className="text-lg font-semibold">Armatura i baterie</h3>
							<p className="mt-2 text-slate-600">
								Montaż i wymiana baterii, syfonów oraz podstawowych elementów
								armatury.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="kontakt" className="bg-blue-600 text-white">
				<div className="mx-auto max-w-4xl px-4 py-14 text-center">
					<h2 className="text-3xl font-bold md:text-4xl">
						Masz awarię? Nie czekaj – zadzwoń teraz
					</h2>

					<p className="mt-4 text-lg text-blue-100">
						Im szybciej zadzwonisz, tym szybciej ustalimy dojazd i pomoc na
						miejscu.
					</p>

					<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<a
							href="tel:+48794164707"
							className="rounded-full bg-white px-6 py-4 text-lg font-semibold text-blue-600 shadow-sm transition hover:bg-slate-100"
						>
							📞 +48 794 164 707
						</a>

						<a
							href="sms:+48794164707"
							className="rounded-full border border-white/40 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
						>
							💬 Wyślij SMS
						</a>
					</div>
				</div>
			</section>

			<a
				href="tel:+48794164707"
				className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 md:hidden"
			>
				📞 Zadzwoń teraz
			</a>
		</main>
	)
}
