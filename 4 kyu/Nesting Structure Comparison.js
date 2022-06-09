// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(elem, i){
      return Array.isArray(elem) ? elem.sameStructureAs(other[i]) : true;
    }) : false;
};

// Array.prototype.sameStructureAs = function (other) {
//   if(this.length !== other.length) return false
//   for(let i = 0; i < this.length; i++) {
//     if(isArray(this[i]) && isArray(other[i]) && !this[i].sameStructureAs(other[i])) return false
//     if(!isArray(this[i]) && isArray(other[i]) || isArray(this[i]) && !isArray(other[i]))return false
//   }
//   return true
// };