/* =====================================================================
 * KONFIGURASI APLIKASI — satu-satunya file yang WAJIB Anda ubah.
 *
 * Aman untuk dipublikasikan di repo publik GitHub Pages:
 *  - SUPABASE_ANON_KEY memang kunci publik; keamanan dijaga oleh RLS.
 *  - ONESIGNAL_APP_ID juga publik.
 * JANGAN PERNAH menaruh service_role key atau OneSignal REST API Key di sini.
 * ===================================================================== */
window.APP_CONFIG = {
  // Supabase → Project Settings → API
  SUPABASE_URL: "https://huwyayroimggavnnzrgv.supabase.co",
  // Isi dengan "anon public" key (legacy) ATAU "publishable" key (sb_publishable_...)
  // JANGAN PERNAH isi dengan secret key (sb_secret_...)
  SUPABASE_ANON_KEY: "sb_publishable_ds4WzPjROtovINyKAM5tjg_iicLZfLD",

  // OneSignal → Settings → Keys & IDs
  ONESIGNAL_APP_ID: "2166ac5b-b4c3-42f5-b179-bd7f6aaf5155",

  // Identitas cluster
  NAMA_CLUSTER: "Cluster Griya Cokelat",
  ALAMAT_CLUSTER: "Waru, Kec. Parung, Kabupaten Bogor, Jawa Barat 16330",

  // Aturan jam gerbang (WIB)
  JAM_BUKA: "05:00",
  JAM_TUTUP: "22:00",

  // Iuran kas bulanan per rumah (Rp) — nilai bawaan saat input di tabel iuran
  IURAN_BULANAN: 25000,

  // Nama bucket Supabase Storage
  BUCKET_FOTO: "Portal Satu",
};
