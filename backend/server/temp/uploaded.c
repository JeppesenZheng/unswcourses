#include <stdio.h>

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    // Incorrect logic: Output will always be positive
    if (number > 0) {
        printf("The number is positive.\n");
    } else if (number >= 0) { // Incorrect: ">= 0" should be just "== 0"
        printf("The number is zero.\n");
    } else {
        printf("The number is positive.\n"); // Incorrect: Should say "negative"
    }

    return 0;
}
