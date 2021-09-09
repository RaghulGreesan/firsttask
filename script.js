var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
   var data= JSON.parse(request.response);
   let curren = data.filter((element)=>{
      for (let i in element.currencies){
         if (element.currencies[i].code==="USD"){
            return true;
         }

      }
   });
   console.log(curren);
  // console.log(data);
   //data.forEach((element)=>{console.log(`${element.name}${element.capital}${element.flag}`)});

   
   //var cont = data.filter((ele)=>ele.population < 200000).map((ele)=>ele.name);

  //var pop = data.reduce((acc,ele)=>acc+ele.population,0);
  //console.log(pop);
}
/*
   var result = data.reduce((acc,ele)=>{
return acc+ele.population       

   },0);
   console.log(result);
}
   
   for(var i in data){
       let pop= data[i].population.reduce(function(accu,current){
           return accu+current;
       });

   }
   console.log(pop);

}
//   console.log(data);
/
/*
var  request= new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET','https://restcountries.eu/rest/v2/all',true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
}
*/