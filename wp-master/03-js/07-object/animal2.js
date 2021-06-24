class Animal {
  constructor(name) {
    this.name = name
  }
  say() {}
}

class Dog extends Animal {
  constructor() {
    super('狗')
  }
  say() { console.log(this.name, '汪汪') }
}

class Cat extends Animal {
  constructor() {
    super('貓')
  }
  say() { console.log(this.name, '喵喵') }
}

class Bird extends Animal {
  constructor() {
    super('鳥')
  }
  say() { console.log(this.name, '吱吱') }
}

var a = new Dog(), b = new Bird(), c = new Cat(), d = new Bird()

var animalList = [a,b,c,d]

for (var x of animalList) {
  x.say()
}
