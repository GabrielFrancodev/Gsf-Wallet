const html = document.querySelector('html');
const botoes = document.querySelectorAll('.button__setor');
const btAcoes = document.querySelector('.button__acoes');
const btFii = document.querySelector('.button__fii');
const btRendaFixa = document.querySelector('.button__renda__fixa');
const btFundosInternacionais = document.querySelector('.button__fundos__internacionais');
const btFundosMultimercado = document.querySelector('.button__fundos__multimercado');
const btCripto = document.querySelector('.button__cripto');
const containerButtons = document.querySelector('#container__botoes');
const titulo = document.querySelector('.titulo__setor');
const frase = document.querySelector('.frase__relacionada');
const img = document.querySelector('.img__tematica');


btAcoes.addEventListener('click', ()=>{
    alterarSetor('acoes')
})

btFii.addEventListener('click', ()=>{
    alterarSetor('fii');
})

btRendaFixa.addEventListener('click', ()=>{
    alterarSetor('renda__fixa');
})

btFundosInternacionais.addEventListener('click', ()=>{
    alterarSetor('fundos__internacionais');
})

btFundosMultimercado.addEventListener('click', ()=>{
    alterarSetor('fundos__multimercado');
})

btCripto.addEventListener('click', ()=>{
    alterarSetor('cripto');
})

function alterarSetor(setor){
    botoes.forEach((setor)=>{

    })
    html.setAttribute('data-color-palette', setor);
    containerButtons.setAttribute('data-container-buttons', setor);
    img.setAttribute('src', `imagens/${setor}.png`);

    switch (setor) {
        case "acoes":
            titulo.innerHTML = `<strong class="titulo__setor">Ações</strong>`
            frase.innerHTML = `<span class="frase__relacionada">“Risco vem de você não saber o que está fazendo.” <br>- Warren Buffett</span>`
            break;
    
        case "fii":
            titulo.innerHTML = `<strong class="titulo__setor">Fundos Imobiliários</strong>`
            frase.innerHTML = `<span class="frase__relacionada">“Investir em imóveis sempre foi seguro, hoje é seguro e rentável.”</span>`
            break;

        case "renda__fixa":
            titulo.innerHTML = `<strong class="titulo__setor">Renda Fixa</strong>` 
            frase.innerHTMl = `<span class="frase__relacionada">“Estabilidade e previsibilidade para seus investimentos.”</span>`
            break;

        case "fundos__internacionais":
            titulo.innerHTML = `<strong class="titulo__setor">Fundos Internacionais</strong>`
            frase.innerHTML = `<span class="frase__relacionada">“Diversificar globalmente amplia oportunidades e reduz riscos.”`
            break;
        case "fundos__multimercado":
            titulo.innerHTML = `<strong class="titulo__setor">Fundos Multimercado</strong>`
            frase.innerHTML = `<span class="frase__relacionada">“Versatilidade para buscar retornos em diferentes cenários de mercado.”`
            break;
        case "cripto":
            titulo.innerHTML = `<strong class="titulo__setor">Cripto Ativos</strong>`
            frase.innerHTML = `<span class="frase__relacionada">“Revolucionando as finanças com descentralização e tecnologia blockchain.”`

        default:
            break;
    }

}
