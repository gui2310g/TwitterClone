export const widthHeight = (width, maxWidth, height, maxHeight) => `
    width: ${width || 'auto'};
    max-width: ${maxWidth || 'none'};
    height: ${height || 'auto'};
    max-height: ${maxHeight || 'none'};
`