(()=>{const d=document,root=d.documentElement,body=d.body;
const link=d.createElement('link');link.rel='stylesheet';link.href='luxe.css';d.head.appendChild(link);body.classList.add('lux-loaded');
const progress=d.createElement('div');progress.id='lux-progress';d.body.appendChild(progress);
const cursor=d.createElement('div');cursor.id='lux-cursor';d.body.appendChild(cursor);
const nav=d.querySelector('.nav'),toggle=d.querySelector('.nav-toggle');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});d.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08,rootMargin:'0px 0px -5%'});
d.querySelectorAll('.section,.card,.timeline-item,.media-item,.domain-card,.metric,.project-card').forEach(x=>{x.classList.add('reveal');io.observe(x)});
const update=()=>{const max=d.documentElement.scrollHeight-innerHeight,p=max>0?scrollY/max:0;root.style.setProperty('--scroll',`${p*100}%`);progress.style.width=`${p*100}%`;if(nav)nav.classList.toggle('scrolled',scrollY>30)};addEventListener('scroll',update,{passive:true});update();
let mx=innerWidth/2,my=innerHeight/2;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;root.style.setProperty('--mx',`${mx}px`);root.style.setProperty('--my',`${my}px`);cursor.style.left=`${mx}px`;cursor.style.top=`${my}px`;cursor.style.opacity='1'},{passive:true});
if(matchMedia('(pointer:fine)').matches){d.querySelectorAll('a,button,summary').forEach(el=>{el.addEventListener('mouseenter',()=>body.classList.add('cursor-active'));el.addEventListener('mouseleave',()=>body.classList.remove('cursor-active'))})}
const hero=d.querySelector('.hero-home');if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const orb=hero.querySelector('.hero-orbit');if(orb)orb.style.transform=`translate(${x*12}px,${y*8}px)`;const aura=hero.querySelector('.hero-aura');if(aura)aura.style.transform=`translate(${x*-20}px,${y*-12}px) scale(1.02)`},{passive:true});}
// Keep internal navigation smooth without requiring a framework.
d.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');const el=id&&d.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}}));
// Lazy-load any future media while preserving layout stability.
d.querySelectorAll('img').forEach(img=>{img.loading=img.loading||'lazy';img.decoding=img.decoding||'async'});
})();