#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    int* student;

    printf("학생수: ");
    scanf("%d", &num);

    student = (int*)malloc(sizeof(int) * num);

    if (student == NULL)
    {
        printf("메모리가 부족하다.\n");
        return 0;
    }

    printf("할당된 메모리 크기: %ld\n", sizeof(int) * num);
    free(student);

    return 0;
}
