const input = document.querySelector('input'); // input elemanını input değişkenine atadık
const addBtn = document.querySelector('.add-btn'); // .add-btn classına sahip butonu (+) addBtn değişkenine atadık
const deleteAll = document.querySelector('.delete-btn'); // .delete-btn classına sahip butonu (Delete All) deleteAll değişkenine atadık
const div_ol = document.querySelector('.tasks');
const ol = document.querySelector('ol'); 
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');

setInterval(times, 1000);

function times() {
let tarih = new Date();
let locale = tarih.toLocaleDateString();
let time = tarih.toLocaleTimeString();

span1.textContent = locale;
span2.textContent = time;
}
//let counter = 0;

function addTask() {
  if (!input.value) {
    alert('You should write a task to add !');
  }
  //counter++;
  const valueUpper = input.value;
  const li = document.createElement('li');  // Bir adet li etiketi üretip onu li değişkenine atadık
  li.classList.add('task-item');            // Bu li etiketinin classına "task-item ekledik"
  

  li.addEventListener('mouseover', function() {
    li.style.cursor = "pointer";
    li.style.opacity = "0.8";
  })

  li.addEventListener('mouseout', function () {
    li.style.opacity = '1';
  });

  /*
  const checkbox = document.createElement('input'); // Bir adet input oluşturduk ve "checkbox" değişkenine atadık
  checkbox.setAttribute('type', 'checkbox'); // Halihazırda bu inputun type da checkbox yaptık
  checkbox.className = "checkbox"; 
  checkbox.style.marginLeft = '2%'; // Bu checkbox style özelliklerini verdik
  checkbox.style.minWidth = '1.5rem';
  checkbox.style.minHeight = '1.5rem';
  */

  //const div1 = document.createElement('div');
  //div1.style.display = "flex";
  
  const span = document.createElement('span');
  span.setAttribute('id', 'span-task-item');
  span.innerHTML = valueUpper;

  const pencil = document.createElement('i'); 
  pencil.setAttribute('class', 'fas fa-edit'); // Bu iconun classını "fas fa-trash" yaparak çöp kutusu iconu haline getirdik
  pencil.setAttribute('id', 'pencil');
  pencil.style.marginRight = '2%'; // Sağ taraftan mesafesini ayarladık
  pencil.style.fontSize = '1.5rem'; // Yine aynı şekilde boyutunu ayarladık

  
  const trashbin = document.createElement('i'); // Bir adet icon oluşturduk ve bunu "trashbin" değişkenine atadık
  trashbin.setAttribute('class', 'fas fa-trash-alt'); // Bu iconun classını "fas fa-trash" yaparak çöp kutusu iconu haline getirdik
  trashbin.style.marginRight = '2%'; // Sağ taraftan mesafesini ayarladık
  trashbin.style.fontSize = '1.5rem'; // Yine aynı şekilde boyutunu ayarladık

  const circle = document.createElement('i'); // Bir adet icon oluşturduk ve bunu "trashbin" değişkenine atadık
  circle.setAttribute('class', 'far fa-check-circle'); // Bu iconun classını "fas fa-trash" yaparak çöp kutusu iconu haline getirdik
  circle.classList.add('completed-item');
  circle.style.marginRight = '2%'; // Sağ taraftan mesafesini ayarladık
  circle.style.fontSize = '1.5rem'; // Yine aynı şekilde boyutunu ayarladık

  const div1 = document.createElement('div');
  div1.setAttribute("id","div1");
  div1.appendChild(span);
  div1.appendChild(circle);
  div1.appendChild(pencil);
  div1.appendChild(trashbin);
  li.appendChild(div1);

  let tarih = new Date();
  let locale = tarih.toLocaleDateString();
  let time = tarih.toLocaleTimeString();

  const div2 = document.createElement('div');
  div2.setAttribute("id","div2");
  div2.innerHTML = `Added on: ${locale} - ${time}`
  li.appendChild(div2);

  /*

  li.innerHTML = `<div id="div1"> 

  <span>${span.innerText}</span>

  <div id="div_icon">
  <i class='far fa-check-circle completed-item' style='margin-right: 2%; font-size: 1.5rem;'></i> 
  <i class="fas fa-edit" id="pencil" style="margin-right: 2%; font-size: 1.5rem;"></i>
  <i class="fas fa-trash-alt" style="margin-right: 2%; font-size: 1.5rem;"></i>
  </div>

  </div>

  <div id="div2"> Added on: ${locale} - ${time} </div>`; 

  */

   

  //const div2 = document.createElement('div');
  //div2.innerHTML = `Added on: ${locale}-${time}`;

  //li.appendChild(checkbox);
  //li.appendChild(span);
  //li.appendChild(circle);
  //li.appendChild(pencil);
  //li.appendChild(trashbin);
  //li.appendChild(div1);
  //li.appendChild(div2);

  document.querySelector('ol').appendChild(li);
  input.value = '';

  /*
  const span = document.createElement('span');
  span.innerHTML = document.querySelector("input").value;
  const div = document.createElement('div');
  div.innerHTML = '<button class="completed-item"><i class="far fa-check-circle"></i></button>    <button class="delete-item"><i class="fas fa-trash-alt"></i></button>'
  // li.innerHTML += counter + ' - ' + input.value.toUpperCase() + '<div><button class="completed-item"><i class="far fa-check-circle"></i></button>    <button class="delete-item"><i class="fas fa-trash-alt"></i></button></div>'; // Takiben bu li etiketinin içeriğine de hem input tan gelecek değeri hem de bir adet tick ve çöp kutusu iconu ekledik
  document.querySelector('li').appendChild(span);
  document.querySelector('li').appendChild(div);
  document.querySelector('ul').appendChild(li); // Sonra HTML deki ul listesini yakaladık ve yukarıdaki li etiketini onun child olarak ekledik
  input.value = ''; // Takiben input içerisini resetledik
  */
}

