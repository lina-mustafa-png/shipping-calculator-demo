function calculate(){
    let weight = Number(document.getElementById("weight").value);
    let distance = Number(document.getElementById("distance").value);
    let insurance = document.getElementById("insurance").checked;
    let shippingType = document.getElementById("type").value;
    let size = document.getElementById("size").value;
    let cost = 3.50 + (weight * 1.20) + (distance * 0.05); // Base cost: weight + distance, with small base fee


    //Parcel.java
    if(insured){
        cost += Math.max(1.50, 0.02 * cost); // compare $1.50 and 2% of the shipping cost then use whichever is hight multiplied by the base cost
    }

    //StandardParcel.java
    if(type === "standard" || type === "express"){
        if (size === "S"){
            cost += 0.75;
        }
        if (size === "M"){
            cost += 1.25;
        }
        if (size === "L"){
            cost += 1.75;
        }
    }

    //ExpressParcel.java
    if(type === "express"){
        cost *= 1.35;

        if(document.getElementById("sameDayDel").checked){
            cost += 7.50;
        }
    }

    //InternationalParcel.java
    if(type === "international"){
        cost += 8.00;
        cost += cost * 0.12;
    }

    document.getElementById("result").innerHTML = "Shipping Cost: $" + cost.toFixed(2);
}