<template>
  <div id="app">
    <Header />
    <Section />
    <Footer />
  </div>
</template>

<script>

import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Section from './layouts/Section'

export default {
  name: 'App',
  components: {
		Header,
		Footer,
		Section,
  }
}
</script>

