const user = {
  username: "dilshod",
  password: "123456",
  setPassword(password) {
    if (password === this.password) {
      console.log(" bir xil");
    } else {
      console.log("bir xil emas");
    }
  },
};

user.setPassword("123456");

// const img = document.getElementById("header")

// img.addEventListener("click", () => {
//     img.style.backgroundImage = "url('./img/header2.png')"
// })
