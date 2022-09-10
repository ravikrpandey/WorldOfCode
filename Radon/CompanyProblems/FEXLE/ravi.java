public class ravi
{
    public void displayPattern() {
        int a = 1;
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(a++ + "\t");
            }
            System.out.println();
        }
    }
}