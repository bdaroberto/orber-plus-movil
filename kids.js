/* Orber+ móvil 1.4.0 — Infantiles shares playback, storage and downloads. */
// No file moves or renames: keep Drive IDs stable to preserve playback history.
const scan140=scan;
scan=async function(folder,kind,info,path=[],depth=0){
 if(kind!=='kids')return scan140(folder,kind,info,path,depth);
 if(depth>12)throw Error('Se superaron 12 niveles de carpetas.');
 status(`Leyendo Infantiles: ${path.join(' / ')||'carpeta principal'}…`);
 const files=await children(folder),poster=files.find(f=>f.name.toLowerCase()==='poster.jpg');
 const nextInfo={...info,posterID:poster?.id||info.posterID||''};let result=[];
 for(const f of files){if(f.mimeType==='application/vnd.google-apps.folder')result.push(...await scan(f.id,kind,nextInfo,[...path,f.name],depth+1));else if(mediaFile(f))result.push(mapVideo(f,kind,nextInfo,path))}
 return result;
};
const libraryMusic140=libraryMusic;
libraryMusic=function(){let html=libraryMusic140();if(tab!=='kids')return html;
 html=html.replaceAll('VideoMusic','Infantiles').replaceAll('VIDEOMUSIC','INFANTILES').replace('← Artistas','← Infantiles').replace('canciones / videos','videos infantiles').replace('Los videos de Biblioteca/YouTube aparecerán aquí.','Los videos de Biblioteca/Infantiles aparecerán aquí.').replace('Actualiza el catálogo para cargar Biblioteca/YouTube.','Crea Biblioteca/Infantiles en Drive, agrega videos y actualiza el catálogo.');
 if(!ui.detail&&!ui.selecting&&ui.musicFilter!=='unassigned')html=html.replace('<h2>Artistas</h2>','<h2>Infantiles</h2>');
 if(ui.detail?.type==='artist'){
  const g=artistGroups('kids').get(ui.detail.key),cover=coverRecords[coverKey(ui.detail.key,'kids')]?.id||g?.items.find(x=>x.posterID)?.posterID;
  if(cover)html=html.replace('<span class="artist-avatar">♫</span>',imageTag(cover,g?.name||'Infantiles','kids-detail-cover'));
 }
 return '<p class="eyebrow kids-label">UN MUNDO PARA LOS PEQUEÑOS</p>'+html;
};
const home140=homeView;
homeView=function(){const groups=[...artistGroups('kids')].filter(([,g])=>g.items.some(matching));return home140()+`<div class="section-title"><h2>Infantiles</h2><button data-go-tab="kids">Ver todos →</button></div><div class="poster-grid">${groups.slice(0,6).map(([k,g])=>artistTile(k,g,'kids')).join('')}</div>${groups.length?'':'<p class="muted">Agrega videos a Biblioteca/Infantiles y actualiza el catálogo.</p>'}`};
const settings140=settings;
settings=function(){settings140();const option=document.createElement('option');option.value='kids';option.textContent='Infantiles';$('#localKind').append(option);$('.settings').querySelectorAll('h2').forEach(h=>{if(h.textContent.includes('Aplicación móvil'))h.textContent='Aplicación móvil 1.4.0'});$('.settings').insertAdjacentHTML('beforeend','<h2>Infantiles</h2><p class="muted">Lee Biblioteca/Infantiles. Puedes colocar videos directamente o en subcarpetas por artista o personaje. Un poster.jpg dentro de cada subcarpeta sirve como portada. También puedes asignar artistas y elegir portada desde Infantiles. Las importaciones desde el teléfono son copias locales; no se suben a Drive.</p>')};
const nextFor140=nextFor;
nextFor=function(x){if(x?.kind!=='kids')return nextFor140(x);const list=items.filter(i=>i.kind==='kids'&&artistKey(getArtist(i))===artistKey(getArtist(x))).sort(episodeOrder);return list[list.findIndex(i=>i.id===x.id)+1]||null};
const play140=play;
play=async function(id,zero=false){await play140(id,zero);$('#nextEpisode').textContent=items.find(x=>x.id===id)?.kind==='kids'?'Siguiente video':'Siguiente episodio'};
const render140=render;
render=function(){render140();if(tab==='kids')loadPosters()};
const navigate140=navigate;
navigate=function(next,detail=null){if(next!==tab)ui.musicFilter='all';return navigate140(next,detail)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b&&b.dataset.tab!==tab)ui.musicFilter='all'},true);
const kidsNav=document.querySelector('nav [data-tab="kids"]');kidsNav.innerHTML='<span class="nav-icon" aria-hidden="true">☀</span><span class="nav-label">Infantiles</span>';
const kidsStyle=document.createElement('style');kidsStyle.textContent='nav button{flex:1;padding-left:3px;padding-right:3px}.kids-detail-cover{width:100px;flex-shrink:0;aspect-ratio:2/3}.kids-label{margin-bottom:15px}body[data-view="kids"] .artist-tile .art-wrap{aspect-ratio:1;border-radius:24px}body[data-view="kids"] .primary{border-radius:14px}@media(max-width:370px){.nav-label{font-size:9px}.nav-icon{font-size:21px}}';document.head.append(kidsStyle);
render();
