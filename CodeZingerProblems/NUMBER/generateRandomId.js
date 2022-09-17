// How to generate random id-->

// function generateId() {
       
//     return Math.random().toString(36).substring(2) +
//       (new Date()).getTime().toString(36);
//   }
  
//   console.log(generateId());

//===========================Or======================

function uniqueID() {
  return Math.floor(Math.random() * Date.now())
  }
  console.log(uniqueID());