'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionButtons from './buttons'
import ProgressBar from '../progress/progress'

interface SectionsProps {
  params: {
    start: string
    end: string
    target: string
    minimumPurchase: string
    phase: string
    investors: string
    tokenType: string
    reavables: string
    theReceivable: string
    tokenRights: string
    capture: string
    minimumTotalSaleAmount: string
    deadlineForTheEndOfSales: string
    tokenInformation: string
    type: string
    issuedTokens: string
    pricePerUnit: string
    tokensOffred: string
    remainingPercentage: string
    receiptPeriod: string
    profitability: string
    issuer: string
    technology: string
    legalStructure: string
    distributionAndCustody: string
    bankingAgent: string
    guarantees: string
    differentials: string
    diversification: string
    preDefinedDiscountRate: string
    periodicPayments: string
    risks: string
    default: string
    costOfToken: string
    issuerDoesNotRepurchaseDefaultedContract: string
    forceMajeure: string
    assetInGuaranteeOfTheContractIsNotAvailableForWithdrawal: string
    failureToRegisterTheTermOfIssue: string
    theGlobalContructTokenRepresentation: string
    theGlobalContructTokenWillBeAvaliable: string
    isAnInnovativeTokenizationPlatform: string
    tokenDigitalIsALeadingCompany: string
    tokenBankImobiliáriaOperates: string
    descriptionTheDistribuiton: string
    tokenBankRealEstate: string
    globalConstructToken: string
    learnAbout: string
    thisTokenOffering: string
    fronTheMomentYou: string
    YouHaveLiquidity: string
    thePurchaseOfToken: string
    paymentOfReceivable: string
    theTokenAreStored: string
    mayFailToRepurchase: string
    itIsImportantToBear: string
    inTheEventOfDefault: string
    theTermOfIssue: string
    textsButton: {
      tokenSummary: string
      token: string
      structure: string
      guaranteesRisks: string
    }
  }
}

