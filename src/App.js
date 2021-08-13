import React from 'react';
import './App.scss';
var marked = require('marked');

marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState(contentInit);

  return (
    <div className="App">
      <Editor markdown={text} setText={setText} />
      {/* <div id="Editor">
        <h3>My Markdown Previewer</h3>
        <textarea id="editor" name="text" row="10" value={text} onChange={(e) => setText(e.target.value) }></textarea>
    </div> */}
      <Previewer markdown={text} />
    </div>
  );
}

const Editor = (props) => {
  return (
    <div id="Editor">
        <h3 className="title">Markdown</h3>
        <textarea id="editor" name="text" row="10" value={props.markdown} onChange={(e) => props.setText(e.target.value) }></textarea>
    </div>
  )
}

const Previewer = (props) => {
  return (
    <div id="Previewer">
      <h3 className="title">Result</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer }),
        }}
        id="preview"
      ></div>
    </div>
  )
}

const contentInit = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
