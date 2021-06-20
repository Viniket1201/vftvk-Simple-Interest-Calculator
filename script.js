function interestInput(val) {
    document.getElementById('textInput').value=val + "%"; 
  }
 
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById('textInput').value;
    var n = document.querySelector(".year").value;

  
    let interest = (parseFloat(p)*parseFloat(r)*parseInt(n))/100;
    // alert(interest);
    let answer = document.querySelector(".answer");
    let year = 2020 + parseInt(n)
    answer.innerHTML = `<p>If you deposit <span style="background-color: yellow;">${p}.</span></p><p> at an interest rate of <span style="background-color: yellow;">${r}.</span></p><p> You will receive an amount of <span style="background-color: yellow;">${interest}.</span></p><p>in the year <span style="background-color: yellow;">${year}.</span></p> `
}

        