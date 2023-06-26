const mixedArray = [3,13,74,14,66,15,22,4];
      const isEven = num => { 
        return num % 2 == 0;
       };
       const filterArray = array =>{
        let result = [];
        for (let i = 0; i<array.length; i++){
            if (isEven(array[i])){
                result.push(array[i]);
            }
        }
        return result;
       }
      console.log(filterArray(mixedArray, isEven));