"use client"

import type React from "react"

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full h-full">{children}</div>
}

export const ChartTooltipContent = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) {
    return null
  }

  return (
    <div className="rounded-md border p-2 bg-background">
      <div className="text-sm font-medium">{label}</div>
      <ul className="mt-2 space-y-1">
        {payload.map((item: any, index: number) => (
          <li key={index} className="text-xs flex items-center">
            <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }} />
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

