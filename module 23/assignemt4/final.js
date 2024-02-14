  // -----------------------------assigment 4-------------------
  // qus-1
function calculateMoney(ticketSale) {
let ticketPrice=120;
let secutityFee=500;
let stuffLunch=50;
let stuff = 8;
let totalCost=(ticketPrice*ticketSale)-(secutityFee+(stuffLunch*stuff));
if(ticketSale<=0){
    return "please input positive number";
} 
return totalCost;
}
  //  console.log(calculateMoney(10));




// qus-2
 function checkName(name) {
    if (typeof name !== "string") {
      return "invalid input";
    }
    const lastWord = name[name.length - 1];
    const checkingWords = ['a', 'y', 'i', 'e', 'o', 'w', 'u']
    
    if (checkingWords.indexOf(lastWord.toLowerCase()) !== -1) { 
      return "Good Name";
    }
    else {
      return "Bad Name"
    }
  }
  console.log(checkName("Salman"));
  console.log(checkName("RAFEE"));
  console.log(checkName("Jhankar"));
  console.log(checkName(199));
  console.log(checkName(["Rashed"]));


// qus-3
 function deleteInvalids(array) {
    if(Array.isArray(array) ) {  
        return array.filter(item => typeof item === 'number' && !isNaN(item))
    }
    else{
        return "input must be array"
    }
 } 

 // console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));




 
//qus-4
 function password(obj) {
    let birthYearStr = obj.birthYear.toString();
    if(birthYearStr.length < 4 || !obj.name || !obj.birthYear || !obj.siteName){
return "invalid"
    }
    else{
        let password=obj.siteName
        password= password.charAt(0).toUpperCase()+ password.slice(1);
        
            let paGmail=password+"#"+obj.name+"@"+obj.birthYear
            return paGmail
    } 
}

    // console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" } ));




//qus-5
 function monthlySavings(arr , livingCost) {
if(!Array.isArray(arr)){
    return "invalid input"
}
else if(typeof livingCost !=="number"){
return "invalid input"
}
 let totalIncome=0;
 for( let item of arr){
    if(item>=3000){
        totalIncome=totalIncome+(item-(20/100)*item)
    }
    else{
        totalIncome=totalIncome+item;
    }
 }
 let  TotalSavings = totalIncome-livingCost;
 if( TotalSavings <0){
    return "earn more"
 }
 else{
    return  TotalSavings 
 }
 }
  // console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400) );
  
