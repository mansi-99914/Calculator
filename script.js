let result = "";
        let button = document.querySelectorAll(".btn");
        Array.from(button).forEach((key) => {
            key.addEventListener("click", (e) => {
                if (e.target.innerHTML == "=") {
                    result = eval(result);
                    document.getElementById('number').value = result;
                } else if (e.target.innerHTML == "AC") {
                    result = "";
                    document.getElementById('number').value = result;
                } else {
                    result = result + e.target.innerHTML;
                    document.getElementById('number').value = result;
                }
            })
        })
