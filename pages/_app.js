import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import IntlProviderWrapper from '@/utils/IntlProviderWrapper';
import withDva from '@/utils/withDva';
import models from '@/models';
import viData from '@/locales/vi';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.roles = [];
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    const initialNow = Date.now();
    return { pageProps, initialNow };
  }

  render() {
    const { Component, pageProps, locale, messages, initialNow, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <IntlProviderWrapper locale={locale || 'vi'} messages={messages || viData} initialNow={initialNow}>
            {/* <TopProgressBar /> */}
            <Component {...pageProps} />
          </IntlProviderWrapper>
        </Provider>
      </Container>
    );
  }
}

export default withDva(models)(MyApp);
