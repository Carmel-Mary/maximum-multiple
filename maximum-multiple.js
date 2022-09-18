//Task
//Given a Divisor and a Bound , Find the largest integer N , Such That ,

//Conditions :
//N is divisible by divisor

//N is less than or equal to bound

//N is greater than 0.

//SOLUTION 1
const maxMultiple = (divisor,bound) => bound - bound % divisor ;


//SOLUTION 2
function maxMultiple(divisor, bound){
    let arr = [];
      for (let i = divisor; i <= bound; i++) {
          if (i % divisor == 0) {
              arr.push(i)
          }
      }
      return Math.max(...arr);
  }

