function likes (names) {
    // /\w \d/
    var templates = [
        'no one like this',
        '{name} like this',
        '{name} and {name} like this',
        '{name} , {name} and {name} like this',
        '{name}, {name} and other {n} like this'
    ]

    var idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function(val) {
        console.log(val, '-------------')
        return val === '{name}'?names.shift():names.length
    })
}

console.log(likes(['龙哥', '发哥', '涛哥', '辉哥', '代王']))