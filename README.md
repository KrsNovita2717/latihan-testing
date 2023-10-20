# latihan-testing

## Scenario A : Menyukai Film.
1. Film belum disukai.
2. Widget untuk menyukai film ditampilkan.
3. Widget menyukai film ditekan oleh pengguna.
4. Film ditambahkan ke daftar film yang disukai.
     1. Film berhasil ditambahkan.
     2. Ternyata film sudah disukai.
          1. Tidak perlu menyimpan kembali.
     3. Data film tidak memiliki ID.
          1. Sistem tidak memproses penyimpanan.
          2. Sistem tidak gagal.

## Scenario B : Batal Menyukai Film.
1. Film sudah disukai.
2. Widget untuk batal menyukai film ditampilkan.
3. Widget pembatalan ditekan oleh pengguna.
4. Film dihapus dari daftar film yang disukai.
     1. Film berhasil dihapus.
     2. Ternyata film tidak ada dalam daftar film yang disukai.

## List ToDo:
1. Memberi nama yang lebih berbeda untuk **createLikeButtonTemplate** dan **createLikedButtonTemplate**.
2. Alur negatif: sistem tidak memproses penyimpanan dan menyebabkan kegagalan jika menyimpan movie tanpa ID.

## Daftar kontrak Favorite Movies
- Dapat mengembalikan film yang tersimpan berdasarkan kunci tertentu.
- Dapat mengembalikan semua film kesukaan yang sudah tersimpan.
- Dapat menambahkan film baru ke daftar film yang disukai.
     - Bila data film tidak mengandung properti yang dibutuhkan, bangkitkan error. Jangan sampai aplikasi berhenti berjalan.
- Dapat menghapus film dari daftar film yang disukai.
     - Bila film tidak ada, jangan terjadi error.