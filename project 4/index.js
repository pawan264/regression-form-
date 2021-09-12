console.log("they are regular expression");
let validname = false;
let validemail = false;
let validnumber = false;
$('#success').hide();
$('#failure').hide();
// target the id name
const username = document.getElementById("username");
username.addEventListener("blur", function () {
    // console.log("blur the event");
    let reg = /^[a-zA-Z]([0-9a-zA-Z]{2,10})$/
    let str = username.value;
    if (reg.test(str)) {
        console.log("they are matched")
        username.classList.remove('is-invalid')
        validname = true;

    } else {
        console.log("they are not match");
        username.classList.add('is-invalid')
        validname = false;
    }
    // console.log(reg,str);
})

const email = document.getElementById('email');
email.addEventListener("blur", () => {
    // console.log("blur the email")
    let regemail = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let stremail = email.value;
    if (regemail.test(stremail)) {
        console.log("they email are matched");
        email.classList.remove('is-invalid')
        validemail = true;
    } else {
        console.log("they email are not matched");
        email.classList.add('is-invalid')
        validemail = false;
    }
    // console.log(regemail, stremail);
})

const number = document.getElementById('phone');
phone.addEventListener("blur", () => {
    console.log("blur the number")
    let regnum = /^([0-9]){10}$/;
    let strnum = number.value;
    if (regnum.test(strnum)) {
        console.log("they are matched number");
        number.classList.remove('is-invalid');
        validnumber = true;
    } else {
        console.log("they are not matched number");
        number.classList.add('is-invalid');
        validnumber = false;
    }
    // console.log(regnum, strnum);
})

// button
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("they are clicked event are call");
    if (validname && validemail && validnumber) {
        console.log("they data are correct submit the form");
        let success = document.getElementById("success");
        success.classList.add('show');
        // success.classList.remove('failure')
        $('#failure').hide();
        $('#success').show();
        success.innerHTML.innertext = ` <div id="success" class="alert alert-success alert-dismissible fade " role="alert">
        <strong>hello!your form are submitted</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    } else {
        console.log("they data are not correct fill the all details of the form they form are submit")
        let failure = document.getElementById("failure");
        failure.classList.add('show')
        // failure.classList.remove('success')
        $('#success').hide();
        $('#failure').show();
        failure.innerHTML.innertext = `<div  id="failure" class="alert alert-danger alert-dismissible fade" role="alert">
        <strong>Holy guacamole! You should check in on some of those fields below</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
    }

})