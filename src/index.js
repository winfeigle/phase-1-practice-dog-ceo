console.log('%c HI', 'color: firebrick')

//CHALLENGE 1 -- Complete
const imgUrl = fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => {
        for(image of data.message){
            //create image elements
            const img = document.createElement('img')
            img.src = image
            img.style.maxWidth = '500px'
            img.style.maxHeight = '300px'
            //append to dog image container
            document.querySelector('div#dog-image-container').append(img)

        }
    })


//CHALLENGE 2 -- Complete
const breedUrl = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        for(breed in data.message){
            const li = document.createElement('li')
            li.textContent = breed
            li.id = 'breed'

            document.querySelector('ul#dog-breeds').appendChild(li)

            //CHALLENGE 3
            li.addEventListener('click', () => {
            li.style.color = 'blue'
            li.style.fontWeight = 'bold'
            })
            
        }
    })


//CHALLENGE 4
const dropdown = document.querySelector('#breed-dropdown')
const lis = document.getElementsByTagName('li')

dropdown.addEventListener('change', event => {
    const selection = event.target.value
    for(let i = 0; i < lis.length; i++){
        //If the dropdown selection letter is equal to the first letter of the word, dont hide that list item, but hide the others.
        lis[i].innerText[0] === selection ? lis[i].hidden = false 
        : lis[i].hidden = true
    }

})



