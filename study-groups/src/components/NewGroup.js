import React from 'react';
import Dropzone from 'react-dropzone';
import xlsxParser from 'xlsx-parse-json';

const NewGroup = () => 
<Dropzone onDrop={acceptedFiles => 
    xlsxParser
        .onFileSelection(acceptedFiles[0])
        .then(data => {
            console.log('data: ', data);
        })
        }>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='newGroup__dropZone'>
            Drop file here
        </div>
      </div>
    </section>
  )}
</Dropzone>


export default NewGroup;