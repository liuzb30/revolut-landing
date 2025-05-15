export const theme = {
  colors: {
    primary: '#191C1F',
    secondary: '#8B959E',
    accent: '#0666EB',
    background: '#FFFFFF',
    text: '#191C1F',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
} as const;

export type Theme = typeof theme; 