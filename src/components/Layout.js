/** @jsx jsx */
import Header from '../components/Header'
import Footer from '../components/Footer'

import { jsx, Container } from 'theme-ui'

export default ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <main
      sx={{
        flex: '1 1 auto',
      }}
    >
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
)
