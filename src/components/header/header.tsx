import Image from 'next/image'
import ButtonMenu from '../buttons/menu'
import { getLocale, getTranslations } from 'next-intl/server'

export default async function Header() {
  const locale = await getLocale()
  const t = await getTranslations('Header')

  return (
    <div className="w-full flex justify-between items-center px-14 md:px-28 py-5">
      <a href="/">
        <Image
          src="/images/bubBlack.webp"
          alt="Logo"
          width={120}
          height={120}
        />
      </a>
      <div className="flex flex-row">
        <ButtonMenu params={{ title: t('tokens'), path: `/${locale}` }} />
      </div>
    </div>
  )
}
