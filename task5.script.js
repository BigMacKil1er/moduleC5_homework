const button = document.querySelector('.button');
const outputResult = document.querySelector('#wr');
const addButton = document.querySelector('.wrapper-link');


function getXHR(url, callback) {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Ответ: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result)
            };
        }
    };
    xhr.onerror = function() {
        console.log('Error! Response Status: ', xhr.status);
    };
    xhr.send();
};

function getCards(apiData) {
    
    let cards = '';
    const buttonClear = `<a class="link" href="practice 4.html">Previus task</a><<button class="button clear">Clear localStorage</button><a class="link" href="index.html">Home page</a>`;
    apiData.forEach(element => {
        const cardBlock = `
        <div class="card">
            <img src="${element.download_url}"
                class="card-image"/>
        </div>
        `;
        cards = cards + cardBlock
    });
    outputResult.className = 'wraper-after';
    outputResult.innerHTML = cards;
    addButton.innerHTML = buttonClear;
    const clearStorage = document.querySelector('.clear');
    clearStorage.addEventListener('click', storageCleaner);
}


function testAndStart() {
    const page = document.querySelector('#page').value;
    const numberOfPhotos = document.querySelector('#how-photo').value;
    localStorage.setItem('pageNumber', page);
    localStorage.setItem('limit', numberOfPhotos);
    if ((Number(page) >= 1 && Number(page) <= 10) && (Number(numberOfPhotos) >= 1 && Number(numberOfPhotos) <= 10)) {
        getXHR(`https://picsum.photos/v2/list?page=${page}&limit=${numberOfPhotos}`, getCards);
    } else {
        alert('No number is entered or the number is not in the range of 1 to 10.')
    }
}

function testLocalStorage() {
    const checkPage = localStorage.getItem('pageNumber');
    const checkPhoto = localStorage.getItem('limit')
    if(checkPage && checkPhoto) {
        console.log('АЛе бля');
        getXHR(`https://picsum.photos/v2/list?page=${checkPage}&limit=${checkPhoto}`, getCards);
    } else {
        button.addEventListener('click', testAndStart)
    }
    
}
function storageCleaner() {
    localStorage.removeItem('pageNumber');
    localStorage.removeItem('limit');
    location.reload();
    console.log('Данные из localStorage удалены');
}

testLocalStorage()