// Add task

addBtn.addEventListener('click', addTask);

input.addEventListener('keyup', function (event) {          // Butonun eventlarina keyup (klavyeden tusa basilma) eventi ekleniyor
  if (event.code === 'Enter') {                             // Eğer kullanıcının input code 'Enter' ise, yani Enter tusuna basarsa
    event.preventDefault();                                 // Öncelikle bunun default fonksiyonunu engelle
    addBtn.click();                                         // Butonun click() fonksiyonunu çağır,yani sanki kullanıcı butona basıyormuş gibi
    input.value = '';                                       // Ve her seferinde input içini temizle
  }
});


  

// Delete a task

ol.addEventListener('click', event => {                     // ul etiketi üzerine tıklandığında
 
  if (event.target.className === 'fas fa-trash-alt') {      // Eğer kullanıcının tık hedefinin classı "fas fa-trash-alt" ise, (yani çöp kutusu)
    let confirmation = confirm('Are you sure you want to delete?');
    confirmation ? event.target.parentElement.parentElement.remove() : null;                  
  } 

  if (event.target.className === 'fas fa-edit') {
    event.target.setAttribute('class', 'fas fa-thumbs-up');
    event.target.parentElement.children[0].contentEditable = true;
    event.target.parentElement.children[0].style.backgroundColor = 'white';
    event.target.parentElement.children[0].style.cursor = 'initial';
  } else if (event.target.className === 'fas fa-thumbs-up') {
    event.target.setAttribute('class', 'fas fa-edit');
    event.target.parentElement.children[0].style.backgroundColor = 'lightgreen';
  }

  if (event.target.className === 'far fa-check-circle completed-item') {
    if (event.target.parentElement.children[0].classList.contains('checked')) {
      event.target.parentElement.children[0].classList.remove('checked');
      event.target.parentElement.children[0].style.backgroundColor = 'lightgreen';
      event.target.parentElement.parentElement.children[1].classList.remove('checked');
      event.target.parentElement.parentElement.style.backgroundColor = 'lightgreen';
    } else {
      event.target.parentElement.children[0].classList.add('checked');
      event.target.parentElement.children[0].style.backgroundColor = 'rgb(139, 132, 132)';
      event.target.parentElement.parentElement.children[1].classList.add('checked');
      event.target.parentElement.parentElement.style.backgroundColor = 'rgb(139, 132, 132)';
    }
  }
});


// Delete all task

deleteAll.addEventListener('click', function (event) {          // "Delete All" BUTONUNA tıklandığında;
  let confirmation = confirm('Are you sure you want to delete all tasks?');
  if(confirmation){
    while(ol.hasChildNodes()) {
      ol.firstElementChild.remove();
    }
    /*
    let silinecek = document.querySelector('ol').children;
    console.log(silinecek);
    for (i in silinecek) {
      silinecek[i].remove();
    }
    */
  }
  //confirmation ? document.querySelector('ol').children.remove() : null;  // Direk ul etiketinin tamamını sil dedik
  input.value = '';                                                        // Yine input içerisini resetledik
  //div_ol.appendChild(document.createElement('ol'));
});






