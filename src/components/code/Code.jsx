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