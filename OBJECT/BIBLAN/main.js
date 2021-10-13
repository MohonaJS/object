
    /* let book = {
        title:"pipi",
        author:"gustaf",
        numPage:200
    } */

    let manyBooks = [
        {
        title:"cipi",
        author:"gustaf",
        numPage:300,
        },
        {
        title:"pipi",
        author:"kalle",
        numPage:200,
        },
        {
        title:"ddkj",
        author:"olof",
        numPage:287,
        },
    ];


function biblan1(bok,title){
    let result;
    for(let i = 0; i<bok.length; i++){
        if(bok[i].title==title){
            return (result = bok[i].title);

        }else{
           result = null;
        }
    }
    return result;
}
console.log(biblan1(manyBooks,"pipi"));