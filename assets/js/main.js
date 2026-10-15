/* SkillWiz 2.0 · Content for tabbed sections (platform layers, journey, stakeholders, portfolio) is edited in the arrays below. */
/* ---- CONFIG: timings in seconds. Override per carousel with data-seconds="4" on the section in index.html ---- */
const CONFIG={heroSeconds:6,journeySeconds:3,autoplay:true};
/* ---- JOURNEY STAGES: [name, headline, supporting line] ---- */
const J=[['Baseline','Know exactly where you stand.','Skills, interests and aspirations, measured on day one.'],['Set goal','Choose a destination with data.','A career, a venture or both, set after measurement, not before.'],['Personalised plan','A path built for one student.','An AI learning plan shaped around this goal and this starting point.'],['Learn, practise, assess','Every attempt makes you sharper.','Curated content with continuous micro-assessment.'],['Apply','Prove it on real problems.','Projects and real-world scenarios become verified evidence.'],['Mentor and guide','Guided by people who see your record.','Faculty, industry experts and AI guidance, with the full picture.'],['Mock readiness','Rehearse the real thing.','Company mocks and AI interviews before the real ones.'],['Outcome','A job. A venture. Real value.','Employment, enterprise and economic value, on record.']];
const $=s=>document.querySelector(s);
function tabs(box,panel,items,render,cls){const b=$(box),p=$(panel);items.forEach((it,i)=>{const t=document.createElement('button');t.className=cls;t.setAttribute('role','tab');t.innerHTML=it.t;t.onclick=()=>sel(i);b.append(t)});
function sel(i){[...b.children].forEach((c,j)=>c.setAttribute('aria-selected',i===j));p.innerHTML=render(items[i],i);b.dispatchEvent(new CustomEvent('sel',{detail:i}))}sel(0)}
const ic=i=>`<svg class="ic"><use href="#i${i}"/></svg>`;
const LK=['Baseline|Aspirations|Readiness', 'Curated content|AI learning paths|Continuous practice', 'Micro-assessments|Skill-gap analysis|Certifications', 'Faculty|Industry experts|AI guidance', 'JD analysis|Competency mapping|KRA / KPI', 'Career readiness|Entrepreneurship|Employability pathways', 'Dashboards|Cohort analytics|Interventions'];
tabs('#lt','#lp',[
{t:'Student intelligence',d:'Baseline, aspirations, interests, competencies, evidence, progress and readiness.'},
{t:'Learning orchestration',d:'Curated, personalised content, AI-powered learning paths and continuous practice.'},
{t:'Assessment and evidence',d:'Customised micro-assessments, skill-gap analysis, project evidence and certifications.'},
{t:'Mentoring and guidance',d:'Faculty, mentors and industry experts, supported by an AI guidance engine.'},
{t:'Industry alignment',d:'Job-description analysis, competency mapping and KRA/KPI understanding.'},
{t:'Outcome engine',d:'Career readiness, employability pathways and entrepreneurship, visible end to end.'},
{t:'University intelligence',d:'Dashboards, cohort analytics, intervention priorities and management reporting.'}],
(x,i)=>`<div class="lgh" aria-hidden="true">0${i+1}</div><p class="eb">Layer ${i+1} of 7</p><h3 class="d m fo">${x.t}</h3><p class="lead" style="margin-top:16px">${x.d}</p><div class="chips lk">${LK[i].split('|').map(k=>'<span>'+k+'</span>').join('')}</div><p class="sm lnote">Feeds every student's Karm-Patri.</p>`,'pill');
$('#yr').innerHTML=[['Discover','Baseline 4C assessment, foundational skills, first credentials, mentor pairing'],['Build','Coding proficiency, domain core mastery, first certifications and projects'],['Stretch','Industry credentials, live projects shipped, mock interviews, internship readiness'],['Launch','Day-0 productivity score, company-specific mocks, founder track, Verified Pool listing']].map((y,i)=>`<div class="card ${i==3?'inv':''}"><p class="eb" style="margin-bottom:8px">Year ${i+1}</p><h4 class="d" style="font-size:28px">${y[0]}</h4><p class="sm" style="margin-top:8px">${y[1]}</p></div>`).join('');
tabs('#sk','#skp',[['Students','Personalised journey, progress, evidence and opportunity alignment. Web and mobile app.'],['Faculty and mentors','Learning needs, progress and mentoring priorities. Mentor console.'],['Training and placement','Cohort readiness, role mapping and intervention tracking. TPO dashboard.'],['Heads of department','Department readiness heat-maps and intervention priorities.'],['VC and leadership','Institution-wide capability, employability and innovation pipeline.'],['Parents','A clear view of the student’s development, where the University enables it.'],['Industry','Role-aligned, evidence-backed talent through the Verified Pool.'],['Alumni','Mentoring, industry exposure, referrals and ecosystem contribution.']].map(a=>({t:a[0],d:a[1]})),x=>`<h3 class="d m fo">${x.t}</h3><p class="lead" style="margin-top:12px;margin-bottom:0">${x.d}</p>`,'pill');
const F=['Core platform','Assessment','Training','Entrepreneurship','Campus','Institutional','Placement'];
const P=[['Employability Suite + Karm-Patri',0,'4C framework, baselines, AI learning path, dashboards.'],['Proctored and non-proctored assessments',1,'AI plus human proctoring with audit trails.'],['Examination management and digital evaluation',1,'Results in 24 hours; 25M+ booklets a year.'],['Offline classroom training',2,'Batches formed from baseline data.'],['Online and live virtual training',2,'Live classes and recorded library.'],['AI personal interview',2,'24×7 practice, scored into the Karm-Patri.'],['Global credentialing',2,'International credentials on campus.'],['EUTP · entrepreneurship and incubation',3,'Founder pipeline, incubation, capital.'],['STEM labs and centres of excellence',4,'Chip design, EV, robotics, XR.'],['Admissions management',5,'Enquiry to enrolment on one system.'],['University Management System',5,'AI-native records, finance, accreditation.'],['Placement portal and Verified Pool',6,'Profiles built from the Karm-Patri.'],['Campus placement and Day-0 productivity',6,'Pre-joining training to employer spec.']];
function pg(f){$('#pg').innerHTML=P.filter(p=>f<0||p[1]===f).map(p=>`<div class="pc"><small>${F[p[1]]}</small><h4>${p[0]}</h4><p class="sm mut" style="margin:0">${p[2]}</p></div>`).join('');[...$('#pf').children].forEach((c,i)=>c.setAttribute('aria-selected',i-1===f));const n=$('#pg').children.length,sp=3-(n%3||3)||3;$('#pg').insertAdjacentHTML('beforeend','<a class="pc cta" href="#contact" style="--sp:'+sp+'"><small>Not sure where to start?</small><h4>Book a discovery session</h4><p class="sm" style="margin:0">We map the right products to your programmes. <b>Talk to us →</b></p></a>')}
['All',...F].forEach((n,i)=>{const b=document.createElement('button');b.className='pill';b.textContent=n;b.onclick=()=>pg(i-1);$('#pf').append(b)});pg(-1);

