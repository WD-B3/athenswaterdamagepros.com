(function(){
  var t=document.getElementById('navtoggle'),m=document.getElementById('mobilemenu'),c=document.getElementById('mmclose');
  if(!t||!m)return;
  function setOpen(o){
    m.classList.toggle('open',o);
    t.setAttribute('aria-expanded',o?'true':'false');
    document.documentElement.style.overflow=o?'hidden':'';
  }
  t.addEventListener('click',function(){setOpen(true)});
  if(c)c.addEventListener('click',function(){setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>900)setOpen(false)});
})();
