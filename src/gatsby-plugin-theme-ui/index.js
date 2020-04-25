// example theme file
const theme =
{
  layout: {
    container: {
      maxWidth: "1100px",
      padding: 10
    }
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#51a9f5',
    secondary: '#0A4DA7',
  },
  fonts: {
    body: 'Manrope, sans-serif',
    heading: 'Manrope, sans-serif',
  },
  text: {
    heading: {
      mb: 2,
    },
    resource: {
      pb: 2,
      pt: 3,
    }
  },
  fontWeights: {
    body: 400,
    heading: 800,
  },
  styles: {
    root: {
      space: 0,
      fontFamily: 'body',

      a: {
        color: 'text',
      },
    },
    navheader: {
      textDecoration: 'none',
      color: 'black',
      mb: 0,
    },
    navlink: {
      textDecoration: 'none',
      color: 'black',
      mb: 0,
      p: 3,
      fontSize: 3
    }
  }
}

export default theme
