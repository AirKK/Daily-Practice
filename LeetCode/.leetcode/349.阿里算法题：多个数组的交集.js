// 阿里算法题：编写一个函数计算多个数组的交集
var intersection = function (...arrs){
    arrs = arrs.reduce((pre,cur)=>{
        let result =[]
      for (let val of cur){
          if (pre.includes(val)){
            result.push(val)
          }
      } 
      return Array.from(new Set(result))  
    },)
    return arrs
}

intersection([1,2,3],[2,4,6,3],[2,2,3,5])