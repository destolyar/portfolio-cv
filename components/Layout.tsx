import React, { ReactNode } from "react"

export const Layout = ({ children }: {children: ReactNode}) => {
  return(
    <main>
      { children }
    </main>
  )
}