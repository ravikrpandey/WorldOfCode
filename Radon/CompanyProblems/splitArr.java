package CompanyProblems;

class splitArr 
{
    // Iterate over the characters of a string
    public static void main(String[] args)
    {
        String s = "Techie Delight";
 
        String[] arr = s.split("");
 
        for (String ch: arr) {
            System.out.print(ch);
        }
    }
}
