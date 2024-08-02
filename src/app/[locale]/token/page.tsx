import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import Status from '@/src/components/cards/status'
import Footer from '@/src/components/footer/footer'
import Header from '@/src/components/header/header'
import ProgressBar from '@/src/components/progress/progress'
import Sections from '@/src/components/sections/sections'

export default async function Token() {
  const t = await getTranslations('Token')

  const texts = {
    start: t('start'),
    end: t('end'),
    target: t('target'),
    minimumPurchase: t('minimumPurchase'),
    phase: t('phase'),
    investors: t('investors'),
    tokenType: t('tokenType'),
    reavables: t('reavables'),
    theReceivable: t('theReceivable'),
    tokenRights: t('tokenRights'),
    capture: t('capture'),
    minimumTotalSaleAmount: t('minimumTotalSaleAmount'),
    deadlineForTheEndOfSales: t('deadlineForTheEndOfSales'),
    tokenInformation: t('tokenInformation'),
    type: t('type'),
    issuedTokens: t('issuedTokens'),
    pricePerUnit: t('pricePerUnit'),
    tokensOffred: t('tokensOffred'),
    remainingPercentage: t('remainingPercentage'),
    receiptPeriod: t('receiptPeriod'),
    profitability: t('profitability'),
    issuer: t('issuer'),
    technology: t('technology'),
    legalStructure: t('legalStructure'),
    distributionAndCustody: t('distributionAndCustody'),
    bankingAgent: t('bankingAgent'),
    guarantees: t('guarantees'),
    differentials: t('differentials'),
    diversification: t('diversification'),
    preDefinedDiscountRate: t('preDefinedDiscountRate'),
    periodicPayments: t('periodicPayments'),
    risks: t('risks'),
    default: t('default'),
    costOfToken: t('costOfToken'),
    issuerDoesNotRepurchaseDefaultedContract: t(
      'issuerDoesNotRepurchaseDefaultedContract',
    ),
    forceMajeure: t('forceMajeure'),
    assetInGuaranteeOfTheContractIsNotAvailableForWithdrawal: t(
      'assetInGuaranteeOfTheContractIsNotAvailableForWithdrawal',
    ),
    failureToRegisterTheTermOfIssue: t('failureToRegisterTheTermOfIssue'),

    theGlobalContructTokenRepresentation: t(
      'theGlobalContructTokenRepresentation',
    ),
    theGlobalContructTokenWillBeAvaliable: t(
      'theGlobalContructTokenWillBeAvaliable',
    ),
    isAnInnovativeTokenizationPlatform: t('isAnInnovativeTokenizationPlatform'),
    tokenDigitalIsALeadingCompany: t('tokenDigitalIsALeadingCompany'),
    tokenBankImobiliáriaOperates: t('tokenBankImobiliáriaOperates'),
    descriptionTheDistribuiton: t('descriptionTheDistribuiton'),
    tokenBankRealEstate: t('tokenBankRealEstate'),
    globalConstructToken: t('globalConstructToken'),
    learnAbout: t('learnAbout'),
    thisTokenOffering: t('thisTokenOffering'),
    fronTheMomentYou: t('fronTheMomentYou'),
    YouHaveLiquidity: t('YouHaveLiquidity'),
    thePurchaseOfToken: t('thePurchaseOfToken'),
    paymentOfReceivable: t('paymentOfReceivable'),
    theTokenAreStored: t('theTokenAreStored'),
    mayFailToRepurchase: t('mayFailToRepurchase'),
    itIsImportantToBear: t('itIsImportantToBear'),
    inTheEventOfDefault: t('inTheEventOfDefault'),
    theTermOfIssue: t('theTermOfIssue'),
    textsButton: {
      tokenSummary: t('tokenSummary'),
      token: t('token'),
      structure: t('structure'),
      guaranteesRisks: t('guaranteesRisks'),
    },
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col md:flex-row md:px-32 px-12 py-5">
        <div className="flex md:w-1/2 items-center justify-center">
          <Image
            src={`/images/tokens/co2tBig.png`}
            alt="Icon"
            className="rounded-xl"
            width={290}
            height={290}
          />
        </div>

        <div className="w-2" />

        <div className="flex flex-col md:w-1/2 md:mt-0 mt-5">
          <a className="font-semibold text-3xl">Crédito de carbono (CO2T)</a>
          <div className="flex items-center text-sm mt-4 mb-2">
            <div className="flex py-[2px] px-2 bg-gray-50 rounded-lg border border-gray-200 mr-2">
              <a className="font-semibold text-sm">{t('unitPrice')}:</a>
              <a className="font-light text-gray-500 text-sm ml-1">R$3,40</a>
            </div>
            <Status params={{ title: t('finished'), status: false }} />
          </div>

          <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex flex-row justify-between items-center mb-3">
              <div className="flex flex-col">
                <a className="font-semibold">{t('progress')}</a>
                <a className="font-light">R$3.400.00,00 / 100%</a>
              </div>
              <div className="flex flex-col">
                <a className="font-semibold">{t('total')}</a>
                <a className="font-light">R$3.400.00,00</a>
              </div>
            </div>
            <ProgressBar progress={100} />
          </div>

          <div className="flex flex-row p-5 mb-2 mt-2 bg-gray-50 rounded-lg border border-gray-200">
            {/* <div className="hidden md:flex items-center justify-center p-2 bg-white rounded-full mr-3 w-12 max-h-12">
              <Image
                src={`/images/svg/protect.svg`}
                alt="Icon"
                width={30}
                height={30}
              />
            </div> */}
            <a
              className="flex flex-col justify-center"
              href="https://explorer.perawallet.app/asset/2210569601/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-semibold">{t('contract')}</span>
              <span className="font-light text-base break-all">
                3NBFO7ZIIAIOAUG7TFITAHL6XNOYCGJFECEIXFGYQF7SP7VDOFNOS2M6RY
              </span>
            </a>
          </div>
        </div>
      </div>

      <Sections params={texts} />

      <Footer />
    </main>
  )
}
