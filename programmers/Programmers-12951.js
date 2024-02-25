
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function Programmers12951(s) {
    return s.split(' ')
        .map(str => capitalize(str))
        .join(' ');
}

console.log(Programmers12951("3people unFollowed me"))
console.log(Programmers12951('for the last week'))