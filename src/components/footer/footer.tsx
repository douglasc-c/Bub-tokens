// import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import ButtonLang from '../buttons/lang'

export default async function Footer() {
  const locale = await getLocale()

  return (
    <div className="w-full flex justify-between px-10 py-5">
      <div className="flex-row-reverse flex">
        <ButtonLang
          params={{ title: 'PT', path: '/pt-BR', locale: `${locale}` }}
        />
        <ButtonLang
          params={{ title: 'ES', path: '/es', locale: `${locale}` }}
        />
        <ButtonLang
          params={{ title: 'EN', path: '/en', locale: `${locale}` }}
        />
      </div>
      {/* <div className="flex flex-col ">
        <a
          href="https://www.linkedin.com/in/douglas-camargo-7343161a4/"
          target="_blank"
          className="p-2"
        >
          <Image
            src="/images/social-media/linkedin.svg"
            alt="Icon 1"
            className="rounded-md shadow-[0px_0px_20px_10px] hover:shadow-[#003E5A] transition-transform duration-300 hover:scale-110"
            width={26}
            height={26}
          />
        </a>
        <a href="https://github.com/douglasc-c" target="_blank" className="p-2">
          <Image
            src="/images/social-media/github.svg"
            alt="Icon 1"
            className="rounded-md shadow-[0px_0px_20px_10px] hover:shadow-[#003E5A] transition-transform duration-300 hover:scale-110"
            width={26}
            height={26}
          />
        </a>
        <a href="https://wa.me/5541998227111" target="_blank" className="p-2">
          <Image
            src="/images/social-media/whatsapp.svg"
            alt="Icon 1"
            className="rounded-md shadow-[0px_0px_20px_10px] hover:shadow-[#003E5A] transition-transform duration-300 hover:scale-110"
            width={26}
            height={26}
          />
        </a>
        <a href="https://instagram.com" target="_blank" className="p-2">
          <Image
            src="/images/social-media/instagram.svg"
            alt="Icon 1"
            className="rounded-md shadow-[0px_0px_20px_10px] hover:shadow-[#003E5A] transition-transform duration-300 hover:scale-110"
            width={26}
            height={26}
          />
        </a>
      </div> */}
    </div>
  )
}
