const seatContainer = document.querySelector('#seatContainer')
const filmContainer = document.querySelector('#filmContainer')
const finalInfo = document.querySelector('#finalInfo')
let sum = 0

const films = [
     {
        element: document.querySelector('#film1'),
        name: 'Avatar',
        price: 10
    },
    {
        element: document.querySelector('#film2'),
        name: 'Scream 6',
        price: 15
    },
    {
        element: document.querySelector('#film3'),
        name: 'Aquaman 2',
        price: 20
    },
    {
        element: document.querySelector('#film4'),
        name: 'Kunq Fu Panda',
        price: 25
    }
]



const calculate = (sum) => {
    let html = ''
    for(let film of films) {
        if(film.element.classList.contains('this')) 
        html += `<div class="text-white mb-[15px]">Siz ${film.name} filmine ${sum} bilet aldiniz, ${sum*film.price} manat odemelisiniz.</div>`
    }
    finalInfo.innerHTML = html
}



seatContainer.addEventListener('click', e => {
    
    if (e.target.matches('button')) {
        if (e.target.classList.contains('bg-[#5B5B5B]')) {
            e.target.classList.remove('bg-[#5B5B5B]')
            e.target.classList.add('bg-[#FF9446]')
            sum++
        }
        else if (e.target.classList.contains('bg-[#FF9446]')) {
            e.target.classList.remove('bg-[#FF9446]')
            e.target.classList.add('bg-[#5B5B5B]')
            sum--
        }
    }
calculate(sum)
})


filmContainer.addEventListener('click', e => {
    if (e.target.matches('button') && e.target.classList.contains('bg-[#5B5B5B]')) {

        for (let film of films) {
            if (film.element.classList.contains('bg-[#66B979]')) {
                film.element.classList.remove('bg-[#66B979]')
                film.element.classList.add('bg-[#5B5B5B]')
                film.element.classList.remove('this')
            }
        }
        e.target.classList.remove('bg-[#5B5B5B]')
        e.target.classList.add('bg-[#66B979]')
        e.target.classList.add('this')
    }
    else if (e.target.matches('button') && e.target.classList.contains('bg-[#66B979]')) {
        e.target.classList.add('this')
    }
})

