let plus = document.querySelector(".plus"),
    num = document.querySelector(".num"),
    minus = document.querySelector(".minus");

    let cont = 1;

    plus.addEventListener("click", ()=> {
       cont++
       cont = (cont < 10) ? "0" + cont : cont;
       num.innerHTML = cont
     });

    minus.addEventListener("click", ()=> {
        cont--
        cont = (cont < 10) ? "0" + cont : cont;
        num.innerHTML = cont
      });