const form = document.querySelector('.car-form')
const carName = document.querySelector('#carname')
const carModel = document.querySelector('#model')
const carYear = document.querySelector('#year')
const msg = document.querySelector('.msg')
const lists = document.querySelector('.list-group')

form.addEventListener('submit', onSubmit)

function onSubmit(e){
   e.preventDefault()
   if(carName.value === '' || carModel.value === '' || carYear.value === ''){
       msg.style.background = 'red'
       msg.style.color = 'white'
       msg.innerHTML = '<h3>Hamma maydon toldirilishi shart</h3>'

       setTimeout(() => msg.remove(), 3000)
   }else{
       const li = document.createElement('li')
       li.appendChild(document.createTextNode(`
        ${carName.value} ${carModel.value} : ${carYear.value}
       `))
       lists.appendChild(li)

       carName.value = ''
       carModel.value = ''
       carYear.value = ''

   }
}
