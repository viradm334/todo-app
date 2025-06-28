# Dokumentasi

1. Sistem operasi yang menurut saya cocok untuk digunakan deploy aplikasi ini adalah Linux. Hal ini disebabkan karena Linux adalah sistem operasi yang sering digunakan untuk hosting web karena ringan dan membuat performa aplikasi maksimal.

2. Saya menggunakan bundler webpack karena relatif mudah untuk digunakan. Cara untuk bundling aplikasinya sendiri dengan install npm terlebih dahulu pada proyek, lalu install webpack. Pada kali ini saya membungkus aplikasi yang sudah ada dengan webpack, jadi saya pindahkan dulu semua file index.js, index.html, dan style.css pada folder src yang nanti akan dibuat bundlingnya pada folder dist/ dengan run comman npm run build.

3. Saya melakukan deployment di netlify. Caranya dengan buat akun di netlify dengan akun github, lalu connect repositori yang ingin di deploy lalu tentukan link aplikasi, folder tempat hasil bundling disimpan, dan command yang akan dijalankan netlify jika akan deploy.

4. Kendala yang saya alami adalah kesulitan menghubungkan index.html hasil bundling dengan index.js pada folder dist/. Lalu saya juga mengalami masalah kesulitan menggenerate file style.css dan hal itu diatasi dengan install style-loader dan css-loader.

5. Kelas asynchronous yang saya gunakan adalah settimeout. Jadi fungsi ini akan dijalankan jika sudah mencapai waktu yang ditentukan dan membiarkan kode di bawahnya berjalan duluan sehingga sifatnya non-blocking.

Catatan: untuk tugas 3 minggu 4 fungsi checkout tidak saya buat di checkout.html, checkout.js, dan checkout.css karena layout yang sama jadi saya gabungkan di index.html, index.js, dan style.css agar kode menjadi lebih ringkas.

Untuk melihat link aplikasi yang sudah dideploy, bisa klik [disini](https://todo-vira.netlify.app/)