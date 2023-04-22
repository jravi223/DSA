import java.util.Scanner;

public class printAvg {
    public static void main(String[] args) {
        // Starting time for the method starting
        long startTime = System.nanoTime();
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter first Number ");
        double num1 = scan.nextDouble();
        System.out.print("Enter first Number ");
        double num2 = scan.nextDouble();
        System.out.print("Enter first Number ");
        double num3 = scan.nextDouble();
        scan.close();
        System.out.println("Avg is " + avg(num1, num2, num3));
        long endTime = System.nanoTime();
        // Ending time for the method Ending
        long duration = endTime - startTime;
        double seconds = (double) duration / 1_000_000_000.0;
        System.out.println("Time taken for the algorithm to complete: " + seconds);
    }

    public static double avg(double a, double b, double c) {
        return (a + b + c) / 3;
    }
}
