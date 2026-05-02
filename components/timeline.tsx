"use client"

import { useState, useRef } from "react"

type CaseType = "gray" | "green" | "blue"

interface TimelineCase {
  id: string
  year: number
  month: number
  type: CaseType
  title: string
  description: string
  verticalOffset?: number
}

const timelineCases: TimelineCase[] = [
  // 2019
  {
    id: "1",
    year: 2019,
    month: 3,
    type: "green",
    title: "Abertura do Processo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    verticalOffset: 0,
  },
  {
    id: "2",
    year: 2019,
    month: 6,
    type: "gray",
    title: "Análise Documental",
    description: "Aliquam tibiculum commodo viverra dolor mi. Viverra nunc.",
    verticalOffset: 1,
  },
  // 2020
  {
    id: "3",
    year: 2020,
    month: 3,
    type: "gray",
    title: "Diligências",
    description: "Gravida lestie dignissim nisl a arcu in mi in tellus auctor.",
    verticalOffset: 2,
  },
  {
    id: "4",
    year: 2020,
    month: 5,
    type: "green",
    title: "Parecer Técnico",
    description: "Análise técnica realizada com sucesso. Documentação aprovada.",
    verticalOffset: 1,
  },
  {
    id: "5",
    year: 2020,
    month: 10,
    type: "gray",
    title: "Revisão",
    description: "Revisão dos documentos apresentados pelo requerente.",
    verticalOffset: 0,
  },
  {
    id: "6",
    year: 2020,
    month: 12,
    type: "gray",
    title: "Encerramento Fase 1",
    description: "Conclusão da primeira fase do processo administrativo.",
    verticalOffset: 1,
  },
  // 2021
  {
    id: "7",
    year: 2021,
    month: 1,
    type: "blue",
    title: "SIT AMET",
    description: "Início de nova etapa processual com análise de mérito.",
    verticalOffset: 0,
  },
  {
    id: "8",
    year: 2021,
    month: 2,
    type: "gray",
    title: "Fev.",
    description: "Continuação das análises documentais.",
    verticalOffset: 2,
  },
  {
    id: "9",
    year: 2021,
    month: 3,
    type: "gray",
    title: "Mar.",
    description: "Solicitação de documentos complementares.",
    verticalOffset: 3,
  },
  {
    id: "10",
    year: 2021,
    month: 4,
    type: "green",
    title: "Abr.",
    description: "Aprovação preliminar do projeto.",
    verticalOffset: 2,
  },
  {
    id: "11",
    year: 2021,
    month: 5,
    type: "gray",
    title: "Mai.",
    description: "Verificação de conformidade técnica.",
    verticalOffset: 1,
  },
  // 2022
  {
    id: "12",
    year: 2022,
    month: 1,
    type: "blue",
    title: "LOREM IPSUM DOLOR SIT",
    description: "Nova fase de diligências iniciada para verificação em campo.",
    verticalOffset: 0,
  },
  {
    id: "13",
    year: 2022,
    month: 4,
    type: "gray",
    title: "Diligências",
    description: "Verificação in loco das condições do imóvel.",
    verticalOffset: 1,
  },
  {
    id: "14",
    year: 2022,
    month: 7,
    type: "green",
    title: "Nov.",
    description: "Relatório de vistoria concluído com parecer favorável.",
    verticalOffset: 2,
  },
  {
    id: "15",
    year: 2022,
    month: 11,
    type: "green",
    title: "7 Nov.",
    description: "Publicação do despacho no diário oficial.",
    verticalOffset: 0,
  },
  {
    id: "16",
    year: 2022,
    month: 12,
    type: "green",
    title: "Dez.",
    description: "Finalização das análises do ano.",
    verticalOffset: 1,
  },
  // 2023
  {
    id: "17",
    year: 2023,
    month: 1,
    type: "blue",
    title: "LOREM IPSUM",
    description: "Novo ciclo de avaliações com participação do IPHAN.",
    verticalOffset: 0,
  },
  {
    id: "18",
    year: 2023,
    month: 5,
    type: "gray",
    title: "Diligências",
    description: "Solicitação de adequações no projeto arquitetônico.",
    verticalOffset: 1,
  },
  {
    id: "19",
    year: 2023,
    month: 8,
    type: "green",
    title: "Aprovação",
    description: "Aprovação condicionada do projeto.",
    verticalOffset: 2,
  },
  // 2024
  {
    id: "20",
    year: 2024,
    month: 1,
    type: "blue",
    title: "ABRISGE",
    description: "Início do processo de regularização final.",
    verticalOffset: 0,
  },
  {
    id: "21",
    year: 2024,
    month: 4,
    type: "green",
    title: "ING",
    description: "Parecer técnico favorável emitido.",
    verticalOffset: 1,
  },
  {
    id: "22",
    year: 2024,
    month: 8,
    type: "gray",
    title: "Análise",
    description: "Revisão final dos documentos do processo.",
    verticalOffset: 2,
  },
  {
    id: "23",
    year: 2024,
    month: 12,
    type: "green",
    title: "15 Dez.",
    description: "Emissão da licença provisória.",
    verticalOffset: 0,
  },
  // 2025
  {
    id: "24",
    year: 2025,
    month: 1,
    type: "green",
    title: "Jan.",
    description: "Início do monitoramento pós-licença.",
    verticalOffset: 1,
  },
  {
    id: "25",
    year: 2025,
    month: 2,
    type: "blue",
    title: "DISCUSSÃO",
    description: "Reunião de avaliação do caso com todas as partes envolvidas.",
    verticalOffset: 0,
  },
]

const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025]
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

