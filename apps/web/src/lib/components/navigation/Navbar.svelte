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
        <NavigationMenu.List class="flex-wrap gap-1">
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
                <span class="text-2xl font-black uppercase tracking-tighter italic text-foreground hidden md:block">
                    {Brand.name}
                </span>
            </a>

            {@render RenderItems({ side: "left" })}
        </div>

        <div class="flex items-center gap-3">
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
    </div>
</div>
