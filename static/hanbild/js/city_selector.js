const input = document.getElementById('id_city')
const dropdown = document.getElementById('cityDropdown')
const dropdownButton = document.getElementById('cityDropdownButton')

if (input) {

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
        input.value = '';
        input.focus();
        createCityList(cities)
        dropdown.classList.toggle('show')
    })

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && event.target !== input && event.target !== dropdownButton) {
            dropdown.classList.remove('show')
        }
    })

    var city_option_index = -1;

    input.addEventListener('keydown', function (event) {
        if (dropdown.classList.contains('show')) {
            const dropdownOptions = dropdown.querySelectorAll('a')
            if (event.key === 'Enter' && dropdownOptions.length > 0) {
                event.preventDefault()
                if (city_option_index == -1) input.value = dropdownOptions[0].textContent
                else input.value = dropdownOptions[city_option_index].textContent
                dropdown.classList.remove('show')
                city_option_index = -1
            }
            if (event.key === 'ArrowDown' && dropdownOptions.length > 0) {
                if (city_option_index == dropdownOptions.length - 1) city_option_index = 0
                else city_option_index++;
                input.value = dropdownOptions[city_option_index].textContent
            }
            if (event.key === 'ArrowUp' && dropdownOptions.length > 0) {
                if (city_option_index == 0 || city_option_index == -1) city_option_index = dropdownOptions.length - 1
                else city_option_index--;
                input.value = dropdownOptions[city_option_index].textContent;
            }
            if (event.key === 'Backspace' && dropdownOptions.length > 0) {
                city_option_index = -1;
            }
            dropdownOptions.forEach((element, index) => {
                if (index == city_option_index) element.style.backgroundColor = "#eaeaea"
                else element.style.backgroundColor = null
            });
        }
    })

    createCityList(cities)
    input.addEventListener('input', showMatchingCities)
    input.addEventListener('click', makeClickToInput)
}