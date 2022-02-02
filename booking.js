const boggie = document.querySelector('.boggie') //the entire boggie

const seat = document.querySelectorAll('.row .seat:not(.occupied)')
//all the seats which are not occupied

const count = document.getElementById('count') //the total seats selected by User
const total = document.getElementById('total') //totalCost of the tickets

const pickup = document.getElementById('location')
const destination = document.getElementById('destination')

function updateData() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  //get the seats that are selected
  const selectedSeatsCount = selectedSeats.length
  //count the number of selectedSeats to feed the data to Page
  nuller()
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketCost
}

const ticketSet = 10
let ticketCost = +(
  destination.value * ticketSet +
  destination.value / 2 -
  pickup.value * ticketSet
)

function nuller() {
  if (destination.value === pickup.value) {
    ticketCost = 0
  }
}

//a random ticket formula

//cost Calculater
;[(pickup, destination)].forEach((i) => {
  i.addEventListener('click', (e) => {
    ticketCost += i.target.value
    updateData()
  })
})

//seatSelector
boggie.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')
    updateData()
  }
})
