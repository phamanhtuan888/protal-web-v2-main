/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable func-names */
/* eslint-disable react/no-danger */
// ./pages/_document.js
import Document, { Main, NextScript, Head } from "next/document";
import { particlesjs } from "@/layouts/layoutData/phong_kham";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // console.log("document ", new Date())
    const initialProps = await Document.getInitialProps(ctx);
    const {
      req: { locale, localeDataScript },
    } = ctx;
    return {
      ...initialProps,
      locale,
      localeDataScript,
    };
  }

  componentDidMount() {
    window.onhashchange = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }

  render() {
    const { locale, localeDataScript } = this.props;
    return (
      <html lang={locale} itemScope itemType="http://schema.org/WebPage">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M7J878V4');
            `,
            }}
          />
          <meta httpEquiv="x-ua-compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta
            name="zalo-platform-site-verification"
            content="HjYxByJu7YCoxQqtiSTyDdVYsoYRaGfqC3G"
          />
          <link rel="icon" href="/static/vga_soft/images/icon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
          {/* <script async defer src="https://unpkg.com/aos@next/dist/aos.js" />
          <script async defer>
            AOS.init();
          </script> */}
          <script async defer src={particlesjs} />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: localeDataScript }} />
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M7J878V4"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </body>
      </html>
    );
  }
}

export default MyDocument;
