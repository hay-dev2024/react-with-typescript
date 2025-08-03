internal class Program
{
    class Dog
    {
        protected int eyes, nose, mouth, ears;
        protected string kinds;
        public Dog()
        {
            eyes = 2;
            nose = 1;
            mouth = 1;
            ears = 2;
            kinds = "개";
            Console.WriteLine($"{kinds} Initialised: Eyes = {eyes}, Nose = {nose}, Mouth = {mouth}, Ears = {ears}");
        }
        public void Bark()
        {
            Console.WriteLine("멍멍");
        }
    }
    class Poodle : Dog
    {
        public Poodle()
        {
            base.kinds = "푸들";
            Console.WriteLine($"{kinds} Initialised: Eyes = {eyes}, Nose = {nose}, Mouth = {mouth}, Ears = {ears}");
        }

    }
    private static void Main(string[] args)
    {
        Dog a = new Dog();
        a.Bark();
        Poodle pd = new Poodle();

    }
}