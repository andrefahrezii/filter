# Gunakan Node.js versi 14 sebagai base image
FROM node:20

# Buat direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json (atau yarn.lock jika Anda menggunakan Yarn)
COPY package*.json ./

# Menginstal dependensi aplikasi
RUN npm install

# Menyalin seluruh sumber kode aplikasi ke dalam direktori kerja di dalam container
COPY . .

# Membangun aplikasi Next.js untuk mode produksi
RUN npm run build

# Menjalankan aplikasi Next.js
CMD ["npm", "start"]
