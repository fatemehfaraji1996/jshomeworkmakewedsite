
const divElegetApi = document.querySelector(".getApi1");
async function getResturantDiscreptoStringn() {
  try {
    const respons1 = await fetch("http://localhost:3000/BestResturant");
    const data = await respons1.json();
    console.log(data);
    data.forEach((element) => {
      const section = document.createElement("section");
      divElegetApi.append(section);
      const nameResturant = document.createElement("p");
      section.append(nameResturant);
      nameResturant.textContent = element.name;
      nameResturant.style.fontSize = "40px";
      nameResturant.style.fontWeight = "600";
      nameResturant.style.color = "gray";
      nameResturant.style.margin="30px"
    
      // end crate p for name resturan
      const divimge = document.createElement("div");
      divimge.innerHTML=`
      <source srcset="..." type="image/svg+xml">
      <img src=${element.picther} class="img-fluid img" alt="...">
      `

      section.append(divimge);
      //end create image for resturant
      const discriptionp = document.createElement("p");
      section.append(discriptionp);
      discriptionp.textContent = element.discriptions;
    //   discriptionp.style.padding = "30px";
      discriptionp.style.margin="30px"

      
    });
  } catch (error) {
    console.log(error);
  }
}
getResturantDiscreptoStringn();
////////////////////////////////////////////////
// stsrt handel hamberger menu
const menu = document.querySelector('.hamberger')
console.log(menu);
menu.addEventListener('click',(e)=>{
  // menu.style.backgrandColor = "red"
  console.log("oo");
})