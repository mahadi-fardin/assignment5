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

        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt(price);

       




        
        setInnerText("grand-total", sum2)
        setInnerText("seat-count" , count)


        
       
    });
 }


 function total (id, value) {
    
    const total = document.getElementById(id).innerText;
        const convertedTotal=parseInt(total);
        const sum = convertedTotal + parseInt(value);
        setInnerText("total-price", sum)
 }



 function setInnerText (id, value) {
    document.getElementById(id).innerText = value;
    
 }