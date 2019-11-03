//Get the appropriate Html elements
var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");
var result = document.querySelector("#result");
var submit = document.getElementsByTagName("button")[0];
var refresh = document.querySelectorAll("button")[1];


//Submit entries for the calculation
submit.addEventListener("click", function(){
   var lcmResult =  lcmOfTwoNums(firstNum.value, secondNum.value);
   result.value = lcmResult;
})
//Refresh the calculator
refresh.addEventListener("click", function(){
    firstNum.value = null;
    secondNum.value = null;
    result.value = null;
 })

//Declaring but not calling the function that calculates the LCM OF TWO Numbers
function lcmOfTwoNums(num1, num2){
    var accumulatedDivisors = [1]; //all the divisors will be stored here
    var a = 0; //this is how we access the individual divisors
    var result = 1;//this is the result that will be returned at the end of the calculation
    if(num1 == 0 || num2 == 0){
        result = 0;
    }
    //select the larger number
    var num3;
    function largerNum(){
        if(num1 > num2){
            num3 = num1;
        }else{
            num3 = num2;
        }
    }
    largerNum();

    //look for the lowest number that can evenly divide any of the two dividends
    for(var i = 2; i <= num3; i++){
        while(num1 % i === 0 || num2 % i === 0){
            accumulatedDivisors.push(i);
            if(num1 % i === 0){
                num1/=i;
            }
            if(num2 % i === 0){
            num2/=i;  
            }
            //select the larger number at each point in the loop. 
            largerNum();
        }    
    }

    //multiply all the accumulated divisors
    while(a < accumulatedDivisors.length){
    result *=accumulatedDivisors[a]; 
    a++;
    }

    return result;  
}
