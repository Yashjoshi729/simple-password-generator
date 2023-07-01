password = document.querySelector('.pass')


function pass() {
    let a = []
    const spaceUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const spaceLower = 'abcdefghijklmnopqrstuvwxyz'
    const special = '!@#$%^&*'
    
    
    for (let i = 0; i < 2; i++) {
        let len1 = Math.floor(Math.random() * 26)
        a.push(spaceUpper[len1]);
    }

    for (let i = 0; i < 1; i++) {
        let len1 = Math.floor(Math.random() * 8)
        a.push(special[len1]);
    }

    for (let j = 0; j < 2; j++) {
        let len2 = Math.floor(Math.random() * 26)
        a.push(spaceLower[len2])
    }

    for (let i = 0; i < 3; i++) {
        let len1 = Math.floor(Math.random() * 26)
        a.push(spaceUpper[len1]);
    }
    
    for (let i = 0; i < 1; i++) {
        let len1 = Math.floor(Math.random() * 8)
        a.push(special[len1]);
    }

    for (let j = 0; j < 2; j++) {
        let len2 = Math.floor(Math.random() * 26)
        a.push(spaceLower[len2])
    }

    for (let i = 0; i < 2; i++) {
        let len1 = Math.floor(Math.random() * 8)
        a.push(special[len1]);
    }

    let text=""
    for (let i = 0; i < a.length; i++) {
        
        console.log(a[i])
        text=text+a[i]
    }
    password.innerHTML=text
}

