/* ==========================================================
   SULTAN PLASTIK — CONFIG FILE
   ==========================================================
   File ini berisi SEMUA data variabel website.
   Edit di sini = otomatis update di semua halaman.

   CARA EDIT:
   1. Cari section yang mau diubah (WA, alamat, social, dll)
   2. Ganti text di dalam tanda kutip ' '
   3. Save file
   4. Refresh website lo
   ========================================================== */

const SULTAN_CONFIG = {

    // ====== KONTAK ======
    contact: {
        // Nomor WA KONSUL (lo sendiri) — untuk tanya-tanya, info produk
        whatsapp: '6281947931800',
        whatsappMessage: 'Halo Sultan Plastik, saya mau konsultasi soal polymailer dan jasa sablon.',

        // Nomor WA ORDER (admin) — untuk harga & order
        whatsappAdmin: '6282127644474',
        whatsappAdminMessage: 'Halo Admin Sultan Plastik, saya mau tanya harga dan order polymailer.',

        // Email (opsional)
        email: '',

        // Jam operasional
        hours: 'Senin–Minggu · 24 Jam',
    },

    // ====== ALAMAT WORKSHOP ======
    address: {
        full: 'De Green Villa Mutiara Residence Blok A10, Jl. Ciganitri No.3, Cipagalo, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40287',
        mapsUrl: 'https://maps.google.com/?q=De+Green+Villa+Mutiara+Residence+Ciganitri+Bandung',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.638!3d-6.965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9d273c410a7%3A0x73f91c9758f76cd5!2sDe%20Green%20Villa%20Mutiara%20Residence!5e0!3m2!1sid!2sid',
    },

    // ====== SOCIAL MEDIA ======
    social: {
        instagram: '',
        instagramHandle: '',

        tiktok: 'https://tiktok.com/@packking99',
        tiktokHandle: '@packking99',

        facebook: '',
        twitter: '',
    },

    // ====== BRAND IDENTITY ======
    brand: {
        name: 'Sultan Plastik',
        tagline: 'Bandung · since 2020',
        yearFounded: 2020,
        currentYear: 2026,
    },

    // ====== STATS ======
    stats: {
        years: '6',
        brands: '100+',
        capacity: '5K',
        speed: '1',
    },

    // ====== TESTIMONI ======
    testimonials: [
        {
            quote: 'Order klip pond custom buat packaging jersey tim. Kualitas rapi, finishing presisi. Moulding disimpan, reorder tinggal WA langsung produksi.',
            author: 'EVOS Esports',
            detail: 'JAKARTA · PLASTIK KLIP POND',
        },
        {
            quote: 'Butuh klip pond yang tebal dan rapi buat packaging kaos. Sultan Plastik deliver sesuai spec, on time. Gak perlu cari supplier lain lagi.',
            author: 'ERIGO',
            detail: 'JAKARTA · PLASTIK KLIP POND',
        },
        {
            quote: 'Mulai dari Dinda Store, sekarang rebrand jadi Dream Story. 3 tahun pakai PUTIH LW, dari awal brand sampai sekarang gak pernah ganti supplier. Kualitasnya konsisten.',
            author: 'Dream Story (ex-Dinda Store)',
            detail: 'KUDUS · POLYMAILER PUTIH LW · 3 TAHUN',
        },
        {
            quote: 'Awalnya pakai polymailer standard biasa. Begitu coba PUTIH LW, langsung pindah total. Double layer 0.6 micron emang beda — lebih tebal, lebih premium di tangan customer.',
            author: 'DOWA',
            detail: 'YOGYAKARTA · UPGRADE KE PUTIH LW',
        },
        {
            quote: 'Udah 6 tahun kerja bareng. Mulai dari plastik OPP, terus zipper bag, sekarang polymailer juga. Semua kebutuhan packaging satu pintu di Sultan Plastik.',
            author: 'RUSEL',
            detail: 'BANDUNG · OPP + ZIPPER BAG + POLYMAILER · 6 TAHUN',
        },
        {
            quote: 'Zipper bag custom dengan sablon logo full color. Hasilnya detail banget, warna gak pudar. 6 tahun reorder terus, moulding masih disimpan.',
            author: 'HYRUS',
            detail: 'BANDUNG · ZIPPER BAG CUSTOM · 6 TAHUN',
        },
        {
            quote: 'Dari plastik OPP buat inner packaging sampai polymailer buat kirim ke customer. Satu supplier handle semua, gak ribet. Partner bisnis 6 tahun.',
            author: 'DELTA',
            detail: 'BANDUNG · OPP + POLYMAILER · 6 TAHUN',
        },
        {
            quote: 'Dari awal join udah pakai PUTIH LW. 6 tahun gak pernah ganti supplier. Kualitas double layer 0.6 micron konsisten dari dulu sampai sekarang. Sultan Plastik udah kayak partner tetap kami.',
            author: 'ALOOMNI',
            detail: 'BANDUNG · POLYMAILER PUTIH LW · 6 TAHUN',
        },
    ],

    // ====== BRAND PARTNERS (marquee homepage) ======
    partnerBrands: [
        'EVOS ESPORTS',
        'ERIGO',
        'DREAM STORY',
        'DOWA',
        'RUSEL',
        'HYRUS',
        'DELTA',
        'ALOOMNI',
    ],

};

