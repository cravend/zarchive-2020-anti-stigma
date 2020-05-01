import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../components/Link'

import { Heading, Text } from 'theme-ui'

export default () => (
  <Layout>
    <Heading
      variant="resource"
      sx={{ color: 'secondary', pt: [null, null, 0] }}
    >
      About Us
    </Heading>
    <Text>
      This website was created and designed by a group of students studying
      mental and behavioral disorders at the University of South Carolina. This
      website brings resources for mental health support and training to one
      central location. It also provides crisis materials for those in the
      middle of a mental health emergency. We hope you find this helpful!
    </Text>
    <Text>
      Have a suggestion or a resource we missed? Feel free to{' '}
      <Link to="mailto:djcraven@email.sc.edu">email the webmaster</Link>.
    </Text>
  </Layout>
)
