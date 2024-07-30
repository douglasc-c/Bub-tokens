import { getTranslations } from 'next-intl/server'

import Token from '@/src/components/cards/token'
import Header from '@/src/components/header/header'
import Footer from '@/src/components/footer/footer'

export default async function Home() {
  const t = await getTranslations('Interest')

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-wrap justify-around px-14">
        <Token params={{ image: 'co2tBig' }} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-center md:w-2/4 mt-10">
          <a className="text-4xl font-bold">{t('interestedInTokenization')}</a>
          <a className="text-xl font-light p-5">{t('createDigitalFraction')}</a>
          <a className="text-xl font-bold text-zinc-400">
            {t('forMoreInformation')}
          </a>
          <a className="text-xl font-bold text-zinc-500">
            contato@tokenizei.online
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
