function Promises(){
    return new Promise((resolve, reject) => {
        if(resolve){
            resolve("Promise resolved");
        }
        reject("Rejected");
    })
}

module.exports = Promises;