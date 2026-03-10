export const MENU_ITEMS = [
    { id: "about", label: "About", path: "/about" },
    {
        id: "leaderboard",
        label: "Leaderboard",
        path: "https://www.lamb276.org/campaign",
        external: true,
    },
    { id: "product", label: "Product", path: "/#product", scrollTo: "product" },
    { id: "tokenomics", label: "Tokenomics", path: "/tokenomics" },
    { id: "goldpaper", label: "Gold Paper", path: "/gold-paper" },
    {
        id: "social",
        label: "Social",
        path: "/social",
        children: [
            {
                id: "x",
                label: "X",
                path: "https://x.com/LAMB276_X",
                external: true,
            },
            {
                id: "discord",
                label: "Discord",
                path: "https://discord.gg/lamb276",
                external: true,
            },
        ],
    },
    { id: "business", label: "Business", path: "/business" },
    { id: "contact", label: "Contact", path: "/contact" },
];
