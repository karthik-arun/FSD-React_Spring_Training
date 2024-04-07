/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountInPercentage) {
    if(isNaN(pricePerKilo)|| isNaN(quantityInKilo)|| isNaN(discountInPercentage))
        return "Invalid Input Types, All Inputs Should Be of Type Number !!"
    else if(typeof(pricePerKilo)!='number' || typeof(quantityInKilo)!='number' || typeof(discountInPercentage)!='number')
        return "Invalid Input Types, All Inputs Should Be of Type Number !!"
    else
    {
        totalAmount = pricePerKilo * quantityInKilo
        amount = totalAmount -(totalAmount * (discountInPercentage/100))
        return String(amount)
    }
       
}