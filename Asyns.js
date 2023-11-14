function AsyncFetch(){
    return new Promise((resolve, reject) => {
        resolve("Resolved promises")
    })
}

module.exports= AsyncFetch;