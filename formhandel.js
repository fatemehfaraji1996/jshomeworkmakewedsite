import{Authentication}from'./utils/auth.js'
// start handel singup-singin///////////////////////////////////

const formEle = document.querySelector('#form')
console.log(formEle);
const massageEle = document.querySelector('.massage')
formEle.addEventListener('submit',async(e)=>{
e.preventDefault()
const firstName = e.target.validationDefault01
const lastName =e.target.validationDefault02
const email = e.target.email
const password = e.target.password
console.log(firstName,lastName,email,password);

try {

    const user = new Authentication(
        firstName.value.trim(),
        lastName.value.trim(),
        email.value.trim(),
        password.value.trim()
        )
        user.verifyData();
     const respons =   await user.singeup()
     console.log(respons);
if(respons.statuseCode ===409){
    massageEle.textContent ='the email is already exists'
}

} catch (error) {
    console.log(error);
}

})
// end handel singup-singin
