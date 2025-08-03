#include <stdio.h>

struct Student {
        char name[10];
        int age;
        char grade;
};

int main()
{
    struct Student st1 = {"John", 30, 'A'};

    printf("Name: %s\n", st1.name);
    printf("Age: %d\n", st1.age);
    printf("Grade: %c\n", st1.grade);

    return 0;
}
