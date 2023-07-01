import "../../app/globals.css"

import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400',"500","600","700","800"],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Humy',
  description: 'Landing Page Humy',
}

export default function HumyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const classBody = `${poppins.className} w-full h-screen bg-zinc-900`
  return (
    <html lang="en">
      <body className={classBody}>{children}</body>
    </html>
  )
}
