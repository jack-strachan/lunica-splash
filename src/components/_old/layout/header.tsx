import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/_old/ui/button"
import { Container } from "@/components/_old/ui/container"

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Experts", href: "/experts" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-8 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/lunica-logo.svg" 
                alt="Lunica" 
                width={100} 
                height={28}
                style={{ height: "auto" }}
                priority
              />
            </Link>
            <nav className="hidden md:flex gap-6 ml-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" asChild className="hidden md:inline-flex">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/demo">Get a Demo</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}


