/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(rows) {
    if(isNaN(rows))
        return "Invalid Input Type, Row Input Should Be of Type Number !!"
    else
    {
        pattern = "";
        for(i=0;i<rows;i++){
            for ( j=rows-i; j>1; j--)
            {
                pattern+=(" ");
            }
  
           
            for ( j=0; j<=i; j++ )
            {
                pattern+=("* ");
            }
  
            pattern+="\n";
        }
        return pattern
    }
}
