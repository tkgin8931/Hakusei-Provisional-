import ReactScan from "./ReactScan"
import './globals.css'



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <ReactScan />
        <body>{children}</body>
      </html>
    )
  }
  