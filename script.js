let inicio = document.getElementById("inicio");
let fim = document.getElementById("fim");
let passo = document.getElementById("passo");

let mensagem = document.getElementById("msg");
let texto = ""


function contarPassos()
{

    if(inicio.value == "" || inicio.value == null)
    {
        texto = "Impossível contar, verifique o campo: início!";
    }
    else  if(fim.value == "" || fim.value == null)
    {
        texto = "Impossível contar, verifique o campo: início!";
    }
    else if(passo.value == "" || passo.value == null || passo.value <= 0)
    {
        texto = "Passo inválido, considerando passo 1!";
        passo.value = 1;
    }
    else
    {
        texto = "Contando: <br>";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(i < f)
        {
            for(i; i <= f; i += p)
            {
                texto += `${i} \u{1F449} `;
            }
        }
        else
        {
            for(i; i >= f; i -= p)
            {
                texto += `${i} \u{1F449} `;
            }
        }
        texto += `\u{1F3C1} `;

    }

    mensagem.innerHTML = texto;
}
    



