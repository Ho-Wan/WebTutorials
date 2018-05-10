---

## TESTING MARKDOWN

--

## Index

- [Headers](#headers)
- [Quotes](#Quotes)
- [Emphasis](#Emphasis)
- ...

---

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

---

## Quotes

> Quotes

> # Header 1 quote

---

## Emphasis

**Bold Sentence with asterix**

__Bold using underscores__

__*Bold with Italics*__

_Italics with underscore_

---

## Horizontal Rules

---

***

___

## Lists

- Item
- Another item
* Asterisk item
+ Plus item
    - Sublist
        - Another sublist

1. Item 1
2. Item 2
3. Item 3

---

## Links

www.bbc.com

https://github.com/Ho-Wan

<https://github.com/Ho-Wan>

[Custom Text - link to github](https://github.com/Ho-Wan)

[website]: https://github.com/Ho-Wan
[Link using website key][website]
[Another link using website key][website]

---

## Image

[vscode_img]:[https://upload.wikimedia.org/wikipedia/en/e/e9/VS_Code_%28Insiders%29.png]

![VS Code Rocks][vscode_img]

---

## Code

Inline code using `backticks`

Here is an example: `var item = {}`

blocks of code using 3 backticks:
```
var item = {};
item.something = "something else";
```

```javascript
var item = {};
item.something = "something else";
```

```html
<div>
    <p>This is html</p>
</div>
```

---

## Tables

| Header 1              | Header 2  | Header 3  |
| -                     | -         | -         |
| Column 1              | Column 2  | Column 3  |
| Column 1              | Column 2  | Column 3  |
| Column 1 ___________  | Column 2  | Column 3  |

---

| Header        | Header 1          | Header 2      |
| :-            | :-:               | -:            |
| Aligned left  | Aligned Center    | Aligned Right |

---

## Custom HTML

<h1> Header 1 with HTML </h1>

# Header 1 with MD

---

## Custom CSS

Testing custom CSS

<div>
<style>
    p {
        color: yellow
    }
</style>
</div>

---
