---
title: Markdown Test
lastmod: 2025-03-21
author: Hexandcube
description: This page is used for testing design elements for hexandcube.com. Also this is a description of a page.
noindex: true
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Paragraphs

This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nunc. Sed euismod, nisl eget
ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nunc. Sed euismod, nisl eget ultricies
ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nunc.

### Links

This is a [link to my website](https://hexandcube.com).

### Images

![Image](https://source.unsplash.com/user/hexandcube)

### Emphasis

*This text is in italics, or emphasized*

**This text is bold, or strongly emphasized**

### Strikethrough

~~Hexandcube is a cat~~ Hexandcube is a fox

### Emojis

:fox_face: :cat: :smile: :laughing: :blush: :smiley: :relaxed: :smirk: :heart_eyes: :kissing_heart: :kissing_closed_eyes:
:flushed:

### Ordered Lists

1. Buy bread
2. Buy milk
3. Buy eggs
4. Buy butter
5. AI ran out of ideas

### Unordered Lists

- Buy bread
- Buy milk
- Buy eggs
- Buy butter
- AI ran out of ideas

### Task Lists

- [x] Buy bread
- [x] Buy milk
- [ ] Buy eggs
- [ ] Buy butter
- [ ] AI ran out of ideas

### Tables

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1 | Row 1 | Row 1 |
| Row 2 | Row 2 | Row 2 |
| Row 3 | Row 3 | Row 3 |

### Code Blocks

This is an `inline code block`.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### Blockquotes

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisl
> ultricies nunc, eget ultricies nisl nisl eget nunc. Sed euismod, nisl eget ultricies ultrices, nunc nisl ultricies

### Horizontal rule

---

### Footnotes

Here's a simple footnote[^1], and here's a longer one[^bignote].

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

### Abbreviations

<abbr title="HyperText Markup Language">HTML</abbr> & <abbr title="Cascading Style Sheets">CSS</abbr>

### Definition Lists

Term 1

: Definition 1
with lazy continuation.

Term 2 with *inline markup*

: Definition 2
`{ some code, part of Definition 2 }`

: Definition 3
Part of Term 2

### Buttons

##### Standard buttons

{{< button >}}Default button{{</ button >}}
{{< button shadow="true">}}Shadow button{{</ button >}}

{{< button small="true">}}Small button{{</ button >}}
{{< button small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}


##### Disabled buttons

{{< button disabled="true">}}Default button{{</ button >}}
{{< button disabled="true" shadow="true">}}Shadow button{{</ button >}}

{{< button small="true" disabled="true">}}Small button{{</ button >}}
{{< button small="true" disabled="true" shadow="true">}}Shadow button{{</ button >}}

{{< button square="true" disabled="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button square="true" shadow="true" disabled="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button square="true" small="true" disabled="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button square="true" small="true" shadow="true" disabled="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

##### Accented buttons

**Orange Buttons**

{{< button variant="orange" >}}Default button{{</ button >}}
{{< button variant="orange" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="orange" small="true">}}Small button{{</ button >}}
{{< button variant="orange" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="orange" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="orange" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="orange" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="orange" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Green Buttons**

{{< button variant="green" >}}Default button{{</ button >}}
{{< button variant="green" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="green" small="true">}}Small button{{</ button >}}
{{< button variant="green" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="green" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="green" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="green" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="green" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Pink Buttons**

{{< button variant="pink" >}}Default button{{</ button >}}
{{< button variant="pink" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="pink" small="true">}}Small button{{</ button >}}
{{< button variant="pink" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="pink" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="pink" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="pink" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="pink" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Yellow Buttons**

{{< button variant="yellow" >}}Default button{{</ button >}}
{{< button variant="yellow" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="yellow" small="true">}}Small button{{</ button >}}
{{< button variant="yellow" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="yellow" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="yellow" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="yellow" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="yellow" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Blue Buttons**

{{< button variant="blue" >}}Default button{{</ button >}}
{{< button variant="blue" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="blue" small="true">}}Small button{{</ button >}}
{{< button variant="blue" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="blue" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="blue" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="blue" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="blue" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Red Buttons**

{{< button variant="red" >}}Default button{{</ button >}}
{{< button variant="red" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="red" small="true">}}Small button{{</ button >}}
{{< button variant="red" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="red" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="red" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="red" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="red" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Deep Blue Buttons**

{{< button variant="deepblue" >}}Default button{{</ button >}}
{{< button variant="deepblue" shadow="true">}}Shadow button{{</ button >}}

{{< button variant="deepblue" small="true">}}Small button{{</ button >}}
{{< button variant="deepblue" small="true" shadow="true">}}Small shadow button{{</ button >}}

{{< button variant="deepblue" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="deepblue" square="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="deepblue" square="true" small="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}
{{< button variant="deepblue" square="true" small="true" shadow="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

### Form elements

**Text input**

{{< input >}}Text Input{{</ input >}}
{{< input disabled="true">}}Disabled Text Input{{</ input >}}

**Text area**

{{< textarea >}}Text Area{{</ textarea >}}
{{< textarea disabled="true">}}Disabled Text Area{{</ textarea >}}

**Select**

<select class="input">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>

**Checkboxes**

{{< checkbox checked="true">}}Checkbox checked{{</ checkbox >}}
{{< checkbox >}}Checkbox unchecked{{</ checkbox >}}
{{< checkbox checked="true" disabled="true">}}Checkbox checked disabled{{</ checkbox >}}
{{< checkbox disabled="true">}}Checkbox unchecked disabled{{</ checkbox >}}

**Radio buttons**

{{< radio name="radio1" checked="true">}}Radio checked{{</ radio >}}
{{< radio name="radio1" >}}Radio unchecked{{</ radio >}}
{{< radio name="radio2" disabled="true" checked="true">}}Radio checked disabled{{</ radio >}}
{{< radio name="radio2" disabled="true">}}Radio unchecked disabled{{</ radio >}}

### Alerts

**Standard alerts**

{{< alert title="Standard Alert" icon="fa-solid fa-bell">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

**Accented alerts**

{{< alert title="Orange Alert" variant="orange" icon="fa-solid fa-circle-question">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Green Alert" variant="green" icon="fa-solid fa-circle-check">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Pink Alert" variant="pink" icon="fa-solid fa-circle-check">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Yellow Alert" variant="yellow" icon="fa-solid fa-triangle-exclamation">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Blue Alert" variant="blue" icon="fa-solid fa-circle-info">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Red Alert" variant="red" icon="fa-solid fa-circle-xmark">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Deep Blue Alert" variant="deepblue" icon="fa-solid fa-circle-check">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}
