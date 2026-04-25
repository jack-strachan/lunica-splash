export function HowItWorksVisual() {
  return (
    <div className="relative w-full h-[320px] rounded-xl border border-border bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-bold">LIVE PREVIEW</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
        </div>
      </div>

      <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-bold mb-4">
        PRIORITY QUEUE
      </div>

      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="bg-white border border-[#FF5F56]/30 rounded-lg p-4 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
              <span className="text-sm font-semibold text-foreground">MegaCorp</span>
            </div>
            <span className="text-sm font-mono text-primary font-medium">$84,200</span>
          </div>
          <span className="text-[11px] text-muted-foreground ml-4">Payment 45 days overdue</span>
        </div>

        {/* Row 2 */}
        <div className="bg-white border border-[#FF5F56]/30 rounded-lg p-4 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
              <span className="text-sm font-semibold text-foreground">StartupXYZ</span>
            </div>
            <span className="text-sm font-mono text-primary font-medium">$12,800</span>
          </div>
          <span className="text-[11px] text-muted-foreground ml-4">Escalation requested</span>
        </div>

        {/* Row 3 (partial) */}
        <div className="bg-white border border-border rounded-lg p-4 flex flex-col justify-center opacity-70">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
              <span className="text-sm font-semibold text-foreground">RetailCo</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground font-medium">$5,400</span>
          </div>
        </div>
      </div>
    </div>
  )
}