/* ---- Carousel engine (hero + journey) ---- */
const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
$('#journey .slides').innerHTML=J.map((j,i)=>`<div class="slide" data-label="${j[0]}"><div class="cont wrap jc"><div class="big a" aria-hidden="true">${i+1}</div><div class="txt"><p class="eb a">Stage ${i+1} of 8 · ${j[0]}</p><h2 class="d hl a">${j[1]}</h2><p class="lead a">${j[2]}</p>${i>1&&i<6?'<p class="loop a">Closed loop · updates the Karm-Patri</p>':''}</div></div></div>`).join('');
document.querySelectorAll('.car').forEach(root=>{
const slides=[...root.querySelectorAll('.slide')],segsBox=root.querySelector('.segs'),sec=+(root.dataset.seconds||CONFIG[root.dataset.cfg]);
let cur=0,t,paused=!CONFIG.autoplay||REDUCED,vis=false;
const segs=slides.map((s,i)=>{const b=document.createElement('button');b.className='seg';b.setAttribute('aria-label','Go to slide '+(i+1)+' '+(s.dataset.label||''));b.innerHTML='<i></i><span>'+(s.dataset.label||'')+'</span>';b.onclick=()=>go(i);segsBox.append(b);return b});
root.querySelectorAll('video').forEach(v=>v.addEventListener('loadeddata',()=>v.parentElement.classList.add('has')));
const rv=root.querySelector(':scope>video');
function go(i){cur=(i+slides.length)%slides.length;clearTimeout(t);
slides.forEach((s,j)=>{s.classList.toggle('on',j===cur);const v=s.querySelector(':scope>video');if(v)j===cur&&vis?v.play().catch(()=>{}):v.pause()});
segs.forEach((b,j)=>{b.classList.remove('on');b.classList.toggle('done',j<cur);b.style.setProperty('--d',sec+'s')});void root.offsetWidth;segs[cur].classList.add('on');
if(!paused&&vis)t=setTimeout(()=>go(cur+1),sec*1000)}
const pp=root.querySelector('[data-a=pp]');if(pp&&paused)pp.textContent='Play';
root.addEventListener('click',e=>{const a=e.target.dataset&&e.target.dataset.a;if(a==='prev')go(cur-1);if(a==='next')go(cur+1);if(a==='pp'){paused=!paused;root.classList.toggle('paused',paused);e.target.textContent=paused?'Play':'Pause';paused?clearTimeout(t):go(cur)}});
root.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis){rv&&rv.play().catch(()=>{});go(cur)}else{clearTimeout(t);rv&&rv.pause();slides.forEach(s=>{const v=s.querySelector(':scope>video');v&&v.pause()})}},{threshold:.4}).observe(root);
go(0)});

