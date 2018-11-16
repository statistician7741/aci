import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import style from  './_app.less';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, reduxStore, initialReduxState } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <Head>
              <title>{ initialReduxState.title }</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
            </Head>
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)