/* Логика и анимации — обычно трогать не нужно.
   Контент живёт в js/data.js */

/* ============================================================
   LOGO TYPING — RomanAn ↔ Roman Anchugov
   ============================================================ */
(function(){
  const typedEl = document.getElementById('logoTyped');
  if (!typedEl) return;
  const L = TEXT.logo;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    typedEl.textContent = L.parts[L.parts.length - 1].text;
    return;
  }
  typedEl.textContent = '';

  let idx = 0, pos = 0, erasing = false;
  let target = L.parts[idx];

  // уже «закреплённые» части: не-стираемые части до текущей
  function keptText(){
    let s = '';
    for (let i = 0; i < idx; i++){ if (!L.parts[i].erase) s += L.parts[i].text; }
    return s;
  }
  function render(){
    typedEl.textContent = keptText() + target.text.slice(0, pos);
  }
  function next(){
    idx = (idx + 1) % L.parts.length;
    target = L.parts[idx];
    pos = 0; erasing = false;
    tick();
  }
  function tick(){
    if (!erasing){
      pos++;
      render();
      if (pos >= target.text.length){
        if (target.erase){
          setTimeout(()=>{ erasing = true; tick(); }, target.holdMs);
        } else {
          pos = 0;
          setTimeout(next, target.holdMs);
        }
        return;
      }
      setTimeout(tick, L.typeMs);
    } else {
      pos--;
      render();
      if (pos <= 0){ setTimeout(next, L.typeMs * 3); return; }
      setTimeout(tick, L.eraseMs);
    }
  }
  setTimeout(tick, 800);
})();

/* ============================================================
   TEXTS — заполняем каркас из TEXT
   ============================================================ */

// meta
document.title = TEXT.meta.title;
document.querySelector('meta[name="description"]').setAttribute('content', TEXT.meta.description);

// nav
document.getElementById('navLinks').innerHTML = TEXT.nav
  .map(n=>`<a class="navlink" href="${n.href}">${n.label}</a>`).join('');

// hero
document.getElementById('heroEyebrow').textContent = TEXT.hero.eyebrow;
document.getElementById('heroHeadline').innerHTML = TEXT.hero.headline
  .map((line,i)=>`<span class="line"><span style="animation-delay:${.05+i*.1}s">${line}</span></span>`).join('');
document.getElementById('heroSub').textContent = TEXT.hero.sub;
document.getElementById('heroCta').innerHTML = TEXT.hero.cta
  .map(c=>`<a href="${c.href}" class="btn ${c.solid?'btn-solid':'btn-ghost'}">${c.label}</a>`).join('');

// section heads
for (const [id, key] of [['servicesTitle','services'],['servicesNote','services'],['whyTitle','why'],['whyNote','why'],['expTitle','experience'],['expNote','experience']]){
  const el = document.getElementById(id);
  if (!el) continue;
  el.textContent = (id.includes('Title')) ? TEXT.sections[key].title : TEXT.sections[key].note;
}

// why lead, contact title, editnote, experience sub
document.getElementById('whyLead').textContent = TEXT.whyLead;
document.getElementById('contactTitle').textContent = TEXT.contactTitle;
document.getElementById('editnote').textContent = TEXT.editnote;
const expSub = document.getElementById('expSub');
if (expSub) expSub.textContent = TEXT.sections.experience.sub || '';

// footer
document.getElementById('footLeft').textContent = TEXT.footer.left.replace('{year}', new Date().getFullYear());
document.getElementById('footRight').textContent = TEXT.footer.right;

/* ============================================================
   RENDER — данные из data.js
   ============================================================ */

// services
const servicesList = document.getElementById('servicesList');
SERVICES.forEach(s=>{
  const row = document.createElement('div');
  row.className = 'service-row';
  row.innerHTML = `
    <div class="service-name">${s.name}</div>
    <div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>`;
  servicesList.appendChild(row);
});

// why
const whyList = document.getElementById('whyList');
WHY.forEach((w,i)=>{
  const el = document.createElement('div');
  el.className = 'why-point';
  el.innerHTML = `<div class="why-mark">${String(i+1).padStart(2,'0')}</div>
    <div><h4>${w.title}</h4><p>${w.text}</p></div>`;
  whyList.appendChild(el);
});

