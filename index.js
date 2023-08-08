const game = {
    playerXactive : true,
    playerOactive : false,
    array : [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9
    ],
    logic(e) {
    const num = e.target.dataset.num
    if(this.playerXactive && !e.target.clicked ){
        e.target.textContent = 'X'
        e.target.clicked = true
        this.playerXactive = false
        this.array[num - 1] = 'X'
    } else if (!e.target.clicked) {
        e.target.textContent = 'O'
        e.target.clicked = true
        this.playerXactive = true
        this.array[num - 1] = 'O'
    }
    }


}

document.querySelector('.grid').addEventListener('click', e => {
    game.logic(e)
    console.log(game.array)
})


/* array like 
[ X  X  X
  X  X  X
  X  X  X
]
Napisanie logiki zmiany przycisku z X na O za drugim klikniecm
Napisanie logiki sprawdzania kodu
utworzenie obiektu i metody ktora nastepnie doda sie do domu



*/