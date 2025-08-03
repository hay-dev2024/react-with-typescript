#include <stdio.h>

int main()
{
    int a = 100;
    int* pA = &a;
    
    printf("a = %d\n", a);
    printf("&a = %p\n", &a);
    printf("pA = %p\n", pA);
    printf("*pA = %d\n", *pA);

    return 0;
}
