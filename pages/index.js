import Page from '../components/MyLayout.js'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default () => (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/HeaderContentFooter/pageOne">
        <a style={linkStyle}>Header-Content-Footer</a>
      </Link>
      <Link href="/HeaderSider/pageTwo">
        <a style={linkStyle}>Header-Sider</a>
      </Link>
      <Link href="/HeaderSider2/pageThree">
        <a style={linkStyle}>Header Sider 2</a>
      </Link>
      <Link href="/CollapsedSider/pageFour">
        <a style={linkStyle}>Collapsed Sider</a>
      </Link>
      <Link href="/CustomTrigger/pageFive">
        <a style={linkStyle}>Custom Trigger</a>
      </Link>
      <Link href="/Responsive/pageSix">
        <a style={linkStyle}>Responsive</a>
      </Link>
      <Link href="/FixedHeader/pageSeven">
        <a style={linkStyle}>Fixed Header</a>
      </Link>
      <Link href="/FixedSider/pageEight">
        <a style={linkStyle}>Fixed Sider</a>
      </Link>
      <Link href="/FixedHeaderSider/pageNine">
        <a style={linkStyle}>Fixed Header-Sider</a>
      </Link>
    </div>
)
