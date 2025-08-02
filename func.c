#include <stdio.h>

int Sum(int a, int b)
{
    return a + b;
}

int main()
{
    int a = 20;
    int b = 10;

    int sum = Sum(a, b);
    printf("a + b = %d\n", sum);

    return 0;
}
