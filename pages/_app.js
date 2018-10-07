import App, {Container} from 'next/app'
import React from 'react'
import withNProgress from 'next-nprogress'
import NProgressStyle from 'next-nprogress/styles'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <NProgressStyle color="#29d" spinner={false} />
      <Component {...pageProps} />
    </Container>
  }
}

export default withNProgress(300)(MyApp)
