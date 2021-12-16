import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name="theme-color" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" />
          <meta name="color-scheme" content="light dark"></meta>
        </Head>
        <body onTouchStart="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
