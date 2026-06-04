<script>
    import { PUBLIC_STATS_URL, PUBLIC_STUDIO_URL, PUBLIC_ACCOUNT_URL } from "$env/static/public";

    import { Button } from "$lib/components/ui/button";
    import FeatureLabel from "$lib/components/landing/FeatureLabel.svelte";

    import IconTarget from "@tabler/icons-svelte/icons/target";
    import IconArrowRight from "@tabler/icons-svelte/icons/arrow-right";

    const { user } = $props();
</script>

<section
    class="max-w-5xl mx-auto mb-32 flex flex-col items-center text-center space-y-8 bg-background text-foreground px-4"
>
    <!-- Centered Status Pills -->
    <div class="flex flex-wrap items-center justify-center gap-3">
        <FeatureLabel label="live" text="Alpha 0.1" />
        <FeatureLabel variant="icon" icon={IconTarget} label="Multi-Game" text="Universal Telemetry" />
    </div>

    <!-- Original, Symmetrical Esports Headline -->
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.95] max-w-4xl">
        Match-Driven Overlays. <br />
        <span class="text-primary">Pro-Grade Analytics.</span>
    </h1>

    <!-- Tight, Balanced Value Prop -->
    <p class="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
        The open-source live telemetry platform for competitive gaming. Automate reactive broadcast widgets or dive deep
        into match history and scrim data.
    </p>

    <!-- Centered Action Grid -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
        <Button
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 h-14 text-lg font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
            href={user ? PUBLIC_STUDIO_URL : `${PUBLIC_ACCOUNT_URL}/signup`}
        >
            Streamer Studio
            <IconArrowRight class="ml-2 size-5" />
        </Button>

        <Button
            size="lg"
            variant="outline"
            class="w-full sm:w-auto rounded-xl px-8 h-14 text-lg font-bold uppercase tracking-wide bg-card border-border hover:bg-muted text-foreground hover:scale-[1.02] transition-transform"
            href={PUBLIC_STATS_URL}
        >
            Explore Game Stats
        </Button>
    </div>

    <!-- Centered Performance Row -->
    <div
        class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-border/40 w-full max-w-xl mx-auto"
    >
        <div class="text-center">
            <span class="block text-2xl font-black text-primary italic uppercase">100%</span>
            <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Open Source</span>
        </div>
        <div class="hidden sm:block h-8 w-px bg-border/60"></div>
        <div class="text-center">
            <span class="block text-2xl font-black text-foreground dark:text-white italic uppercase">Ultra-Low</span>
            <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Overlay Latency</span>
        </div>
        <div class="hidden sm:block h-8 w-px bg-border/60"></div>
        <div class="text-center">
            <span class="block text-2xl font-black text-foreground dark:text-white italic uppercase">Live</span>
            <span class="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Client Sync</span>
        </div>
    </div>
</section>
