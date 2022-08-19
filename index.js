// Code your solutions in this file
const eventsArray = [];
///comments
function writeCards(names, eventName){

    for (let i = 0; i < names.length; i++) {
       
        eventsArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        
            }
    return eventsArray;


}


///countdown function
function countDown (){

let count=10;
    
    while (count >= 0) {
        // console.log(`The countdown is @ ${count}`);

        console.log(count)
        count--;
        
      }
    //   countDown(10)
      
   

}
