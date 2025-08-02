#include <stdio.h>

int main()
{
    int arr[] = {10, 20, 30};

    for (int i = 0; i < 3; i++)
    {
        printf("%p\n", &arr[i]);
    }
    printf("%p\n", arr);

    return 0;
}
