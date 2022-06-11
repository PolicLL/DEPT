class Third
{
    static printPyramid(levels)
    {
        if (levels % 2 == 0)
        {
            return;
        }
        
        var numberOfRows = (parseInt(levels / 2)) + 1;
        var placesInRow = (levels * 2) - 1;
        var spacesFromLeftToFirstNumber = parseInt((placesInRow - 1) / 2);
        var middleNumber = levels;
        var middleNumberIndex = parseInt(placesInRow / 2);
        var tempIndex = 0;
        
        var row = '';
        
        while (numberOfRows > 0)
        {
            // adding spaces
            
            
            for (var i = 0; i < spacesFromLeftToFirstNumber; ++i)
            {
                row = row.padStart(row.length, ' ');
                
                ++tempIndex;
            }

            // print central part
            var startIndex = tempIndex;
            var endIndex = middleNumberIndex + (middleNumberIndex - startIndex);

            while (startIndex <= endIndex)
            {
                if (tempIndex % 2 == 0)
                {
                    row += (middleNumber - (parseInt(parseInt(Math.abs((middleNumberIndex - tempIndex))) / 2)));
                }

                else row += ',';
                
                ++startIndex;
                ++tempIndex;
            }
            
            const paddedStr = row.padStart(row.length + spacesFromLeftToFirstNumber, ' ')
  
            // print the line
            console.log(paddedStr);
            
            // reset value
            row = '';
            
            // change variables
            spacesFromLeftToFirstNumber -= 2;
            tempIndex = 0;
            numberOfRows--;
            middleNumber--;
        }

        console.log("--------------------");
    }

    
}

Third.printPyramid(7);