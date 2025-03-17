export function deposite (amount){
    return {type:'deposite',payload:amount};
}
export function withdraw (amount){
    return {type:'withdraw',payload:amount}
}
export function updateName (fullName){
    return {type:'updateName',payload:fullName}
}
export function updateNumber (mobile){
    return {type:'updateNumber',payload:mobile}
}

export function reset (){
    return {type:'reset'}
}