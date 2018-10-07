import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title key="headTitle">Homepage - CJ Apps</title>
    </Head>
    <h1>This is index page</h1>
    <Link href="/login"><a>Login</a></Link>
  </div>
)