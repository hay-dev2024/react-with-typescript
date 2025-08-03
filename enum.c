#include <stdio.h>

enum Color {
    RED = 0,
    GREEN,
    BLUE,
};

int main()
{
    enum Color color = GREEN;

    printf("color: %d\n", color);

    return 0;
}
