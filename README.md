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

## Scenario C : Mencari Film.
1. Pengguna memasukkan judul film yang dicari.
2. Film yang dicari ditampilkan.
     1. Bila film tidak ada, tampilkan informasi bahwa tidak ada film yang ditemukan

## Scenario D : Menampilkan Daftar Film.
1. Buka halaman daftar film yang disukai.
2. Tampilkan semua film yang disukai.
     1. Presenter meminta semua daftar film yang disukai kepada Model.
     2. Model mengembalikan daftar film.
     3. Presenter meminta View menampilkan daftar film.
3. Bila tidak ada film yang disukai, berikan informasi mengenai kondisi tersebut.
     1. Presenter meminta semua daftar film yang disukai kepada Model.
     2. Model mengembalikan daftar kosong.
     3. Presenter meminta View menampilkan informasi bahwa belum ada film yang disukai.

## List ToDo:
1. Memberi nama yang lebih berbeda untuk **createLikeButtonTemplate** dan **createLikedButtonTemplate**.
2. Alur negatif: sistem tidak memproses penyimpanan dan menyebabkan kegagalan jika menyimpan movie tanpa ID.


3. Meringkas kode untuk mempersiapkan tes.

*TODO yang berkaitan dengan keharmonisan*
4. Menyesuaikan template hasil pencarian agar dapat menggunakan template menampilkan daftar film yang disukai.
5. Mengharmoniskan kedua method yang menampilkan daftar film yang disukai, yaitu showFavoriteMovies dan showMovies.
6. Menyesuaikan template hasil pencarian agar dapat menggunakan template menampilkan daftar film yang disukai.

7. Mengubah nama FavoriteMovieSearchView agar lebih general.

## Daftar kontrak Favorite Movies
- Dapat mengembalikan film yang tersimpan berdasarkan kunci tertentu.
- Dapat mengembalikan semua film kesukaan yang sudah tersimpan.
- Dapat menambahkan film baru ke daftar film yang disukai.
     - Bila data film tidak mengandung properti yang dibutuhkan, bangkitkan error. Jangan sampai aplikasi berhenti berjalan.
- Dapat menghapus film dari daftar film yang disukai.
     - Bila film tidak ada, jangan terjadi error.

## Use Case dan Spesifikasinya (TDD)
1. Posibilitas bila pengguna memasukkan kueri pencarian “film A”.
     1. Presenter akan meminta ke Model untuk memberikan film yang disukai dengan yang cocok untuk pencarian “film A”.
     2. Presenter akan menampilkan ke View (DOM) semua film yang dikembalikan oleh Model.
          1. Presenter meminta FavoriteMovies mencari fillm.
          2. Presenter menerima film hasil pencarian.
          3. Presenter menampilkan film hasil pencarian.
2. Posibilitas bila pengguna memasukkan kueri pencarian kosong seperti “”, “ “, atau tab.
     1. Presenter akan meminta Model untuk memberikan semua film yang disukai.
     2. Presenter akan menampilkan ke View semua film yang disukai yang telah diberikan oleh Model.
3. Posibilitas bila pengguna memasukkan kueri pencarian dan tidak ada film yang cocok.
     1. Presenter meminta Model untuk mencari film.
     2. Presenter akan menampilkan informasi tidak ada film yang ditemukan pada View.