class Second
{
    static printPyramid(levels)
    {
        // start position - calculate how many chars will be in one row
        var placesInRow = (levels * 2) - 1;
        // number of spaces from left to first number
        var spacesFromLeftToFirstNumber = parseInt((placesInRow - 1) / 2);
        // times a number will be repeated
        var timesRepeatNumber = 1;
        // printing pyramid
        // every level has it's row
        
        var row = "";
        
        while (levels > 0)
        {
            
            for (var i = 0; i < spacesFromLeftToFirstNumber; ++i)
                row += " ";
            
        
            // Code central part
            
        for (var i = 0; i < timesRepeatNumber; ++i)
        {
            row += levels; 

            // check if number is not last in row
            if (i < (timesRepeatNumber - 1))
            {
         
                if (levels < 10)
                {
                    row += ", ";
                }
                else 
                {
                    row += ",";
                }
            }
        }
            
            console.log(row);
            
            row = "";
            
            // go to next row
            --spacesFromLeftToFirstNumber;
            --levels;
            ++timesRepeatNumber;
        }

        console.log("--------------------");
    }
    
}
 
Second.printPyramid(10);