/* ==========================================================
   AUTO-INJECT SCRIPT (jangan diubah dari sini ke bawah!)
   ========================================================== */

(function() {
    const c = SULTAN_CONFIG;

    // Build WhatsApp URLs
    const waKonsulUrl = `https://wa.me/${c.contact.whatsapp}?text=${encodeURIComponent(c.contact.whatsappMessage)}`;
    const waAdminUrl  = `https://wa.me/${c.contact.whatsappAdmin}?text=${encodeURIComponent(c.contact.whatsappAdminMessage)}`;

    document.addEventListener('DOMContentLoaded', function() {

        // 1. Tombol KONSUL → nomor lo (owner)
        // href="#wa" atau data-link="whatsapp"
        document.querySelectorAll('a[data-link="whatsapp"], a[href="#wa"]').forEach(el => {
            el.href   = waKonsulUrl;
            el.target = '_blank';
            el.rel    = 'noopener';
        });

        // 2. Tombol ORDER / HARGA → nomor admin
        // href="#wa-admin" atau data-link="whatsapp-admin"
        document.querySelectorAll('a[data-link="whatsapp-admin"], a[href="#wa-admin"]').forEach(el => {
            el.href   = waAdminUrl;
            el.target = '_blank';
            el.rel    = 'noopener';
        });

        // 3. TikTok
        document.querySelectorAll('a[data-link="tiktok"], a[href="#tt"]').forEach(el => {
            el.href   = c.social.tiktok;
            el.target = '_blank';
            el.rel    = 'noopener';
        });

        // 4. Instagram (kalo kosong, sembunyiin)
        document.querySelectorAll('a[data-link="instagram"], a[href="#ig"]').forEach(el => {
            if (c.social.instagram) {
                el.href   = c.social.instagram;
                el.target = '_blank';
                el.rel    = 'noopener';
            } else {
                el.style.display = 'none';
            }
        });

        // 5. Google Maps
        document.querySelectorAll('a[data-link="maps"], a[href="#maps"]').forEach(el => {
            el.href   = c.address.mapsUrl;
            el.target = '_blank';
            el.rel    = 'noopener';
        });

        // 6. Email
        document.querySelectorAll('a[data-link="email"], a[href="#email"]').forEach(el => {
            if (c.contact.email) {
                el.href = `mailto:${c.contact.email}`;
            } else {
                el.style.display = 'none';
            }
        });

        // 7. data-config text injection
        document.querySelectorAll('[data-config]').forEach(el => {
            const path = el.dataset.config.split('.');
            let value = c;
            for (const key of path) {
                value = value?.[key];
                if (value === undefined) break;
            }
            if (value !== undefined) el.textContent = value;
        });

        // 8. Google Maps embed
        document.querySelectorAll('[data-maps-embed]').forEach(el => {
            if (c.address.mapsEmbed && !c.address.mapsEmbed.includes('YOUR_EMBED_CODE_HERE')) {
                el.src = c.address.mapsEmbed;
            }
        });

        // 9. Auto copyright year
        document.querySelectorAll('[data-config="brand.currentYear"]').forEach(el => {
            el.textContent = new Date().getFullYear();
        });

    });

})();

// HAMBURGER MENU
(function(){
  const nav = document.querySelector('.nav-inner');
  if(!nav) return;
  
  // Create hamburger button
  const btn = document.createElement('button');
  btn.className = 'nav-hamburger';
  btn.innerHTML = '<span></span><span></span><span></span>';
  btn.setAttribute('aria-label','Menu');
  nav.appendChild(btn);
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-mobile-overlay';
  document.body.appendChild(overlay);
  
  const links = document.querySelector('.nav-links');
  
  function toggleMenu(){
    btn.classList.toggle('active');
    links.classList.toggle('mobile-open');
    overlay.classList.toggle('show');
    document.body.style.overflow = links.classList.contains('mobile-open') ? 'hidden' : '';
  }
  
  btn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if(links.classList.contains('mobile-open')) toggleMenu();
    });
  });
})();
