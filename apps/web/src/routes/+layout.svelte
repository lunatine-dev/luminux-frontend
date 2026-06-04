<script>
    import "./layout.css";

    import { fade } from "svelte/transition";
    import { page } from "$app/state";

    import { ModeWatcher } from "mode-watcher";

    import SEO from "$shared/components/SEO.svelte";
    import Navbar from "$lib/components/navigation/Navbar.svelte";
    import Footer from "$lib/components/navigation/Footer.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <SEO />
</svelte:head>

<ModeWatcher />

<div
    class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden"
>
    <Navbar />
    <div class="page-container flex-1 {page.status !== 200 ? 'flex flex-col flex-1' : ''}">
        {#key page.url.pathname}
            <div
                in:fade={{ duration: 200, delay: 150 }}
                out:fade={{ duration: 150 }}
                class="page-wrapper {page.status !== 200 ? 'flex flex-col flex-1' : ''}"
            >
                {@render children()}
            </div>
        {/key}
    </div>

    <Footer />
</div>

<style>
    .page-container {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: 1fr;
        width: 100%;
    }

    .page-wrapper {
        grid-column: 1;
        grid-row: 1;
        width: 100%;
        min-width: 0;
    }
</style>
