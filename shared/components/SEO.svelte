<script>
    import Brand from "./Brand";

    let { title, description, url, image, sideApp = false } = $props();

    const defaultTitle = Brand.name || "Luminux";
    const defaultDescription =
        "Sync your Overwatch 2 stream with a reactive HUD. Automate hero-swaps, trigger kill-streak overlays, and archive every Team Wipe automatically.";
    const defaultUrl = "https://luminux.app";
    const defaultImage = "https://luminux.app/favicon/web-app-manifest-512x512.png";
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="theme-color" content="#7008e7" />
    <meta name="msapplication-TileColor" content="#7008e7" />

    <link rel="preload" href="https://luminux.app/favicon/site.webmanifest" as="fetch" crossorigin="anonymous" />
    <link rel="manifest" href="https://luminux.app/favicon/site.webmanifest" crossorigin="anonymous" />

    <link rel="icon" type="image/png" href="https://luminux.app/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="https://luminux.app/favicon/favicon.svg" />
    <link rel="shortcut icon" href="https://luminux.app/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://luminux.app/favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content={Brand.name || "Luminux"} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url || defaultUrl} />
    <meta property="og:image" content={image || defaultImage} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta name="description" content={description || defaultDescription} />
    <meta
        property="og:title"
        content={title ? `${title} - ${Brand.name || defaultTitle}` : Brand.name || defaultTitle}
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
        name="twitter:title"
        content={title ? `${title} - ${Brand.name || defaultTitle}` : Brand.name || defaultTitle}
    />
    <meta name="twitter:description" content={description || defaultDescription} />
    <meta name="twitter:image" content={image || defaultImage} />

    <title>{title ? `${title} - ${Brand.name || defaultTitle}` : Brand.name || defaultTitle}</title>
</svelte:head>
