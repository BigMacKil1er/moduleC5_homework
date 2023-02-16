
const outputResult = document.querySelector('#wr');
const buttonNode = document.querySelector('.button');

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
}

function checkNumbers() {
    const value = document.querySelector('input').value;
    
    if (value) {
        if (Number(value) <= 10 && Number(value) >= 1) {
            getXHR(`https://picsum.photos/v2/list?limit=${value}`, getCards)
        } else {
            alert('Number in the nonrange! Try again.')
        }
    } else {
        alert('Wrong input! Try again')
    }
}

buttonNode.addEventListener('click', checkNumbers);