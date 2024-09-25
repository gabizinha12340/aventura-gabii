const avanca = document.querySelectorAll(`.btn-proximo`);

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAtribute('data-proximo');

        atual.slassList.remove('ativo');
        document.getElementById(proximopasso).classlist.add("ativo");
    })
})
    