export default function Sections({ params }: SectionsProps) {
  const [activeButton, setActiveButton] = useState<string>(
    params.textsButton.tokenSummary,
  )

  const handleActiveButtonChange = (buttonTitle: string) => {
    setActiveButton(buttonTitle)
  }

  return (
    <div className="flex flex-col md:flex-col md:px-32 px-12 py-5">
      <SectionButtons
        params={{ texts: params.textsButton }}
        onActiveButtonChange={handleActiveButtonChange}
      />
      {activeButton === params.textsButton.tokenSummary && (
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col mb-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.start}</a>
                <a className="font-light">01/05/2022</a>
              </div>
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.end}</a>
                <a className="font-light">30/05/2022</a>
              </div>
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.target}</a>
                <a className="font-light">R$3.400.00,00</a>
              </div>
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.minimumPurchase}</a>
                <a className="font-light">R$3,40</a>
              </div>
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.phase}</a>
                <a className="font-light">Única</a>
              </div>
              <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                <a className="font-semibold">{params.investors}</a>
                <a className="font-light">3560</a>
              </div>
            </div>
          </div>

          <div className="w-2" />

          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-row p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center p-2 bg-white rounded-full mr-3">
                <Image
                  src={`/images/svg/token.svg`}
                  alt="Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col justify-center">
                <a className=" font-semibold">{params.tokenType}</a>
                <a className="text-gray-400 font-light text-sm">
                  {params.reavables}
                </a>
              </div>
            </div>
            <div className="flex flex-col p-5 mt-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="text-gray-400 font-light text-sm">
                  {params.theReceivable}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeButton === params.textsButton.token && (
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="font-semibold">{params.tokenRights}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  {params.theGlobalContructTokenRepresentation}
                </a>
              </div>
            </div>
            <div className="flex flex-col p-5 mt-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="font-semibold">{params.capture}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  {params.theGlobalContructTokenWillBeAvaliable}
                </a>
              </div>
              <div className="flex flex-col mt-4">
                <a className="font-semibold">{params.minimumTotalSaleAmount}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  R$2.000,00
                </a>
              </div>
              <div className="flex flex-row justify-between mt-4 mb-2">
                <a className="font-semibold">
                  {params.deadlineForTheEndOfSales}
                </a>
                <a className="font-semibold">30/05/2022</a>
              </div>
              <ProgressBar progress={100} />
            </div>
          </div>

          <div className="w-2" />

          <div className="flex flex-col md:w-1/2 mt-2 md:mt-0">
            <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="font-semibold">{params.tokenInformation}</a>
                <a className="text-gray-400 font-light text-sm">
                  {params.type}: {params.reavables}
                </a>
              </div>
              <div className="flex flex-col mt-2 bg-white rounded-lg border border-gray-200">
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.issuedTokens}</a>
                  <a className="font-semibold">100.00 CO2T</a>
                </div>
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.pricePerUnit}</a>
                  <a className="font-semibold">R$3,40</a>
                </div>
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.tokensOffred}</a>
                  <a className="font-semibold">4.00 CO2T</a>
                </div>
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.remainingPercentage}</a>
                  <a className="font-semibold">0.00%</a>
                </div>
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.receiptPeriod}</a>
                  <a className="font-semibold">1 parcela (Cota única)</a>
                </div>
                <div className="flex flex-row px-4 py-2 border-b border-gray-200 justify-between">
                  <a className="font-light">{params.profitability}</a>
                  <a className="font-semibold">Cota única</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeButton === params.textsButton.structure && (
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex flex-col md:w-1/2">
            <div className="flex p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className=" font-semibold">{params.issuer}</a>
                <div className="flex items-center p-2 bg-white rounded-full my-1 w-10">
                  <Image
                    src={`/images/svg/issuer.svg`}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.isAnInnovativeTokenizationPlatform}
                </a>
              </div>
            </div>
            <div className="flex p-5 bg-gray-50 rounded-lg border border-gray-200 my-2">
              <div className="flex flex-col">
                <a className=" font-semibold">{params.technology}</a>
                <div className="flex items-center p-2 bg-white rounded-full my-1 w-10">
                  <Image
                    src={`/images/svg/technology.svg`}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.tokenDigitalIsALeadingCompany}
                </a>
              </div>
            </div>
            <div className="flex p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className=" font-semibold">{params.legalStructure}</a>
                <div className="flex items-center p-2 bg-white rounded-full my-1 w-10">
                  <Image
                    src={`/images/svg/structure.svg`}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.tokenBankImobiliáriaOperates}
                </a>
              </div>
            </div>
          </div>

          <div className="w-2" />

          <div className="flex flex-col md:w-1/2 mt-2 md:mt-0">
            <div className="flex p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className=" font-semibold">
                  {params.distributionAndCustody}
                </a>
                <div className="flex items-center p-2 bg-white rounded-full my-1 w-10">
                  <Image
                    src={`/images/svg/custody.svg`}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.descriptionTheDistribuiton}
                </a>
              </div>
            </div>
            <div className="flex p-5 bg-gray-50 rounded-lg border border-gray-200 my-2">
              <div className="flex flex-col">
                <a className=" font-semibold">{params.bankingAgent}</a>
                <div className="flex items-center p-2 bg-white rounded-full my-1 w-10">
                  <Image
                    src={`/images/svg/banking.svg`}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.tokenBankRealEstate}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeButton === params.textsButton.guaranteesRisks && (
        <div className="flex flex-col md:flex-row py-5">
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="font-semibold">{params.guarantees}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  {params.globalConstructToken}
                </a>
              </div>
            </div>
            <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200 mt-2">
              <div className="flex flex-col">
                <a className="font-semibold">{params.differentials}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  {params.learnAbout}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">1</a>
                  </div>
                  <a className="ml-3 font-semibold">{params.diversification}</a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.thisTokenOffering}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">2</a>
                  </div>
                  <a className="ml-3 font-semibold">
                    {params.preDefinedDiscountRate}
                  </a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.fronTheMomentYou}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">3</a>
                  </div>
                  <a className="ml-3 font-semibold">
                    {params.periodicPayments}
                  </a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.YouHaveLiquidity}
                </a>
              </div>
            </div>
          </div>

          <div className="w-2" />

          <div className="flex flex-col md:w-1/2 mt-2 md:mt-0">
            <div className="flex flex-col p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col">
                <a className="font-semibold">{params.risks}</a>
                <a className="text-gray-400 font-light text-sm mt-1">
                  {params.thePurchaseOfToken}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">1</a>
                  </div>
                  <a className="ml-3 font-semibold">{params.default}</a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.paymentOfReceivable}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">2</a>
                  </div>
                  <a className="ml-3 font-semibold">{params.costOfToken}</a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.theTokenAreStored}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">3</a>
                  </div>
                  <a className="ml-3 font-semibold">
                    {params.issuerDoesNotRepurchaseDefaultedContract}
                  </a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.mayFailToRepurchase}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">4</a>
                  </div>
                  <a className="ml-3 font-semibold">{params.forceMajeure}</a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.itIsImportantToBear}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">5</a>
                  </div>
                  <a className="ml-3 font-semibold">
                    {
                      params.assetInGuaranteeOfTheContractIsNotAvailableForWithdrawal
                    }
                  </a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.inTheEventOfDefault}
                </a>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full my-1 w-10">
                    <a className="italic font-light">6</a>
                  </div>
                  <a className="ml-3 font-semibold">
                    {params.failureToRegisterTheTermOfIssue}
                  </a>
                </div>
                <a className="text-gray-400 font-light text-sm">
                  {params.theTermOfIssue}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
