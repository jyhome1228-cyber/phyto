/* Graceful missing-asset handling; never replace research evidence with unrelated photography. */
(function(){
 const labelFor=(img)=>{
  if(img.hasAttribute("data-missing-label"))return img.getAttribute("data-missing-label");
  if(img.closest(".service-material__gallery"))return "인증서 원본 이미지 준비 중";
  if(img.closest(".material-cards"))return "연구 데이터 원본 이미지 준비 중";
  return "이미지 준비 중";
 };
 function fallback(img){
  if(img.dataset.fallbackDone==="true")return;
  img.dataset.fallbackDone="true";
  const box=document.createElement("div");box.className="missing-source";box.setAttribute("role","status");
  const strong=document.createElement("strong");strong.textContent=labelFor(img);
  const sub=document.createElement("span");sub.textContent="원본 자료가 확인되면 이 영역에 표시됩니다.";
  box.append(strong,sub);
  const parent=img.parentElement;
  if(parent){img.replaceWith(box);if(parent.matches("button.service-material__item")){parent.disabled=true;parent.setAttribute("aria-disabled","true")}}
 }
 document.addEventListener("error",e=>{if(e.target instanceof HTMLImageElement)fallback(e.target)},true);
 document.querySelectorAll("img").forEach(img=>{if(img.complete && img.naturalWidth===0)fallback(img)});
})();