// Za prilo?eni niz napi?i rje?enje koje elemente niza sortira u tri grupe.
// Zbroj elemenata pojedine grupe bi trebao biti pribli?no jednak.
// Primjer 1: 
// [1, 3, 1, 7, 5, 6, 6, 7, 4, 2]
// Rezultat: [7, 5, 1, 1] // 14, [7, 4, 3] // 14, [6, 6, 2] // 14
// Primjer 2: [8, 1, 5, 2, 4, 1, 9, 8]
// Rezultat: [9, 2, 1, 1] // 13, [8, 4] // 12, [8, 5] // 13
class First
{
    static divideArray(list)
    {
        // create list of lists
        var lists = new Array();
        
        // add three lists in list
        (lists.push(new Array()) > 0);
        (lists.push(new Array()) > 0);
        (lists.push(new Array()) > 0);
        
        
        list.sort(function(a, b) {
  return a - b;});
  
        console.log("List is : " + list);
        
        // calculate average sum		
        var averageSum = parseInt(First.sumOfList(list) / 3);
        
        if (First.sumOfList(list) % 3 != 0)
        {
            ++averageSum;
        }
        
        for (var listNumber = 0; listNumber < 3; ++listNumber)
        {
            for (var i = list.length - 1; i >= 0; --i)
            {
                if ((First.sumOfList(lists[listNumber]) + list[i]) <= averageSum)
                {
                    (lists[listNumber].push(list[i]) > 0);
                    list.splice(i,1);
                }
            }
        }
        
        First.printLists(lists);
        console.log("--------------------");

        return lists;
    }
    
    static sumOfList(list)
    {
        var sum = 0;
        for ( const  value of list) {
        sum += value;}
        return sum;
    }
    
    static printLists(lists)
    {
        for ( const  list of lists) {console.log(list + " sum : " + First.sumOfList(list));}
        console.log();
    }
}

const points = new Array(7, 1, 5, 2, 4, 1, 9, 8);
First.divideArray(points);
