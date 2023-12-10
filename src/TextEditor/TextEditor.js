import { useState } from 'react';
import './TextEditor.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

const TextEditor = () => {

    const [value, setValue] = useState("");

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ],
            [{ 'code-block': { className: 'ql-syntax' } }],
            ["link", "image", "video"],
        ]
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 editor">
                    <ReactQuill
                        theme='snow'
                        value={value}
                        onChange={setValue}
                        modules={modules}
                        className='editor-input'
                    />
                </div>
                <div
                    className="col-6 preview"
                    dangerouslySetInnerHTML={{ __html: value }} />
            </div>
        </div>
    )
}

export default TextEditor;