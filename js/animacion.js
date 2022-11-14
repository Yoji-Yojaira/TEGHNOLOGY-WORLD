(function(){

    const animaciones = [...document.querySelectorAll('.fraces__cuerpo')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currenfraces = document.querySelector('.fraces__cuerpo--show').dataset.id;
        value = Number(currenfraces);
        value+= add;


        animaciones[Number(currenfraces)-1].classList.remove('fraces__cuerpo--show');
        if(value === animaciones.length+1 || value === 0){
            value = value === 0 ? animaciones.length  : 1;
        }

        animaciones[value-1].classList.add('fraces__cuerpo--show');

    }

})();