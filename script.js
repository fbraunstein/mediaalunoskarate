const listaKaratecas=[
    {nome:"Huguinho",notas:[5,6]},
    {nome:"Zezinho",notas:[7,8]},
    {nome:"Luizinho",notas:[4,8]}
]
for (let alunos of listaKaratecas){
    let media=(alunos.notas[0] + alunos.notas[1]) /2;
    //INTERPOLAÇÃO/STRINGS LITERAIS/TEMPLAITS STRINGS
    console.log(`A MEDIA DO ALUNO ${alunos.nome} É ${media}`)
}
