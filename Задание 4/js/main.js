const inputWightNode = document.querySelector('.input__Wight');
const inputHeightNode = document.querySelector('.input__Height');
const btnNode = document.querySelector('.button');
const fotoNode = document.querySelector('.foto');
//
const useRequest = (url) => {
  return fetch(url)
      .then((response) => {
          return response
      })
      .then((data) => {
          const cardBlock = `
                  <div class="card">
                      <img class="card-image" src="${data.url}">
                  </div>
                  `
          fotoNode.innerHTML = cardBlock
      })
      .catch(() => {
          console.log('error')
      })
}
//
btnNode.addEventListener('click', async () => {
  if (isNaN(inputWightNode.value) || inputWightNode.value < 100 || inputWightNode.value > 300) {
      fotoNode.innerHTML = "Только числа от 100 до 300"
  } else if (isNaN(inputHeightNode.value) || inputHeightNode.value < 100 || inputHeightNode.value > 300 ) {
      fotoNode.innerHTML = "Только числа от 100 до 300"
  } else {
      await useRequest(`https://picsum.photos/${inputWightNode.value}/${inputHeightNode.value}`)
  }
})

