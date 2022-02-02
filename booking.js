const boggie = document.querySelector('.boggie') //the entire boggie

const mainBox = document.querySelector('.mainBox')
const seat = document.querySelectorAll('.row .seat:not(.occupied)')
//all the seats which are not occupied

const count = document.getElementById('count') //the total seats selected by User
const total = document.getElementById('total') //totalCost of the tickets

const pickup = document.getElementById('location')
const destination = document.getElementById('destination')
const ticketSet = 10
let cost

//function Declarations
function ticketCost() {
  if (pickup.value === destination.value) {
    cost = 0
    return cost
  }

  cost = (destination.value - pickup.value) * 5 + ticketSet
  return +cost
}

function update() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  const noSelectedSeats = selectedSeats.length
  count.innerText = noSelectedSeats
  total.innerText = ticketCost() * noSelectedSeats
}

//event listeners
boggie.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')
  }
  update()
})

mainBox.addEventListener('change', () => update())
