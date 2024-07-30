import Image from 'next/image'
import ProgressBar from '../progress/progress'
import { getLocale, getTranslations } from 'next-intl/server'
import Button from '../buttons/button'
import Status from './status'

interface TokenItemsProps {
  params: {
    image: string
  }
}

export default async function TokenItems({ params }: TokenItemsProps) {
  const { image } = params
  const t = await getTranslations('Token')
  const locale = await getLocale()

  return (
    <div className="rounded-b-lg shadow-lg mx-5 my-5">
      <Image
        src={`/images/tokens/${image}.png`}
        alt="Icon"
        className="rounded-t-lg"
        width={280}
        height={280}
      />

      <div className="px-5 py-5">
        <a className="font-semibold text-lg">Crédito de carbono (CO2T)</a>

        <div className="flex flex-col mt-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <a className="font-light text-gray-400 text-sm">
                {t('unitPrice')}
              </a>
              <a className="font-semibold text-sm">R$3,40</a>
            </div>
            <div className="flex flex-col">
              <a className="font-light text-gray-400 text-sm">
                {t('progress')}
              </a>
              <a className="font-semibold text-sm">R$3.400.00,00</a>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-3 mb-3">
          <a className="font-light text-gray-400 text-sm">{t('total')}:</a>
          <a className="font-semibold text-sm ms-2">R$3.400.00,00</a>
        </div>

        <ProgressBar progress={100} />
        <div className="flex flex-row justify-between mt-3">
          <div className="flex items-center text-[14px]">
            <Status params={{ title: t('finished'), status: false }} />
          </div>
          <Button params={{ title: t('button'), path: `/${locale}/token` }} />
        </div>
      </div>
    </div>
  )
}
