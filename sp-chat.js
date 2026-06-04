(function(){
// Inject CSS
var style=document.createElement('style');
style.textContent=`#sp-chat-btn{position:fixed;bottom:20px;right:20px;padding:8px 16px;border-radius:30px;background:#C8A84B;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(200,168,75,.4);z-index:9999;display:flex;align-items:center;gap:6px;transition:transform .2s;font-family:Manrope,sans-serif}
#sp-chat-btn:hover{transform:scale(1.05)}
#sp-chat-btn svg{width:16px;height:16px;fill:#1a1a1a}
#sp-chat-btn span{font-size:11px;font-weight:700;color:#1a1a1a}
#sp-chat-box{position:fixed;bottom:56px;right:24px;width:370px;max-height:88vh;background:#1a1a1a;border:1px solid rgba(200,168,75,.3);border-radius:16px;z-index:9999;display:none;flex-direction:column;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,.5);font-family:'Manrope',sans-serif}
#sp-chat-box.open{display:flex}
#sp-chat-head{background:#111;padding:16px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(200,168,75,.2)}
#sp-chat-head img{width:36px;height:36px;border-radius:50%;object-fit:cover}
#sp-chat-head-info{flex:1}
#sp-chat-head-name{font-size:14px;font-weight:700;color:#C8A84B}
#sp-chat-head-status{font-size:11px;color:rgba(245,245,242,.5)}
#sp-chat-close{background:none;border:none;color:rgba(245,245,242,.5);cursor:pointer;font-size:20px;padding:4px}
#sp-chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:75vh;min-height:400px}
.sp-msg{max-width:85%;padding:8px 12px;border-radius:12px;font-size:8px;line-height:1.5;animation:spFade .3s ease}
.sp-msg-bot{background:#2a2a2a;color:#f5f5f2;border-bottom-left-radius:4px;align-self:flex-start}
.sp-msg-user{background:#C8A84B;color:#1a1a1a;border-bottom-right-radius:4px;align-self:flex-end;font-weight:500}
.sp-msg-bot a{color:#C8A84B;text-decoration:underline}
.sp-msg-bot img{width:140px;height:100px;object-fit:cover;border-radius:8px;flex-shrink:0}
.sp-img-carousel{display:flex;gap:6px;overflow-x:auto;padding:6px 0;scroll-snap-type:x mandatory}
.sp-img-carousel::-webkit-scrollbar{height:3px}
.sp-img-carousel::-webkit-scrollbar-thumb{background:#C8A84B;border-radius:2px}
#sp-chat-input-wrap{padding:12px 16px;border-top:1px solid rgba(200,168,75,.15);display:flex;gap:8px;background:#111}
#sp-chat-input{flex:1;background:#2a2a2a;border:1px solid rgba(200,168,75,.2);border-radius:8px;padding:10px 14px;color:#f5f5f2;font-size:13px;font-family:inherit;outline:none;resize:none}
#sp-chat-input::placeholder{color:rgba(245,245,242,.3)}
#sp-chat-input:focus{border-color:#C8A84B}
#sp-chat-send{background:#C8A84B;border:none;border-radius:8px;padding:0 14px;cursor:pointer;display:flex;align-items:center}
#sp-chat-send svg{width:18px;height:18px;fill:#1a1a1a}
#sp-chat-quick-wrap{padding:0 16px 10px;display:flex;align-items:center;gap:4px}
#sp-chat-quick{display:flex;flex-wrap:nowrap;gap:5px;overflow-x:hidden;scroll-behavior:smooth;flex:1}
.sp-q-arrow{background:none;border:1px solid rgba(200,168,75,.3);color:#C8A84B;width:20px;height:20px;border-radius:50%;cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;font-family:inherit}
.sp-q-arrow:hover{background:#C8A84B;color:#1a1a1a}
.sp-quick-btn{background:#2a2a2a;border:1px solid rgba(200,168,75,.25);color:#C8A84B;padding:4px 10px;border-radius:20px;font-size:8px;cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap;flex-shrink:0;scroll-snap-align:start}
.sp-quick-btn:hover{background:#C8A84B;color:#1a1a1a}
@keyframes spFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:480px){#sp-chat-box{width:calc(100vw - 32px);right:16px;bottom:88px;max-height:70vh}}`;
document.head.appendChild(style);

// Inject HTML
var div=document.createElement('div');
div.innerHTML=`<button id="sp-chat-btn" onclick="spToggleChat()">
  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
  <span>Tanya Kami</span>
</button>

<div id="sp-chat-box">
  <div id="sp-chat-head">
    <img src="logo.jpeg" alt="SP">
    <div id="sp-chat-head-info">
      <div id="sp-chat-head-name">Sultan Plastik Bandung</div>
      <div id="sp-chat-head-status">● Online — biasanya balas dalam 1 menit</div>
    </div>
    <button id="sp-chat-close" onclick="spToggleChat()">✕</button>
  </div>
  <div id="sp-chat-msgs"></div>
  <div id="sp-chat-quick-wrap"><button class="sp-q-arrow" onclick="spScrollQ(-1)">‹</button><div id="sp-chat-quick"></div><button class="sp-q-arrow" onclick="spScrollQ(1)">›</button></div>
  <div id="sp-chat-input-wrap">
    <input id="sp-chat-input" placeholder="Ketik pertanyaan..." onkeydown="if(event.key==='Enter')spSend()">
    <button id="sp-chat-send" onclick="spSend()"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
  </div>
</div>`;
document.body.appendChild(div);

// Chatbot Logic
const SP_KB = [
  {k:['harga','price','berapa','biaya','cost','tarif'],a:'Harga tergantung jenis produk, ukuran, dan quantity. Untuk polymailer PUTIH LW mulai dari Rp 200-an/pcs (tergantung ukuran). Sablon custom tergantung jumlah warna & quantity. <b>Konsul gratis via WA untuk quote akurat!</b> <a href="https://wa.me/6281947931800?text=Halo%20Sultan%20Plastik%2C%20mau%20tanya%20harga" target="_blank">💬 Chat WA</a>'},
  {k:['putih lw','putih','signature','double layer','0.6 micron','premium'],a:'<b>Polymailer PUTIH LW</b> adalah signature kami — double layer 0.6 micron, putih premium, ekstra tebal. Ideal untuk brand fashion premium & pengiriman antar pulau.<br><br><b>4 Ukuran Ready Stock:</b><br>• 20×30+5<br>• 25×35+5<br>• 30×40+5<br>• 35×45+5'},
  {k:['ukuran','size','dimensi','ready stock','stok'],a:'<b>Ukuran Ready Stock:</b><br>• PUTIH LW: 20×30+5, 25×35+5, 30×40+5, 35×45+5<br>• Polymailer line: 17×30 ke atas stok permanen<br>• Di bawah 17×30 bisa by request<br>• Custom size? Hubungi kami!'},
  {k:['sablon','custom','logo','print','cetak','jasa'],a:'<b>Jasa Sablon Manual</b> — custom logo brand di polymailer apapun:<br>• Multi-warna, detail tinggi<br>• MOQ fleksibel (<1000 pcs OK)<br>• Moulding disimpan untuk reorder gratis<br>• Kapasitas 5.000 pcs/meja/hari<br><br><a href="jasa-sablon.html">Lihat detail →</a>'},
  {k:['moq','minimum','minimal','order'],a:'MOQ fleksibel! Bisa <1000 pcs dengan biaya moulding Rp 100.000 (kami simpan untuk reorder gratis). MOQ ≥1000 pcs = moulding <b>GRATIS</b>.'},
  {k:['ongkir','kirim','pengiriman','delivery','ekspedisi','free'],a:'<b>Free ongkir</b> untuk Kota Bandung! Kabupaten Bandung free untuk order full. Luar kota via ekspedisi pilihan — ongkir bayar di tempat.'},
  {k:['cara order','pesan','gimana','proses','beli','order'],a:'<b>3 Langkah Order:</b><br>1️⃣ <b>Chat WA</b> — kirim spec (produk, ukuran, qty, sablon/gak)<br>2️⃣ <b>Konsul + Quote</b> — review desain, quote detail, mock-up gratis<br>3️⃣ <b>DP 50% → Produksi → Kirim</b><br><br><a href="https://wa.me/6281947931800?text=Halo%20Sultan%20Plastik%2C%20mau%20order" target="_blank">💬 Order via WA</a>'},
  {k:['bayar','pembayaran','transfer','dp','payment','bca'],a:'<b>Pembayaran:</b><br>• DP 50% setelah ACC quotation<br>• Pelunasan setelah barang siap kirim<br>• Transfer ke BCA/BRI/Mandiri atau QRIS'},
  {k:['lama','berapa hari','durasi','waktu','produksi','kapan'],a:'Order 10.000 pcs bisa selesai <b>1 hari</b>. Order lebih besar, timeline didiskusikan di awal. Moulding baru butuh 1-2 hari kerja.'},
  {k:['warna','color','hitam','silver','pink','nude'],a:'Polymailer tersedia berbagai warna: <b>Putih LW (signature), Hitam, Silver, Pink, Nude</b>, dan warna lain. Custom warna by request. Sablon juga multi-warna OK (optimal 1-6 warna).'},
  {k:['sample','contoh','coba'],a:'Bisa! Kami bikin 1-3 pcs <b>sample gratis</b> untuk konfirmasi sebelum produksi penuh. <a href="https://wa.me/6281947931800?text=Halo%2C%20mau%20request%20sample" target="_blank">💬 Request Sample</a>'},
  {k:['alamat','lokasi','dimana','where','address','workshop'],a:'<b>Sultan Plastik Bandung</b><br>Jl. Terusan Batununggal Gg. Sukamulya No.41 RT.2/RW.04<br>Mengger, Bandung Kidul, Kota Bandung 40267<br>WA: 0819-4793-1800'},
  {k:['portfolio','hasil','contoh sablon','brand'],a:'100+ brand fashion Indonesia udah pakai jasa kami. <a href="portfolio.html">Lihat Portfolio →</a>'},
  {k:['zipper','ziplock','klip'],a:'Kami juga jual <b>Zipper Bag</b> berbagai grade & ukuran. Bisa sablon custom juga! Hubungi WA untuk detail.'},
  {k:['whatsapp','wa','kontak','contact','hubungi','telp','chat','hubungi kami'],a:'<b>Hubungi kami:</b><br>💬 WA: <a href="https://wa.me/6281947931800" target="_blank">0819-4793-1800</a><br>🎵 TikTok: <a href="https://www.tiktok.com/@packking99" target="_blank">@packking99</a><br>🛒 Shopee: <a href="https://shopee.co.id/sultan.packaging" target="_blank">sultan.packaging</a><br>Senin-Minggu, 24 Jam'},
  {k:['halo','hai','hi','hello','hey','pagi','siang','sore','malam','assalamualaikum'],a:'Halo! 👋 Selamat datang di <b>Sultan Plastik Bandung</b>. Ada yang bisa kami bantu? Tanya aja soal produk, harga, atau cara order!'},
  {k:['moulding','screen','film'],a:'<b>Moulding/Screen sablon</b> kami simpan setelah order pertama. Reorder desain yang sama = <b>langsung produksi, gak perlu bikin moulding baru</b> (gratis!).'},
  {k:['desain','format','file','ai','psd'],a:'Format desain yang diterima: <b>AI, PSD, PDF</b>, atau JPG/PNG resolusi tinggi (min 300dpi). Konsul desain gratis sebelum produksi!'},
  {k:['foto','gambar','picture','image','lihat','liat','show','poto','real pic','real','pic','kirim foto','minta foto','real pict'],a:'Ini beberapa produk kami:<br><div class="sp-img-carousel"><img src="asset/foto putih LW/service-putih-lw-02.jpeg"><img src="asset/Portofolio/porto-01.jpeg"><img src="asset/Portofolio/porto-02.jpeg"><img src="asset/Portofolio/porto-03.jpeg"></div><b>Polymailer PUTIH LW</b> — Signature double layer 0.6 micron<br><br>Mau lihat lebih banyak? <a href="portfolio.html">Lihat Portfolio →</a>'},
  {k:['hasil sablon','contoh sablon','sablon result'],a:'Ini contoh hasil sablon kami:<br><div class="sp-img-carousel"><img src="asset/hasil jasa sablon/evos.jpeg"><img src="asset/hasil jasa sablon/erigo.jpeg"><img src="asset/hasil jasa sablon/hara.jpeg"><img src="asset/hasil jasa sablon/dreamstory.jpeg"></div><a href="portfolio.html">Lihat semua portfolio →</a>'},
];

const SP_QUICK = ['Harga polymailer?','Cara order?','MOQ minimum?','Jasa sablon?','PUTIH LW?','Lihat foto','Hubungi kami'];
const SP_WELCOME = 'Halo! 👋 Saya asisten <b>Sultan Plastik Bandung</b>. Tanya aja soal produk, harga, cara order, atau apapun — saya bantu!';
let spOpen = false;
let spInit = false;

function spToggleChat(){
  spOpen = !spOpen;
  document.getElementById('sp-chat-box').classList.toggle('open', spOpen);
  if(!spInit){spInit=true;spBotMsg(SP_WELCOME);spShowQuick();}
}

function spBotMsg(txt){
  const d=document.createElement('div');d.className='sp-msg sp-msg-bot';d.innerHTML=txt;
  document.getElementById('sp-chat-msgs').appendChild(d);
  d.parentElement.scrollTop=d.parentElement.scrollHeight;
}

function spUserMsg(txt){
  const d=document.createElement('div');d.className='sp-msg sp-msg-user';d.textContent=txt;
  document.getElementById('sp-chat-msgs').appendChild(d);
  d.parentElement.scrollTop=d.parentElement.scrollHeight;
}

function spScrollQ(dir){
  const el=document.getElementById('sp-chat-quick');
  el.scrollLeft+=dir*120;
}
function spShowQuick(){
  const wrap=document.getElementById('sp-chat-quick');wrap.innerHTML='';
  SP_QUICK.forEach(q=>{
    const b=document.createElement('button');b.className='sp-quick-btn';b.textContent=q;
    b.onclick=()=>{spUserMsg(q);wrap.innerHTML='';setTimeout(()=>spReply(q),400);};
    wrap.appendChild(b);
  });
}

function spSend(){
  const inp=document.getElementById('sp-chat-input');
  const txt=inp.value.trim();if(!txt)return;
  spUserMsg(txt);inp.value='';
  document.getElementById('sp-chat-quick').innerHTML='';
  setTimeout(()=>spReply(txt),500);
}

function spReply(txt){
  const low=txt.toLowerCase();
  let best=null,bestScore=0;
  SP_KB.forEach(item=>{
    let score=0;
    item.k.forEach(kw=>{if(low.includes(kw))score+=kw.length;});
    if(score>bestScore){bestScore=score;best=item;}
  });
  if(best){
    spBotMsg(best.a);
  } else {
    spBotMsg('Terima kasih atas pertanyaannya! Untuk jawaban lebih detail, langsung chat tim kami ya 😊<br><br><a href="https://wa.me/6281947931800?text='+encodeURIComponent('Halo Sultan Plastik, '+txt)+'" target="_blank">💬 Chat WhatsApp</a>');
  }
  setTimeout(spShowQuick, 300);
}
})();