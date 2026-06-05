<script>
    import IconChevronDown from "@tabler/icons-svelte/icons/chevron-down";
    import { Button } from "$lib/components/ui/button";

    const { name, to, children, offset } = $props();

    function scrollToStage(id) {
        const target = document.getElementById(id);
        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY + -25,
                behavior: "smooth",
            });
        }
    }
</script>

<section
    id={name}
    class={`w-full ${offset ? `min-h-[95vh]` : "min-h-screen"} flex flex-col justify-between items-center relative border-b border-border/40  py-16`}
>
    <div class="w-full flex-1 flex items-center justify-center">
        {@render children?.()}
    </div>

    {#if to}
        <Button
            variant="ghost"
            size="icon"
            class="rounded-full text-muted-foreground hover:text-foreground hidden sm:flex"
            onclick={() => scrollToStage(to)}
        >
            <IconChevronDown class="size-6" />
        </Button>
    {/if}
</section>
