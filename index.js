
//Recebe um número aleatório 

const URL = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
let numeroEscolhido

await axios.get(URL)
.then(  res => {
    numeroEscolhido = res.data.value    
    console.log(numeroEscolhido)                // Deixaremos a resposta no console.log para facilitar testes
    window.numeroCerto = numeroEscolhido        // Joga o valor pro escopo global em numeroCerto
})
.catch( erro => {
    const erroReq = erro.response.status

    const centena = Math.floor(         Number(erroReq) /   100                       ) 
    const dezena =  Math.floor(     (   Number(erroReq) - centena   *   100)  / 10       )
    const unidade = Math.floor(     (   Number(erroReq) - centena   *   100     -   dezena    *   10) ) 
    

    const mensagemTexto = `
    <spam>
        <p id="texto-tela-erro"> ERRO</p> 
    </spam>
    `  
    const mensagemNumero = `
    <spam>
    <img  src=\"img/${centena}_vermelho.png\" />
    <img  src=\"img/${dezena}_vermelho.png\" />
    <img  src=\"img/${unidade}_vermelho.png\" />
    </spam>
    `

    document.querySelector('#alinha').innerHTML = mensagemTexto;
    document.querySelector('#numeroplaceholder').innerHTML = mensagemNumero;

})