const yearColors: Record<number, string> = {
  2019: "bg-stone-500",
  2020: "bg-stone-400",
  2021: "bg-amber-600",
  2022: "bg-amber-700",
  2023: "bg-lime-600",
  2024: "bg-lime-500",
  2025: "bg-stone-400",
}

const yearPeriods: Record<number, string> = {
  2019: "1. Março a Junho",
  2020: "1. Fevereiro a Março",
  2021: "1. Março",
  2022: "1. Janeiro",
  2023: "1. Janeiro",
  2024: "1. Janeiro",
  2025: "1. Fevereiro",
}

const caseColors: Record<CaseType, string> = {
  gray: "bg-gray-500",
  green: "bg-green-600",
  blue: "bg-violet-600",
}

const caseHoverColors: Record<CaseType, string> = {
  gray: "hover:bg-gray-600",
  green: "hover:bg-green-700",
  blue: "hover:bg-violet-700",
}

export default function Timeline() {
  const [activeCase, setActiveCase] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (caseItem: TimelineCase, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect()
    
    if (containerRect) {
      setTooltipPosition({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top,
      })
    }
    setActiveCase(caseItem.id)
  }

  const handleMouseLeave = () => {
    setActiveCase(null)
  }

  const getActiveCaseData = () => {
    return timelineCases.find((c) => c.id === activeCase)
  }

  return (
    <div className="w-full overflow-x-auto bg-stone-100 py-8">
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold text-stone-800">Linha do Tempo - Processos</h1>
        <div className="flex gap-6 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-sm text-stone-600">Diligências</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span className="text-sm text-stone-600">Aprovações</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-violet-600"></div>
            <span className="text-sm text-stone-600">Marcos Importantes</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative min-w-max px-4">
        {/* Tooltip */}
        {activeCase && (
          <div
            className="absolute z-50 pointer-events-none transition-all duration-150"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y - 10,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="bg-white border border-stone-300 rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    caseColors[getActiveCaseData()?.type || "gray"]
                  }`}
                ></div>
                <h3 className="font-semibold text-stone-800 text-sm">
                  {getActiveCaseData()?.title}
                </h3>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                {getActiveCaseData()?.description}
              </p>
              <div className="mt-2 pt-2 border-t border-stone-200">
                <span className="text-xs text-stone-500">
                  {months[(getActiveCaseData()?.month || 1) - 1]}/{getActiveCaseData()?.year}
                </span>
              </div>
            </div>
            <div className="w-3 h-3 bg-white border-r border-b border-stone-300 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5"></div>
          </div>
        )}

        {/* Cases Area */}
        <div className="relative h-40 mb-2">
          {timelineCases.map((caseItem) => {
            const yearIndex = years.indexOf(caseItem.year)
            const xPosition = yearIndex * (12 * 40) + (caseItem.month - 1) * 40 + 20
            const yPosition = 120 - (caseItem.verticalOffset || 0) * 28

            return (
              <div
                key={caseItem.id}
                className={`absolute cursor-pointer transition-all duration-200 ${
                  caseColors[caseItem.type]
                } ${caseHoverColors[caseItem.type]} rounded-full shadow-md hover:scale-125 hover:shadow-lg`}
                style={{
                  left: xPosition,
                  top: yPosition,
                  width: 14,
                  height: 14,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={(e) => handleMouseEnter(caseItem, e)}
                onMouseLeave={handleMouseLeave}
              />
            )
          })}

          {/* Connecting lines for visual effect */}
          {timelineCases.map((caseItem, index) => {
            if (index === 0) return null
            const prevCase = timelineCases[index - 1]
            if (prevCase.year !== caseItem.year) return null

            const yearIndex = years.indexOf(caseItem.year)
            const x1 = yearIndex * (12 * 40) + (prevCase.month - 1) * 40 + 20
            const y1 = 120 - (prevCase.verticalOffset || 0) * 28
            const x2 = yearIndex * (12 * 40) + (caseItem.month - 1) * 40 + 20
            const y2 = 120 - (caseItem.verticalOffset || 0) * 28

            return (
              <svg
                key={`line-${index}`}
                className="absolute top-0 left-0 pointer-events-none"
                style={{ width: "100%", height: "100%" }}
              >
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#d1d5db"
                  strokeWidth="1"
                  strokeDasharray="4,2"
                />
              </svg>
            )
          })}
        </div>

        {/* Year Bars */}
        <div className="flex">
          {years.map((year) => (
            <div key={year} className="relative" style={{ width: 12 * 40 }}>
              {/* Month grid lines */}
              <div className="absolute inset-0 flex">
                {months.map((_, monthIndex) => (
                  <div
                    key={monthIndex}
                    className="flex-1 border-r border-stone-300/50"
                    style={{ width: 40 }}
                  />
                ))}
              </div>

              {/* Year bar */}
              <div
                className={`${yearColors[year]} h-10 flex items-center justify-center relative z-10`}
              >
                <span className="text-white font-bold text-lg">{year}</span>
                {/* Arrow indicator */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                  <div className={`${yearColors[year]} w-4 h-4 rotate-45`}></div>
                </div>
              </div>

              {/* Period label */}
              <div className="bg-stone-200 py-1 px-2 text-center border-t border-stone-300">
                <span className="text-xs text-stone-600">{yearPeriods[year]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="flex mt-1">
          {years.map((year) => (
            <div key={`months-${year}`} className="flex" style={{ width: 12 * 40 }}>
              {months.map((month, index) => (
                <div
                  key={`${year}-${index}`}
                  className="text-center text-xs text-stone-500"
                  style={{ width: 40 }}
                >
                  {month}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
