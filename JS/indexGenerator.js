// article generator
const newPost = document.querySelector(".posts")

for (let i = 0; i < post.length; i++) {
    newIndex(post[i])
}

function newIndex (data) {
    const postNumber = document.createElement("div")
    postNumber.classList.add = `${data.postNumber}`
    
        const postTitle = document.createElement("h2")
        postTitle.textContent = `${data.title}`
        postNumber.appendChild(postTitle)
        
        const p1 = document.createElement("p")
        p1.textContent = `${data.content[0]}`

        const newLine = document.createElement("br")

        const p2 = document.createElement("p")
        p2.textContent = `${data.content[1]}`

        const readMore = document.createElement("a") 
        readMore.href = `/pages/post${data.postNumber}.html`
        readMore.textContent = "Read More"
        readMore.style.color = "black"
    
    newPost.appendChild(postNumber)    
        postNumber.appendChild(p1)
        postNumber.appendChild(newLine)
        postNumber.appendChild(p2)
        p2.appendChild(readMore)
    
       
}