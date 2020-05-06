var age;
var reg;
var i=1;
var j=1000;
function race(age,reg)
{
	document.write("Your age is " +age );
	document.write("\n");
	document.write(" You are " +reg);
	document.write("\n");
	if(age<=25)
	{
		
		console.log(" race number is less than or equal to 1000");
		while(i<1000)
		{
			document.write(" Your race number is " +i);
			i++;
			break;
		}
		document.write("\n");
	document.write("Starting time is 12:30pm.");		

			
	}
	else if (age>25 && reg=="early")
	{
		
		console.log("race number is more than 1000");
		while(j>=1000)
		{
			document.write(" Your race number is " +j);
			j++;
			break;
		} document.write("\n");
		document.write("  Starting time is 9:30 am. ");
	}
	
	else if( age>25 && reg=="late")
	{
		while(i<1000)
		{
			document.write(" Your race number is " +i);
			i++;
			break;
		}
			document.write("\n");

		document.write(" Starting time is 11:00 am. ");
	}

	
} 
race(18,"late");
document.write("<br>");	
race(30,"early");
document.write("<br>");
race(60,"late");
		
		