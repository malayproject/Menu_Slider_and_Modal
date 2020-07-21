var el_toggle;
var el_signUp;
var el_navColumn;
var el_form;
var el_submit;
var el_fNameIp;
var el_lNameIp;
var el_genIp;
var el_emailIp;
var formEl;

var initElements = () => {
  el_toggle = document.getElementById("toggle");
  el_signUp = document.getElementById("signUp");
  el_navColumn = document.getElementById("navColumn");
  el_form = document.getElementById("form");
  el_submit = document.getElementById("submit");
  el_fNameIp = document.getElementById("fNameIp");
  console.log(`el_fNameIp element: ${el_fNameIp}`);
  el_lNameIp = document.getElementById("lNameIp");
  el_genIp = document.getElementById("genIp");
  el_emailIp = document.getElementById("emailIp");
  formEl = [];
  formEl.push(el_fNameIp);
  formEl.push(el_lNameIp);
  formEl.push(el_genIp);
  formEl.push(el_emailIp);
};

var submitForm = (event) => {
  event.preventDefault();
  console.log("submit clicked");
  console.log(formEl);
  for (let el of formEl) {
    console.log(el.id);
    if (el.value.length == 0) {
      el.classList.add("error");
      el.classList.remove("success");
    } else if (el == el_emailIp) {
      try {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value)) {
          el.classList.add("success");
          el.classList.remove("error");
        } else {
          el.classList.add("error");
          el.classList.remove("success");
        }
      } catch (error) {
        console.log("error in email regex ", error);
      }
    } else {
      el.classList.add("success");
      el.classList.remove("error");
      console.log("in end else for ", el.id);
    }
  }
  for (let el of formEl) {
    if (el.classList.contains("error")) return;
  }
  console.log("hello");
  el_form.classList.add("hidden");
};

var showNav = () => {
  console.log(" nav bar clicked");
  if (!el_navColumn.classList.contains("visible"))
    el_navColumn.classList.add("visible");
  else el_navColumn.classList.remove("visible");
};

var showModal = () => {
  console.log(" sign up clicked");
  el_form.classList.remove("hidden");
};
var addListeners = () => {
  el_toggle.addEventListener("click", showNav);
  el_signUp.addEventListener("click", showModal);
  el_submit.addEventListener("click", submitForm);
};

var init = () => {
  initElements();
  addListeners();
};

init();