/* ---- Platform layers visual: animated Karm-Patri ecosystem hub ---- */
(function(){const N=['Student Intelligence','Learning Orchestration','Assessment & Evidence','Mentoring & Guidance','Industry Alignment','Outcome Engine','University Intelligence'];
const W=[150,156,154,150,142,126,158];const box=$('#lv');if(!box)return;
const cx=310,cy=265,rx=205,ry=148;let spokes='',movers='',nodes='';
N.forEach((name,k)=>{const angle=(k*360/N.length-90)*Math.PI/180;const x=+(cx+rx*Math.cos(angle)).toFixed(1);const y=+(cy+ry*Math.sin(angle)).toFixed(1);
const w=W[k],hw=w/2;
spokes+=`<line class="sp" x1="${x}" y1="${y}" x2="${cx}" y2="${cy}"/>`;
movers+=`<circle class="mv" r="4"><animateMotion dur="2.4s" begin="${(k*0.34).toFixed(2)}s" repeatCount="indefinite" path="M${x},${y} L${cx},${cy}"/></circle><circle class="mv" r="3" opacity="0.65"><animateMotion dur="2.4s" begin="${(k*0.34+1.2).toFixed(2)}s" repeatCount="indefinite" path="M${x},${y} L${cx},${cy}"/></circle>`;
nodes+=`<g class="node" tabindex="0" role="button" aria-label="Layer ${k+1}: ${name}" data-idx="${k}"><rect x="${x-hw}" y="${y-17}" width="${w}" height="34" rx="17"/><text x="${x}" y="${y+4.2}">${name.replace('&','&amp;')}</text></g>`});
box.innerHTML=`<svg viewBox="0 0 620 470" role="img" aria-label="Seven platform layers continuously feeding one verified Karm-Patri record"><text x="${cx}" y="32" class="lh1" text-anchor="middle">THE OPERATING LAYER</text><text x="${cx}" y="52" class="lh2" text-anchor="middle">Seven layers · One verified record</text>${spokes}${movers}<circle class="ring" cx="${cx}" cy="${cy}" r="68"/><circle class="core" cx="${cx}" cy="${cy}" r="58"/><text class="ct" x="${cx}" y="${cy-3}">KARM-PATRI</text><text class="cs" x="${cx}" y="${cy+15}">one verified record</text><text class="csub" x="${cx}" y="${cy+28}">7 layers · 1 outcome</text>${nodes}</svg>`;
function setOn(idx){box.querySelectorAll('.node').forEach(n=>n.classList.toggle('on',+n.dataset.idx===idx))}
box.addEventListener('click',e=>{const n=e.target.closest('.node');if(n){const b=$('#lt')?.children[+n.dataset.idx];b&&b.click()}});
box.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const n=e.target.closest('.node');if(n){e.preventDefault();const b=$('#lt')?.children[+n.dataset.idx];b&&b.click()}}});
setOn(0);$('#lt')?.addEventListener('sel',e=>setOn(e.detail))})();

