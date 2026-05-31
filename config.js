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
        hours: 'Senin–Sabtu · 08–17 WIB',
    },

    // ====== ALAMAT WORKSHOP ======
    address: {
        full: 'Jl. Contoh No. 123, Kecamatan Contoh, Kota Bandung, Jawa Barat 40000',
        mapsUrl: 'https://maps.google.com/?q=Sultan+Plastik+Bandung',
        mapsEmbed: 'https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE',
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
            quote: 'Respons cepet banget. Order 1000 pcs PUTIH LW + sablon logo, jam 9 pagi konsul, sore quote keluar, 2 hari kemudian barang sampe. Kualitas konsisten.',
            author: '@namabrand_fashion',
            detail: 'BANDUNG · REGULAR ORDER',
        },
        {
            quote: 'Pertama coba polymailer standard mereka, kualitasnya udah bagus. Lama-lama upgrade ke PUTIH LW, dan gak balik lagi ke supplier lain.',
            author: '@namabrand_premium',
            detail: 'BALI · LOYAL 3 TAHUN',
        },
        {
            quote: 'Kami sudah 3 tahun pake Sultan Plastik untuk semua line produk kami. Yang bikin betah: konsistensi kualitas, kecepatan respon, dan fleksibilitas MOQ.',
            author: '@brand_fashion_bdg',
            detail: 'BANDUNG · 3 TAHUN',
        },
        {
            quote: 'Awal-awal brand kami baru launch, MOQ kami cuma 500 pcs. Sultan Plastik bisa terima dan tetep kasih kualitas full. Sekarang brand kami udah scale, masih order ke mereka.',
            author: '@indielabel_jkt',
            detail: 'JAKARTA · SEJAK 2022',
        },
    ],

    // ====== BRAND PARTNERS (marquee homepage) ======
    partnerBrands: [
        'KULSOEM',
        'DREAMSTORY',
        'INIKAMI HIJAB',
        'UNITED',
        'ALOOMNI',
        'ALIS MILIARTA',
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
