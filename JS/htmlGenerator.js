
    //header generator
    const navigation = document.createElement("nav")
    navigation.classList.add("navigation")

        const button1 = document.createElement("a")
        button1.classList.add("button1")
        button1.textContent = "Home"
        button1.href = "/"

        const button2 = document.createElement("a")
        button2.classList.add("button2")
        button2.textContent = "About"
        button2.href = "/pages/about.html"

        const button3 = document.createElement("a")
        button3.classList.add("button3")
        button3.textContent = "Contact"
        button3.href = "/pages/contact.html"

    const titleContainer = document.createElement("div")
    titleContainer.classList.add("titleContainer")

        const title = document.createElement("h1")
        title.textContent = "Learning to Code"

        const titleImg = document.createElement("img")
        titleImg.classList.add("logo")
        titleImg.src = "/assets/logo.png"
        
    //footer generator
    const footNavigation = document.createElement("nav")
    footNavigation.classList.add("navigation")

        const footButton1 = document.createElement("a")
        footButton1.classList.add("button1")
        footButton1.textContent = "Home"
        footButton1.href = "/"

        const footButton2 = document.createElement("a")
        footButton2.classList.add("button2")
        footButton2.onclick = " location.href='/about.html' "
        footButton2.textContent = "About"
        footButton2.href = "/pages/about.html"

        const footButton3 = document.createElement("a")
        footButton3.classList.add("button3")
        footButton3.textContent = "Contact"
        footButton3.href = "/pages/contact.html"

    // file appending structure
    const header = document.querySelector(".header")
    const footer = document.querySelector(".footer")

    header.appendChild(navigation)
        navigation.appendChild(button1)
        navigation.appendChild(button2)
        navigation.appendChild(button3)
    header.appendChild(titleContainer)
        titleContainer.appendChild(title)
        titleContainer.appendChild(titleImg)
    footer.appendChild(footNavigation)
        footNavigation.appendChild(footButton1)
        footNavigation.appendChild(footButton2)
        footNavigation.appendChild(footButton3)

  
