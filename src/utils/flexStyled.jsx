export const flex = (direction, justify, align, gap) => `
    display: flex;
    flex-direction: ${direction || "none"};
    justify-content: ${justify || "none"};
    align-items: ${align || "none"};
    gap: ${gap}px;
`
