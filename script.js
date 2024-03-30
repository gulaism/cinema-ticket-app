const seatContainer = document.querySelector('#seatContainer')
const filmContainer = document.querySelector('#filmContainer')
const finalInfo = document.querySelector('#finalInfo')

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



const calculate = () => {
    let html = ''
    for(let film of films) {
        html = `<div class="text-white mb-[15px]">Siz ${film.name} filmine 3 bilet aldiniz, 27 manat odemelisiniz.</div>`
    }
    finalInfo.innerHTML = html
    
}



seatContainer.addEventListener('click', e => {
    if (e.target.matches('button')) {
        if (e.target.classList.contains('bg-[#5B5B5B]')) {
            e.target.classList.remove('bg-[#5B5B5B]')
            e.target.classList.add('bg-[#FF9446]')
        }
        else if (e.target.classList.contains('bg-[#FF9446]')) {
            e.target.classList.remove('bg-[#FF9446]')
            e.target.classList.add('bg-[#5B5B5B]')
        }
    }

})


filmContainer.addEventListener('click', e => {
    if (e.target.matches('button') && e.target.classList.contains('bg-[#5B5B5B]')) {

        for (let film of films) {
            if (film.element.classList.contains('bg-[#66B979]')) {
                film.element.classList.remove('bg-[#66B979]')
                film.element.classList.add('bg-[#5B5B5B]')
            }
        }
        e.target.classList.remove('bg-[#5B5B5B]')
        e.target.classList.add('bg-[#66B979]')
    }
})

