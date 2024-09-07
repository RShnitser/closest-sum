export function closest(nums: number[], target: number): number {
  
   let result = nums[0] + nums[1] + nums[2];
   let diff = Math.abs(target - result);

   for(let i = 0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
         for(let k = j+1; k < nums.length; k++){
      
            const currentSum = nums[i] + nums[j] + nums[k];
            const currentDiff = Math.abs(target - currentSum);
            
            if(currentDiff < diff){
               result = currentSum;
               diff = currentDiff;
            }
         }
      }
   }
 
   return result;
}

module.exports = { closest }
