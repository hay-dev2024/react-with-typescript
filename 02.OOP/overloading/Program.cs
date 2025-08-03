internal class Program
{
    class Unit
    {
        public void Overload(int A)
        {
            Console.WriteLine($"A {A}마리");
        }
        public void Overload(int A, int B)
        {
            Console.WriteLine($"A {A}마리 + B {B}마리");
        }
        public void Overload(int A, int B, int C)
        {
            Console.WriteLine($"A {A}마리 + B {B}마리 + C {C}마리");
        }
        public void Overload(char A)
        {
            Console.WriteLine($"A {A}등급");
        }
    }
    private static void Main(string[] args)
    {
        Unit unit = new Unit();
        unit.Overload(10);
        unit.Overload(10, 20);
        unit.Overload(10, 20, 30);
        unit.Overload('B');

    }
}