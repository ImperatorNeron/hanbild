const input = document.getElementById('id_city')
const dropdown = document.getElementById('cityDropdown')
const dropdownButton = document.getElementById('cityDropdownButton')

function createCityList(cityArray) {
    dropdown.innerHTML = '' // очищення списку перед додаванням нових елементів
    cityArray.slice(0, 6).forEach((city) => { // обмеження до перших 6 елементів
        const option = document.createElement('a')
        option.textContent = city
        option.addEventListener('click', function () {
            input.value = city
            dropdown.classList.remove('show')
        })
        dropdown.appendChild(option)
    })
}

function showMatchingCities() {
    const searchTerm = input.value.toLowerCase()
    const matchingCities = cities.filter((city) => city.toLowerCase().includes(searchTerm))
    createCityList(matchingCities)
    dropdown.classList.add('show')
}

dropdownButton.addEventListener('click', function () {
    event.preventDefault()
    input.value = ''
    createCityList(cities)
    dropdown.classList.toggle('show')
})

document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && event.target !== input && event.target !== dropdownButton) {
        dropdown.classList.remove('show')
    }
})

createCityList(cities)
input.addEventListener('input', showMatchingCities)