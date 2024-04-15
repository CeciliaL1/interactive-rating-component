
export const generateRating = () => {
    const ratings = [1, 2, 3, 4, 5]

    const ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('class', 'rating-div')

    const starIconDiv = document.createElement('div')
    starIconDiv.setAttribute('class', 'star-icon-div')
    const starIcon = document.createElement('i')
    starIcon.setAttribute('class', 'fa-solid fa-star')

    const ratingHeader = document.createElement('h3');
    ratingHeader.textContent = 'How did we do?';


    const ratingParagraph = document.createElement('p');
    ratingParagraph.textContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';
    

    const ratingsDiv = document.createElement('div');
    ratingsDiv.setAttribute('class', 'ratings-div')

    ratings.forEach(rating => {
        const singleRatingDiv = document.createElement('div');

        const singleRating = document.createElement('p')
        singleRating.textContent = rating;

        singleRatingDiv.append(singleRating)
        ratingsDiv.append(singleRatingDiv)
    })

    const submitRateBtn = document.createElement('button');
    submitRateBtn.textContent = 'submit'

    starIconDiv.appendChild(starIcon)
    ratingDiv.append(starIconDiv, ratingHeader, ratingParagraph, ratingsDiv, submitRateBtn);
    app.appendChild(ratingDiv)
    
}