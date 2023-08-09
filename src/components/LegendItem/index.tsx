import { useRef, type ReactNode, useState, useEffect, type ComponentProps } from "react"

import * as S from "./styles"

interface ILegendItemProps extends ComponentProps<"div"> {
  children: ReactNode,
  legend?: string,
  className?: string,
  widthLegend?: number,
  sizeLegend?: "sm" | "md" | "lg"
}

const LegendItem = ({ children, legend, className, widthLegend, sizeLegend = "md", ...restProps }: ILegendItemProps): JSX.Element => {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const legendRef = useRef<HTMLSpanElement | null>(null)
  const [showLegend, setShowLegend] = useState(false)

  useEffect(() => {
    const [{ current: item }, { current: legend }] = [itemRef, legendRef]
    const handleMouseMove = (ev: MouseEvent): void => {
      if (item && legend) {
        const rect = item.getBoundingClientRect()
        const clientXRelativeToElement = ev.clientX - rect.x;
        const clientYRelativeToElement = ev.clientY - rect.y;
        legend.style.top = `${clientYRelativeToElement + 15}px`
        legend.style.left = `${clientXRelativeToElement + 15}px`
      }
    }
    if (item && legend) {
      item.addEventListener("mousemove", handleMouseMove)
      return () => { item.removeEventListener("mousemove", handleMouseMove); }
    }
  }, [showLegend])

  return (
    <S.LegendItem
      {...restProps}
      widthLegend={widthLegend}
      sizeLegend={sizeLegend}
      className={className}
      ref={itemRef}
      onMouseEnter={() => { setShowLegend(true); }}
      onMouseLeave={() => { setShowLegend(false); }}
    >
      {children}
      {
        showLegend && legend ? (
          <span
            ref={legendRef}
            className="legend-text"
          >{legend}</span>
        ) : <></>
      }

    </S.LegendItem>
  )
}

export default LegendItem