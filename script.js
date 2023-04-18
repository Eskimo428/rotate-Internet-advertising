//Решения с простыми вводынми . Элементы меняются через 1 сек
// let rotatorList = document.querySelector('.rotator')
// let rotatorItem = Array.from(document.querySelectorAll('.rotator__case'))
// let currentIndex = 0;

// rotatorItem.forEach(item => {
//     const color = item.getAttribute('data-color')
//     function rotate() {
//       rotatorItem[currentIndex].classList.remove('rotator__case_active');
//       if (currentIndex === rotatorItem.length - 1) {
//         currentIndex = 0;
//       } else {
//         currentIndex++;
//       }
//       rotatorItem[currentIndex].classList.add('rotator__case_active');
//     }
    
//     setInterval(rotate, 1000);
// });


//Решения где элементы меняются в соответсвии с задаными data-атрибутами
const rotator = document.querySelector('.rotator');
const rotatorItems = rotator.querySelectorAll('.rotator__case');
let currentIndex = 0;

function showNextItem() {
  const currentItem = rotatorItems[currentIndex];
  const nextIndex = currentIndex + 1 === rotatorItems.length ? 0 : currentIndex + 1;
  const nextItem = rotatorItems[nextIndex];

  // Получаем значения атрибутов 
  const color = currentItem.dataset.color;
  const speed = currentItem.dataset.speed;
  const size = currentItem.dataset.size;

  // Убираем класс активности с текущего элемента и добавляем на следующий
  currentItem.classList.remove('rotator__case_active');
  nextItem.classList.add('rotator__case_active');

  // Изменяем цвет и размер на следующем элементе
  nextItem.style.color = color;
  nextItem.style.fontSize = size;
  
  // Следующий элемент будет показан через заданную скорость
  setTimeout(() => {
    currentIndex = nextIndex;
    showNextItem();
  }, speed);
}

// Показываем первый элемент
showNextItem();

