import React from 'react'
import ClientLayout from './ClientLayout'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}