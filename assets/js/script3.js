
const ingresar = document.querySelector("#ingresar");

ingresar.addEventListener("click", function () {

    const digito1 = document.querySelector("#digito1").value;

    const digito2 = document.querySelector("#digito2").value;

    const digito3 = document.querySelector("#digito3").value;

    const password = digito1 + digito2 + digito3;

    const resultado = document.querySelector("#resultadoPassword");

    if (password === "911") {

        resultado.innerHTML = "Password 1 correcto";

    } else if (password === "714") {

        resultado.innerHTML = "Password 2 correcto";

    } else {

        resultado.innerHTML = "Password incorrecto";

    }

});

