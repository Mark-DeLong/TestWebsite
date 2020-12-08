// full article generator
const reversePost = post.reverse()

for (let i = reversePost.length; i > 0; i--) {
    articleGenerator(post[i - 1], (i))     
}

function articleGenerator (data, counter) {
    const newPost = document.querySelector(`.post${counter}`)
    
    if (newPost != null) {
        const postNumber = document.createElement("div")
        postNumber.classList.add = `${data.postNumber}`
        
            const postTitle = document.createElement("h2")
            postTitle.textContent = `${data.title}`
        
        newPost.appendChild(postNumber)
            postNumber.appendChild(postTitle)  

            for (let x = 0; x < data.content.length; x++) {
                const newParagraph = document.createElement("p")

                newParagraph.textContent = `${data.content[x]}`

                const newLine = document.createElement("br")
                
                postNumber.appendChild(newParagraph)
                postNumber.appendChild(newLine)
            }
            
            
        
            
    }
}