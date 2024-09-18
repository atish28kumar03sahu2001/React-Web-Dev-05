export let Counter1 = [
    {
        id: 1,
        code: `
    let num1 = 10;
    console.log(\`Num1 : \${num1}\`); // 10
    console.log(\`Num1 : \${num1++}\`); // 10
    console.log(\`Num1 : \${num1}\`); // 11

    let num2 = 20;
    console.log(\`Num2 : \${num2}\`); // 20
    console.log(\`Num2 : \${++num2}\`); // 21
    console.log(\`Num2 : \${num2}\`); // 21
        `
    },
    {
        id: 2,
        code: `
    let num1 = 50;
    console.log(\`Num1 : \${num1}\`); // 50
    console.log(\`Num1 : \${num1--}\`); // 50
    console.log(\`Num1 : \${num1}\`); // 49

    let num2 = 80;
    console.log(\`Num2 : \${num2}\`); // 80
    console.log(\`Num2 : \${--num2}\`); // 79
    console.log(\`Num2 : \${num2}\`); // 79
        `
    }
];

export let Counter2 = [
    {
        id: 1,
        code: ` 
    public class Main {
        public static void main(String[] args) {
            int num1 = 10;
            System.out.println("Num1 Value : "+num1); //Num1 Value : 10
            System.out.println("Num1 Value : "+(num1++)); //Num1 Value : 10
            System.out.println("Num1 Value : "+num1); //Num1 Value : 11

            int num2 = 20;
            System.out.println("Num2 Value : "+num2); //Num2 Value : 20
            System.out.println("Num2 Value : "+(++num2));//Num2 Value : 21
            System.out.println("Num2 Value : "+(num2));//Num2 Value : 21
        }
    }`
    },
    {
        id: 2,
        code: `
    public class Main {
        public static void main(String[] args) {
            int num1 = 10;
            System.out.println("Num1 Value : "+num1); //Num1 Value : 10
            System.out.println("Num1 Value : "+(num1--)); //Num1 Value : 10
            System.out.println("Num1 Value : "+num1); //Num1 Value : 9

            int num2 = 20;
            System.out.println("Num2 Value : "+num2); //Num2 Value : 20
            System.out.println("Num2 Value : "+(--num2));//Num2 Value : 19
            System.out.println("Num2 Value : "+(num2));//Num2 Value : 19
        }
    }`
    }
]

