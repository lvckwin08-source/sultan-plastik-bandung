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
        // Nomor WhatsApp format internasional TANPA tanda + dan TANPA spasi
        // Contoh: 6281234567890 (Indonesia diawali 62, hapus 0 di depan)
        whatsapp: '6281234567890',

        // Pesan default yang muncul pas customer klik WhatsApp
        whatsappMessage: 'Halo Sultan Plastik, saya mau konsul soal polymailer dan jasa sablon.',

        // Email (opsional, kosongin kalo gak ada)
        email: 'halo@sultanplastik.com',

        // Jam operasional
        hours: 'Senin–Sabtu · 08–17 WIB',
    },

    // ====== ALAMAT WORKSHOP ======
    address: {
        // Alamat lengkap workshop
        full: 'Jl. Contoh No. 123, Kecamatan Contoh, Kota Bandung, Jawa Barat 40000',

        // Link Google Maps (cara dapet: buka workshop di Google Maps → Share → Copy link)
        mapsUrl: 'https://maps.google.com/?q=Sultan+Plastik+Bandung',

        // Embed Google Maps (opsional, untuk iframe map di page Tentang)
        // Cara dapet: Google Maps → Share → Embed → copy bagian src="..."
        mapsEmbed: 'https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE',
    },

    // ====== SOCIAL MEDIA ======
    social: {
        instagram: 'https://instagram.com/sultanplastik',
        instagramHandle: '@sultanplastik',

        tiktok: 'https://tiktok.com/@sultanplastik',
        tiktokHandle: '@sultanplastik',

        // Opsional, kosongin kalo gak ada
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

    // ====== STATS (untuk halaman Tentang) ======
    stats: {
        years: '6',
        brands: '100+',
        capacity: '5K',
        speed: '1',
    },

    // ====== TESTIMONI ======
    // Tambah/kurang testimoni di sini, otomatis muncul di homepage & portfolio
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

    // ====== BRAND PARTNERS (marquee strip di homepage) ======
    // Daftar brand customer untuk ditampilin di marquee homepage
    partnerBrands: [
        'BRAND FASHION 01',
        'STREETWEAR LABEL',
        'HYPE COLLECTIVE',
        'URBAN APPAREL',
        'PREMIUM CLOTH CO',
        'INDIE BRAND BDG',
    ],

};

/* ==========================================================
   AUTO-INJECT SCRIPT (jangan diubah dari sini ke bawah!)
   Script ini otomatis isi semua placeholder di HTML.
   ========================================================== */

(function() {
    const c = SULTAN_CONFIG;

    // Build WhatsApp URL
    const waUrl = `https://wa.me/${c.contact.whatsapp}?text=${encodeURIComponent(c.contact.whatsappMessage)}`;

    document.addEventListener('DOMContentLoaded', function() {

        // 1. Replace semua link WhatsApp (data-link="whatsapp" atau href="#wa")
        document.querySelectorAll('a[data-link="whatsapp"], a[href="#wa"]').forEach(el => {
            el.href = waUrl;
            el.target = '_blank';
            el.rel = 'noopener';
        });

        // 2. Replace semua link Instagram
        document.querySelectorAll('a[data-link="instagram"], a[href="#ig"]').forEach(el => {
            el.href = c.social.instagram;
            el.target = '_blank';
            el.rel = 'noopener';
        });

        // 3. Replace semua link TikTok
        document.querySelectorAll('a[data-link="tiktok"], a[href="#tt"]').forEach(el => {
            el.href = c.social.tiktok;
            el.target = '_blank';
            el.rel = 'noopener';
        });

        // 4. Replace semua link Google Maps
        document.querySelectorAll('a[data-link="maps"], a[href="#maps"]').forEach(el => {
            el.href = c.address.mapsUrl;
            el.target = '_blank';
            el.rel = 'noopener';
        });

        // 5. Replace semua link Email
        document.querySelectorAll('a[data-link="email"], a[href="#email"]').forEach(el => {
            el.href = `mailto:${c.contact.email}`;
        });

        // 6. Replace text dynamic dengan data-config attribute
        // Contoh: <span data-config="contact.hours"></span> → "Senin–Sabtu · 08–17 WIB"
        document.querySelectorAll('[data-config]').forEach(el => {
            const path = el.dataset.config.split('.');
            let value = c;
            for (const key of path) {
                value = value?.[key];
                if (value === undefined) break;
            }
            if (value !== undefined) {
                el.textContent = value;
            }
        });

        // 7. Inject alamat (untuk tag dengan data-config="address.full")
        // udah ke-handle di point 6

        // 8. Inject Google Maps embed (untuk iframe dengan data-maps-embed)
        document.querySelectorAll('[data-maps-embed]').forEach(el => {
            if (c.address.mapsEmbed && c.address.mapsEmbed !== 'https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE') {
                el.src = c.address.mapsEmbed;
            }
        });

        // 9. Auto-update copyright year
        document.querySelectorAll('[data-config="brand.currentYear"]').forEach(el => {
            el.textContent = new Date().getFullYear();
        });

    });

})();
