
import {useRef} from 'react'
import {Editor} from '@tinymce/tinymce-react'
// import { format } from 'path/posix';

function EditorComp() {
    let editorRef = useRef(null);
    const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent({format: 'text'}));
     }
   };
  return (
    <div>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | placeholder | help',
           setup: function(editor){
            editor.ui.registry.addMenuButton('placeholder', {
              text: 'Placeholder',
              fetch: function (callback) {
                var items = [
                  {
                    type: 'menuitem',
                    text: 'Candidate Full Name',
                    onAction: function (_) {
                      editor.insertContent( '<p>Sarthak Malhotra</p>' );
                    }
                  },
                  {
                    type: 'menuitem',
                    text: 'Candidate City',
                    onAction: function (_) {
                      editor.insertContent( '<p>Delhi</p>' );
                    }
                  },
                  {
                    type: 'menuitem',
                    text: 'Recruiter Name',
                    onAction: function (_) {
                      editor.insertContent( '<p>Riki</p>' );
                    }
                  },
                  {
                    type: 'menuitem',
                    text: 'Interviewer Full Name',
                    onAction: function (_) {
                      editor.insertContent( '<p>Ash Chauhan</p>' );
                    }
                  },
                ];
                callback(items);
              }
            });
           },
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
       <button onClick={log}>Log editor content</button>
    </div>
  )
}

export default EditorComp

