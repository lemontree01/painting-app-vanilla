const board = document.querySelector('.panel')
let panel = document.querySelector('.panel')
let panelLength = panel.offsetWidth
let maxX = Math.floor(panelLength / 20)

let maxY = Math.floor(window.innerHeight / 20)

const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff']
let selectedColor = 1
for(let i = 0; i < maxY * maxX  ;i++) {
    let sq = document.createElement('div')
    sq.classList.add('el')
    sq.draggable = true
    sq.addEventListener('dragover', e => {
        sq.style.backgroundColor = colors[selectedColor]
    })
    board.append(sq)
}

let palette = document.querySelector('.color')
let isPaletteActive = false

let restart = document.querySelector('.restart')

document.querySelectorAll('.col').forEach((c, index )=> {
    c.addEventListener('click', e =>{
        selectedColor = index
        document.querySelectorAll('.col').forEach( inner => {
            inner.classList.remove('ticked')
        })
        c.classList.add('ticked')
    })
})

palette.addEventListener( 'click', () => {
    isPaletteActive = !isPaletteActive

    if(isPaletteActive) {
        palette.classList.add('clicked');
        document.querySelector('.extra').style.display = 'flex'

    } else {
        palette.classList.remove('clicked')
        document.querySelector('.extra').style.display = 'none'
    }
    }
)



restart.addEventListener( 'click', () => {
    restart.classList.add('clicked')
    document.querySelectorAll('.el').forEach(sq => {
        sq.style.backgroundColor = '#383838'
    })
    setTimeout(() => restart.classList.remove('clicked'), 500)

}
)