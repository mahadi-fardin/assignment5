 const allBtn = document.getElementsByClassName("seat");

 let count = 0;

 for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;

        const seat = e.target.firstChild.nodeValue;

        
        const price = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].nextElementSibling.childNodes[2].nextElementSibling.childNodes[4].nextSibling.childNodes[1].nextElementSibling.childNodes[0].innerText;

        


        const selectedContainer = document.getElementById("select-place-contained");

        const li = document.createElement("li");

        


        const p = document.createElement("p");
        p.innerText = seat;

        const p2 = document.createElement("p");
        p2.innerText = price

        li.appendChild(p);
        li.appendChild(p2);

        e.target.style.backgroundColor = "#1DD100";
        e.target.setAttribute;
         


        const busSeat = document.getElementById("bus-seat").innerText;

        const convertedBusSeat = parseInt(busSeat);

        document.getElementById("bus-seat").innerText = convertedBusSeat - count;






        selectedContainer.appendChild(li);

        
        total ("total-price", parseInt(price));
        grandTotal ("grand-total", parseInt(price));

      
        
        setInnerText("seat-count" , count)


        
       
    });
 }


 function total (id, value) {
    
    const total = document.getElementById(id).innerText;
        const convertedTotal=parseInt(total);
        const sum = convertedTotal + parseInt(value);
        setInnerText("total-price", sum)
 }


 function grandTotal () {
   const total = document.getElementById("total-price").innerText;
   const convertedTotal = parseInt(total);
   
   setInnerText("grand-total", convertedTotal)



   const btn = document.getElementById("apply-btn");
   btn.addEventListener("click", function () {
     
     
   
     const couponElement = document.getElementById("input-field").value;
     const couponCode = couponElement.split(" ").join("").toUpperCase();
     
     if (count >=4 ){


      
   
      if (couponCode === "NEW15"){
   
         

        const discountElement = document.getElementById("discountPrice");
        const discountAmount = convertedTotal * 0.15;
        
        discountElement.innerText = discountAmount.toFixed(2);  
        const restTotal = document.getElementById("grand-total");
        restTotal.innerText =  convertedTotal - discountAmount.toFixed(2);

      

      }else {
        
         alert(" Coupon Code Invalid ");
      }


     } else  {
        alert("please Select by 4 Seat in the Bus");
     }
   
   
   });



   

  
       
 }


 let popup = document.getElementById("popup");

 function openPopup(){
   popup.classList.add("open-popup");
 }
 
 function closePopup(){
   popup.classList.remove("open-popup");
 }
 
 


 function setInnerText (id, value) {
    document.getElementById(id).innerText = value;
    
 }



