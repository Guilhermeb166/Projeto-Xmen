//Armazenando as váriaveis de nome,descricao e imagem do personagem
var nomeDoPersonagem = document.getElementsByClassName('nomeDoPersonagem')[0]
var descricaoDoPersonagem = document.getElementsByClassName('descricao')[0]
var imagemDoPersonagem = document.getElementsByClassName('imagemDoPersonagem')[0]

//Função para trocar as informações dos personagens
function ciclope_info(){
    var ciclope = personagens.find(personagem => personagem.id === 'ciclope')
    // Encontrar o objeto do Ciclope no array de personagens pelo id
    nomeDoPersonagem.textContent=ciclope.nome
    descricaoDoPersonagem.textContent=ciclope.descricao
    imagemDoPersonagem.src = ciclope.imagem;
    
}
function jean_info(){
    var jean = personagens.find(personagem => personagem.id === 'jean-grey')
    nomeDoPersonagem.textContent=jean.nome
    descricaoDoPersonagem.textContent=jean.descricao
    imagemDoPersonagem.src = jean.imagem;
}
function lince_info(){
    var lince = personagens.find(personagem => personagem.id === 'lince-negra')
    nomeDoPersonagem.textContent=lince.nome
    descricaoDoPersonagem.textContent=lince.descricao
    imagemDoPersonagem.src = lince.imagem;
}
function tempestade_info(){
    var tempestade = personagens.find(personagem => personagem.id === 'tempestade')
    nomeDoPersonagem.textContent=tempestade.nome
    descricaoDoPersonagem.textContent=tempestade.descricao
    imagemDoPersonagem.src = tempestade.imagem;
}
function vampira_info(){
    var vampira = personagens.find(personagem => personagem.id === 'vampira')
    nomeDoPersonagem.textContent=vampira.nome
    descricaoDoPersonagem.textContent=vampira.descricao
    imagemDoPersonagem.src = vampira.imagem;
}
function wolverine_info(){
    var wolverine = personagens.find(personagem => personagem.id === 'wolverine')
    nomeDoPersonagem.textContent=wolverine.nome
    descricaoDoPersonagem.textContent=wolverine.descricao
    imagemDoPersonagem.src = wolverine.imagem;
}
function noturno_info(){
    var noturno = personagens.find(personagem => personagem.id === 'noturno')
    nomeDoPersonagem.textContent=noturno.nome
    descricaoDoPersonagem.textContent=noturno.descricao
    imagemDoPersonagem.src = noturno.imagem;
}
function magneto_info(){
    var magneto = personagens.find(personagem => personagem.id === 'magneto')
    nomeDoPersonagem.textContent=magneto.nome
    descricaoDoPersonagem.textContent=magneto.descricao
    imagemDoPersonagem.src = magneto.imagem;
}