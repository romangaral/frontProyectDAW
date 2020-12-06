import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'draft-js/dist/Draft.css';
import './myEditor.css';

function BlockControls({ toggleBlockStyle, toggleInlineStyle }) {
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            <button type="button" onClick={() => toggleBlockStyle('header-one')}>H1</button>
            <button type="button" onClick={() => toggleBlockStyle('header-two')}>H2</button>
            <button type="button" onClick={() => toggleBlockStyle('header-three')}>H3</button>
            <button type="button" onClick={() => toggleBlockStyle('header-four')}>H4</button>
            <button type="button" onClick={() => toggleBlockStyle('header-five')}>H5</button>
            <button type="button" onClick={() => toggleBlockStyle('header-six')}>H6</button>
            <button type="button" onClick={() => toggleBlockStyle('unordered-list-item')}>UL</button>
            <button type="button" onClick={() => toggleBlockStyle('ordered-list-item')}>OL</button>
            <button type="button" onClick={() => toggleBlockStyle('blockquote')}> " "</button>
            <button type="button" onClick={() => toggleInlineStyle('BOLD')}>B</button>
            <button type="button" onClick={() => toggleInlineStyle('UNDERLINE')}>U</button>
            <button type="button" onClick={() => toggleInlineStyle('ITALIC')}>I</button>
            </div>
        </div>
    </div>
    );
}


function MyEditor() {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )
    //Para pasar el texto a html y guardar en Base de datos
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    
    const toggleBlockStyle = (newStyle) => {
        setEditorState(RichUtils.toggleBlockType(editorState, newStyle));
    }
    const toggleInlineStyle = (newStyle) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, newStyle));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <BlockControls toggleBlockStyle={toggleBlockStyle} toggleInlineStyle={toggleInlineStyle} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Editor
                        className="container-fluid"
                        placeholder="Escribe tu nuevo post..."
                        textAlignment="left"
                        editorState={editorState}
                        onChange={editorState => setEditorState(editorState)}
                    />
                </div>
            </div>
        </div>
    );
}
export default MyEditor;