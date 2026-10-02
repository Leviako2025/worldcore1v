const categories = [
  ['🎮','Gaming','Games, studios, esports & services'],
  ['📈','Trading & Finance','Platforms, tools & financial products'],
  ['🛍️','Products & Brands','Products people can discover'],
  ['🌐','Websites & Apps','Digital products & services'],
  ['🎥','Creators & Media','Creators, channels & publishers'],
  ['🚀','Startups & Business','Companies ready to be discovered'],
];

const featured = [
  { name:'NOVA PLAY', type:'Gaming', tag:'Featured', desc:'Discover new games and digital entertainment.' },
  { name:'CORE MARKET', type:'Business', tag:'Verified website', desc:'A clean place to discover digital services.' },
  { name:'PIXEL LABS', type:'Products', tag:'Sponsored', desc:'Creative tools built for modern creators.' },
];

export default function Home() {
  return <main>
    <nav className="nav wrap"><div className="logo"><span>W</span> WORLD-CORE</div><div className="links"><a href="#explore">Explore</a><a href="#verification">Verification</a><a href="#advertise">Advertise</a></div><a className="navbtn" href="#advertise">Get Started</a></nav>
    <section className="hero wrap"><div className="eyebrow">GLOBAL ADVERTISING NETWORK</div><h1>Where <em>Brands</em><br/>Meet the World.</h1><p>Discover businesses, products, games, apps and services through a transparent advertising marketplace built for the social world.</p><div className="actions"><a className="primary" href="#explore">Explore Brands <b>→</b></a><a className="secondary" href="#advertise">Advertise With Us</a></div><div className="search"><span>⌕</span><input placeholder="Search brands, games, apps, products…"/><kbd>⌘ K</kbd></div></section>
    <section id="explore" className="section wrap"><div className="sectionhead"><div><div className="eyebrow">DISCOVER</div><h2>Explore the World</h2></div><a href="#explore">View all →</a></div><div className="grid cats">{categories.map(([icon,name,desc])=><a className="card cat" href="#featured" key={name}><div className="icon">{icon}</div><h3>{name}</h3><p>{desc}</p><span>Explore →</span></a>)}</div></section>
    <section id="featured" className="section dark"><div className="wrap"><div className="sectionhead"><div><div className="eyebrow">SPONSORED DISCOVERY</div><h2>Featured Around the World</h2></div><span className="muted">Paid placements are clearly labeled.</span></div><div className="grid featured">{featured.map((x,i)=><article className="feature" key={x.name}><div className={'featureart art'+i}><span>{i===0?'NOVA':i===1?'CORE':'PIXEL'}</span></div><div className="featurebody"><div className="badges"><span>{x.tag}</span><small>{x.type}</small></div><h3>{x.name}</h3><p>{x.desc}</p><a href="#advertise">View campaign →</a></div></article>)}</div></div></section>
    <section id="verification" className="trust wrap"><div className="trustcopy"><div className="eyebrow">WORLD-CORE VERIFICATION</div><h2>Transparency before trust.</h2><p>Verification tells people what was actually checked. It does not mean WORLD-CORE endorses a business, product or financial outcome.</p><a className="primary" href="#advertise">See how verification works →</a></div><div className="checks"><div><b>✓</b><span><strong>Identity Verified</strong><small>Advertiser identity checked</small></span></div><div><b>✓</b><span><strong>Website Verified</strong><small>Destination website reviewed</small></span></div><div><b>✓</b><span><strong>Sponsored Advertisement</strong><small>Paid placement disclosed</small></span></div><div><b>✓</b><span><strong>Business Information</strong><small>Required details submitted</small></span></div></div></section>
    <section id="advertise" className="cta wrap"><div><div className="eyebrow">FOR ADVERTISERS</div><h2>Put your brand<br/><em>in the world.</em></h2><p>Launch a campaign, choose where you want to appear, and give customers a clear path to your business.</p></div><div className="ctaBtns"><a className="primary" href="mailto:advertise@world-core.example">Start Advertising →</a><a className="secondary" href="#explore">See placements</a></div></section>
    <footer className="footer wrap"><div><div className="logo"><span>W</span> WORLD-CORE</div><p>Where Brands Meet the World.</p></div><div className="footlinks"><a href="#verification">Verification</a><a href="#advertise">Advertise</a><a href="#">Privacy</a><a href="#">Advertising Policy</a></div><small>© 2026 WORLD-CORE. Advertising is not endorsement.</small></footer>
  </main>;
}
