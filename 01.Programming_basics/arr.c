#include <stdio.h>

int main()
{
    int arr1[3] = {1, 2, 3};
    int arr2[3];

    for (int i = 0; i < 3; i++)
    {
        arr2[i] = arr1[i];
    }
    for (int i = 0; i < 3; i++)
    {
        printf("arr2[%d] = %d\n", i, arr2[i]);
    }


/*
    int arr[3] = {1, 2, 3};
    int total = 0;

    for (int i = 0; i < 3; i++)
    {
        total += arr[i];
    }
    printf("total = %d\n", total);


    int arr[3];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;

    for (int i = 0; i < 3; i++)
    {
        printf("arr[%d] = %d\n", i, arr[i]);
    }
*/
    return 0;
}
