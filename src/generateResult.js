
export const generateThankYou = (selectedRating) => {
    app.innerHTML = ''
    console.log(selectedRating)
    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('class', 'result-div')

    const image = document.createElement('img')
    image.src = 'images/illustration-thank-you.svg'


    const resultRating = document.createElement('p')
    resultRating.setAttribute('class', 'result-rating')
    resultRating.textContent = `You selected ${selectedRating} out of 5`

    const heading = document.createElement('h3')
    heading.textContent = 'Thank you!'

    const  paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'paragraph')
    paragraph.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'

   
    resultDiv.append(image, resultRating,heading, paragraph)
    app.appendChild(resultDiv)
}