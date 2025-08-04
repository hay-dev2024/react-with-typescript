internal class Program
{
    public interface Call
    {
        void callPhone();
    }
    public interface Text
    {
        void sms();
    }
    public interface Wifi
    {
        void wifi();
    }
    class SmartPhone : Call, Text, Wifi
    {
        public void callPhone()
        {
            Console.WriteLine("전화걸기");
        }
        public void sms()
        {
            Console.WriteLine("문자보내기");
        }
        public void wifi()
        {
            Console.WriteLine("와이파이연결하기");
        }
    }
    private static void Main(string[] args)
    {
        SmartPhone sp = new SmartPhone();
        sp.callPhone();
        sp.sms();
        sp.wifi();
    }
}