import { Html, Head, Main, NextScript } from "next/document";
export default function Document(props) {
  return (
    <Html lang="en">
      <Head {...props}>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
