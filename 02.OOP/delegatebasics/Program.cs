internal class Program
{
    static int Sum(int a, int b)
    {
        return a + b;
    }

    delegate int CalDel(int a, int b);

    private static void Main(string[] args)
    {
        // int hap = Sum(10, 20);
        // Console.WriteLine(hap);

        // CalDel d = delegate (int a, int b) { return a + b; };
        CalDel d = (a, b) => a + b;
        Console.WriteLine(d(10, 20));
    }
}