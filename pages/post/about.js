import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
export default function About() {
  return (
  <>
  <Layout>
  <Head>
        <title>About</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } />
  <h1>About</h1>
  <Link href='/'>Home</Link>
  </Layout>
  </>
  );
}
