/* nav.js — injects shared nav + footer, highlights active page */
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const pages = [
    {href:'index.html',label:'Home'},
    {href:'basic-movement.html',label:'Basic Movement'},
    {href:'blueprint-guides.html',label:'Blueprint & Guides'},
    {href:'faqs.html',label:'FAQs'},
    {href:'contact.html',label:'Contact'},
  ];
  const links = pages.map(p=>`<a href="${p.href}" class="${path===p.href?'active':''}">${p.label}</a>`).join('');
  document.getElementById('nav-placeholder').innerHTML=`
    <nav>
      <a class="logo" href="index.html">
        <img src="https://static.wixstatic.com/media/488316_b3b11ac11bd940b08bc36788330957ce~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_RPG2.png" alt="RobinPG"/>
        <div class="logo-text">Robin<span>PG</span></div>
      </a>
      <div class="nav-links">${links}</div>
      <button class="nav-buy" onclick="window.open('https://www.fab.com/listings/f903e60f-a637-429e-97ec-33722971b1d1','_blank')">Buy on FAB</button>
    </nav>`;
  document.getElementById('footer-placeholder').innerHTML=`
    <div class="footer-wrap">
      <footer>
        <div>
          <div class="footer-logo">Robin<span>PG</span></div>
          <div class="footer-copy">© 2024 Robin Picture Graphic. All rights reserved.</div>
        </div>
        <div class="footer-nav">${links}</div>
        <div class="footer-socials">
          <a class="soc" href="https://www.facebook.com/RobinPictureGraphic" target="_blank" title="Facebook">f</a>
          <a class="soc" href="https://discord.gg/TkSjBUFa" target="_blank" title="Discord">⌘</a>
          <a class="soc" href="https://www.youtube.com/@RobinPG" target="_blank" title="YouTube">▶</a>
        </div>
      </footer>
    </div>`;
})();
