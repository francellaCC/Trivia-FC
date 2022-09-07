const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    Swal.fire({
        position: 'top-end', 
        showConfirmButton: false,
        timer: 3500,
        icon: 'success',
        title: 'Eso 💋🌹😘',
        text: 'Sabia que ibas a decir que si ❤!',
        footer: '<a href="https://youtu.be/7PnE9jEGB80">Ingresa Aqui</a>'
      })
    // alert('Sabia que ibas a decir que si ❤')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})