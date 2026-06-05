<script>
    import { animateIn } from "$lib/actions/animate";

    import { Card } from "$lib/components/ui/card";

    const scenes = {
        Bounties: {
            video: "bounty.mp4",
            events: [
                { time: 0.1, label: "Elimination", action: "Kill", context: "REIN" },
                { time: 3.9, label: "Elimination", action: "Double_Kill", context: "You" },
                { time: 3.91, label: "Elimination", action: "Bounty_Killed", context: "You" },
                { time: 6.07, label: "Elimination", action: "Triple_Kill", context: "You" },
            ],
        },
        "Hero Swaps": {
            video: "change_hero.mp4",
            events: [
                { time: 2.7, label: "Hero_Swap", action: "Switch_to_Symmetra", context: "OVERCL0CKED" },
                { time: 4.9, label: "Round_Start", action: "Lijiang", context: "Competitive" },
                { time: 6.6, label: "Hero_Swap", action: "Switch_to_Ana", context: "You" },
                { time: 9.17, label: "Hero_Swap", action: "Switch_to_Zarya", context: "OVERCL0CKED" },
            ],
        },
        "Outcome Detection": {
            video: "loss.mp4",
            events: [
                { time: 0.5, label: "Elimination", action: "Kill", context: "Crisman300" },
                { time: 5, label: "Round_End", action: "Lijiang", context: "Competitive" },
                { time: 5.1, label: "Outcome", action: "Defeat", context: "Competitive" },
            ],
        },
    };

    let activeTab = $state("Bounties");
    let time = $state(0);
    const currentScene = $derived(scenes[activeTab]);

    $effect(() => {
        activeTab;
        time = 0;
    });
</script>

<div class="flex items-center justify-center">
    <div class="relative w-full max-w-250 mb-40 group" use:animateIn={150}>
        <div class="flex flex-wrap items-center justify-center gap-2 w-full mb-5 z-10">
            {#each Object.keys(scenes) as tab}
                <button
                    onclick={() => (activeTab = tab)}
                    class="px-6 py-2 text-sm font-medium transition-all duration-200
            rounded-full border-2
            {activeTab === tab
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-muted hover:border-muted-foreground text-muted-foreground'}"
                >
                    {tab}
                </button>
            {/each}
        </div>

        <Card
            class="p-0 relative overflow-hidden rounded-[2.5rem] border border-border bg-white dark:bg-zinc-950 shadow-2xl flex flex-col pt-0 gap-0"
        >
            <div
                class="w-full h-11 shrink-0 bg-zinc-100/80 dark:bg-zinc-900/90 hidden md:flex items-center px-6 gap-2 border-b border-border z-30"
            >
                <div class="flex gap-2">
                    <div class="size-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="size-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="size-3 rounded-full bg-[#27c93f]"></div>
                </div>
            </div>

            <div class="relative w-full aspect-video overflow-hidden bg-zinc-900">
                <video
                    bind:currentTime={time}
                    src={"/videos/examples/" + currentScene.video}
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-cover"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </Card>
    </div>
</div>
