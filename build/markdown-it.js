const { promisify } = require('util');
const argv = require('yargs').argv;
const fs = require('fs');
const fse = require('fs-extra');
const globAsync = promisify(require('glob'));
const MarkdownIt = require('markdown-it');
const path = require('path');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const md = new MarkdownIt({
  html: true,
  highlight: code => {
    if (code) {
      try {
        return hljs.highlightAuto(code).value;
      } catch (__) {}
    }
    // use external default escaping
    return '';
  },
});

const main = async ({ input, output }) => {
  try {
    let files = await globAsync(input);
    files.forEach(async file => {
      let inputPath = path.join(process.cwd(), file);
      let code = await readFileAsync(file, 'utf8');
      let outPath = path.join(
        process.cwd(),
        output,
        file.replace('.md', '.html'),
      );
      let content = md.render(code);
      await fse.ensureDir(path.dirname(outPath));
      let success = await writeFileAsync(outPath, content, 'utf8');
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

if (argv._.length !== 2) {
  console.error('USAGE: {input directory} {output directory}');
  console.error('Got arguments:', argv._);
  process.exit(1);
}

let [input, output] = argv._;
main({ input, output });
