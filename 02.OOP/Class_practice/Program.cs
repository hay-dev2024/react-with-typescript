internal class Program
{
    class Dog
    {
        private int eyes, nose, mouth, ears;
        public Dog()
        {
            eyes = 2;
            nose = 1;
            mouth = 1;
            ears = 2;
            Console.WriteLine($"Dog Initialised: Eyes = {eyes}, Nose = {nose}, Mouth = {mouth}, Ears = {ears}");
        }
        public void Bark()
        {
            Console.WriteLine("멍멍!");
        }
    }

    private static void Main(string[] args)
    {
        Dog a = new Dog();
        a.Bark();

    }
}