import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'antd/dist/antd.css';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    { children }

  </div>
)