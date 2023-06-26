const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {"name":"Sergey","salary":2500},
    {"name":"Dan","salary":100}];


    function getWorthyWorkers(list){
        let result = [];
        for(let i = 0; i<list.length; i++){
            if(list[i].salary > 1000){
                result.push(list[i].name);
            }
        }
        return result;
    } 
  console.log(getWorthyWorkers(workers))