export let Arithmetic1 = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let num1 = parseInt(prompt("Enter Num1 : "));
    let num2 = parseInt(prompt("Enter Num2 : "));
    let choice = parseInt(prompt("Enter Choice : "));
    switch (choice) {
        case 1:
            console.log(\`\${num1} + \${num2} : \${num1 + num2}\`);
            break;
        case 2:
            console.log(\`\${num1} - \${num2} : \${num1 - num2}\`);
            break;
        case 3:
            console.log(\`\${num1} * \${num2} : \${num1 * num2}\`);
            break;
        case 4:
            console.log(\`\${num1} / \${num2} : \${num1 / num2}\`);
            break;
        case 5:
            console.log(\`\${num1} % \${num2} : \${num1 % num2}\`);
            break;
        default:
            console.log("Invalid Option!");
            break;
    }`,
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test6	{
	public static void main(String args[])	{
            Scanner in = new Scanner(System.in);

            System.out.println("Enter Num1 : ");
            int num1 = in.nextInt();

            System.out.println("Enter Num2 : ");
            int num2 = in.nextInt();

            System.out.println("Enter Choice : ");
            int choice = in.nextInt();

            switch(choice)	{
                case 1 : 
                    System.out.println(num1 + "+" + num2 + ":" + (num1 + num2));
                    break;
                case 2 :
                    System.out.println(num1 + "-" + num2 + ":" + (num1 - num2));
                    break;
                case 3 :
                    System.out.println(num1 + "*" + num2 + ":" + (num1 * num2));
                    break;
                case 4 :
                    System.out.println(num1 + "/" + num2 + ":" + (num1 / num2));
                    break;
                case 5 :
                    System.out.println(num1 + "%" + num2 + ":" + (num1 % num2));
                    break;
                default :
                    System.out.println("Invalid Option!");
                    break;
            }
        }
    }`
    }
]

export let EVENODD = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let num = parseInt(prompt("Enter Number : "));
    if (num % 2 === 0)  console.log("Even");
    else console.log("Odd");`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test7	{
        public static void main(String args[])	{
            Scanner in = new Scanner (System.in);
            System.out.println("Enter Number : ");
            int num = in.nextInt();
            if(num % 2 == 0)	System.out.println("Even");	
            else 	System.out.println("Odd");
        }
    }`
    }
]

export let GREATEST = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let num1 = parseInt(prompt("Enter Num1 : "));
    let num2 = parseInt(prompt("Enter Num2 : "));
    if(num1 > num2) console.log(\`\${num1} is greater than \${num2}\`);
    else    console.log(\`\${num2} is greater than \${num1}\`);`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test16	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);
            System.out.println("Enter Num1 : ");
            int num1 = in.nextInt();

            System.out.println("Enter Num2 : ");
            int num2 = in.nextInt();

            if(num1 > num2)	System.out.println(num1+" is greater than "+num2);
            else System.out.println(num2+" is greater than "+num1);
        }
    }`
    }
]

export let Age_Person = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let birthdate = prompt("Enter Birth Date : ");
    let date1 = new Date(birthdate);
    let date2 = new Date();
    let year = date2.getFullYear() - date1.getFullYear();
    let month = date2.getMonth() - date1.getMonth();
    let day = date2.getDate() - date1.getDate();
    if (month < 0 || (month === 0 && day < 0)) {
        year--;
        month += 12;
    }
    if (day < 0) {
        let lastmonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
        day = lastmonth.getDate() + day;
    }
    console.log(\`User Age Is \${year} year, \${month} month, \${day} day\`);`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    import java.time.*;
    public class Test12	{
	public static void main(String args[])	{
            Scanner in = new Scanner(System.in);
            LocalDate DT = LocalDate.now();

            int day = DT.getDayOfMonth();
            int month = DT.getMonthValue();
            int year = DT.getYear();

            System.out.println("Current Day : "+day);
            System.out.println("Current Month : "+month);
            System.out.println("Current Year : "+year);

            System.out.println("-------------------------------------");

            System.out.println("Your Birth Day : ");
            int Day = in.nextInt();

            System.out.println("Your Birth Month : ");
            int Month = in.nextInt();

            System.out.println("Your Birth Year : ");
            int Year = in.nextInt();
            
            int age = day - Day;
            int mon = month - Month;
            int yr = year - Year;

            if(age < 0)	{
                int sol1 = (-1)*(age);
                System.out.println("Day : "+sol1);
            }   else	{
                System.out.println("Day : "+age);
            }
            if(mon < 0)	{
                int sol2 = (-1) * (mon);
                System.out.println("Month : "+sol2);
            }   else	{
               System.out.println("Month : "+mon);
            }
            System.out.println("Year : "+yr);
            System.out.println("-------------------------------------");
        }
    }`
    }
]

export let LeapYear = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let year = parseInt(prompt("Enter Year : "));
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        console.log(\`\${year} is leap year\`);
    else
        console.log(\`\${year} is not leap year\`);`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test10	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);
            System.out.println("Enter Year : ");
            int year = in.nextInt();
            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                System.out.println("Leap Year");
            else
                System.out.println("Not Leap Year");
        }
    }`
    }
]

export let TableMultiplication = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let num = parseInt(prompt("Enter Input : "));
    let range = parseInt(prompt("Enter Range : "));
    for (let i = 1; i <= range; i++) {
        console.log(\`\${num} * \${i} : \${num * i}\`);
    }`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test{
        public static void main(String []args){
            Scanner in = new Scanner(System.in);
            System.out.println("Enter Input: ");
            int num = in.nextInt();
            
            System.out.println("Enter Range : ");
            int range = in.nextInt();
            
            for(int i = 1; i <= range; i++){
                System.out.println(num+" * "+i+" = "+(num * i));
            }
        }
    }`
    }
]

export let EvenOddR = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let r1 = parseInt(prompt("Enter Range1 : "));
    let r2 = parseInt(prompt("Enter Range2 : "));
    for(let i = r1; i <= r2; i++)   {
        if(i % 2 === 0) console.log(i);
    }
    console.log("-------------------");
    for(let i = r1; i <= r2; i++)   {
        if(i % 2 !== 0) console.log(i);
    }`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test9	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);

            System.out.println("Enter Range1 : ");
            int r1 = in.nextInt();

            System.out.println("Enter Range2 : ");
            int r2 = in.nextInt();
            
            for(int i = r1; i <= r2; i++)	{
                if(i % 2 == 0)	System.out.println(i);
            }
            System.out.println("---------------------------");
            for(int i = r1; i <= r2; i++)	{
                if(i % 2 != 0)	System.out.println(i);
            }
        }
    }`
    }
]

export let POSNEG = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let n = parseInt(prompt("Enter Number : "));
    if(n < 0) console.log(\`\${n} is a negative number\`);
    else if (n > 0) console.log(\`\${n} is a positive number\`);
    else console.log(\`\${n} value is 0\`);`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test11	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);
            System.out.println("Enter Number : ");
            int n = in.nextInt();

            if(n > 0)	System.out.println(n+" is a positive number");
            else if (n < 0) System.out.println(n+" is a negative number");
            else System.out.println(n+" is 0");
        }
    }`
    }
]

export let SWAPPING = [
    {
        id: 1,
        code: `
    const prompt = require("prompt-sync")();
    let num1 = parseInt(prompt("Enter Num1 : "));
    let num2 = parseInt(prompt("Enter Num2 : "));
    console.log(\`num1 : \${num1}  , num2 : \${num2}\`);

    let swap = num1;
    num1 = num2;
    num2 = swap;
    console.log(\`num1 : \${num1}  , num2 : \${num2}\`);

    let swap1 = num2;
    num2 = num1;
    num1 = swap1;
    console.log(\`num1 : \${num1}  , num2 : \${num2}\`);`
    },
    {
        id: 2,
        code: `
    const prompt = require("prompt-sync")();
    let num1 = parseInt(prompt("Enter Num1 : "));
    let num2 = parseInt(prompt("Enter Num2 : "));
    console.log(\`num1 : \${num1}  , num2: \${num2}\`);

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log(\`num1 : \${num1}  , num2: \${num2}\`);

    num2 = num2 + num1;
    num1 = num2 - num1;
    num2 = num2 - num1;
    console.log(\`num1 : \${num1}  , num2: \${num2}\`);`
    }
]

