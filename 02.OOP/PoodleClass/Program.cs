internal class Program
{
        public interface IAnimal
    {
        void Eat();
        void Sleep();
    }
    class Dog : IAnimal
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
        public virtual void Bark()
        {
            Console.WriteLine("멍멍");
        }
        public void Eat()
        {
            Console.WriteLine($"{kinds} is eating.");
        }
        public void Sleep()
        {
            Console.WriteLine($"{kinds} is in sleep.");
        }
    }
    class Poodle : Dog
    {
        public Poodle()
        {
            base.kinds = "푸들";
            Console.WriteLine($"{kinds} Initialised: Eyes = {eyes}, Nose = {nose}, Mouth = {mouth}, Ears = {ears}");
        }
        public override void Bark()
        {
            Console.WriteLine("왈왈");
        }
    }
    private static void Main(string[] args)
    {
        Dog a = new Dog();
        a.Bark();
        a.Eat();
        a.Sleep();
        
        // Poodle pd = new Poodle();
        // pd.Bark();
        // a = new Poodle();
        // a.Bark();
    }
}