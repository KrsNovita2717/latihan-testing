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
