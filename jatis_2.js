// const deret = (startNum, limit) => {
//     let arr = []
//     for (let i = 0; i < limit; i++) {
//       arr.push(i === 0 ? startNum : arr[i - 1] + 3)
//     }
//     return arr
//   }
  
//   console.log(deret(2, 10))

function loop(awal) {

    while(true) {
        console.log(awal);
        awal += 3
    }

}

loop(3)