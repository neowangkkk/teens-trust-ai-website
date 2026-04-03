'use client'

import { ResponsiveContainer } from 'recharts'

interface ChartWrapperProps {
  title: string
  children: React.ReactNode
  height?: number
}

export default function ChartWrapper({ title, children, height = 350 }: ChartWrapperProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
      <h4 className="font-display text-lg font-semibold text-navy mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={height}>
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  )
}
