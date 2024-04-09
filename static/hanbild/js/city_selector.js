const input = document.getElementById('id_city')
const dropdown = document.getElementById('cityDropdown')
const dropdownButton = document.getElementById('cityDropdownButton')

function createCityList(cityArray) {
    dropdown.innerHTML = ''
    cityArray.slice(0, 6).forEach((city) => {
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

function makeClickToInput() {
    if (input.value === '') {
        createCityList(cities)
        dropdown.classList.toggle('show')
    }
}

dropdownButton.addEventListener('click', function (event) {
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

input.addEventListener('keydown', function (event) {
    const dropdownOptions = dropdown.querySelectorAll('a')

    if (event.key === 'Enter' && dropdownOptions.length > 0) {
        event.preventDefault()
        input.value = dropdownOptions[0].textContent
        dropdown.classList.remove('show')
    }
})

createCityList(cities)

input.addEventListener('input', showMatchingCities)
input.addEventListener('click', makeClickToInput)