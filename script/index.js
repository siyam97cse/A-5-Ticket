// console.log("I love you");
let totalPrice = 0;
let bdt = 550;

const seats = document.querySelectorAll(".seat");

// console.log(seat);

for(let index = 0; index < seats.length; index++){
    const seat = seats[index];
    
    // console.log(seat);
    function changeColor(event){
        
        event.style.backgroundColor = "#1DD100";
    }

    

    seat.addEventListener("click", function(){
        // console.log("I love you");

        const currentScoreElement = document.getElementById("curret-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        const currentLifeElement = document.getElementById("current-life");
        const currentLifeText = currentLifeElement.innerText;
        const currntLife = parseInt(currentLifeText);

        const newLife = currntLife - 1;

        currentLifeElement.innerText = newLife;
        
        const title = seat.querySelector("p").innerText;

        const clas = seat.querySelector("h6").innerText;

        const price = seat.querySelector("span").innerText;

        const titleContainer = document.getElementById("title-container");
        // console.log(titleContainer);

        const p = document.createElement("li");
        p.innerText = title;
        titleContainer.appendChild(p);

        const h6 = document.createElement("li");
        h6.innerText = clas;
        titleContainer.appendChild(h6);

        const span = document.createElement("li");
        span.innerText = price;
        titleContainer.appendChild(span);
        
        // p.innerText = clas;
        // titleContainer.appendChild(p);
        // p.innerText = price;
        // titleContainer.appendChild(p);
        // console.log(title, clas, price);
        
        totalPrice += bdt;
        document.getElementById("totalPrice").innerText = totalPrice;
       
       
    });

    
}



const btn = document.getElementById("apply-button");
    
    function hide(){
    const hide = document.getElementById("field");
    hide.classList.add("hidden");
}

btn.addEventListener("click", function(){

   const couponElement = document.getElementById("input-field").value;
   console.log(couponElement);

   

    if(totalPrice > 1600){
        if(couponElement === "NEW15" || couponElement === "Couple 20"){
            
            // const visible = document.getElementById("apply-button");
            // visible.style.display = "none";
            hide();
            
            const discountElement = document.getElementById("discountPrice");
            const discountPrice = totalPrice * 0.2;
            discountElement.innerText = discountPrice;

            const grandTotal = document.getElementById("grandTotal");
            grandTotal.innerText = totalPrice - discountPrice;
            document.getElementById("input-field").value = "";

        }
        
        else{
            alert("Invalid Coupon Code");
            document.getElementById("input-field").value = "";
        }
    }

    else{
        alert("You should be buy 4 tickects then you serve this");
        document.getElementById("input-field").value = "";
    }

    
});