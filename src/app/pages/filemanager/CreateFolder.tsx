import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CreateNewFolder({ show, onHide }) {
    const [folderName, setFolderName] = useState('');

    // const handleNewFolderClick = () => {
    //     setShowModal(true);
    // };

    // const handleModalClose = () => {
    //     setShowModal(false);
    //     setFolderName(''); // Clear the folder name input
    // };

    // const handleFolderNameChange = (e) => {
    //     setFolderName(e.target.value);
    // };


    const handleCreateFolder = () => {
        // Define the folder name and any other data you need to send
        const newFolder = {
            name: folderName,
        };
            console.log(newFolder)
        // Perform the POST request to create the folder
        // fetch('https://api.example.com/folders', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newFolder),
        // }).then((response) => {
        //     if (response.ok) {
        //         // Folder created successfully
        //         return response.json();
        //     } else {
        //         throw new Error('Failed to create folder');
        //     }
        // }).then((createdFolder) => {
        //     // Handle the created folder data as needed
        //     console.log('Folder created:', createdFolder);

        //     // After creating the folder, close the modal
        //     setFolderName('');

        // }).catch((error) => {
        //     console.error('Error creating folder:', error);
        //     // Handle the error (e.g., display an error message)
        // });
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Create a New Folder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="folderName" className="form-label">
                            Folder Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="folderName"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleCreateFolder}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateNewFolder;
