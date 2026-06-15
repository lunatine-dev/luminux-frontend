<script>
    import { toggleMode } from "mode-watcher";
    import { cn } from "$lib/utils";

    import * as NavigationMenu from "$lib/components/ui/navigation-menu";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Sheet from "$lib/components/ui/sheet";

    import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";

    import Brand from "$shared/components/Brand";
    import NavItems from "$lib/NavItems";

    import IconBolt from "@tabler/icons-svelte/icons/bolt";
    import IconSun from "@tabler/icons-svelte/icons/sun";
    import IconMoon from "@tabler/icons-svelte/icons/moon";
    import IconMenu2 from "@tabler/icons-svelte/icons/menu-2";
    import IconBrandDiscord from "@tabler/icons-svelte/icons/brand-discord";
    import { page } from "$app/state";

    const isMobile = new IsMobile();
    const { user = null } = $props();

    // Local state to manage sheet opening
    let mobileMenuOpen = $state(false);

    // Svelte 5 reactive effect: automatically close mobile drawer when route changes
    $effect(() => {
        if (page.url.pathname) {
            mobileMenuOpen = false;
        }
    });
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps })}
    <li>
        <NavigationMenu.Link>
            {#snippet child()}
                <a
                    {href}
                    class={cn(
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-xl p-3 leading-none no-underline transition-all outline-none select-none group/item",
                        className,
                    )}
                    {...restProps}
                >
                    <div
                        class="text-sm font-bold tracking-tight text-foreground transition-colors group-hover/item:text-primary"
                    >
                        {title}
                    </div>
                    <p class="text-muted-foreground/80 line-clamp-2 text-xs leading-snug mt-1">
                        {content}
                    </p>
                </a>
            {/snippet}
        </NavigationMenu.Link>
    </li>
{/snippet}

{#snippet RenderItems({ side = "right" })}
    <NavigationMenu.Root viewport={isMobile.current}>
        <NavigationMenu.List class="flex-wrap gap-1 hidden lg:flex">
            {#each NavItems.filter((item) => item.side === side) as item}
                {@const Icon = item.Icon}

                {#if !item?.type}
                    <NavigationMenu.Item>
                        <NavigationMenu.Link>
                            {#snippet child()}
                                <a
                                    href={item.href}
                                    class={cn(
                                        navigationMenuTriggerStyle(),
                                        "text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-zinc-100 font-semibold uppercase tracking-wide text-xs gap-1.5",
                                    )}
                                >
                                    <Icon class="size-4 stroke-[2px] opacity-80" />
                                    {item.label}
                                </a>
                            {/snippet}
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                {:else if item.type === "dropdown"}
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                            class={cn(
                                navigationMenuTriggerStyle(),
                                "text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-zinc-100 font-semibold uppercase tracking-wide text-xs gap-1.5",
                            )}
                        >
                            <Icon class="size-4 stroke-[2px] opacity-80" />
                            {item.label}
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                            <ul class="grid w-[300px] gap-2 p-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {#each item.items as subItem, i (i)}
                                    {@render ListItem({
                                        href: subItem.href,
                                        title: subItem.title,
                                        content: subItem.description,
                                    })}
                                {/each}
                            </ul>

                            {#if item.footerLink}
                                <a
                                    href={item.footerLink.href}
                                    class="text-center py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary border-t border-border/50 block mt-1 transition-colors rounded-lg hover:bg-muted/40"
                                >
                                    {item.footerLink.label}
                                </a>
                            {/if}
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                {/if}
            {/each}
        </NavigationMenu.List>
    </NavigationMenu.Root>
{/snippet}

<div
    class="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl transition-colors duration-500"
>
    <div class="max-w-350 mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div class="flex items-center gap-8">
            <a href="/" class="flex items-center gap-3 group cursor-pointer">
                <div
                    class="size-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105"
                >
                    <IconBolt class="size-6 text-primary-foreground stroke-2" />
                </div>
                <span class="text-2xl font-black uppercase tracking-tighter italic text-foreground">
                    {Brand.name}
                </span>
            </a>

            {@render RenderItems({ side: "left" })}
        </div>

        <div class="hidden lg:flex items-center gap-3">
            {@render RenderItems({ side: "right" })}

            <div class="h-5 w-px bg-border/60 mx-1 hidden sm:block"></div>

            <Button
                class="rounded-xl px-6 font-black shadow-lg shadow-primary/20 tracking-wide uppercase text-xs h-10"
                href="/signup"
            >
                Get Started
            </Button>

            <Button
                variant="ghost"
                size="icon"
                class="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
                href="https://discord.luminux.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconBrandDiscord class="size-5" />
            </Button>

            <Button
                onclick={toggleMode}
                variant="ghost"
                size="icon"
                class="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted relative"
            >
                <IconSun class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <IconMoon
                    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>

        <div class="flex lg:hidden">
            <Sheet.Root bind:open={mobileMenuOpen}>
                <Sheet.Trigger class="p-2 -mr-2 rounded-md hover:bg-muted transition-colors">
                    <IconMenu2 class="size-6" />
                </Sheet.Trigger>
                <Sheet.Content
                    side="top"
                    class="w-full h-auto max-h-[92vh] px-0 bg-background border-b shadow-2xl flex flex-col rounded-b-3xl"
                >
                    <Sheet.Header class="px-6 border-b pb-4">
                        <Sheet.Title class="text-left font-bold text-xl tracking-tight">
                            {Brand.name}
                        </Sheet.Title>
                    </Sheet.Header>

                    <nav class="overflow-y-auto px-6 py-6 space-y-6">
                        {#each NavItems as item}
                            {@const IconComponent = item.Icon}

                            {#if item.type === "dropdown"}
                                <div class="space-y-3">
                                    <div
                                        class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/70"
                                    >
                                        {#if IconComponent}
                                            <IconComponent class="w-4 h-4" />
                                        {/if}
                                        <span>{item.label}</span>
                                    </div>

                                    <div class="grid grid-cols-1 gap-2">
                                        {#each item.items as subItem}
                                            <a
                                                href={subItem.href}
                                                class="p-4 rounded-xl border border-border/60 bg-card/40 hover:bg-accent group transition-all duration-150 active:scale-[0.99]"
                                            >
                                                <div class="font-bold text-sm text-foreground transition-colors">
                                                    {subItem.title}
                                                </div>
                                                {#if subItem.description}
                                                    <p class="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                                        {subItem.description}
                                                    </p>
                                                {/if}
                                            </a>
                                        {/each}
                                    </div>
                                </div>
                            {:else}
                                {#if item.label === "Games"}
                                    <div class="grid grid-cols-2 gap-3 mt-2">
                                        {#each NavItems.filter((i) => i.type !== "dropdown") as singleItem}
                                            {@const SingleIcon = singleItem.Icon}
                                            <a
                                                href={singleItem.href}
                                                class="flex flex-col gap-2 p-4 rounded-xl border border-border/60 bg-card/30 hover:bg-accent hover:text-accent-foreground transition-all duration-150 text-left active:scale-[0.98]"
                                            >
                                                {#if SingleIcon}
                                                    <SingleIcon class="w-5 h-5 text-muted-foreground" />
                                                {/if}
                                                <span class="text-xs font-bold uppercase tracking-wider"
                                                    >{singleItem.label}</span
                                                >
                                            </a>
                                        {/each}
                                    </div>
                                {/if}
                            {/if}
                        {/each}

                        <div class="border-t border-border/60 pt-5 flex items-center justify-between gap-4">
                            <Button
                                class="rounded-xl flex-1 font-black shadow-lg shadow-primary/10 tracking-wide uppercase text-xs h-11"
                                href="/signup"
                            >
                                Get Started
                            </Button>

                            <div class="flex items-center gap-1">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    class="rounded-full text-muted-foreground h-11 w-11"
                                    href="https://discord.luminux.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconBrandDiscord class="size-5" />
                                </Button>

                                <Button
                                    onclick={toggleMode}
                                    variant="ghost"
                                    size="icon"
                                    class="rounded-full text-muted-foreground h-11 w-11 relative"
                                >
                                    <IconSun
                                        class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
                                    />
                                    <IconMoon
                                        class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                                    />
                                </Button>
                            </div>
                        </div>
                    </nav>
                </Sheet.Content>
            </Sheet.Root>
        </div>
    </div>
</div>
