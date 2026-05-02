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

// Replicando posições exatas da imagem de referência
const timelineCases: TimelineCase[] = [
  // 2019 - círculo verde no início
  {
    id: "1",
    year: 2019,
    month: 1,
    type: "green",
    title: "Abertura do Processo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tibiculum commodo viverra dolor mi. Viverra nunc s dui nunc. Gravida lestie dignissim nisl a arcu in mi in tellus auctor.",
    verticalOffset: 0,
  },
  // 2020 - círculos cinza em Mar., verde em 2 Abr., cinza em Mai., cinza em Out., cinza em Dez.
  {
    id: "2",
    year: 2020,
    month: 3,
    type: "gray",
    title: "Mar.",
    description: "Análise documental e verificação de conformidade.",
    verticalOffset: 2,
  },
  {
    id: "3",
    year: 2020,
    month: 4,
    type: "green",
    title: "2 Abr.",
    description: "Parecer técnico aprovado com ressalvas mínimas.",
    verticalOffset: 1,
  },
  {
    id: "4",
    year: 2020,
    month: 5,
    type: "gray",
    title: "Mai.",
    description: "Continuação das diligências documentais.",
    verticalOffset: 2,
  },
  {
    id: "5",
    year: 2020,
    month: 10,
    type: "gray",
    title: "Out.",
    description: "Revisão dos documentos apresentados.",
    verticalOffset: 0,
  },
  {
    id: "6",
    year: 2020,
    month: 12,
    type: "gray",
    title: "Dez.",
    description: "Encerramento da primeira fase.",
    verticalOffset: 0,
  },
  // 2021 - SIT AMET (azul), 1 Fev. (cinza), Mar. (cinza), 2 Abr. (verde), Mai. (cinza)
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
    title: "1 Fev.",
    description: "Continuação das análises documentais.",
    verticalOffset: 3,
  },
  {
    id: "9",
    year: 2021,
    month: 3,
    type: "gray",
    title: "Mar.",
    description: "Solicitação de documentos complementares.",
    verticalOffset: 4,
  },
  {
    id: "10",
    year: 2021,
    month: 4,
    type: "green",
    title: "2 Abr.",
    description: "Aprovação preliminar do projeto.",
    verticalOffset: 3,
  },
  {
    id: "11",
    year: 2021,
    month: 5,
    type: "gray",
    title: "Mai.",
    description: "Verificação de conformidade técnica.",
    verticalOffset: 2,
  },
  // 2022 - LOREM IPSUM DOLOR SIT (azul), DILIGÊNCIAS (cinza), 7 Nov. (verde), Dez. (verde)
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
    month: 5,
    type: "gray",
    title: "DILIGÊNCIAS",
    description: "Verificação in loco das condições do imóvel.",
    verticalOffset: 1,
  },
  {
    id: "14",
    year: 2022,
    month: 11,
    type: "green",
    title: "7 Nov.",
    description: "Publicação do despacho no diário oficial.",
    verticalOffset: 0,
  },
  {
    id: "15",
    year: 2022,
    month: 12,
    type: "green",
    title: "Dez.",
    description: "Finalização das análises do ano.",
    verticalOffset: 0,
  },
  // 2023 - LOREM IPSUM (azul com IPHAN), DILIGÊNCIAS (cinza)
  {
    id: "16",
    year: 2023,
    month: 1,
    type: "blue",
    title: "LOREM IPSUM",
    description: "Novo ciclo de avaliações com participação do IPHAN.",
    verticalOffset: 0,
  },
  {
    id: "17",
    year: 2023,
    month: 6,
    type: "gray",
    title: "DILIGÊNCIAS",
    description: "Solicitação de adequações no projeto arquitetônico.",
    verticalOffset: 1,
  },
  // 2024 - ABRISGE (azul), ING (verde), 15 Dez. (verde)
  {
    id: "18",
    year: 2024,
    month: 1,
    type: "blue",
    title: "ABRISGE",
    description: "Início do processo de regularização final.",
    verticalOffset: 0,
  },
  {
    id: "19",
    year: 2024,
    month: 5,
    type: "green",
    title: "ING",
    description: "Parecer técnico favorável emitido.",
    verticalOffset: 1,
  },
  {
    id: "20",
    year: 2024,
    month: 12,
    type: "green",
    title: "15 Dez.",
    description: "Emissão da licença provisória.",
    verticalOffset: 0,
  },
  // 2025 - Jan. (verde), DISCUSSÃO (azul)
  {
    id: "21",
    year: 2025,
    month: 1,
    type: "green",
    title: "Jan.",
    description: "Início do monitoramento pós-licença.",
    verticalOffset: 0,
  },
  {
    id: "22",
    year: 2025,
    month: 2,
    type: "blue",
    title: "DISCUSSÃO",
    description: "Reunião de avaliação do caso com todas as partes envolvidas.",
    verticalOffset: 0,
  },
]

