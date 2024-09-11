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