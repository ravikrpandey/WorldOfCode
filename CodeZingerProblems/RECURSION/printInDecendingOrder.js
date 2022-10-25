// reverse a number in decending order

function revRecInDecOrder(num) {
  if (num <= 0) return;

  console.log(num);

  revRecInDecOrder(num - 1);

  
}

revRecInDecOrder(10);


// reverse a number in accending order


// function revRecInDecOrder(num) {
//     if (num <= 0) return;
  
  
//     revRecInDecOrder(num - 1);

//     console.log(num);
  
    
//   }
  
//   revRecInDecOrder(10);
