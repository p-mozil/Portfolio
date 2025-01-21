let radio = document.querySelectorAll("input[type=radio]");

for (var i = 0; i < radio.length; i++) {
  radio[i].onclick = function () {
    if (document.querySelector("#Choice2").checked) {
      document.querySelector(".esc-lip").style.display = "block";
    } else {
      document.querySelector(".esc-lip").style.display = "none";
      document.querySelectorAll(".esc-lip input").forEach((e) => {
        e.checked = false;
      });
    }

    if (document.querySelector("#Choice3").checked) {
      document.querySelector(".form_error").style.display = "block";
    } else {
      document.querySelector(".form_error").style.display = "none";
    }
    if (document.querySelector("#Choice5").checked) {
      document.querySelector(".form_error1").style.display = "block";
    } else {
      document.querySelector(".form_error1").style.display = "none";
    }
    if (document.querySelector("#Choice7").checked) {
      document.querySelector(".form_error2").style.display = "block";
    } else {
      document.querySelector(".form_error2").style.display = "none";
    }
    if (document.querySelector("#Choice13").checked) {
      document.querySelector(".form_error3").style.display = "block";
    } else {
      document.querySelector(".form_error3").style.display = "none";
    }
    if (document.querySelector("#Choice25").checked) {
      document.querySelector(".form_error4").style.display = "block";
    } else {
      document.querySelector(".form_error4").style.display = "none";
    }
    if (document.querySelector("#Choice26").checked) {
      document.querySelector(".form_error5").style.display = "block";
    } else {
      document.querySelector(".form_error5").style.display = "none";
    }
    if (document.querySelector("#Choice29").checked) {
      document.querySelector(".form_error6").style.display = "block";
    } else {
      document.querySelector(".form_error6").style.display = "none";
    }
    if (document.querySelector("#Choice31").checked) {
      document.querySelector(".form_error7").style.display = "block";
    } else {
      document.querySelector(".form_error7").style.display = "none";
    }
    if (document.querySelector("#Choice9").checked) {
      document.querySelector(".userText").style.display = "block";
    } else {
      document.querySelector(".userText").style.display = "none"; 
    }
    if (document.querySelector("#Choice11").checked) {
      document.querySelector(".userText1").style.display = "block";
    } else {
      document.querySelector(".userText1").style.display = "none";
    }
    if (document.querySelector("#Choice15").checked) {
      document.querySelector(".userText2").style.display = "block"; 
    } else {
      document.querySelector(".userText2").style.display = "none";
    }
    if (document.querySelector("#Choice17").checked) {
      document.querySelector(".multiple").style.display = "block";
    } else {
      document.querySelector(".multiple").style.display = "none";
      document.querySelectorAll(".multiple input").forEach((e) => {
        e.checked = false;
      });
    }
  };
}

document.querySelector("#accept_all_btn").onclick = function () {
  document.querySelector("#Choice32").checked = true;
  document.querySelector("#Choice33").checked = true;
  document.querySelector("#Choice34").checked = true;
};

