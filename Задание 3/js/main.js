const inputNode = document.querySelector('.input');
const btnNode = document.querySelector('.button');
const fotoNode = document.querySelector('.foto');
//
function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

  function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="foto">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
      
    fotoNode.innerHTML = cards;
  }
//
  btnNode.addEventListener('click', () => {
    if( isNaN(inputNode.value) || inputNode.value < 1 || inputNode.value > 10) {
        fotoNode.innerHTML = " Введите только от 1 до 10 "
    } else {
        useRequest(`https://picsum.photos/v2/list/?limit=${inputNode.value}`, displayResult)
    }
})


