export function random(a,b) { 
    return a+Math.random()*(b-a); 
}

export function randomInt(a,b) { 
    return Math.floor(random(a,b)); 
}

export function sample(array) { 
    return array[randomInt(0,array.length)]; 
}

