function letterfreq(letter){
    let result = {};
    for(let i=0; i <letter.length;i++){

        if(letter[i]){
           result[letter[i]]=result[letter[i]]+1
            
        }else{
            result[letter[i]]=1
        }

    } 
}
console.log(letterfreq("kallee")) 