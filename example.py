class Dog:
    species = "Canis Familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"My name is {self.name}"

    def speak(self):
        print(f"Woff Woff Woff!!! {self.age}")

class K9(Dog):
    def spake(self):
        print(super().speak())

footballers_goals = {'Eusebio': 120, 'Cruyff': 104, 'Pele': 150, 'Ronaldo': 132, 'Messi': 125}

sorted_footballers_by_goals = sorted(footballers_goals.items(), key=lambda x:x[1])
print(sorted_footballers_by_goals)


print('dasdfas', 'dfadfasdfa'.__contains__('ad'))


dog = K9('hello', 24)
dog.speak()
dog.spake()
