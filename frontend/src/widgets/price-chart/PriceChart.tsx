'use client'

import React, {useEffect, useRef, useState} from 'react'
import Chart from 'chart.js/auto'
import styles from './PriceChart.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import annotationPlugin from 'chartjs-plugin-annotation'
import {Text, Title} from '@/shared/ui'

type PriceChartData = {
  labels: string[]
  prices: number[]
}

interface ToogleProps {
  id: number
  changeId: (id: number) => void
}

interface PriceChartProps {
  data: PriceChartData
  totalData: PriceChartData
}

Chart.register(annotationPlugin)

const Toogle = ({id, changeId}: ToogleProps) => {
  return (
    <div className={styles.toogleContainer}>
      <Text
        size='xSmall'
        className={id === 0 ? styles.activeToogle : styles.toogle}
        onClick={() => changeId(0)}
      >
        Год
      </Text>
      <Text
        size='xSmall'
        className={id === 1 ? styles.activeToogle : styles.toogle}
        onClick={() => changeId(1)}
      >
        Всё время
      </Text>
    </div>
  )
}

export function PriceChart({data, totalData}: PriceChartProps) {
  const [toogleId, setToogleId] = useState(0)
  const [distanceSmall, setDistanceSmall] = useState(0)
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  const currentData = toogleId === 0 ? data : totalData

  useEffect(() => {
    if (!chartRef.current) return
    const ctx = chartRef.current.getContext('2d')

    if (!ctx) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const minPrice = Math.min(...currentData.prices)
    const maxPrice = Math.max(...currentData.prices)

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: currentData.labels,
        datasets: [
          {
            label: 'Цена квартиры',
            data: currentData.prices,
            borderColor: 'rgba(39, 46, 68, 1)',
            borderWidth: 2,
            fill: {
              target: 'origin',
              above: 'rgba(231, 234, 243, 0.7)',
            },
            pointRadius: 6,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: 'rgba(39, 46, 68, 1)',
            pointBackgroundColor: '#ffffff',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              color: 'black',
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
            min: minPrice - (maxPrice - minPrice) * 5,
            max: maxPrice + (maxPrice - minPrice) * 2,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: () => '',
              label: (context) => {
                const price = context.raw
                return `${String(price)
                  .replace(/[^0-9]/g, '')
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} за м²`
              },
            },
            displayColors: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            bodyColor: '#fff',
            bodyFont: {
              size: 14,
            },
            padding: 10,
            cornerRadius: 5,
          },
          annotation: {
            annotations: currentData.labels.map((label) => ({
              type: 'line',
              mode: 'vertical',
              scaleID: 'x',
              value: label,
              borderColor: 'rgba(39, 46, 68, 1)',
              borderWidth: 0.9,
              borderDash: [5, 5],
              drawTime: 'beforeDatasetsDraw',
            })),
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [currentData])

  useEffect(() => {
    if (chartRef.current) {
      const chartWidth = chartRef.current.clientWidth
      const numberOfPoints = currentData.labels.length
      const distanceBetweenPoints = chartWidth / (numberOfPoints - 1)
      setDistanceSmall(distanceBetweenPoints)
    }
  }, [currentData])

  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>Динамика изменения цены</Title>
      <Toogle id={toogleId} changeId={setToogleId} />
      <div
        className={`${styles.canvasContainer} ${distanceSmall < 60 && styles.canvasContainerScroll}`}
      >
        <div
          className={`${styles.chartWrapper} ${distanceSmall < 60 && styles.chartWrapperrScroll}`}
        >
          <canvas ref={chartRef} />
        </div>
      </div>
    </section>
  )
}
