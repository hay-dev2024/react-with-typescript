#include <stdio.h>

int Sum(int a, int b)
{
    return a + b;
}


int main()
{
    int (*func_ptr)(int, int);

    func_ptr = Sum;

    int result = func_ptr(10, 20);
    printf("Result: %d\n", result);

    return 0;
}
