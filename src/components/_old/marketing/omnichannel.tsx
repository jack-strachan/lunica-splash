import { Mail, MessageSquare, Globe, Send } from "lucide-react"

import { Container } from "@/components/_old/ui/container"
import { Section } from "@/components/_old/ui/section"
import { Heading } from "@/components/_old/ui/heading"
import { Text } from "@/components/_old/ui/text"
import { homeContent } from "@/content/_old/home"

export function OmnichannelSection() {
  const { omnichannel } = homeContent

  return (
    <Section spacing="xl" className="bg-muted/30 border-b border-border">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="mb-6 font-mono text-xs tracking-widest text-primary uppercase font-bold">
            {omnichannel.badge}
          </span>
          <Heading as="h2" size="h2" className="max-w-3xl mb-4 text-foreground tracking-tighter">
            {omnichannel.heading}
          </Heading>
          <Text size="lg" muted className="max-w-2xl text-muted-foreground">
            {omnichannel.description}
          </Text>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-foreground text-background border border-border rounded-xl flex items-center justify-center z-10 hidden md:flex">
            <span className="font-bold text-sm">Lunica</span>
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center hidden md:flex">
            <svg width="100%" height="100%" className="absolute">
               <circle cx="50%" cy="50%" r="200" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
               <path d="M 20% 50% L 80% 50%" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
               <path d="M 50% 20% L 50% 80%" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-32 md:py-24 relative z-20">
            {/* Top Left */}
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all duration-300 hover:border-foreground/30 group">
              <div className="w-10 h-10 bg-muted border border-border rounded flex items-center justify-center mb-4 group-hover:bg-foreground/5 group-hover:border-foreground/20 transition-colors">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <Heading as="h3" size="h5" className="text-foreground text-sm font-semibold">Email</Heading>
              <Text muted size="sm" align="center" className="mt-1 text-muted-foreground text-xs">Automated sequences</Text>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all duration-300 hover:border-foreground/30 group">
              <div className="w-10 h-10 bg-muted border border-border rounded flex items-center justify-center mb-4 group-hover:bg-foreground/5 group-hover:border-foreground/20 transition-colors">
                <MessageSquare className="w-5 h-5 text-foreground" />
              </div>
              <Heading as="h3" size="h5" className="text-foreground text-sm font-semibold">SMS</Heading>
              <Text muted size="sm" align="center" className="mt-1 text-muted-foreground text-xs">Instant notifications</Text>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all duration-300 hover:border-foreground/30 group">
              <div className="w-10 h-10 bg-muted border border-border rounded flex items-center justify-center mb-4 group-hover:bg-foreground/5 group-hover:border-foreground/20 transition-colors">
                <Globe className="w-5 h-5 text-foreground" />
              </div>
              <Heading as="h3" size="h5" className="text-foreground text-sm font-semibold">Portal</Heading>
              <Text muted size="sm" align="center" className="mt-1 text-muted-foreground text-xs">Self-serve payments</Text>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all duration-300 hover:border-foreground/30 group">
              <div className="w-10 h-10 bg-muted border border-border rounded flex items-center justify-center mb-4 group-hover:bg-foreground/5 group-hover:border-foreground/20 transition-colors">
                <Send className="w-5 h-5 text-foreground" />
              </div>
              <Heading as="h3" size="h5" className="text-foreground text-sm font-semibold">Direct Mail</Heading>
              <Text muted size="sm" align="center" className="mt-1 text-muted-foreground text-xs">Physical notices</Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}




