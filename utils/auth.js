class Authentication {
    constructor(firstName,lastName,email,password){
           this.firstName= firstName
           this.lastName=lastName
           this.email=email
           this.password=password
    }
    verifyData(){
        if (!this.email.endsWith("@gmail.com")) {
            throw new Error('your email is not valid')
        }
     
      }
    async singeup(){
        try {
            
            const getUser = await fetch(`http://localhost:3000/user?email=${this.email}`)
            const user = await getUser.json()
            if(user.lengh !== 0 ){
                return {statuseCode:409,massage:'the email is alredey exixts',data:''}

            }
            const createUser = await fetch('http://localhost:3000/porodact',{
                method:'POST',
                body:JSON.stringify({
                    firstName:this.firstName,
                     lastName:this.lastName,
                     email: this.email,
                    password: this.password
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            const data = await createUser.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }

    }
            

}
export{Authentication}