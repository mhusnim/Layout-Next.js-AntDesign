import Page from '../components/MyLayout.js'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  lineHeight: 50,
  width: '100%',
  height: 50,
  backgroundColor: '#eee'
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
    </div>
)
