// import Link from 'next/link'
//
// const linkStyle = {
//   marginRight: 15,
//   marginTop: 25
// }
//
// const Header = () => (
//     <div>
//       <h1>Example Layout design using Next.js + Ant Design</h1>
//
//       <Link href="/">
//         <button style={linkStyle}>Home</button>
//       </Link>
//       <Link href="/HeaderContentFooter/pageOne">
//         <button style={linkStyle}>Header-Content-Footer</button>
//       </Link>
//       <Link href="../pages/HeaderSider/Index">
//         <button style={linkStyle}>Header-Sider</button>
//       </Link>
//       <Link href="/HeaderSider2/Index">
//         <button style={linkStyle}>Header Sider 2</button>
//       </Link>
//       <Link href="/CollapsedSider/Index">
//         <button style={linkStyle}>Collapsed Sider</button>
//       </Link>
//       <Link href="/CustomTrigger/Index">
//         <button style={linkStyle}>Custom Trigger</button>
//       </Link>
//       <Link href="/Responsive/Index">
//         <button style={linkStyle}>Responsive</button>
//       </Link>
//       <Link href="/FixedHeader/Index">
//         <button style={linkStyle}>Fixed Header</button>
//       </Link>
//       <Link href="/FixedSider/Index">
//         <button style={linkStyle}>Fixed Sider</button>
//       </Link>
//       <Link href="/FixedHeaderSider/Index">
//         <button style={linkStyle}>Fixed Header-Sider</button>
//       </Link>
//     </div>
// )
//
// export default Header

import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15,
  marginTop: 25
}

export default ({ children, title = 'Belajar Next.JS' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
    </Head>
    <header>
      <h1>Example Layout design using Next.js + Ant Design</h1>
      <nav>
        <Link href="/">
          <button style={linkStyle}>Home</button>
        </Link>
        <Link href="/HeaderContentFooter/pageOne">
          <button style={linkStyle}>Header-Content-Footer</button>
        </Link>
        <Link href="/HeaderSider/pageTwo">
          <button style={linkStyle}>Header-Sider</button>
        </Link>
        <Link href="/HeaderSider2/pageThree">
          <button style={linkStyle}>Header Sider 2</button>
        </Link>
        <Link href="/CollapsedSider/pageFour">
          <button style={linkStyle}>Collapsed Sider</button>
        </Link>
        <Link href="/CustomTrigger/pageFive">
          <button style={linkStyle}>Custom Trigger</button>
        </Link>
        <Link href="/Responsive/pageSix">
          <button style={linkStyle}>Responsive</button>
        </Link>
        <Link href="/FixedHeader/pageSeven">
          <button style={linkStyle}>Fixed Header</button>
        </Link>
        <Link href="/FixedSider/pageEight">
          <button style={linkStyle}>Fixed Sider</button>
        </Link>
        <Link href="/FixedHeaderSider/pageNine">
          <button style={linkStyle}>Fixed Header-Sider</button>
        </Link>
      </nav>
    </header>

    { children }

  </div>
)
