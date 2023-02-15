const btn = document.querySelector('.button');
const outputResult = document.querySelector('#wr');

function getCards(apiData) {
    const cardBlock = `
        <div class="card">
            <img src="${apiData}"
                class="card-image"/>
        </div>
    `;
    cardBlock
    outputResult.className = 'wraper-after';
    outputResult.innerHTML = cardBlock;
}

btn.addEventListener('click', () => {
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    
    if ((width >= 100 && width <= 300) && (height >= 100 && height <= 300)) {
        fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            // console.log(response.url) 
            const result = response.json();
            console.log(result);
            return response;
        })
        .then((data) => {
            console.log(data);

            getCards(data.url)
        })
        .catch(() => {
            console.log('error');
        })
    
    } else {
        alert('Some number not in the range')
    }
})