// timeline
const tlList = document.getElementById('timelineList');
JOBS.forEach(j=>{
  const item = document.createElement('div');
  item.className = 'tl-item';
  item.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-top"><span class="period">${j.period}</span></div>
    <div class="tl-role">${j.place} <span class="hint">детали →</span></div>
    <div class="tl-place">${j.role}</div>
    <p class="tl-summary">${j.summary}</p>
    <div class="tl-stack">${j.stack.map(s=>`<span class="tag">${s}</span>`).join('')}</div>
    <div class="tl-popup">
      <div class="tl-popup-label">Превью экранов${j.screens.some(sc=>sc.src) ? '' : ' (пример)'}</div>
      <div class="screens-row">
        ${j.screens.map(sc=> sc.placeholder
          ? `<div class="shot"><div class="phone phone-empty"><span>${sc.placeholder}</span></div></div>`
          : sc.src
          ? `<div class="shot"><div class="phone"><img class="phone-shot" src="${sc.src}" alt="${sc.caption}" loading="lazy"${sc.pos ? ` style="object-position:${sc.pos}"` : ''}></div><div class="phone-caption">${sc.caption}</div></div>`
          : `<div class="shot"><div class="phone">
              <div class="pbar"></div>
              <div class="pblock" style="height:26%;background:linear-gradient(135deg, ${sc.from}, ${sc.to});"></div>
              <div class="pblock" style="height:12%;background:rgba(255,255,255,.08);"></div>
              <div class="pblock" style="height:12%;background:rgba(255,255,255,.08);"></div>
              <div class="pblock" style="height:30%;background:linear-gradient(135deg, ${sc.to}, ${sc.from});opacity:.5;"></div>
            </div><div class="phone-caption">${sc.caption}</div></div>`).join('')}
      </div>
    </div>
  `;
  // hover — превью; клик — закрепить попап (на всех устройствах)
  item.addEventListener('mouseenter', ()=> item.classList.add('active'));
  item.addEventListener('mouseleave', ()=>{
    if (!item.classList.contains('pinned')) item.classList.remove('active');
  });
  item.addEventListener('click', ()=>{
    const wasPinned = item.classList.contains('pinned');
    document.querySelectorAll('.tl-item').forEach(o=>{
      if (o !== item) o.classList.remove('active','pinned');
    });
    item.classList.toggle('pinned', !wasPinned);
    item.classList.toggle('active', !wasPinned);
  });
  tlList.appendChild(item);
});
document.addEventListener('click', e=>{
  if (e.target.closest('.tl-item')) return;
  document.querySelectorAll('.tl-item').forEach(o=> o.classList.remove('active','pinned'));
});

// contacts
const contactList = document.getElementById('contactList');
CONTACTS.forEach(c=>{
  const a = document.createElement('a');
  a.className = 'contact-item'; a.href = c.href; a.target = '_blank'; a.rel = 'noopener';
  a.innerHTML = `<span class="dotm"></span>${c.label}`;
  contactList.appendChild(a);
});

/* ============================================================
   TERMINAL TYPING ANIMATION
   ============================================================ */
const termBody = document.getElementById('termBody');
let li = 0, ci = 0;
function typeTerminal(){
  if (li >= termLines.length){
    termBody.insertAdjacentHTML('beforeend', '<span class="caret"></span>');
    return;
  }
  const line = termLines[li];
  if (ci === 0){
    termBody.insertAdjacentHTML('beforeend', `<div class="${line.cls}" id="tline${li}"></div>`);
  }
  const el = document.getElementById('tline'+li);
  if (ci <= line.text.length){
    el.textContent = line.text.slice(0, ci);
    ci++;
    setTimeout(typeTerminal, line.text.length ? 18 : 0);
  } else {
    li++; ci = 0;
    setTimeout(typeTerminal, 90);
  }
}
setTimeout(typeTerminal, 700);

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el=> io.observe(el));