const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025]

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

  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

  // Calcular posição X de um caso baseado no ano e mês
  const getXPosition = (year: number, month: number) => {
    const yearIndex = years.indexOf(year)
    const yearWidth = 100 / years.length
    const monthWidth = yearWidth / 12
    return yearIndex * yearWidth + (month - 0.5) * monthWidth
  }

  // Intervalos com fundo colorido
  const highlightedPeriods = [
    { startYear: 2020, startMonth: 3, endYear: 2021, endMonth: 3, color: "bg-amber-200/50", title: "Fase de Análise Documental", titleColor: "text-amber-800" },
    { startYear: 2022, startMonth: 9, endYear: 2022, endMonth: 12, color: "bg-lime-200/50", title: "Verificação em Campo", titleColor: "text-lime-800" },
    { startYear: 2024, startMonth: 9, endYear: 2025, endMonth: 1, color: "bg-violet-200/50", title: "Regularização Final", titleColor: "text-violet-800" },
  ]

  const getPeriodStyle = (period: typeof highlightedPeriods[0]) => {
    const startX = getXPosition(period.startYear, period.startMonth - 0.5)
    const endX = getXPosition(period.endYear, period.endMonth + 0.5)
    return {
      left: `${startX}%`,
      width: `${endX - startX}%`,
    }
  }

  return (
    <div className="w-full bg-stone-100 py-8 px-4">
      <div className="mb-6">
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

      <div ref={containerRef} className="relative w-full">
        {/* Tooltip */}
        {activeCase && (
          <div
            className="absolute z-50 pointer-events-none transition-all duration-150"
            style={{
              left: `${getXPosition(getActiveCaseData()?.year || 2019, getActiveCaseData()?.month || 1)}%`,
              top: `${130 - (getActiveCaseData()?.verticalOffset || 0) * 22}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="bg-white border border-stone-300 rounded-lg shadow-lg p-3 w-56">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${caseColors[getActiveCaseData()?.type || "gray"]
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

        {/* Period Titles */}
        <div className="relative h-6 mb-1">
          {highlightedPeriods.map((period, index) => (
            <div
              key={`period-title-${index}`}
              className="absolute flex items-center justify-center"
              style={getPeriodStyle(period)}
            >
              <span className={`text-xs font-semibold ${period.titleColor} truncate px-1`}>
                {period.title}
              </span>
            </div>
          ))}
        </div>

        {/* Cases Area */}
        <div className="relative h-36 mb-1">
          {/* Highlighted period backgrounds */}
          {highlightedPeriods.map((period, index) => (
            <div
              key={`period-${index}`}
              className={`absolute top-0 bottom-0 ${period.color}`}
              style={getPeriodStyle(period)}
            />
          ))}

          {/* Vertical grid lines for months */}
          <div className="absolute inset-0 flex">
            {years.map((year) => (
              <div key={`grid-${year}`} className="flex-1 flex">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`${year}-grid-${i}`}
                    className="flex-1 border-r border-stone-300/40 last:border-r-2 last:border-stone-500"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Case circles */}
          {timelineCases.map((caseItem) => {
            const xPos = getXPosition(caseItem.year, caseItem.month)
            const yPos = 120 - (caseItem.verticalOffset || 0) * 22

            return (
              <div
                key={caseItem.id}
                className={`absolute cursor-pointer transition-all duration-200 ${caseColors[caseItem.type]
                  } rounded-full shadow-md hover:scale-150 hover:shadow-lg z-10`}
                style={{
                  left: `${xPos}%`,
                  top: yPos,
                  width: 12,
                  height: 12,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={(e) => handleMouseEnter(caseItem, e)}
                onMouseLeave={handleMouseLeave}
              />
            )
          })}
        </div>

        {/* Year Bars */}
        <div className="flex w-full relative">
          {/* Highlighted period backgrounds extending to year bar */}
          {highlightedPeriods.map((period, index) => (
            <div
              key={`period-bar-${index}`}
              className={`absolute top-0 h-8 ${period.color}`}
              style={getPeriodStyle(period)}
            />
          ))}
          {years.map((year, index) => (
            <div key={year} className="flex-1 relative">
              {/* Year separator line - thick and dark */}
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-stone-700 z-10" />
              )}
              {/* Year bar */}
              <div
                className={`${yearColors[year]} h-8 flex items-center justify-center relative`}
              >
                <span className="text-white font-bold text-sm">{year}</span>
                {/* Arrow indicator */}
                {index < years.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                    <div
                      className="w-3 h-3 rotate-45"
                      style={{
                        backgroundColor: yearColors[year].includes('stone-500') ? '#78716c' :
                          yearColors[year].includes('stone-400') ? '#a8a29e' :
                            yearColors[year].includes('amber-600') ? '#d97706' :
                              yearColors[year].includes('amber-700') ? '#b45309' :
                                yearColors[year].includes('lime-600') ? '#65a30d' :
                                  yearColors[year].includes('lime-500') ? '#84cc16' : '#a8a29e'
                      }}
                    ></div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
