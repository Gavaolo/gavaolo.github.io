#include <iostream>

int addNumbers(int a, int b){
    return a+b;
}

int main(){
    std::cout << "Hello World!";
    std::cout << std::endl; // line break
    std::cout << "Hello World!" << std::endl;

    int a = 3;
    int b = 4;
    std::cout << a << " + " << b << " = " << a+b << std::endl;

    int c {5};
    int d {6};
    std::cout << c << " + " << d << " = " << addNumbers(c,d) << std::endl;

    std::string name1;
    std::cout << "Type your name: " << std::endl;
    std::cin >> name1;
    std::cout << "Hello " << name1 << "!" << std::endl;

    std::string name2;
    std::cout << "Type your name: " << std::endl;
    std::getline(std::cin, name2);   // take all the line in case of spaces
    std::cout << "Hello " << name2 << "!" << std::endl;

    std::string name3;
    std::string age;
    std::cout << "Type your name and age: " << std::endl;
    std::cin >> name3 >> age;   // multiple input
    std::cout << "Hello " << name3 << "!, You are " << age << " years old!" << std::endl;

    return 0;
}