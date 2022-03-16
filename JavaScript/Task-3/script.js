/* Question : Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range. */


// input
const inp = 3;

// months with 30days - April(4), June(6), September(9), November(11)


//Months with 31 days - January(1), March(3), May(5), July(7), August(8), October(10), December(12)

// February has either 28 Days or 29 Days;

// there is only 12 months in a year

if (inp > 12) {
    console.log("There is only 12 months in a year");
} else if(inp == 2) {
    console.log("28 Days or 29 Days");
} else if (inp == 4 || inp == 6 || inp == 9 || inp == 11) {
    console.log("30 Days");
} else {
    console.log("31 Days");
}