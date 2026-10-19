(function(){
  const page=document.body.dataset.page||"";
  const links=[
    {href:"index.html",label:"Home",key:"home"},
    {href:"technology.html",label:"Technology",key:"services"},
    {href:"material.html",label:"Material",key:"products"},
    {href:"blog.html",label:"Blog",key:"blog"},
    {href:"contact.html",label:"Contact",key:"contact"}
  ];
  const nav=links.map(item=>'<a href="'+item.href+'" class="'+[page===item.key?"is-active":"",item.key==="contact"?"site-header__contact":""].filter(Boolean).join(" ")+'"'+(page===item.key?' aria-current="page"':'')+'>'+item.label+'</a>').join("");
  const header='<header class="site-header"><div class="site-header__inner">'+
    '<a href="index.html" class="site-header__logo" aria-label="PhytoRevolution 홈"><img class="site-header__brand-image" src="assets/brand/phyto-logo-white.svg" alt="PhytoRevolution" /></a>'+
    '<nav class="site-header__nav" id="primaryNav" aria-label="주요 메뉴">'+nav+'</nav>'+
    '<button type="button" class="site-header__toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="메뉴 열기">Menu</button>'+
    '</div></header>';
  const footer='<footer class="site-footer"><div class="site-footer__inner">'+
    '<div><img class="site-footer__brand-image" src="assets/brand/phyto-logo-white.svg" alt="PhytoRevolution" /><p class="site-footer__company">Plant cells.<br>Better ingredients.<br>Better future.</p><p class="site-footer__desc">한국 자생식물의 가능성을 바이오소재로 확장합니다.</p></div>'+
    '<div><p class="site-footer__label">Contact</p><p class="site-footer__contact"><a href="mailto:phytorevolution101@gmail.com">phytorevolution101@gmail.com</a></p><p class="site-footer__address">경기도 고양시 일산동구 백석1동 중앙로 1036</p></div>'+
    '<div><p class="site-footer__label">Explore</p><nav class="site-footer__links" aria-label="푸터 메뉴">'+links.map(x=>'<a href="'+x.href+'">'+x.label+'</a>').join('')+'</nav></div>'+
    '</div><div class="site-footer__bottom">© 2026 PHYTO REVOLUTION. All rights reserved.</div></footer>';
  const h=document.getElementById("site-header"),f=document.getElementById("site-footer");
  if(h)h.outerHTML=header;if(f)f.outerHTML=footer;
  const toggle=document.querySelector(".site-header__toggle"),menu=document.getElementById("primaryNav");
  toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"메뉴 닫기":"메뉴 열기");toggle.textContent=open?"Close":"Menu";});
  menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("is-open");toggle?.setAttribute("aria-expanded","false")}));
})();