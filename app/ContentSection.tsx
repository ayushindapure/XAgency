import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-12">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="text-left max-w-xl space-y-6 md:space-y-6">
                    {/* <h2 className="text-balance text-4xl font-medium lg:text-5xl">The Lyra ecosystem brings together our models, products and platforms.</h2> */}
                    <h2 className='text-6xl uppercase text-black dark:text-white font-bold'>Radiaant</h2>
                </div>
                <img className="rounded-(--radius) grayscale" src="/radiaantDemo.jpg" alt="team image" height="" width="" loading="lazy" />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
