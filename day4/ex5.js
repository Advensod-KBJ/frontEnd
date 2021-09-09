let start;
let end;

function startNo() {
    start = prompt('시작위치');
    console.log(start);
}
function endNo() {
    end = prompt('끝나는 위치');
    console.log(end);
}

function strMethod() {
    let input = prompt('문자열을 입력하세요');
    console.log(start);
    console.log(end);
    document.getElementById("start").innerHTML = start;
    document.getElementById("end").innerHTML = end;
    document.getElementById("len").innerHTML = input.length;
    document.getElementById("last").innerHTML = input.lastIndexOf("am");
    document.getElementById("subs").innerHTML = input.substring(start, end);
    document.getElementById("slice").innerHTML = input.substring(end);
}
