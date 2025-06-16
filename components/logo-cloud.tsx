export function LogoCloud() {
  return (
    <section className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">TRUSTED BY TOP INSURANCE CARRIERS</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Insurance company logos */}
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Manulife
          </div>
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Sun Life
          </div>
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Canada Life
          </div>
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Blue Cross
          </div>
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Desjardins
          </div>
          <div className="h-8 w-32 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs">
            Empire Life
          </div>
        </div>
      </div>
    </section>
  )
}
