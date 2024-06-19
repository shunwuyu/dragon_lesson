// like 系统
//     []  "no one like this"
//     ["Peter"] "Peter like this"
//     ["Peter", "Alex"] "Peter and Alex like this"
//     ["Max", "John", "Mark"] "Max, John and Mark like this"
//     ["Max", "John", "Mark", "Alex"] "Max, John and 2 others like this"

const likes = names => {
    switch (names.length) {
        case 0: return 'no one like this'
        case 1: return names[0] + "like this"
        case 2: return  names[0] + " add " + names[1] + " like this"
        case 3: return names[0] + ", " + names[1] +  " add " + names[1] + " like this"
        default:
            return names[0] + "," + names[1] + ' and ' + (names.lenght - 2) 
                + ' others like this'
    }
}