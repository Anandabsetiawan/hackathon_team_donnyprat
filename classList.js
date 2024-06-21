let yoga = [
    {
        id: 1,
        className: "Yoga",
        daysSchedule: "Monday",
        timeSchedule: "19:00 - 20:00",
        price: 75_000
    },
    {
        id: 2,
        className: "Yoga",
        daysSchedule: "Tuesday",
        timeSchedule: "19:00 - 20:00",
        price: 75_000
    }
]
let zumba = [
    {
        id: 1,
        className: "Zumba",
        daysSchedule: "Tuesday",
        timeSchedule: "09:00 - 10:00",
        price: 100_000
    },
    {
        id: 2,
        className: "Zumba",
        daysSchedule: "Friday",
        timeSchedule: "09:00 - 10:00",
        price: 100_000
    }
]
let muayThai = [
    {
        id: 1,
        className: "Muay Thai",
        daysSchedule: "Wednesday",
        timeSchedule: "18:00 - 19:00",
        price: 100_000
    },
    {
        id: 2,
        className: "Muay Thai",
        daysSchedule: "Friday",
        timeSchedule: "18:00 - 19:00",
        price: 100_000
    }
]
let pilates = [
    {
        id: 1,
        className: "Pilates",
        daysSchedule: "Monday",
        timeSchedule: "20:00 - 21:00",
        price: 200_000
    },
    {
        id: 2,
        className: "Pilates",
        daysSchedule: "Thursday",
        timeSchedule: "20:00 - 21:00",
        price: 200_000
    }
]
let bodyCombat = [
    {
        id: 1,
        className: "Body Combat",
        daysSchedule: "Tuesday",
        timeSchedule: "15:00 - 16:00",
        price: 75_000
    },
    {
        id: 2,
        className: "Body Combat",
        daysSchedule: "Friday",
        timeSchedule: "15:00 - 16:00",
        price: 75_000
    }
]

function memilihKelas() {
    let kelas = document.getElementById("kelas");
    console.log(kelas.value);
    let isiKelas = kelas.value;
    
    if (isiKelas === "yoga") {
        cetak(yoga);
    }
    else if (isiKelas === "zumba"){
        cetak(zumba)
    }
    else if (isiKelas === "pilates"){
        cetak(pilates)
    }
    else if (isiKelas === "muayThai"){
        cetak(muayThai)
    }
    else if (isiKelas === "bodyCombat"){
        cetak(bodyCombat)
    }
}

function cetak(array) {
    let printSchedule = document.getElementById("printSchedule");
    printSchedule.innerHTML = "";

    for (let element of array) {
        printSchedule.innerHTML +=
        `<div class="card text-center mb-3" style="width: 18rem; border: solid; border-width: 2px;">
            <div class="card-body">
                <h5 class="card-title">${element.className}</h5>
                <p class="card-text" id="namaKelasPilihan">Day: ${element.daysSchedule}</p>
                <p class="card-text">Time: ${element.timeSchedule}</p>
                <p class="card-text">Price: Rp${element.price}</p>
                <button class="btn" style="color: white; background-color: black"; border: solid; border-width: 2px;" type="submit" onclick="daftarWaktu(); cetakInfo(arrMyClass); cetakTotalHarga();">Daftar Sekarang</button>
            </div>
        </div>`;
    }
    
}
// function cetak(array) {
//     let printSchedule = document.getElementById("printSchedule");
//     printSchedule.innerHTML = "";

//     for (let element of array) {
//         printSchedule.innerHTML +=  `<div class="card">
//         <div class="card-body">
//           Hari ${element.daysSchedule} di jam ${element.timeSchedule} dengan harga ${element.price}

//           <button onclick="daftarWaktu(${element.id})">Daftar kelas ini</button>
//         </div>
//       </div>`;
//     }
    
// }

function getName(params) {
    
}


let arrMyClass = [];

function daftarWaktu() {
    let name = document.getElementById("name");
    // console.log(name.value);
    let isiName = name.value;
    let email = document.getElementById("email");
    let isiEmail = email.value;
    let obj = {};
    let kelas = document.getElementById("kelas");
    let isikelas = kelas.value; 
    let totalharga = 0;

    let harga = {
        yoga: 75_000,
        zumba: 100_000,
        muayThai: 100_000,
        pilates: 200_000,
        bodyCombat: 75_000
    }
    for(let key in harga){
        if(isikelas === key){
            totalharga = harga[key];
        }
    }

    if (isiName.length === 0 || isiEmail.length === 0){
        alert ("Mohon lengkapi data diri anda!");
    }
    else{
        obj = {
            kelas: isikelas,
            name: isiName,
            email: isiEmail,
            harga: totalharga
        }
    }

    if (obj.name !== undefined && obj.email !== undefined){
        arrMyClass.push(obj);
    }
    // console.log(arrMyClass);
    return arrMyClass;


    // console.log(arrMyClass);

    // console.log(yoga.filter(el => el.id === id)[0])

    // kelasTerdaftar.push(yoga.filter(el => el.id === id)[0])
    // Loop cari elemen id yang sama yang di masukan

    // console.log(kelasTerdaftar)
}

function getTotalHarga(arrMyClass) {
    let total = 0;
 
    for(let x = 0 ; x < arrMyClass.length; x++){
        total += arrMyClass[x].harga;
    }
    // console.log(total);
    // console.log(resArrMyClass, total);
    return total
}

function cetakInfo(arrMyClass) {
    let printInfo = document.getElementById("printInfo");
    printInfo.innerHTML = "";


    for (let element of arrMyClass) {

        printInfo.innerHTML +=
        `<div id="iniParent" class="col text-left">
        <div class="orders">   
            <h4>${element.name}</h4>
            <h5>class:</h5>
            <p>${element.kelas}</p>
            </div>
            </div>`
            
        }
        
    }
    // <button type="button" class="btn btn-danger">Delete</button>

// function deleteInfo(arrMyClass) {
//     let printInfo = document.getElementById("printInfo");

//     for (let element in arrMyClass) {

//         printInfo.innerHTML +=
//         `<div id="iniParent" class="col text-left">
//         <div class="orders">   
//             <h4>${element.name}</h4>
//             <h5>class:</h5>
//             <p>${element.kelas}</p>
//             <button type="button" class="btn btn-danger" onclick="deleteInfo(arrMyClass);">Delete</button>
//             </div>
//             </div>`
            
//         }
  

// }

function cetakTotalHarga() {
    let resGetTotal = getTotalHarga(arrMyClass)
    // console.log(resGetTotal);

    let printHarga = document.getElementById("printHarga")
    printHarga.innerHTML = 
    `<h2>TOTAL: ${resGetTotal}</h2>`
}




