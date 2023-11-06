const request = fetch("https://api.msigma.in/btech/v2/branches/");
 
request.then((response) => response.json())
  .then((data) => {
    console.log(data);
    const courseSet = document.getElementById("course-list");
    for (let i = 0; i <=9; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            const div = document.createElement("div");
            div.classList.add("div");
            const h3 = document.createElement("h3");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const applyButton = document.createElement("button");
            applyButton.classList.add("button");
            applyButton.style.color = randomColor;

            h3.textContent = data.branches[i].short;
            h3.style.color = randomColor;
            p1.textContent = data.branches[i].name;
            p1.style.color=randomColor
            applyButton.textContent = "Apply Now";
            p2.textContent = "Fee starting at ₹799 per subject";
   
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(applyButton);
            div.appendChild(p2);
 
            courseSet.append(div);
        }
    })
    .catch((error) =>  console.log(error.message));