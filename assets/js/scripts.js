document.addEventListener("DOMContentLoaded", function() {
    // Memeriksa keberadaan variabel userAcc di local storage
    var userAcc = localStorage.getItem('userAcc');

    // Memeriksa apakah userAcc ada
    if(userAcc) {
        // untuk dekstop mode
        // Jika userAcc ada, tampilkan tombol shopping cart dan profile
        document.getElementById('cartBtn').style.display = 'inline';
        document.getElementById('profileBtn').style.display = 'inline';

        // Sembunyikan tombol login dan register
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';

        // untuk mobile mode
        // Jika userAcc ada, tampilkan tombol shopping cart dan profile
        document.getElementById('cartBtnMbl').style.display = 'inline';
        document.getElementById('profileBtnMbl').style.display = 'inline';

        // Sembunyikan tombol login dan register
        document.getElementById('loginBtnMbl').style.display = 'none';
        document.getElementById('registerBtnMbl').style.display = 'none';
    } 
    else {
        // untuk dekstop mode
        // Jika userAcc tidak ada, tampilkan tombol login dan register
        document.getElementById('loginBtn').style.display = 'inline';
        document.getElementById('registerBtn').style.display = 'inline';

        // Sembunyikan tombol shopping cart dan profile
        document.getElementById('cartBtn').style.display = 'none';
        document.getElementById('profileBtn').style.display = 'none';
        
        // untuk mobile mode
        // Jika userAcc tidak ada, tampilkan tombol login dan register
        document.getElementById('loginBtnMbl').style.display = 'inline';
        document.getElementById('registerBtn').style.display = 'inline';

        // Sembunyikan tombol shopping cart dan profile
        document.getElementById('cartBtnMbl').style.display = 'none';
        document.getElementById('profileBtn').style.display = 'none';
    }
});

const menuBtn = document.getElementById('menuBtn');
const responsiveMenu = document.getElementById('responsiveMenu');

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.toggle('hidden');
});

var qty = 0

function increment() {
    qty ++
    updateQuantity()
}

function decrement() {
    if (qty > 0) {
        qty --
        updateQuantity()
    }
}

function updateQuantity() {
    document.getElementById('qtyinput').value = qty
}

function handleLogin(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === 'admin@gmail.com' && password === 'admin') {
    swal({
      title: "Success!",
      text: "Login Success!",
      icon: "success",
      duration: 1000,
      buttons: false,
    });
    var userData = {
      email : email,
      password : password,
    }
    localStorage.setItem ('userAcc', JSON.stringify(userData))
    setTimeout(function() {
      window.location = './'
    }, 1000)
  } 
  else {
    swal({
      title: "Failed!",
      text: "Login Failed!",
      icon: "error",
      duration: 1000,
      buttons: false,
    });
  }
};