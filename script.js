const form = document.getElementById("form")
const dd = document.getElementById("dd")
const mm = document.getElementById("mm")
const yy = document.getElementById("yy")
const err_msg = document.querySelectorAll(".err_msg")
const label = document.querySelectorAll(".label")

const value_dd = document.querySelectorAll(".value_dd")
const value_mm = document.querySelectorAll(".value_mm")
const value_yy = document.querySelectorAll(".value_yy")

const current_dd = new Date().getDate()
const current_mm = new Date().getMonth() + 1
const current_yy = new Date().getFullYear()

form.addEventListener("submit", (e) => {
  e.preventDefault()

  check_dd()
  check_mm()
  check_yy()

  //reset form
  //reset()
})

function check_dd() {
  if (dd.value == "") {
    err_msg[0].innerHTML = "Please enter your day of birth"
    label[0].style.color = "red"
    value_dd.innerHTML = "XX"
  } else if (dd.value < 1 || dd.value > 31) {
    err_msg[0].innerHTML = "Please enter a valid day"
    label[0].style.color = "red"
    value_dd.innerHTML = "XX"
  } else {
    err_msg[0].innerHTML = ""
    label[0].style.color = "black"
    value_dd.forEach((value) => {
      value.innerHTML = current_dd - dd.value
      value.innerHTML = Math.abs(value.innerHTML)
    })
  }
}

function check_mm() {
  if (mm.value === "") {
    err_msg[1].innerHTML = "Please enter your month of birth"
    label[1].style.color = "red"
    value_mm.innerHTML = "XX"
  } else if (mm.value < 1 || mm.value > 12) {
    err_msg[1].innerHTML = "Please enter a valid month"
    label[1].style.color = "red"
    value_mm.innerHTML = "XX"
  } else {
    err_msg[1].innerHTML = ""
    label[1].style.color = "black"
    value_mm.forEach((value) => {
      value.innerHTML = current_mm - mm.value
      value.innerHTML = Math.abs(value.innerHTML)
    })
  }
}

function check_yy() {
  if (yy.value == "") {
    err_msg[2].innerHTML = "Please enter your year of birth"
    label[2].style.color = "red"
    value_yy.innerHTML = "XX"
  } else if (yy.value < 1900 || yy.value > current_yy) {
    err_msg[2].innerHTML = "Please enter a valid year"
    label[2].style.color = "red"
    value_yy.innerHTML = "XX"
  } else {
    err_msg[2].innerHTML = ""
    label[2].style.color = "black"
    value_yy.forEach((value) => {
      value.innerHTML = current_yy - yy.value
      value.innerHTML = Math.abs(value.innerHTML)
    })
  }
}

//shift cursor to the next field
dd.addEventListener("keyup", () => {
  if (dd.value.length == 2) {
    mm.focus()
  }
})
mm.addEventListener("keyup", () => {
  if (mm.value.length == 2) {
    yy.focus()
  }
})

//reset form
function reset() {
  form.reset()
  err_msg.forEach((err) => {
    err.innerHTML = ""
  })
  label.forEach((label) => {
    label.style.color = "black"
  })
}
