const inputNumberNode = document.querySelector('.input__Number');
const inputLimitNode = document.querySelector('.input__Limit');
const btnNode = document.querySelector('.button');
const fotoNode = document.querySelector('.foto');

if(JSON.parse(localStorage.getItem("images"))) {   //
    showFoto()                                     //
}

const useRequest = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let imagesData = []
            data.forEach(item => {
                imagesData.push({
                    imageSrc: item.download_url,
                })
            })
            localStorage.setItem("images", JSON.stringify(imagesData))
            showFoto()
        })
        .catch(() => {
            console.log('error')
        })
}
//
function showFoto() {
    let cards = ''
    const data = JSON.parse(localStorage.getItem("images"))//

    data.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img class="card-image" src="${item.imageSrc}">
            </div>
        `
        cards += cardBlock
        fotoNode.innerHTML = cards
    })
}
//
btnNode.addEventListener('click', async () => {
    if ((isNaN(inputNumberNode.value) || inputNumberNode.value < 1 || inputNumberNode.value > 10) && (isNaN(inputLimitNode.value) || inputLimitNode.value < 1 || inputLimitNode.value > 10)) {
        fotoNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (isNaN(inputNumberNode.value) || inputNumberNode.value < 1 || inputNumberNode.value > 10 ) {
        fotoNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    } else if (isNaN(inputLimitNode.value) || inputLimitNode.value < 1 || inputLimitNode.value > 10 ) {
        fotoNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
    } else {
        await useRequest(`https://picsum.photos/v2/list?page=${inputNumberNode.value}&limit=${inputLimitNode.value}`)
    }
})

