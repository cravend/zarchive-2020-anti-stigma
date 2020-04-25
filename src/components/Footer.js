/** @jsx jsx */
import { Link } from "../components/Link"

import { jsx, Text } from 'theme-ui'

export default () => (
  <footer
    sx={{
      fontSize: 1,
      color: 'background',
      bg: 'text',
      variant: 'styles.footer',
      mt: 20
    }}>
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        maxWidth: 768,
        mx: 'auto',
        px: 2,
        py: 4,
      }}>
      <Link to='/' sx={{ variant: 'styles.navlink', px: 2, color: 'white' }}>
        Home
      </Link>&nbsp;
      <Link to='/about' sx={{ variant: 'styles.navlink', px: 2, color: 'white' }}>
        About
      </Link>&nbsp;
      <Link to='/crisis' sx={{ variant: 'styles.navlink', px: 2, color: 'white', fontWeight: '800' }}>
        Crisis
      </Link>&nbsp;
      <div sx={{ mx: 'auto' }} />
      <Text>© 2020 <Link to='https://daltoncraven.me' sx={{ color: 'white' }}>Dalton Craven</Link></Text>
    </div>
  </footer>

)
