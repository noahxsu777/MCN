/* ============================================================
   Innova Group — Motion & interacción (compartido en todas las páginas)
   ============================================================ */
(function(){
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  const loader = document.getElementById('loader');
  if(loader){
    const word = document.getElementById('loaderWord');
    const count = document.getElementById('loaderCount');
    const text = loader.dataset.word || 'INNOVA';
    text.split('').forEach((ch,i)=>{
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.animationDelay = (i*0.055)+'s';
      word.appendChild(s);
    });
    let p = 0;
    const heroLike = document.querySelector('.hero, .platform-hero');
    const tick = setInterval(()=>{
      p = Math.min(100, p + Math.ceil(Math.random()*14));
      count.textContent = p + '%';
      if(p >= 100){
        clearInterval(tick);
        setTimeout(()=>{
          loader.classList.add('done');
          if(heroLike) heroLike.classList.add('in');
          setTimeout(()=>loader.remove(), 1100);
        }, 250);
      }
    }, reduced ? 1 : 90);
  }

  /* ---------- Cursor ---------- */
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if(dot && ring){
    let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
    addEventListener('mousemove', e=>{
      mx=e.clientX; my=e.clientY;
      dot.style.left=mx+'px'; dot.style.top=my+'px';
    });
    (function followRing(){
      rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
      ring.style.left=rx+'px'; ring.style.top=ry+'px';
      requestAnimationFrame(followRing);
    })();
    document.querySelectorAll('a,button,.pcard,.srow,.faq-item button,.benefit').forEach(el=>{
      el.addEventListener('mouseenter',()=>ring.classList.add('is-hover'));
      el.addEventListener('mouseleave',()=>ring.classList.remove('is-hover'));
    });
  }

  /* ---------- Nav: fondo + auto-hide + progreso + parallax ---------- */
  const nav = document.getElementById('nav');
  const progress = document.querySelector('.progress');
  let lastY = 0;
  addEventListener('scroll', ()=>{
    const y = scrollY;
    if(nav){
      nav.classList.toggle('scrolled', y > 40);
      nav.classList.toggle('hidden', y > 500 && y > lastY);
    }
    lastY = y;
    if(progress){
      const h = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = (h ? (y/h)*100 : 0) + '%';
    }
    if(!reduced){
      document.querySelectorAll('[data-parallax]').forEach(o=>{
        o.style.transform = 'translateY(' + (y * parseFloat(o.dataset.parallax) * -1) + 'px)';
      });
    }
  }, {passive:true});

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ---------- Contadores ---------- */
  const cio = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      cio.unobserve(en.target);
      const el = en.target, target = +el.dataset.count, dur = 1600, t0 = performance.now();
      (function step(t){
        const k = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-k,4);
        el.textContent = Math.round(target*e).toLocaleString('es');
        if(k<1) requestAnimationFrame(step);
      })(t0);
    });
  }, {threshold:0.6});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

  /* ---------- Tilt + glow que sigue el mouse ---------- */
  if(!reduced && matchMedia('(hover:hover)').matches){
    document.querySelectorAll('[data-tilt]').forEach(card=>{
      card.addEventListener('mousemove', e=>{
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width, y = (e.clientY - r.top)/r.height;
        card.style.setProperty('--mx', (x*100)+'%');
        card.style.setProperty('--my', (y*100)+'%');
        card.style.transform = 'translateY(-10px) rotateX('+((0.5-y)*6)+'deg) rotateY('+((x-0.5)*6)+'deg)';
        card.style.transformStyle='preserve-3d';
      });
      card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
    });
  }

  /* ---------- FAQ acordeón ---------- */
  document.querySelectorAll('.faq-item').forEach(item=>{
    const btn = item.querySelector('button');
    const ans = item.querySelector('.ans');
    btn.addEventListener('click', ()=>{
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{
        o.classList.remove('open'); o.querySelector('.ans').style.maxHeight = null;
      });
      if(!open){
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Formulario de aplicación (demo sin backend) ---------- */
  const applyForm = document.getElementById('applyForm');
  if(applyForm){
    applyForm.addEventListener('submit', e=>{
      e.preventDefault();
      const label = document.getElementById('submitLabel');
      label.textContent = '✓ ¡Aplicación recibida!';
      setTimeout(()=>{ label.textContent = applyForm.dataset.defaultLabel || 'Enviar aplicación →'; e.target.reset(); }, 3500);
    });
    if(applyForm.querySelector('#submitLabel')){
      applyForm.dataset.defaultLabel = document.getElementById('submitLabel').textContent;
    }

    /* Preselecciona plataforma / rol vía ?plataforma=X o ?rol=X en la URL */
    const params = new URLSearchParams(location.search);
    const plat = params.get('plataforma');
    const platSelect = document.getElementById('f-plat');
    if(plat && platSelect){
      [...platSelect.options].forEach(opt=>{ if(opt.value === plat) platSelect.value = plat; });
    }
    const rol = params.get('rol');
    const msgField = document.getElementById('f-msg');
    if(rol && msgField && !msgField.value){
      msgField.value = 'Quiero aplicar para el rol: ' + rol + '. ';
    }
    if((plat || rol) && location.hash === '#aplica'){
      setTimeout(()=>{ document.getElementById('aplica').scrollIntoView({behavior: reduced ? 'auto' : 'smooth'}); }, 400);
    }
  }

  /* ---------- Botones magnéticos ---------- */
  if(!reduced && matchMedia('(hover:hover)').matches){
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('mousemove', e=>{
        const r = btn.getBoundingClientRect();
        btn.style.transform = 'translate(' + (e.clientX-r.left-r.width/2)*0.18 + 'px,' + (e.clientY-r.top-r.height/2)*0.3 + 'px)';
      });
      btn.addEventListener('mouseleave', ()=>{ btn.style.transform=''; });
    });
  }
})();
