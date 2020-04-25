import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Container } from "theme-ui"

export default ({ children }) => (
  <>
    <Header />
    <Container>{ children }</Container>
    <Footer />
  </>
)
