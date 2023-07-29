document.querySelector('.grid').addEventListener('click', (e) => {

    if(e.target.innerText === 'X'){
        e.target.textContent = 'O'
    } else {
        e.target.textContent = 'X'

    }
})


/* array like 
[ X  X  X
  X  X  X
  X  X  X
]




*/