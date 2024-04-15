import { generateThankYou } from "./generateResult.js";

export const submitRating = (e) => {
    const target = e.target.parentNode.childNodes[3].childNodes
    let selectedRating;

    for(let i = 0; i < target.length; i++){
        if(target[i].className === 'color') {
            selectedRating =target[i].childNodes[0].innerText
        }
    }
    generateThankYou(selectedRating)
}