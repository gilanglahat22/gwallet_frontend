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
- Object pool
- Facade

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

[Gwallet](https://gwallet-labpro.app)


## Author

- Muhammad Gilang Ramadhan (13520137)
## Contact
- 13520137@std.stei.itb.ac.id
