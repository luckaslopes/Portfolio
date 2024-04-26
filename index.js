const biblioteca = document.getElementById("BibliotecaVirtual");
const funcionarios = document.getElementById("Funcionarios");
const arvoreGenealogica = document.getElementById("arvoreGenealogica");

funcionarios.addEventListener('click', function() {
    const titulo = document.getElementById("tituloFuncionarios");
    const imagens = document.getElementById("imagensFuncionarios");
    const descricao = document.createElement("p");
    descricao.textContent = "Programa de simulação de dados de funcionários de uma empresa: Nesse projeto em Java foram usadas classes como por exemplo pessoa, onde cada classe continha atributos privados. Em uma da classe(OperacoesFuncionario) foi implementado uma interface para define um conjunto de metodos que devem ser implentados por qualquer classe que a utilize. A clase ListaFuncionario implementa a interface ja citada e trabalha com uma lista de objetivos do tipo Funcionario, ela fornece metodos para realizar várias operações em uma lista de funcionários,  como busca por CPF, busca por faixa de salário,  adição de funcionário, impressão de todos os dados dos funcionários,  impressão de dados de um funcionário específico e impressão de funcionários com o salario mais alto. A classe ListaFuncionario basicamente fornece uma estrutura para gerenciar uma lista de funcionários como busca, adição e impressão de informações. Contudo, o projeto lida com mais variáveis como lidar com exceções relacionadas a datas e Scanner para entrada de dados do usuário alem de armazenar dados importantes permitindo o usuário escolher várias ações garantindo que sua entrada seja tratada de maneira adequada e exibe os resultados das operações solicitadas."
    titulo.remove();
    imagens.remove();
    funcionarios.appendChild(descricao);
    funcionarios.addEventListener("click",function(){
        descricao.remove();
        funcionarios.appendChild(titulo);
        funcionarios.appendChild(imagens);
    })
});

biblioteca.addEventListener("click",function(){
    const titulo = document.getElementById("tituloBiblioteca");
    const imagens = document.getElementById("imagensBiblioteca");
    const descricao = document.createElement("p");
    descricao.textContent="Programa criado com HTML, CSS e JavaScript, onde o objetivo é gerenciar seus livros, nele é possível adicionar um livro, remover, listar todos os livros adicionados e editar informações de um já adicionado."
    titulo.remove();
    imagens.remove();
    biblioteca.appendChild(descricao);
    biblioteca.addEventListener("click",function(){
        descricao.remove();
        biblioteca.appendChild(titulo);
        biblioteca.appendChild(imagens);
    })     
})

arvoreGenealogica.addEventListener("click",function(){
    const titulo = document.getElementById("tituloArvore");
    const imagens = document.getElementById("imagensArvore");
    const descricao = document.createElement("p");
    descricao.textContent="Programa feito em linguagem C onde é possível adicionar os membros de sua família e eles serão inseridos em uma árvore binária de busca, após isso, é possível procurar por um membro em específico, listando seus descendentes e ascendentes."
    titulo.remove();
    imagens.remove();
    arvoreGenealogica.appendChild(descricao);
    arvoreGenealogica.addEventListener("click",function(){
        descricao.remove();
        arvoreGenealogica.appendChild(titulo);
        arvoreGenealogica.appendChild(imagens);
    })     
})
