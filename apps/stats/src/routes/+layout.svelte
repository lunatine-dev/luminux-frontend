<script>
    import "./layout.css";

    import { fade } from "svelte/transition";
    import { page } from "$app/state";

    import { ModeWatcher } from "mode-watcher";

    import SEO from "$shared/components/SEO.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <SEO />
</svelte:head>

<ModeWatcher />

{@render children()}
