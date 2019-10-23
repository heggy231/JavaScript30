var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j];
      }
    }
  }
}
//https://leetcode.com/problems/two-sum/
// https://www.youtube.com/watch?v=XvBXi2tR9_0


// https://leetcode.com/problems/to-lower-case/

var toLowerCase = function(str) {
  return str.toLowerCase();
}

/**
 * https://leetcode.com/problems/to-lower-case/discuss/185447/Java-Solution-Without-Using-.toLowerCase()
https://leetcode.com/problems/to-lower-case/discuss/410721/Javascript-Solution
 */

//in ASCII, a capital letter and its lowercase is offset by 32. 
//adding 32 to the character value will make it lowercase
//A-Z has ASCII values of 65-90
var toLowerCase = function(str) {
  let res = '';
  
  str.split('').forEach( (s, index) => {
     let code = str.charCodeAt(index);
      
      if (code >= 65 && code < 97 ) {
          code += 32;
      }
      
      res += String.fromCharCode(code);
  });
  
  return res;
};