/* ---- Stakeholder view panel: what each role sees ---- */
(function(){const V=[['Student app · web and mobile',['Personalised journey','Progress and evidence','Mentor access','Opportunity alignment']],['Mentor console',['Learning needs','Student progress','Mentoring priorities','AI guidance support']],['TPO dashboard',['Cohort readiness','Role mapping','Opportunity targeting','Intervention tracking']],['Department dashboard',['Readiness heat-maps','Intervention priorities','Department-wise view','Role-based access']],['Leadership dashboard',['Capability view','Employability view','Innovation pipeline','Accreditation-ready data']],['Parent view · optional',['Development view','University-enabled access','Student consent first','Where the University enables it']],['Recruiter and Verified Pool access',['Role-aligned talent','Evidence-backed profiles','Search by Karm-Patri','ATS export']],['Mentor access · optional',['Mentoring','Industry exposure','Referrals','Ecosystem contribution']]];
const box=$('#skv');if(!box)return;
function draw(i){const v=V[i];box.innerHTML='<p class="eb">Your view</p><h4 class="d" style="font-size:26px;color:var(--cream);margin-bottom:14px">'+v[0]+'</h4><ul>'+v[1].map(x=>'<li>'+x+'</li>').join('')+'</ul><a class="btn s" href="#contact">See this view in a demo</a>'}
draw(0);$('#sk').addEventListener('sel',e=>draw(e.detail))})();

/* contact form: validate, then open the visitor's email app with the enquiry */
(function(){const f=document.getElementById('cf');if(!f)return;const b=f.querySelector('button');const note=document.createElement('p');note.className='sm mut';note.style.margin='0';f.append(note);
f.addEventListener('submit',e=>{e.preventDefault();const els=[...f.querySelectorAll('input,select,textarea')];const n=els[0],u=els[1],m=els[2],i=els[3],msg=els[4];let ok=true;
[n,u,m].forEach(el=>{const bad=!el.value.trim()||(el===m&&!/^\S+@\S+\.\S+$/.test(el.value));el.style.borderColor=bad?'#C33':'';if(bad)ok=false});
if(!ok){note.textContent='Please fill in your name, university and a valid work email.';note.style.color='#FFB070';return}
const body='Name: '+n.value+'\nUniversity: '+u.value+'\nEmail: '+m.value+'\nInterest: '+i.value+'\n\n'+msg.value;
b.textContent='Opening your email app...';note.style.color='';note.textContent='If nothing opens, write to info@myskillwiz.com.';
location.href='mailto:info@myskillwiz.com?subject='+encodeURIComponent('SkillWiz demonstration request - '+u.value)+'&body='+encodeURIComponent(body)})})();

