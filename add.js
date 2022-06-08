const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");

BtnAdd.addEventListener("click", AddNew);

function AddNew(){
    let newDiv3 = `<div class="container">
    <div class="card">
        <div class="coffee">
            <div class="circle"></div>
            <img src="./imgCoffee.png" alt="Coffee Image">
        </div>
        <div class="info">
            <h1 class="title">Coffee Pause</h1>
            <h3><input class="inputfield" placeholder="A BREAK, TAKE A COFFEE"></h3>
            <div class="types">	
                <button>5</button>
                <button>10</button>
                <button class="active">20</button>
                <button>60</button>
            </div>
            <div class="finished">
                <button>Finished</button>
            </div>
        </div>
    </div>
</div>`;
    
    console.log("add");
    //newDiv2.classList.add('card');
    DivContainer.insertAdjacentHTML('beforeend', newDiv3);
    //newDiv.classList.add('coffee');
    //newDiv.classList.add('circle');
}