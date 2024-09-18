const submit = document.getElementById("join")

submit.addEventListener('click', () => {
    const firstName = document.getElementById('first').value
    const email = document.getElementById('email').value
    const gender = document.getElementById('gender').value
    const phone = document.getElementById('phone').value
    const address = document.getElementById('address').value

    if (firstName === "" || email === "" || gender === "" || phone === "" || address === ""){
        alert("Please enter your data!")

        if (firstName === ""){
            alert("First Name is required!")
        }else if (email === ""){
            alert("Email is required!")
        }else if (gender === ""){
            alert("Gender is required!")
        }else if (phone === ""){
            alert("Phone Number is required!")
        }else if (address === ""){
            alert("Address is required!")
        }
        return
    }

    let atAmount = 0, length = email.length

    for(let i = 0; i < length; i++){
        if(email[i] === '@') atAmount++
    }

    if(atAmount != 1){
        alert('Invalid email, please re-enter your email!')
        return
    }
    
})