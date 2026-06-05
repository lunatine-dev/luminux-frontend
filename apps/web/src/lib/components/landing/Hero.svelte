<script>
    import { PUBLIC_STATS_URL, PUBLIC_STUDIO_URL, PUBLIC_ACCOUNT_URL } from "$env/static/public";
    import { animateIn } from "$lib/actions/animate";

    import { Button } from "$lib/components/ui/button";
    import FeatureLabel from "$lib/components/landing/FeatureLabel.svelte";

    import IconTarget from "@tabler/icons-svelte/icons/target";
    import IconArrowRight from "@tabler/icons-svelte/icons/arrow-right";

    const { user } = $props();
</script>

<section
    class="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 bg-background text-foreground px-4 relative"
>
    <div
        class="absolute -top-40 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none hidden dark:block"
    ></div>

    <div use:animateIn class="flex flex-wrap items-center justify-center gap-3">
        <FeatureLabel label="live" text="Alpha 0.1" />
        <FeatureLabel variant="icon" icon={IconTarget} label="Multi-Game" text="Universal Telemetry" />
    </div>

    <h1
        use:animateIn={150}
        class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.95] max-w-4xl"
    >
        Match-Driven Overlays. <br />
        <span class="bg-clip-text text-primary via-primary/90 drop-shadow-sm"> Pro-Grade Analytics. </span>
    </h1>

    <p
        use:animateIn={300}
        class="text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed mx-auto font-medium"
    >
        The open-source live telemetry platform for competitive gaming. Automate reactive broadcast widgets or dive deep
        into match history and scrim data.
    </p>

    <div use:animateIn={450} class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
        <Button
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 h-14 text-lg font-bold uppercase tracking-wide bg-primary text-primary-foreground transition-all duration-300 shadow-xl shadow-primary/10 hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            href={user ? PUBLIC_STUDIO_URL : `${PUBLIC_ACCOUNT_URL}/signup`}
        >
            Streamer Studio
            <IconArrowRight class="ml-2 size-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <Button
            size="lg"
            variant="outline"
            class="w-full sm:w-auto rounded-xl px-8 h-14 text-lg font-bold uppercase tracking-wide bg-card/50 border-border/80 backdrop-blur-sm text-foreground transition-all duration-300 hover:bg-muted/80 hover:border-foreground/20 hover:-translate-y-0.5 active:translate-y-0"
            href={PUBLIC_STATS_URL}
        >
            Explore Game Stats
        </Button>
    </div>

    <div use:animateIn={600} class="w-full max-w-2xl mx-auto pt-8 border-t border-border/40">
        <div
            class="grid grid-cols-3 gap-4 bg-muted/20 dark:bg-zinc-900/30 border border-border/40 rounded-2xl p-4 backdrop-blur-xs"
        >
            <div class="text-center space-y-1">
                <span class="block text-xl md:text-2xl font-black text-primary italic uppercase tracking-tight"
                    >100%</span
                >
                <span class="block text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-black"
                    >Open Source</span
                >
            </div>

            <div class="text-center space-y-1 border-x border-border/40 px-2">
                <span class="block text-xl md:text-2xl font-black text-foreground italic uppercase tracking-tight"
                    >Ultra-Low</span
                >
                <span class="block text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-black"
                    >Overlay Latency</span
                >
            </div>

            <div class="text-center space-y-1 flex flex-col justify-center items-center">
                <div class="flex items-center gap-1.5 justify-center">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                        ></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span class="text-xl md:text-2xl font-black text-foreground italic uppercase tracking-tight"
                        >Live</span
                    >
                </div>
                <span class="block text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-black"
                    >Client Sync</span
                >
            </div>
        </div>
    </div>
</section>
