function countryCode(user, code){
    let result = [];
    for(let i = 0; i<user.length; i++){
        if(user[i].nat== code){
            result.push(user[i])

        }

    }
    return result;
}
console.log(countryCode(users,"FR"));