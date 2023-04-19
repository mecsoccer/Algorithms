# Write a program to produce Fibonacci series in Python.

def fibonacci():
    fib = [1, 2]
    for num in range(0, 10):
        initial = fib[num]
        final = fib[num + 1]
        fib.append(initial + final)
    print(fib)

# Write a program in Python to check if a number is prime.


def check_if_prime(num):
    if num == 2:
        return True
    result = True
    for numb in range(1, num):
        temp = num - numb
        if temp % 2 == 0 or temp == 1:
            continue
        if num % temp == 0:
            result = False
            break

    return result

print(__name__)

if __name__ == "__main__":
    print(check_if_prime(53), type(56))
