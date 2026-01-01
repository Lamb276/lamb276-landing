export const MENU_ITEMS = [
    { id: "about", label: "About", path: "/about" },
    { id: "leaderboard", label: "Leaderboard", path: "/leaderboard" },
    {
        id: "social",
        label: "Social",
        path: "/social",
        children: [
            {
                id: "x",
                label: "X",
                path: "https://x.com/LAMB276",
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
    { id: "goldpaper", label: "Gold Paper", path: "/gold-paper" },
    { id: "tokenomics", label: "Tokenomics", path: "/tokenomics" },
    { id: "contact", label: "Contact", path: "/contact" },
];