/* ---- Industry Radar component ---- */
(function(){
  const R=[
    ["Chip design","India is building a semiconductor design talent base. ECE graduates with verified fundamentals are the entry point.",["VLSI design engineer","Verification engineer","Physical design engineer","Embedded engineer"],["Digital design","Verilog / SystemVerilog","Computer architecture","EDA tool basics"],"ECE-specific PlaceMe content, chip-design pathways with an OEM partner in Germany, and project evidence recorded in the Karm-Patri."],
    ["Defence technology","Defence electronics, avionics and systems need engineers who can show applied, tested capability.",["Embedded systems engineer","Signal processing engineer","Systems integration engineer","Test and quality engineer"],["Embedded C / C++","Control systems","RF and communications basics","Systems thinking"],"Core-technical baselines, project evidence from labs and Centres of Excellence, and orientation to the sector from Year 2."],
    ["EV & battery","Electric mobility and energy storage are creating roles across electrical, mechanical and software streams.",["Battery systems engineer","Power electronics engineer","Vehicle software engineer","Manufacturing engineer"],["Power electronics","Battery management basics","Embedded software","CAD and thermal basics"],"EE and ME core assessments, EV and battery labs, and a visible path from project to role."],
    ["Autonomous driving","Perception, planning and control combine software, sensors and safety thinking.",["Perception engineer","Controls engineer","Simulation engineer","Embedded software engineer"],["Python and C++","Linear algebra and probability","Sensor basics","Machine learning foundations"],"Coding and cognitive baselines, N2N coding practice and live-project evidence."],
    ["Logistics","Supply chains are being rebuilt around data, automation and visibility.",["Supply-chain analyst","Operations planner","Warehouse automation engineer","Data analyst"],["Data analysis","Operations research basics","ERP familiarity","Communication"],"Management-stream baselines, analytics credentials with partners and company-specific mocks."],
    ["AI technology","AI is moving from labs into every sector, with demand for builders and for people who can apply it.",["ML engineer","Data scientist","AI product analyst","MLOps engineer"],["Python","Statistics","Machine learning","Problem framing"],"AI/ML credentials with partners, coding practice, and projects verified in the Karm-Patri."],
    ["Robotics","Robots combine mechanics, electronics and software; teams need all three.",["Robotics engineer","Mechatronics engineer","Automation engineer","Embedded engineer"],["Embedded systems","Kinematics basics","Control systems","ROS and simulation"],"Robotics and innovation labs on campus, with student projects recorded as evidence."],
    ["Space technology","A growing private space ecosystem is hiring for design, testing and data.",["Avionics engineer","Mission analyst","Satellite systems engineer","Ground-systems software engineer"],["Embedded systems","Signals and systems","Python","Systems engineering basics"],"Core-technical assessment, hackathons and showcases that turn projects into verified proof."],
    ["Biotechnology","Bioscience, health and agriculture need graduates who can work with data and instruments.",["Bioinformatics analyst","Research associate","Quality and regulatory associate","Process development associate"],["Lab practice","Data analysis","Statistics","Documentation and compliance"],"One Karm-Patri framework configured for science, health science and agriculture, not only engineering."],
    ["Manufacturing","Smarter factories need engineers who understand process, quality and automation.",["Production engineer","Quality engineer","Industrial automation engineer","Design engineer"],["CAD","Process and quality tools","PLC and automation basics","Lean basics"],"ME and EE core assessments, industry programmes with partners, and Day-0 productivity training."],
    ["Ordnance & missile tech","Strategic manufacturing and propulsion need rigorous engineers with verified fundamentals.",["Mechanical design engineer","Materials engineer","Control and guidance engineer","Test engineer"],["Mechanics and thermodynamics","Materials basics","Control systems","Precision and documentation"],"Core-technical baselines in ME, EE and ECE, with verified project evidence for specialist recruiters."],
    ["Cyber security","Every organisation now needs people who can defend systems and respond to incidents.",["Security analyst","SOC analyst","Penetration tester","Cloud security engineer"],["Networking","Operating systems","Scripting","Security fundamentals"],"Cyber security micro-credentials with an Australian partner, recorded in the Karm-Patri."]
  ];

  const sec=document.getElementById("sectors");
  const box=document.getElementById("radar");
  if(!sec||!box)return;
  const buttons=sec.querySelectorAll("button");

  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

  function selectSector(index){
    buttons.forEach((btn,j)=>{
      const on=j===index;
      btn.setAttribute("aria-pressed",on?"true":"false");
      btn.setAttribute("aria-selected",on?"true":"false");
    });
    const r=R[index];
    box.innerHTML=`
      <div>
        <h4 class="d rtitle">${esc(r[0])}</h4>
        <p class="rdesc">${esc(r[1])}</p>
        <div class="lbl">Roles students aim for</div>
        <div class="rtags">${r[2].map(x=>`<span>${esc(x)}</span>`).join("")}</div>
        <div class="lbl">Skills to build</div>
        <div class="rtags">${r[3].map(x=>`<span>${esc(x)}</span>`).join("")}</div>
      </div>
      <div class="help">
        <span class="fine">How preparation connects</span>
        <p>${esc(r[4])}</p>
        <a href="#contact" class="btn s" style="font-size:11px;padding:8px 14px">Explore ${esc(r[0])}</a>
        <span class="fine" style="margin-top:8px">General orientation and competency pathway.</span>
      </div>
    `;
  }

  buttons.forEach((btn,i)=>btn.addEventListener("click",()=>selectSector(i)));
  selectSector(0);
})();
