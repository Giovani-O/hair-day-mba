import dayjs from 'dayjs'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

// Data de hoje
const today = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual
selectedDate.value = today

// Define a data mínima
selectedDate.min = today

form.onsubmit = (event) => {
  event.preventDefault()
}
