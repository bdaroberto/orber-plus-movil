// Loaded before the application so folder classification is available at first sync.
function catalogKind(name){const n=String(name||'').normalize('NFC').trim().toLocaleLowerCase('es');return n==='youtube'?'music':n==='infantiles'?'kids':'series'}
function coverKey(key,kind=mediaKind()){return kind==='kids'?'kids:'+key:key}
