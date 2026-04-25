import { Header } from "@/components/_old/layout/header"
import { Footer } from "@/components/_old/layout/footer"

export default function OldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-[1400px] border-x border-border bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
