# Tugas Asisten Lab Programming

# Problem description

BNMO (dibaca: Binomo) adalah sebuah robot video game console yang dimiliki oleh Indra dan Doni. Saat ini, BNMO memiliki beragam fitur seperti inventarisasi dan toko game. Karena sudah bosan dengan dunia video game yang tidak memberikan untung, Indra dan Doni ingin memasuki dan mengenal dunia fintech. Mereka ingin menambah fitur integrasi bank pada BNMO yang memiliki fitur-fitur seperti transfer dan deposit uang. Tetapi, Indra dan Doni tidak cukup ahli dalam ngoding.

## About The Project

**Gwallet** adalah project yang dibuat untuk menjadi solusi dari permasalahan di atas.

## Features
- Topup saldo
- Melakukan transfer saldo ke rekening lain
- Menampilkan riwayat transfer dan topup
- Login, sign up, dan log out user
- menampilkan dan mengedit profile user
- Search user lain pada saat transfer
- Melihat informasi profil dan saldo

## Design Pattern yang dipakai
1. Singleton
- Sebuah objek bisa dikatakan Singleton, apabila hanya memiliki sebuah instance yang digunakan diseluruh kode logic yang dipakai. Oleh Karena itu, pada projek ini program yang dihubungkan ke database hanya membuat satu buah objek. Sehingga program yang dihubunkan ke database mengandung singleton pattern.
2. Object pool
- Object Pool merupakan pola design pattern yang menggunakan serangkaian objek yang sudah diinisialisasi dan siap digunakan sesuai dengan permintaan. Pada projek ini masing-masing objek yang sudah diinisialisasi siap digunakan sesuai dengan transaksi yang dilakukan.
3. Facade
- Pada facade pattern merupakan pola design pattern yang tidak peduli proses apa saja yang dilakukannya untuk memenuhi permintaan yang dilakukan. Pada program ini, pada saat melakukan suatu action baik itu transaksi atau pun yang lain-lain. Sistem akan memanggil action itu saja tanpa melakukan proses didalamnya (karena proses didalamnya akan dikerjakan oleh action itu tanpa harus diketahui oleh yang direquest).

### Built With

Frontend pada project ini dibuat dengan teknologi berikut :

- [ReactJS](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/)
- [Netlify](https://www.netlify.com/)
- [Backend APIs](https://github.com/gilanglahat22/gwallet_frontend)

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Clone Repo dari Api Gwallet and langkah installasinya sesuai dengan link berikut :
  [Gwallet Backend APIs](https://github.com/gilanglahat22/gwallet_backend)

### Installations

1. Clone repo berikut
   ```sh
   git clone https://github.com/gilanglahat22/gwallet_frontend.git
   ```
2. Move to project directory
   ```sh
   cd folder-project
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create env file and add 
    ```sh  
    REACT_APP_GWALLET_API = https://gwallet-labpro-2022.herokuapp.com/ or http://localhost:Your API PORT/
    ```
4. Start the Application
   ```sh
   npm start
   ```

## Demo

[Gwallet](https://gwallet-labpro.netlify.app/)


## Author

- Muhammad Gilang Ramadhan (13520137)
## Contact
- 13520137@std.stei.itb.ac.id
