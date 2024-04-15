

export const changeBackground = (e) => {
  
    const child = e.target.parentNode.parentNode.childNodes
    child.forEach(kid=> {
        kid.classList.remove('color')

    })
    e.target.parentNode.classList.add('color')

}