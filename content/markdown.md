---
title: Markdown Test
date: 2023-04-26
author: Hexandcube
description: This page is used for testing design elements for hexandcube.eu.org. Also this is a description of a page.
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

This is a [link](https://hexandcube.eu.org) to my website.

### Images

![Image](https://source.unsplash.com/user/hexandcube)

### Emphasis

*This text is in italics, or emphasized*

**This text is bold, or strongly emphasized**

### Strikethrough

I ~~like~~ love foxes.

### Emojis

:fox: :cat: :smile: :laughing: :blush: :smiley: :relaxed: :smirk: :heart_eyes: :kissing_heart: :kissing_closed_eyes:
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

{ some code, part of Definition 2 }

Third paragraph of definition 2.


### Buttons

**Standard buttons**

{{< button >}}Standard button{{</ button >}}
{{< button square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="inverted">}}Inverted button{{</ button >}}
{{< button variant="inverted" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="disabled">}}Disabled button{{</ button >}}
{{< button variant="disabled" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

**Accented buttons**

{{< button variant="orange">}}Orange button{{</ button >}}
{{< button variant="orange" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="yellow">}}Yellow button{{</ button >}}
{{< button variant="yellow" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="blue">}}Blue button{{</ button >}}
{{< button variant="blue" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="green">}}Green button{{</ button >}}
{{< button variant="green" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

{{< button variant="red">}}Red button{{</ button >}}
{{< button variant="red" square="true">}}<i class="fa-solid fa-check-to-slot"></i>{{</ button >}}

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

{{< alert title="Inverted Alert" variant="inverted" icon="fa-solid fa-bell">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

**Accented alerts**

{{< alert title="Orange Alert" variant="orange" icon="fa-solid fa-circle-question">}}
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

{{< alert title="Green Alert" variant="green" icon="fa-solid fa-circle-check">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}

{{< alert title="Red Alert" variant="red" icon="fa-solid fa-circle-xmark">}}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam quam voluptatibus? Odio corporis, atque accusantium
voluptate, natus aliquid animi vitae laborum, consectetur ipsum dicta quia tenetur quis nam possimus!
{{</ alert >}}