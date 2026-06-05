<script>
    import { Input } from "$lib/components/ui/input";
    import { Badge } from "$lib/components/ui/badge";
    import IconSearch from "@tabler/icons-svelte/icons/search";
    import IconCircleX from "@tabler/icons-svelte/icons/circle-x";
    import IconBolt from "@tabler/icons-svelte/icons/bolt";
    import IconChartBar from "@tabler/icons-svelte/icons/chart-bar";
    import IconArrowRight from "@tabler/icons-svelte/icons/arrow-right";
    import IconClock from "@tabler/icons-svelte/icons/clock";

    const games = [
        {
            slug: "overwatch",
            title: "Overwatch",
            studioSupported: false,
            statsSupported: false,
            status: "Coming Soon", // "Online" | "Offline" | "Coming Soon"
            image: "/images/logos/overwatch.webp",
        },
        {
            slug: "marvel-rivals",
            title: "Marvel Rivals",
            studioSupported: false,
            statsSupported: false,
            status: "Coming Soon",
            image: "/images/logos/rivals.png",
        },
    ];

    let searchQuery = $state("");

    const filteredGames = $derived(
        games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    const statusThemes = {
        Online: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/20",
        Offline: "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400 dark:border-rose-500/20",
        "Coming Soon":
            "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400 dark:border-amber-500/20",
    };
</script>

<main class="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-32 space-y-12">
    <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-border/40 pb-8"
    >
        <div class="space-y-2">
            <h1 class="text-4xl font-black uppercase tracking-tight italic text-zinc-900 dark:text-white">
                Supported Games
            </h1>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                Explore telemetry specifications, real-time app compatibility, and platform ecosystem states.
            </p>
        </div>

        <div class="relative w-full md:w-80">
            <IconSearch class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400 dark:text-zinc-500" />
            <Input
                type="text"
                placeholder="Search supported titles..."
                class="pl-10 h-11 bg-zinc-50 border-zinc-200 text-zinc-900 dark:bg-zinc-900/40 dark:border-border/60 dark:text-zinc-200 rounded-xl"
                bind:value={searchQuery}
            />
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredGames as game (game.slug)}
            <a
                href="/games/{game.slug}"
                class="group relative flex flex-col justify-between h-56 bg-white border border-zinc-200 hover:border-zinc-300 dark:bg-zinc-950 dark:border-zinc-900 dark:hover:border-zinc-800 rounded-3xl p-6 transition-all duration-300 overflow-hidden shadow-md dark:shadow-2xl"
            >
                <div
                    class="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-zinc-950 dark:via-zinc-950/90 z-10"
                ></div>
                <div
                    class="absolute inset-0 opacity-15 group-hover:opacity-40 dark:opacity-5 dark:group-hover:opacity-20 transition-opacity duration-300 bg-cover bg-center"
                    style="background-image: url('{game.image}')"
                ></div>

                <div class="flex items-start justify-between z-20">
                    <h2
                        class="text-2xl font-black uppercase tracking-tight italic text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors"
                    >
                        {game.title}
                    </h2>

                    <Badge
                        variant="outline"
                        class="font-mono text-[9px] uppercase tracking-wider font-black h-6 px-2.5 rounded-full {statusThemes[
                            game.status
                        ]}"
                    >
                        <span
                            class="size-1.5 rounded-full mr-1.5 animate-pulse {game.status === 'Online'
                                ? 'bg-emerald-500 dark:bg-emerald-400'
                                : game.status === 'Coming Soon'
                                  ? 'bg-amber-500 dark:bg-amber-400'
                                  : 'bg-rose-500 dark:bg-rose-400'}"
                        >
                        </span>
                        {game.status}
                    </Badge>
                </div>

                <div class="space-y-4 z-20">
                    <div class="flex items-center gap-6 border-t border-zinc-100 dark:border-zinc-900 pt-4">
                        <div class="flex items-center gap-2">
                            {#if game.studioSupported}
                                <IconBolt class="size-4 text-emerald-600 dark:text-emerald-400" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
                                    >Studio Overlay</span
                                >
                            {:else if game.status === "Coming Soon"}
                                <IconClock class="size-4 text-amber-600/60 dark:text-amber-500/50" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-amber-600/60 dark:text-amber-500/50"
                                    >Studio Overlay</span
                                >
                            {:else}
                                <IconCircleX class="size-4 text-rose-600/50 dark:text-rose-500/60" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-rose-600/50 dark:text-rose-500/60"
                                    >Studio Overlay</span
                                >
                            {/if}
                        </div>

                        <div class="flex items-center gap-2">
                            {#if game.statsSupported}
                                <IconChartBar class="size-4 text-emerald-600 dark:text-emerald-400" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
                                    >Game Stats</span
                                >
                            {:else if game.status === "Coming Soon"}
                                <IconClock class="size-4 text-amber-600/60 dark:text-amber-500/50" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-amber-600/60 dark:text-amber-500/50"
                                    >Game Stats</span
                                >
                            {:else}
                                <IconCircleX class="size-4 text-rose-600/50 dark:text-rose-500/60" />
                                <span
                                    class="text-[10px] font-black uppercase tracking-widest text-rose-600/50 dark:text-rose-500/60"
                                    >Game Stats</span
                                >
                            {/if}
                        </div>
                    </div>

                    <div
                        class="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors pt-1"
                    >
                        <span class="font-bold uppercase tracking-wider text-[10px]">View Details & Events</span>
                        <IconArrowRight class="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </a>
        {/each}
    </div>
</main>
