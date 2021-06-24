class Animal {
  say() {}
}

class Dog extends Animal {
  say() { console.log('汪汪') }
}

class Cat extends Animal {
  say() { console.log('喵喵') }
}

class Bird extends Animal {
  say() { console.log('吱吱') }
}

var a = new Dog(), b = new Bird(), c = new Cat(), d = new Bird()

var animalList = [a,b,c,d]

for (var x of animalList) {
  x.say()
}
