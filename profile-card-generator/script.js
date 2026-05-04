let form = document.querySelector("form");
let main = document.querySelector("#main");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fileInput = document.getElementById("imageInput");
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;

    let file = fileInput.files[0];

    let div = document.createElement("div");
    div.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("profile-img");

    // image handling
    if(file){
        img.src = URL.createObjectURL(file);
    } else {
        img.src = "https://via.placeholder.com/100";
    }

    let h2 = document.createElement("h2");
    h2.textContent = name;

    let p = document.createElement("p");
    p.textContent = role;
    p.classList.add("role");

    let div1 = document.createElement("div");
    div1.classList.add("info");

    let p1 = document.createElement("p");
    p1.innerHTML = `<strong>DOB:</strong> ${dob}`;

    let p2 = document.createElement("p");
    p2.innerHTML = `<strong>Email:</strong> ${email}`;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(div1);

    div1.appendChild(p1);
    div1.appendChild(p2);

    main.appendChild(div);

    form.reset();
});