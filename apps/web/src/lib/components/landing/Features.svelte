<script>
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { animateIn } from "$lib/actions/animate";

    import FeatureCard from "./FeatureCard.svelte";

    import IconBolt from "@tabler/icons-svelte/icons/bolt";
    import IconChartBar from "@tabler/icons-svelte/icons/chart-bar";
    import IconVideo from "@tabler/icons-svelte/icons/video";
    import IconDownload from "@tabler/icons-svelte/icons/download";
    import IconPlayerPlay from "@tabler/icons-svelte/icons/player-play";
    import IconBroadcast from "@tabler/icons-svelte/icons/broadcast";
</script>

<div use:animateIn class="grid md:grid-cols-3 gap-8 border-t border-border pt-24">
    <FeatureCard
        icon={IconBolt}
        title="Live Reactive Overlays"
        description="Overlays that respond instantly to your live gameplay and stream milestones. Flash custom graphic animations for massive match events, and cleanly sync your broadcast layout with live Twitch alerts."
    />
    <FeatureCard
        icon={IconChartBar}
        title="Deep Profile Analytics"
        description="See the full picture of your competitive career. We combine your live match data with your official Blizzard account history to show you exactly how your performance trends across every map and role."
    />
    <FeatureCard
        icon={IconVideo}
        title="Instant VOD Markers"
        description="Stop scrolling blindly through a 6-hour stream recording to find your highlights. Luminux marks your timeline automatically the exact moment a massive play happens in-game."
    />
</div>

<div use:animateIn={150} class="mt-32 flex flex-col items-center text-center space-y-8">
    <div class="space-y-4">
        <Badge
            variant="outline"
            class="bg-primary/5 text-primary border-primary/20 px-4 py-0.5 font-bold uppercase tracking-wider text-[10px]"
        >
            Stream Editing Made Easy
        </Badge>
        <h3 class="text-3xl md:text-5xl font-black italic uppercase tracking-tight text-foreground">
            Smart Killfeed Markers
        </h3>
        <p class="text-muted-foreground max-w-xl mx-auto text-base">
            Skip the manual clip hunting. We automatically drop time-stamps on your local recording the moment you
            secure a team wipe or a clutch win, ready to grab for your TikToks or Shorts.
        </p>
    </div>

    <div
        class="w-full max-w-3xl bg-zinc-50 dark:bg-zinc-950 border border-border rounded-3xl p-6 shadow-xl dark:shadow-2xl space-y-6 transition-colors"
    >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconPlayerPlay class="size-5 text-primary fill-primary" />
                </div>
                <div class="text-left">
                    <p class="text-xs font-black uppercase tracking-widest text-zinc-400">Stream Recording</p>
                    <p class="text-sm font-mono font-bold text-foreground italic">Overwatch_Session.mp4</p>
                </div>
            </div>
            <Button
                variant="outline"
                size="sm"
                class="rounded-xl gap-2 border-border font-bold uppercase tracking-wide text-xs h-10 hover:bg-muted"
            >
                <IconDownload class="size-4" />
                Export Match Markers
            </Button>
        </div>

        <div class="relative h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full">
            <div class="absolute inset-y-0 left-0 w-[65%] bg-primary/30 rounded-full"></div>

            <div
                class="absolute left-[15%] -top-1 h-4 w-1 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] rounded-full group cursor-pointer"
            >
                <div
                    class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    Triple Kill
                </div>
            </div>
            <div
                class="absolute left-[45%] -top-1 h-4 w-1 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] rounded-full group cursor-pointer"
            >
                <div
                    class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    Team Wipe
                </div>
            </div>
            <div class="absolute left-[82%] -top-1 h-4 w-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></div>
        </div>

        <div class="flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
            <span>00:00:00</span>
            <span>Match End</span>
        </div>
    </div>
</div>

<section use:animateIn class="mt-40 relative group">
    <div
        class="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500"
    ></div>
    <div
        class="relative bg-white dark:bg-zinc-950 border border-border p-8 md:p-16 rounded-[3rem] flex flex-col lg:flex-row items-center gap-12 overflow-hidden transition-colors"
    >
        <div class="flex-1 space-y-6 text-center lg:text-left z-10">
            <Badge variant="outline" class="border-primary/50 text-primary font-bold px-4 py-1">
                Optional Studio Sync
            </Badge>
            <h2 class="text-4xl md:text-5xl font-black tracking-tight text-foreground italic uppercase">
                Deep OBS Integration
            </h2>
            <p class="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Bridge the gap between live gameplay and broadcast production. Use
                <span class="text-foreground font-bold underline decoration-primary/30">Smart Scene Switching</span> to toggle
                visibility, transition cameras, or swap graphic layouts the moment a match begins or ends.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 pt-4">
                {#each ["Source Toggling", "Scene Transitions", "Zero-Latency"] as tag}
                    <div
                        class="flex items-center gap-2 text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]"
                    >
                        <div class="size-1.5 rounded-full bg-primary"></div>
                        {tag}
                    </div>
                {/each}
            </div>
        </div>

        <div
            class="lg:w-1/3 flex justify-center opacity-20 dark:opacity-40 group-hover:scale-105 transition-transform duration-500"
        >
            <IconBroadcast class="size-48 text-primary" stroke={1} />
        </div>
    </div>
</section>
