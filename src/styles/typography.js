import Typography from 'typography'

export default new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 2.4,
  headerFontFamily: ['Fira Mono', 'Lucida Console', 'Courier New', 'monospace'],
  bodyFontFamily: [
    'Open Sans',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Fira Mono',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '600'],
    },
  ],
})
