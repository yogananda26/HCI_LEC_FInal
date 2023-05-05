const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputRadioMale")
const inputGenderFemale = document.getElementById("inputRadioFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")
buttonSubmit.addEventListener("click", (event)=>{
    event.preventDefault(); 

    var error_text = "";

    console.log("yes mommy");
    const text  = inputText.value;
    if(text == ""){ 
        console.log("name harus di isi");
        error_text += "nama harus di isi<br>";
    }


    const password = inputPassword.value;
    if(password.length < 8){ 
        console.log("password minimal 8 char");
        error_text += "password minimal 8 char<br>";
    }

    
    const number = inputNumber.value
    if(number < 17) {
        error_text += "masih di bawah 17 tahun<br>"
    }

    const email = inputEmail.value
    if(!email.includes("@gmail.com")){ 
        error_text += "akun harus ada @gmail.com<br>";
    }
    
    const gender_male = inputGenderMale.checked
    const gender_female = inputGenderFemale.checked

    if(!gender_male && !gender_female){ 
        error_text += "gender harus di pilih"
    }
    if(error_text == "") {
        alert("berhasil registrasi");
    }
    divError.innerHTML = error_text; 
}); 


const obj ={
    nama : "uwu",
    umur : 20
}

obj.alamat = "jakarta"

async function f(){ 
    //ambil data dari API yang ad di internet
    const fetch_result = await fetch("https://api.genshin.dev/")
    console.log(fetch_result)

    const text = await fetch_result.text()
    console.log(text)

    //ubah textnya jadi variable
    const obj = await JSON.parse(text)
    console.log(obj)

    obj.types.forEach(element => {
        asynchronous.innerHTML += `<div>`(element)`</div>`
    });
}
f()
