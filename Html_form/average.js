document.getElementById("submit").onclick = function(){
    var number1 = document.querySelector('input[name="q1"]:checked').value;
    var number2 = document.querySelector('input[name="q2"]:checked').value;
    var number3 = document.querySelector('input[name="q3"]:checked').value;
    let res = 0;
    res = ((number1*1 + number2*1 + number3*1)/3);
    res= res.toFixed(2);
    console.log(number1, number2, number3, res);
    if(res < 2.50)
    {
        document.getElementById("result").value = res;
        document.getElementById("result").style.color = "red";
    }
    else
    {
        document.getElementById("result").value = res;
        document.getElementById("result").style.color = "green";
    }
}