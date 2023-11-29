import React, { useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import "monaco-vim";
import { initVimMode } from "monaco-vim";

function MonacoEditor() {
  // Specify the correct type for the editor reference
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  //   const vimMode = initVimMode(Editor, document.getElementById("my-statusbar"));

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // setup monaco-vim

    function mv() {
      const statusNode = document.querySelector(".status-node");
      initVimMode(editor, statusNode);
    }

    mv();
  };

  function showValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  return (
    <div className="w-full">
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        theme="vs-dark"
        options={{
          scrollBeyondLastLine: false,
          fontSize: 14,
        }}
      />
      <code className="status-node"></code>
    </div>
  );
}

export default MonacoEditor;
