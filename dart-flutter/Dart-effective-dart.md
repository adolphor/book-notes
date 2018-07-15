# 参考
* [Effective Dart](https://www.dartlang.org/guides/language/effective-dart)

# Effective Dart: Style

## Identifiers
* 使用驼峰形式命名
    - DO name types using UpperCamelCase.
* 库和文件名使用下划线分割形式命名
    - DO name libraries and source files using lowercase_with_underscores.
* 导入文件进行命名别名的时候，也使用下划线分割
    -DO name import prefixes using lowercase_with_underscores.
* 变量名使用首字母小写的驼峰形式命名
    -DO name other identifiers using lowerCamelCase.
* const 变量也使用首字母小写驼峰命名
    -PREFER using lowerCamelCase for constant names.
* 单词缩写尽量超过两个字符，这样看起来更像单词
    -DO capitalize acronyms and abbreviations longer than two letters like words.
## Ordering
* 导入的时候将dart官方库放在其他库的前面
    -DO place “dart:” imports before other imports.
* 将package包放在其他引入的前面
    -DO place “package:” imports before relative imports.
* 将自己的库放在官方库，以及第三方库的后面
    -PREFER placing “third-party” “package:” imports before other imports.
* exports 放在最后一个单独的区域
    -DO specify exports in a separate section after all imports.
* 其他地方按照alphabeti顺序排序
    - DO sort sections alphabetically.
## Formatting
* DO format your code using dartfmt.
* CONSIDER changing your code to make it more formatter-friendly.
* AVOID lines longer than 80 characters.
* DO use curly braces for all flow control structures.


# Effective Dart: Documentation

# Effective Dart: Usage

# Effective Dart: Design



