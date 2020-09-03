/*---------------------------------------------------------------------------------------------------------*/
/* Ejercicio 1                                                                                             */
/*---------------------------------------------------------------------------------------------------------*/

fetch('https://api.rand.fun/number/integer')
    .then(response => response.json())
    .then(data => {
            document.querySelector('.number').innerHTML = data.result;
            console.log(data.result);        
    });

/*---------------------------------------------------------------------------------------------------------*/
/* Ejercicio 2                                                                                             */
/*---------------------------------------------------------------------------------------------------------*/

fetch('https://dog.ceo/api/breed/labrador/images/random')
.then(response => response.json())
.then(data => {
    console.log()
    const img = document.querySelector('.img-dog-1');
    img.src = data.message;
    img.alt = 'Un perro';
});

document.querySelector('.btn-dogs').addEventListener('click', event => {
    console.log('click')
    fetch('https://dog.ceo/api/breed/labrador/images/random')
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('.img-dog-1');
        img.src = data.message;        
    });
});

/*---------------------------------------------------------------------------------------------------------*/
/* Ejercicio 3                                                                                             */
/*---------------------------------------------------------------------------------------------------------*/
let inputName = document.querySelector('.input-name');
let userName = document.querySelector('.user-name');
let totalRepos = document.querySelector('.total-repos');
let avatar = document.querySelector('.avatar');

document.querySelector('.btn-search').addEventListener('click', event => {
    fetch(`https://api.github.com/users/${inputName.value}`)
    .then(response => response.json())
    .then(data => {
        userName.innerHTML = `Nombre: ${data.name}`;
        totalRepos.innerHTML = `Total repositorios: ${data.public_repos}`;
        avatar.src = data.avatar_url;        
    });
});

/*---------------------------------------------------------------------------------------------------------*/
/* Ejercicio 4                                                                                             */
/*---------------------------------------------------------------------------------------------------------*/

let orgName = document.querySelector('.input-org');

document.querySelector('.btn-search2').addEventListener('click', event => {
    fetch(`https://api.github.com/orgs/${orgName.value}`)
    .then(datesResponse => datesResponse.json())
    .then(data => {
        const reposURL = data.repos_url;
        console.log('respuesta 1', reposURL);
        return fetch(reposURL);
    })
    .then(reposResponse => reposResponse.json())
    .then(repos => {
        console.log('respuesta 2', repos)
        const ul = document.querySelector('.repos-list');
        let ulContent = '';

        for (const repo of repos) {
            ulContent += `<li>${repo.name}</li>`;
        }
        ul.innerHTML = ulContent;
    });
});