export let SWAPPING1 =[
    {
        id: 1,
        code: `
    import java.util.Scanner;
    public class Test13	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);

            System.out.println("Enter Num1 : ");
            int num1 = in.nextInt();

            System.out.println("Enter Num2 : ");
            int num2 = in.nextInt();
            System.out.println("Num1 : "+num1+" Num2 : "+num2);

            int swap = num1;
            num1 = num2;
            num2 = swap;
            System.out.println("Num1 : "+num1+" Num2 : "+num2);
            
            int swap2 = num2;
            num2 = num1;
            num1 = swap2;
            System.out.println("Num1 : "+num1+" Num2 : "+num2);
        }
    }`
    },
    {
        id: 2,
        code: `
    import java.util.Scanner;
    public class Test14	{
        public static void main(String args[])	{
            Scanner in = new Scanner(System.in);

            System.out.println("Enter Num1 : ");
            int num1 = in.nextInt();

            System.out.println("Enter Num2 : ");
            int num2 = in.nextInt();
            System.out.println("Num1 : "+num1+" Num2 : "+num2);

            num1 = num1 + num2;
            num2 = num1 - num2;
            num1 = num1 - num2;
            System.out.println("Num1 : "+num1+" Num2 : "+num2);

            num2 = num2 + num1;
            num1 = num2 - num1;
            num2 = num2 - num1; 
            System.out.println("Num1 : "+num1+" Num2 : "+num2);
        }
    }`
    }
]