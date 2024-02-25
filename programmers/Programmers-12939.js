function Programmers12939(s) {
    //min, max는 문자열도 적용된다.
    const numbers = s.split(' ');
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return `${min} ${max}`;
}

console.log(Programmers12939('1 2 3 4'))