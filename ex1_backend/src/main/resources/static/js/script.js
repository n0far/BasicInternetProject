const URL ='http://localhost:9465/info';

function selector(name){
    document.getElementsByClassName("selected")[0].classList.remove("selected")
    document.getElementsByClassName(name)[0].classList.add("selected")
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById(name +"-text").classList.add("active")

}

function edit(){
    var element = document.getElementsByClassName("active")[0];
    let id = document.getElementsByClassName("selected")[0].id;
    console.log(id);
    if(element.contentEditable === 'false'){
        alert("to finish editing click on the button again");}
    element.contentEditable = element.contentEditable === 'false' ? 'true' : 'false';

    if(element.contentEditable === 'false'){
        var editedText = element.innerText;
        fetch(URL , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id : id,
                info : editedText}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // if the server returns JSON response
            })
            .then(data => {
                console.log('Changes saved:', data);
            })
            .catch(error => {
                console.error('Error saving changes:', error);
            });
    }
}


async function About() {
    try {
        const response = await fetch(URL + "/about");
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        //gets the string from the response
        const data = await response.json();
        txt = data.info.replaceAll("\n", "<br>");
        document.getElementById("about-text").innerHTML = txt;
    }
    catch (err) {
        console.error('Error fetching data',err);
    }
}
About();
Skills();
async function Skills() {
    try {
        const response = await fetch(URL + "/skills");
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        //gets the string from the response
        const data = await response.json();
        txt = data.info.replaceAll("\n", "<br>");
        document.getElementById("skills-text").innerHTML = txt;
    }
    catch (err) {
        console.error('Error fetching data',err);
    }
}

async function Exp() {
    try {
        const response = await fetch(URL + "/experience");
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        //gets the string from the response
        const data = await response.json();
        txt = data.info.replaceAll("\n", "<br>");
        document.getElementById("experience-text").innerHTML = txt;
    }
    catch (err) {
        console.error('Error fetching data',err);
    }
}

Exp();

async function Contact() {
    try {
        const response = await fetch(URL + "/contact");
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        //gets the string from the response
        const data = await response.json();
        txt = data.info.replaceAll("\n", "<br>");
        document.getElementById("contact-text").innerHTML = txt;
    }
    catch (err) {
        console.error('Error fetching data',err);
    }
}

Contact();


