import React from 'react'

function Promises() {

    const returnPromise = async () => {
        let x = 0
        let result = await new Promise((resolve, reject) => {
            if(x == 1) resolve('Successfull')
            else reject('Failure')
        })

        return result
    }
    
    returnPromise().then(res => {
        console.log('promise passed: ', res)
    }).catch(err => console.log('promise failed: ', err))


    function multiplyBy2(num, cb) {
      setTimeout(() => {
        cb(undefined, num * 2);
      }, 500);
    }
    
    function multiply(num) {
      multiplyBy2(num, (err, res2) => {
        if(!err) {
          multiplyBy2(res2, (err, res3) => {
            if(!err) {
              multiplyBy2(res3, (err, res4) => {
                if(!err) {
                  multiplyBy2(res4, (err, res5) => {
                    if(!err) {
                      console.log('data from callback', res5)
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
     
    multiply(5)
    
    function multiplyByTwo(num) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(num*2)
          }, 500)
      })
    }
    
    function promiseExample(num) {
      multiplyByTwo(num).then(data => {
          multiplyByTwo(data).then(data => {
              multiplyByTwo(data).then(data => {
                  multiplyByTwo(data).then(data => {
                      multiplyByTwo(data).then(data => {
                          console.log('data from .then', data)
                      })
                  })
              })
              })
          })
    }
    
    promiseExample(5) 
    
    async function promiseWithAsync(num) {
      let data = await multiplyByTwo(num)
      data = await multiplyByTwo(data)
      data = await multiplyByTwo(data)
      data = await multiplyByTwo(data)
      data = await multiplyByTwo(data)
      console.log('data from async function ', data)
    }
    promiseWithAsync(5) 
    
  return (
    <div>Promise</div>
  )
}

export default Promises