function validateFields() {
  document.querySelector(
    "#single_product_form > div.errorContainer"
  ).innerHTML = "";
  let errors = [];
  if (
    !(
      document.querySelector("#Choice1").checked ||
      document.querySelector("#Choice2").checked
    )
  ) {
    errors.push("Który preparat antykoncepcji awaryjnej chciałabyś uzyskać?");
  }
if(document.querySelector("#Choice2").checked){
    if (
        !(
          document.querySelector("#Choice35").checked ||
          document.querySelector("#Choice36").checked ||
          document.querySelector("#Choice37").checked
        )
      ) {
        errors.push("Czy preferujesz któryś ze specyfików?");
      }
}

  if (
    !(
      document.querySelector("#Choice3").checked ||
      document.querySelector("#Choice4").checked
    )
  ) {
    errors.push("Czy wykonałaś dzisiaj test ciążowy?");
  }
  if (
    !(
      document.querySelector("#Choice5").checked ||
      document.querySelector("#Choice6").checked
    )
  ) {
    errors.push("Czy jesteś w ciąży?");
  }
  if (
    !(
      document.querySelector("#Choice7").checked ||
      document.querySelector("#Choice8").checked
    )
  ) {
    errors.push("Czy chorujesz na jakieś choroby przewlekłe?");
  }
  if (
    !(
      document.querySelector("#Choice9").checked ||
      document.querySelector("#Choice10").checked
    )
  ) {
    errors.push("Czy chorujesz na jakieś choroby przewlekłe?");
  }
  if(document.querySelector("#Choice9").checked){
    if(document.querySelector(".userText textarea").value == '')
       {
        errors.push("Na jakie choroby przewlekłe chorujesz?");
      }
  }
  if (
    !(
      document.querySelector("#Choice11").checked ||
      document.querySelector("#Choice12").checked
    )
  ) {
    errors.push("Czy przyjmujesz jakieś inne leki?");
  }
  if(document.querySelector("#Choice11").checked){
    if(document.querySelector(".userText1 textarea").value == '')
       {
        errors.push("Jakie inne leki przyjmujesz?");
      }
  }
  if (
    !(
      document.querySelector("#Choice13").checked ||
      document.querySelector("#Choice14").checked
    )
  ) {
    errors.push("Czy w ostatnim czasie pojawiły się u Ciebie jakieś nowe, niepokojące objawy, których nie konsultowałaś/eś z lekarzem?");
  }
  if (
    !(
      document.querySelector("#Choice15").checked ||
      document.querySelector("#Choice16").checked
    )
  ) {
    errors.push("Czy po przyjęciu tych bądź innych leków pojawiły się u Ciebie jakieś niepokojące objawy (np. alergia)?");
  }
  if(document.querySelector("#Choice15").checked){
    if(document.querySelector(".userText2 textarea").value == '')
       {
        errors.push("Wymień proszę te leki i opisz, jakie działania niepożądane się po ich zastosowaniu pojawiły.");
      }
  }
  if (
    !(
      document.querySelector("#Choice17").checked ||
      document.querySelector("#Choice18").checked
    )
  ) {
    errors.push("Czy przyjmowałaś w tym cyklu miesięcznym inną antykoncepcję awaryjną?");
  }
  if(document.querySelector("#Choice17").checked){
    if (
        !(
          document.querySelector("#Choice19").checked ||
          document.querySelector("#Choice20").checked ||
          document.querySelector("#Choice21").checked ||
          document.querySelector("#Choice22").checked ||
          document.querySelector("#Choice23").checked 
        )
      ) {
        errors.push("Z jakiego powodu chcesz ponownie uzyskać receptę na antykoncepcję awaryjną?");
      }
  }
  if (
    !(
      document.querySelector("#Choice24").checked ||
      document.querySelector("#Choice25").checked
    )
  ) {
    errors.push("Oświadczam, że znam i rozumiem możliwe działania niepożądane, przeciwwskazania, interakcje, ograniczenia i środki ostrożności związane ze stosowaniem leku, w tym te zawarte w ulotce lub Charakterystyce Produktu Leczniczego danego leku.");
  }
  if (
    !(
      document.querySelector("#Choice26").checked ||
      document.querySelector("#Choice27").checked
    )
  ) {
    errors.push("Czy chorujesz na którąś z wymienionych jednostek chorobowych, tj.: ciężką astmę oskrzelową, ciężkie zaburzenia czynności wątroby, zespół złego wchłaniania (zespół złego wchłaniania glukozy-galaktozy lub np. w przebiegu ch. Leśniowskiego-Crohna), dziedziczną nietolerancją galaktozy, całkowity niedobór laktazy, nadwrażliwość na substancję czynną lub jakąkolwiek substancję pomocniczą zawartą w preparacie.");
  }
  if (
    !(
      document.querySelector("#Choice28").checked ||
      document.querySelector("#Choice29").checked
    )
  ) {
    errors.push("Potwierdzam, że jestem świadoma możliwych powikłań zakrzepowo-zatorowych związanych ze stosowaniem antykoncepcji hormonalnej i związanych z nimi powikłań neurologicznych, pulmonologicznych i kardiologicznych.");
  }
  if (
    !(
      document.querySelector("#Choice30").checked ||
      document.querySelector("#Choice31").checked
    )
  ) {
    errors.push("Potwierdzam, że jestem świadoma, że żadna antykoncepcja hormonalna nie jest w 100% skuteczna.");
  }

  if (
    !(
      document.querySelector("#Choice32").checked ||
      document.querySelector("#Choice33").checked
    )
  ) {
    errors.push("Zaznacz wymagane zgody");
  }
  

  document.querySelector(".errorContainer");
  for (var i = 0; i < errors.length; i++) {
    let p = document.createElement("p");
    if (i == 0) {
      let title = document.createElement("p");
      title.className = "errorTitle";
      if (errors.length > 1) {
        title.innerHTML = "Nie udzelono odpowiedzi na pytania:";
      } else {
        title.innerHTML = "Nie udzelono odpowiedzi na pytanie:";
      }
      document.querySelector(".errorContainer").appendChild(title);
    }
    p.innerHTML = `<p>-${errors[i]}</p>`;
    document.querySelector(".errorContainer").appendChild(p);
  }

  if (errors.length == "0") {
    document.querySelector(
      "#single_product_form > div.errorContainer"
    ).innerHTML = "";
    document.querySelector(".errorContainer").style.display = "none";

    return true;
  } else return false;
}
document.querySelector("#form_add_to_cart_btn").onclick = function (e) {
  if (!validateFields()) {
    document.querySelector(".errorContainer").style.display = "block";
    e.preventDefault();
    window.scrollTo(0, 0);
  }
};

let dlangBtn = document.querySelector(".desktop_header .language");
let dpopUp = document.querySelector(".desktop_header .popUpLanguage");
let dpl = document.querySelector(".desktop_header .popUpLanguage .pl");
let dru = document.querySelector(".desktop_header .popUpLanguage .ru");
let svg = document.querySelector("svg");
let mlangBtn = document.querySelector(".mobile_header .language");
let mpopUp = document.querySelector(".mobile_header .popUpLanguage");
let mpl = document.querySelector(".mobile_header .popUpLanguage .pl");
let mru = document.querySelector(".mobile_header .popUpLanguage .ru");
let menuLinks = document.querySelector(".mobile_header .menuLinks");


dlangBtn.onclick = function(){
    dpl.style.display = "block";
    dru.style.display = "block";
    dpopUp.classList.add("show");
}

mlangBtn.onclick = function(){
  mpl.style.display = "block";
  mru.style.display = "block";
  mpopUp.classList.add("show");
}


document.querySelector("body").onclick = function(e){
    if(e.target != dlangBtn){
        dpopUp.classList.remove("show");
        dpl.style.display = "none";
        dru.style.display = "none";
    }
    if(e.target != mlangBtn){
      mpopUp.classList.remove("show");
      mpl.style.display = "none";
      mru.style.display = "none";
  }
  
    
}

svg.onclick = function(){
    document.querySelector("#top-line").classList.toggle("active");
    document.querySelector("#middle-line").classList.toggle("active");
    document.querySelector("#bottom-line").classList.toggle("active");
    menuLinks.classList.toggle("activeLinks");
    
    
}












