import React, {Component, useEffect, useRef, useState} from 'react';
import '../../ViewComponents/coursepage/course.css';
import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';
import {connect} from 'react-redux';
// import MDBFileupload from 'mdb-react-fileupload';
import './video.css';
import axios from 'axios';
import {FaFile, FaFileUpload, FaUpload} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
// import {Player} from 'video-react';

function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
  };
}

function Video(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const fileInputRef = useRef();
  const uploadModalRef = useRef();
  const uploadRef = useRef();
  const progressRef = useRef();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        // add a new property called invalid
        files[i]['invalid'] = true;
        // add to the same array so we can display the name of the file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        // set error message
        setErrorMessage('File type not permitted');
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
      handleFiles(files);
    }
  };
  const validateFile = (file) => {
    const validTypes = [
      // 'image/jpeg',
      // 'image/png',
      // 'image/gif',
      // 'image/x-icon',
      'video/mp4',
      'video/mpg',
      'audio/mp3',

    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };
  const fileSize = (size) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
      fileName
    );
  };
  const removeFile = (name) => {
    // find the index of the item
    // remove the item from array

    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    // update validFiles array
    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
    const unsupportedFileIndex = unsupportedFiles.findIndex(
      (e) => e.name === name
    );
    if (unsupportedFileIndex !== -1) {
      unsupportedFiles.splice(unsupportedFileIndex, 1);
      // update unsupportedFiles array
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };
  const fileInputClicked = () => {
    fileInputRef.current.click();
  };
  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };
  const closeUploadModal = () => {
    uploadModalRef.current.style.display = 'none';
  };
  const uploadFiles = () => {
    if (validFiles.length == 0) return;
    uploadModalRef.current.style.display = 'block';
    uploadRef.current.innerHTML = 'File(s) Uploading...';
    for (let i = 0; i < validFiles.length; i++) {
      const formData = new FormData();
      formData.append('image', validFiles[i]);
      formData.append('key', 'add your API key here');
      //   axios
      //     .post('https://api.imgbb.com/1/upload', formData, {
      //       onUploadProgress: (progressEvent) => {
      //         const uploadPercentage = Math.floor(
      //           (progressEvent.loaded / progressEvent.total) * 100
      //         );
      //         progressRef.current.innerHTML = `${uploadPercentage}%`;
      //         progressRef.current.style.width = `${uploadPercentage}%`;
      //         if (uploadPercentage === 100) {
      //           uploadRef.current.innerHTML = 'File(s) Uploaded';
      //           validFiles.length = 0;
      //           setValidFiles([...validFiles]);
      //           setSelectedFiles([...validFiles]);
      //           setUnsupportedFiles([...validFiles]);
      //         }
      //       },
      //     })
      //     .catch(() => {
      //       // If error, display a message on the upload modal
      //       uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
      //       // set progress bar background color to red
      //       progressRef.current.style.backgroundColor = 'red';
      //     });
    }
    uploadModalRef.current.style.display = 'none';
  };
  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

  return (
    <>
      <div className={'content'}>
        {/* <button className="file-upload-btn" onClick={() => uploadFiles()}>
          Upload selected files to the server
        </button> */}

        {/* <ReactPlayer
          volume={1}
          muted={props.lesson.settings.muted}
          controls={props.lesson.settings.controls}
          loop={props.lesson.settings.loop}
          url={props.lesson.lesson_url}
        /> */}
        <div
          className="big-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          {unsupportedFiles.length === 0 && validFiles.length ? (
            <Button variant="primary" onClick={() => uploadFiles()}>
              Upload Files
            </Button>
          ) : (
            ''
          )}
          {unsupportedFiles.length ? (
            <p>Please remove all unsupported files.</p>
          ) : (
            ''
          )}

          <div className="drop-container" onClick={fileInputClicked}>
            <div className="drop-message">
              {/* <FaFileUpload /> */}
              <FaUpload className="upload-icon"/>
              <br/>
              {/* <div className="upload-icon"></div> */}
              Drag & Drop files here or click to upload
            </div>
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              multiple
              onChange={filesSelected}
            />
          </div>
        </div>
        <div className="file-display-container">
          {selectedFiles.map((data, i) => (
            <div className="file-status-bar" key={i}>
              <div>
                {/* <div className="file-type-logo"></div> */}
                <FaFile className="file-type-logo"/>
                <div className="file-type">{fileType(data.name)}</div>
                <span
                  className={`file-name ${data.invalid ? 'file-error' : ''}`}
                >
                  {data.name}
                </span>
                <span className="file-size">({fileSize(data.size)})</span>{' '}
                {data.invalid && (
                  <span className="file-error-message">({errorMessage})</span>
                )}
              </div>
              <div
                className="file-remove"
                onClick={() => removeFile(data.name)}
              >
                X
              </div>
            </div>
          ))}
        </div>
        <div className="upload-modal" ref={uploadModalRef}>
          <div className="overlay"></div>
          <div className="close" onClick={() => closeUploadModal()}>
            X
          </div>
          <div className="progress-container">
            <span ref={uploadRef}></span>
            <div className="progress">
              <div className="progress-bar" ref={progressRef}></div>
            </div>
          </div>
        </div>
        {/* <div className={"video content"+props.view? 'margin-view':''}></div> */}
      </div>
    </>
  );
}
export default connect(mapStateToProps, null)(Video);
// export default Video;
