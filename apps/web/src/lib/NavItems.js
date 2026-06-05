import IconApps from "@tabler/icons-svelte/icons/apps";
import IconTag from "@tabler/icons-svelte/icons/tag";
import IconGridDots from "@tabler/icons-svelte/icons/grid-dots";
import { PUBLIC_STATS_URL, PUBLIC_STUDIO_URL } from "$env/static/public";

export default [
    {
        label: "Platforms",
        type: "dropdown",
        Icon: IconApps,
        items: [
            {
                title: "Streamer Studio",
                href: PUBLIC_STUDIO_URL,
                description: "Automated reactive overlays & alerts",
            },
            {
                title: "Match Analytics",
                href: PUBLIC_STATS_URL,
                description: "Deep performance trends & match history",
            },
        ],
        side: "left",
    },
    {
        label: "Games",
        Icon: IconGridDots,
        href: "/games",
        side: "left",
    },
    {
        label: "Pricing",
        Icon: IconTag,
        href: "/pricing",
        side: "right",
    },
];
