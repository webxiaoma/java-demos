---
sidebarDepth: 1
meta:
  - name: keywords
    content:  Java修饰符 Java 修饰符 
  - name: description
    content: 本文为Java修饰符
---

# Java修饰符


## Java常用修饰符

`Java`的修饰符用于定义类，修饰方法或变量

### 访问修饰符

- `default`  默认的，可以不写，不使用任何修饰符
- `public` 公共修饰符， 可以修饰：变量、方法和类，可以继承
- `protected` 受保护的修饰符, 对同一包内的类和所有子类可见。可以修饰：变量、方法。 **注意：不能修饰外部类，可以修饰内部类但不推荐这么写**
- `private` 私有访问修饰符，只能被所属类访问。可以修饰： 变量、方法。 **注意：不能修饰外部类，可以修饰内部类但不推荐这么写**

:::tip 继承提示
- 父类中声明为 `public` 的方法在子类中也必须为 `public`。
- 父类中声明为 `protected` 的方法在子类中要么声明为 `protected`，要么声明为 `public`，不能声明为 `private`。
- 父类中声明为 `private` 的方法，不能够被继承。
:::

### 非访问修饰符

- `static` 静态修饰符，用来修饰类方法和类变量 (不能将方法体内的局部变量声明为`static`)
- `final` 用来修饰类、方法和变量，`final` 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
- `abstract` 修饰符，用来创建抽象类和抽象方法。
<!-- - `synchronized`
- `volatile` -->