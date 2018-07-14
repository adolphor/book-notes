
# Dart

[A Tour of the Dart Language](https://www.dartlang.org/guides/language/language-tour)

# Important concepts

* 所有的变量都是一个object对象，object 是 class 的实例，甚至 数字、方法和null都是对象。
所有对象都继承自 Object 类。
* Dart是强类型，但可以使用 var 机型类型推导。不指定类型的时候可以使用 dynamic。
* List<int>: int列表；List<dynamic>：任意类型列表
* Dart 支持顶层方法
* Dart 支持顶层变量
* 没有public等访问修饰符，如果以 "_" 开头，则只有当前lib可以访问
* Dart 区分了 expression 和 statement
* 两种警告类型：warnings 和 errors

# 1. Variables

三种声明方式：

```dart
var     name1 = 'Bob';
dynamic name2 = 'Bob';
String  name3 = 'Bob';
```

## Default value

未初始化的变量，默认值为null

```dart
int lineCount;
assert(lineCount == null);
```
## Final and const

* final 修饰符修饰的变量，只能赋值一次
* const 修饰符修饰的变量，在编译期就确定了它的值
* 使用 final、const 修饰符可以省略变量类型声明

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';

const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

# 2. Built-in types

* numbers
    - int
    - double
* strings
    - string
* booleans
    - bool
* lists (also known as arrays)
    - List
* maps
    - Map
* runes (for expressing Unicode characters in a string)
    
* symbols

## int & double
```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

## Strings

* string 使用 UTF-16 编码，可以使用单引号也可以使用双引号。
* 可以使用 `${expression}` 进行变量赋值
* 两个string进行连接可以使用 + ，也可以省略什么都不写，直接相连
* 使用 `'''` 或 `"""` 可以书写换行的Strings
* “raw” string by prefixing it with r

```dart
var s1 = 'String ' + 'concatenation' " works even over line breaks.";
assert(s1 == 'String concatenation works even over ' 'line breaks.');

  var s1 = '''
You can create
multi-line strings like this one.
''';

  var s2 = """This is also a
multi-line string.""";

var s = r"In a raw string, even \n isn't special.";

```

## Booleans

## List

```dart
var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);

var constantList = const [1, 2, 3];
```

## Maps

```dart
var gifts = {
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var gifts2 = Map();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

## Runes

runes are the UTF-32 code points of a string.

## Symbols


# 3. Functions

* 每个方法也是一个对象，数据类型是 Function。
* 如果一个方法只有一个expression，可以使用 `=>` 进行简写

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}

bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

## Optional parameters

### Optional named parameters

可以使用变量名指定参数，需要什么参数传递什么参数就行了。

```dart
main(List<String> arguments) {
  enableFlags(bold: true);
  enableFlags(hidden: true);
  enableFlags(bold: true, hidden: true);
}

void enableFlags({bool bold, bool hidden}) {
  print("bold => " + bold.toString());
  print("hidden => " + hidden.toString());
  print("--------------------");
}
```

### Optional positional parameters

```dart
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}

assert(say('Bob', 'Howdy') == 'Bob says Howdy');

assert(say('Bob', 'Howdy', 'smoke signal') == 'Bob says Howdy with a smoke signal');
```

### Default parameter values

默认参数值：

```dart
void enableFlags({bool bold = false, bool hidden = false}) {
  // ...
}

// bold will be true; hidden will be false.
enableFlags(bold: true);
```

## The main() function

* 返回值 void
* 有个可选参数： List<String>

## Functions as first-class objects

* 可以将方法作为参数传递，直接传递参数名
* 可以将方法赋值到一个对象（相当于将方法名提到了变量名？）

```dart
void printElement(int element) {
  print(element);
}
var list = [1, 2, 3];
// Pass printElement as a parameter.
list.forEach(printElement);


loudify1(msg){
  return '!!! ${msg.toUpperCase()} !!!';
}
loudify2(msg) => '!!! ${msg.toUpperCase()} !!!';
var loudify3 = (msg) => '!!! ${msg.toUpperCase()} !!!';

print(loudify1('hello'));
print(loudify2('hello'));
print(loudify3('hello'));
```

## Anonymous functions

```dart
var list = ['apples', 'bananas', 'oranges'];

list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});

list.forEach((item) => print('${list.indexOf(item)}: $item'));
```

## Lexical scope（作用域）

* 内层可以访问外层变量等数据，但反过来不行。

## Lexical closures（闭包）

有权访问另一个函数作用域内变量的函数都是闭包。[(注1)](https://www.cnblogs.com/qieguo/p/5457040.html)


```dart
/// Returns a function that adds [addBy] to the
/// function's argument.
Function makeAdder(num addBy) {
  return (num i) => addBy + i;
}

void main() {
  // Create a function that adds 2.
  var add2 = makeAdder(2);

  // Create a function that adds 4.
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}
```

# 4. Operators

Description	  | Operator
--------------|--------------
unary postfix | expr++    expr--    ()    []    .    ?.
unary prefix  | -expr    !expr    ~expr    ++expr    --expr   
multiplicative|	*    /    %  ~/
additive	  | +    -
shift	      | <<    >>
bitwise AND	  | &
bitwise XOR	  | ^
bitwise OR	  | \|
relational    | >= > <= < 
type test     | as is is!
equality	  | == !=   
logical AND	  | &&
logical OR	  | \|\|
if null	      | ??
conditional	  | expr1 ? expr2 : expr3
cascade	      | ..
assignment	  | =    *=    /=    ~/=    %=    +=    -=    <<=    >>=    &=    ^=  \|=    ??=

## Arithmetic operators

加减乘除，递增/递减

## Equality and relational operators

比较

## Type test operators

* as 类型转换
* 判断是此类型
* 判断非此类型

```dart
if (emp is Person) { // 类型判断
  emp.firstName = 'Bob';
}

(emp as Person).firstName = 'Bob'; // 类型转换
```

## Assignment operators

```dart
a = value;    // 将a赋值为value
b ??= value;  // 如果 b 为null，则将将b赋值为value
```

## Logical operators
```dart
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

## Bitwise and shift operators

## Conditional expressions

```dart
// 条件判断为true，执行 expr1，否则 expr2
condition ? expr1 : expr2

// 如果expr1不为空，执行expr1，否则 expr2
expr1 ?? expr2
```

```dart
var visibility = isPublic ? 'public' : 'private';
String playerName(String name) => name ?? 'Guest';
String playerName(String name) => name != null ? name : 'Guest';
String playerName(String name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}
```

## Cascade notation (..) (流式操作)

```dart
querySelector('#confirm') // Get an object.
  ..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));

var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));

final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```

## Other operators

# 5. Control flow statements

* if and else
* for loops
* while and do-while loops
* break and continue
* switch and case
* assert

# 6. Exceptions

Dart 所有的异常都是 非受检异常，有两种异常类型： Exception 和 Error。

## Throw

```dart
throw FormatException('Expected at least 1 section');
throw 'Out of llamas!';
void distanceTo(Point other) => throw UnimplementedError();
```
## Catch

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}


try {
  // ···
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
```

## Finally

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```

# 7. Classes

## Using class members

```dart
var p = Point(2, 2);
// Set the value of the instance variable y.
p.y = 3;
// If p is non-null, set its y value to 4.
p?.y = 4;
// Get the value of y.
assert(p.y == 3);
```

## Using constructors

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});

// The new keyword became optional in Dart 2.
var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});
```

## Getting an object’s type

调用对象的 runtimeType 属性就可获得：

```dart
print('The type of a is ${a.runtimeType}');
```
## Instance variables

```dart
class Point {
  num x; // Declare instance variable x, initially null.
  num y; // Declare y, initially null.
  num z = 0; // Declare z, initially 0.
}
```

## Constructors

```dart
class Point {
  num x, y;
  Point(num x, num y) {
    // There's a better way to do this, stay tuned.
    this.x = x;
    this.y = y;
  }
}

class Point {
  num x, y;
  // Syntactic sugar for setting x and y
  // before the constructor body runs.
  Point(this.x, this.y);
}
```

### Default constructors
默认有个无参构造函数

### Constructors aren’t inherited
构造函数不能继承

### Named constructors

```dart
class Point {
  num x, y;

  Point(this.x, this.y);

  // Named constructor
  Point.origin() {
    x = 0;
    y = 0;
  }
}
```

### Invoking a non-default superclass constructor

构造方法执行顺序：

1. initializer list
2. superclass’s no-arg constructor
3. main class’s no-arg constructor

```dart
class Person {
  String firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person does not have a default constructor;
  // you must call super.fromJson(data).
  Employee.fromJson(Map data) : super.fromJson(data) {
    print('in Employee');
  }
}

main() {
  var emp = new Employee.fromJson({});

  // Prints:
  // in Person
  // in Employee
  if (emp is Person) {
    // Type check
    emp.firstName = 'Bob';
  }
  (emp as Person).firstName = 'Bob';
}
```

### Initializer list

```dart
class Person {
  String firstName;
  String lastName;

  // 初始化列表
  Person.fromJson1(Map<String, String> data)
      : firstName = data['firstName'],
        lastName = data['lastName'] {
    print("in Person constructor 1");
  }

  // 和上面的方式有什么区别？
  Person.fromJson2(Map<String, String> data) {
    firstName = data['firstName'];
    lastName = data['lastName'];
    print("in Person constructor 2");
  }
}

class Employee extends Person {
  int salary;

  Employee.fromJson(Map<String, String> data) : super.fromJson1(data) {
    print('in Employee');
  }
}

main() {
  var data = {"firstName": "Bob", "lastName": "Zhu"};
  var emp = new Employee.fromJson(data);

  Person p = emp;
  // 类型判断的时候，自动进行类型转换
  if (p is Employee) {
    p.salary = 999;
  }

}

```

### Redirecting constructors

```dart
class Point {
  num x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(num x) : this(x, 0);
}
```

### Constant constructors

* static 的作用？
* final 的作用？
* const 的作用？

```dart
class ImmutablePoint {
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);

  final num x, y;

  const ImmutablePoint(this.x, this.y);
}
```

### Factory constructors

构造方法前加上 'factory' 关键字，可以从缓存中获取实例，或者返回子类的实例。


## Methods

### Instance methods

常规方法

### Getters and setters

直接使用 get 和 set 关键字，另外，get有返回值：

```dart
class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  num get right => left + width;
  set right(num value) => left = value - width;
  num get bottom => top + height;
  set bottom(num value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```

### Abstract methods

常规抽象方法

## Abstract classes

常规抽象类

## Implicit interfaces

* 使用 `implements` 关键字进行继承。
* 接口的声明不需要关键字么？和普通类有什么区别？

## Extending a class

使用 `extends` 关键字进行继承

### Overriding members

使用 `@override` 进行方法的覆写

### Overridable operators

操作符重载？

```dart
class Vector {
  final int x, y;
  Vector(this.x, this.y);
  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}
```

### noSuchMethod()

有默认的实现，可进行覆写。当调用的方法不存在的时候会执行。

## Enumerated types

枚举类

### Using enums

使用 `enum` 关键字

```dart
enum Color { red, green, blue }

void main() {
  // 有默认下标值
  assert(Color.red.index == 0);
  assert(Color.green.index == 1);
  assert(Color.blue.index == 2);

  // 可以用下标访问
  List<Color> colors = Color.values;
  assert(colors[2] == Color.blue);

  var aColor = Color.blue;

  // 可以使用switch
  switch (aColor) {
    case Color.red:
      print('Red as roses!');
      break;
    case Color.green:
      print('Green as grass!');
      break;
    default: // Without this, you see a WARNING.
      print(aColor); // 'Color.blue'
  }
}
```

## Adding features to a class: mixins

使用 `with` 关键字。

* 没看懂，为了多继承？还是多级继承？

## Class variables and methods

Use the `static` keyword to implement class-wide variables and methods.

### Static variables

静态变量不需要类实例就可以进行调用。

```dart
class Queue {
  static const initialCapacity = 16;
}
void main() {
  assert(Queue.initialCapacity == 16);
}
```
### Static methods

静态方法也不需要类实例，所以不能接收 `this` 参数。

# 8. Generics

## Using collection literals

List 和 Map 初始化范例，泛型限制放在初始化数据前面：

```dart
var names = <String>['Seth', 'Kathy', 'Lars'];
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```
## Using parameterized types with constructors

如果调用构造方法，那么需要将泛型限制放在类名后面：

```dart
void main() {
  var names = List<String>();
  names.addAll(['Seth', 'Kathy', 'Lars']);
  var nameSet = Set<String>.from(names);
  // The following code creates a map that has integer keys and values of type View:
  var views = Map<int, View>();
}
```

## Generic collections and the types they contain

可以将泛型算作类型的一部分？

```dart
void main() {
  var names = List<String>();
  names.addAll(['Seth', 'Kathy', 'Lars']);
  print(names is List<String>); // true
}
```

## Restricting the parameterized type

泛型范围限制，和Java类似：

```dart
class Foo<T extends SomeBaseClass> {
  // Implementation goes here...
  String toString() => "Instance of 'Foo<$T>'";
}

class Extender extends SomeBaseClass {
  // ...
}
```

## Using generic methods

更多资料参考：[Using Generic Methods](https://github.com/dart-lang/sdk/blob/master/pkg/dev_compiler/doc/GENERIC_METHODS.md)

```dart
void main() {
  T first<T>(List<T> ts) {
    // Do some initial work or error checking, then...
    T tmp = ts[0];
    // Do some additional checking or processing...
    return tmp;
  }
}
```

# 9. Libraries and visibility

# 10. Asynchrony support

# 11. Generators

# 12. Callable classes








