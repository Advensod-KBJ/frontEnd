let start;
      let end;

      function startNo() {
        start = prompt("시작인덱스");
      }
      function endNo() {
        end = prompt("시작인덱스");
      }
      function strMethod() {
        let input = prompt("문자열을 입력하세요");
        document.getElementById("start").innerHTML = start;
        document.getElementById("end").innerHTML = end;
        document.getElementById("len").innerHTML = input.length;
        document.getElementById("last").innerHTML = input.lastIndexOf("am");
        document.getElementById("subs").innerHTML = input.substring(start, end);
        document.getElementById("slice").innerHTML = input.slice(end);
      }