const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({
  html: true,
  highlight: (code) => {
    console.log(code);
    if (code) {
      try {
        return hljs.highlightAuto(code).value;
      } catch (__) {}
    }
    // use external default escaping
    return '';
  }
});
const code = `
# Hello World!

\`\`\`js
class MyClass extends OtherClass {
  constructor() {
    super();
  }
}
\`\`\`
`
const results = md.render(code);
console.log(results);
