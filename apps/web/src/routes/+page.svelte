<script>
    import Stage from "$lib/components/landing/Stage.svelte";
    import Hero from "$lib/components/landing/Hero.svelte";
    import Preview from "$lib/components/landing/Preview.svelte";
    import Features from "$lib/components/landing/Features.svelte";

    const { user = null } = $props();
</script>

<div class="w-full bg-background transition-colors duration-500">
    <Stage name="hero" to="content" offset="5vh">
        <Hero {user} />
    </Stage>

    <div
        class="w-full min-w-0 max-w-350 mx-auto px-6 lg:px-12 pt-6 md:pt-20 pb-32 transition-colors duration-500"
        id="content"
    >
        <Preview />
        <Features />
    </div>
</div>
