/** @jsx jsx */
import { Link } from "../components/Link"

import { jsx, Container, Heading } from 'theme-ui'

export default () => (
  <Container>
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: ['column', null, 'row'],
        textAlign: 'center',
        p: 10,
        borderColor: 'primary',
        borderWidth: 10,
        borderBottomStyle: 'solid',
        mb: [0, null, 50],
      }}>
      <Link to='/'
        sx={{
          variant: 'styles.navheader',
          p: 2,
          color: 'secondary'
        }}>
        <Heading as='h1'>Mental Health Advocacy Resources</Heading>
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link to='/about'
        sx={{
          variant: 'styles.navlink',
        }}>
        About
      </Link>&nbsp;
      <Link to='/crisis'
        sx={{
          variant: 'styles.navlink',
          fontWeight: '800',
          color: 'red'
        }}>
        Crisis
      </Link>
    </header>
  </Container>
)
