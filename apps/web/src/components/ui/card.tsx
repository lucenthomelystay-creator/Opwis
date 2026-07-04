export function Card({ children, className='' }: { children: React.ReactNode; className?: string }) { return <div className={`glass rounded-card p-6 ${className}`}>{children}</div>; }
