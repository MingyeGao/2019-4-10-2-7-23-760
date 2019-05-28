module.exports = function main(inputs) {
    // write your code here...
    var distance = inputs.distance
    var time = inputs.parkTime
    var price = 0
    if(distance <=2){
        price = 6
    }
    else if(distance <= 8){
        price = 6
        price += (distance-2)*0.8
    }
    else{
        price = 6 + 6*0.8
        price += (distance-8)*1.2
    }
    
    price += time*0.25
    
    return Math.round(price);
};
