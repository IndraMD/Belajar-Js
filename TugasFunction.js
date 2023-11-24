function fullname(namaDepan, namaBelakang) {
  console.log(namaDepan + " " + namaBelakang);
}
fullname("indra", "md");

function login(email, password) {
  const emailDb = "Indramd66@gmail.com";
  const passwordDB = "123";
  if (email === emailDb && password === passwordDB) {
    console.log("berhasil login");
  } else {
    console.log("gagal login");
  }
}
login("Indramd66@gmail.com", "123");
login("indramd65@gmail.com", "111");

function totalPrice(hargaBarang, qty, operator) {
  grandTotal = 0;
  if (operator == "*") {
    grandTotal = hargaBarang * qty;
  } else if (operator == "+") {
    grandTotal = hargaBarang + qty;
  } else if (operator == "/") {
    grandTotal = hargaBarang / qty;
  }
  return "RP" + " " + grandTotal;
}

function totalHargaShip(price, qty, operator) {
  let totalPrice = 0;
  switch (operator) {
    case "-":
      totalPrice = price - qty;
      break;
    case "+":
      totalPrice = price + qty;
      break;
    default:
        totalPrice=price*qty
      break;
  }
  
  return "Total" + " " + totalPrice
}

const total = totalPrice(1900, 5, "/");
console.log(total);

const jumlah = totalHargaShip(200, 300, "hggtggfggff")
console.log(jumlah)