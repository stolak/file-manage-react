
import React, { useState, useEffect, useRef  } from 'react';
import { Link, useParams} from 'react-router-dom'


const Files = () => {
    const { folderId } = useParams();
    const isChecked = true;
    const initialState: Array<{ name: string; size: number; lastModified: string }> = [];
    const [files, setFiles] = useState(initialState);
    const [folderFiles, setFolderFiles] = useState([{
        name: 'file1.jpeg',
        size: 25,
        lastModified: '2023-10-23',
      },{
        name: 'file2.jpeg',
        size: 43,
        lastModified: '2023-10-23',
      },{
        name: 'file3.jpeg',
        size: 789,
        lastModified: '2023-10-23',
      }]);

      const formatDateToYYYYMMDD = (date) =>{
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
      console.log(`${year}-${month}-${day}`)
        return `${year}-${month}-${day}`;
      }
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null); // Initialize the ref with null
    const handleRemoveFile = (index:any) => {
console.log("folderid:...",folderId,)
       const arr= files.filter(file =>file.name !==index);
       setFiles(arr);
      };
      const handleRemoveFolderFile = (index:any) => {

        console.log('removing:', index)
       const arr= folderFiles.filter(file =>file.name !==index);
       setFolderFiles(arr);
       console.log(arr);
      };

      const handleRemoveAll = () => {
        setFiles([])
      };
      const handleUploadAll = () => {
    
          // Update the state to include the new files
          setFolderFiles([...folderFiles, ...files]);
          handleRemoveAll()
       console.log("Upload logic...");
      };
      const handleUploadFile = (index:any) => {
        const [newFile] = files.filter(file => file.name === index);
        setFolderFiles([...folderFiles, newFile]);
        handleRemoveFile(newFile.name);
        console.log("Upload logic...");
      };
  const handleButtonClick = () => {
    if (fileInputRef.current) { 
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // You can now work with the selected file, e.g., upload it to a server
      setFiles([...files, {
        name: selectedFile.name,
        size: Math.floor((selectedFile.size) / 1024),
        lastModified:formatDateToYYYYMMDD(new Date(selectedFile.lastModified)),
      }]);
      
      console.log('Selected file:', files);
    }
  };
    const handleFileBrower = (event) => {
        setFiles(event.target.value);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            console.log('====================================');
            console.log("Folder to sent to backend", files);
            console.log('====================================');

            
            setIsSubmitting(false);
           

        } catch (error) {
            // Handle network or other errors
            console.error(error);
        }
    };

  
       



    // const toggleSpinnerVisibility

    return (
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            {/* <!--begin::Content wrapper--> */}
            <div className="d-flex flex-column flex-column-fluid">
                {/* <!--begin::Toolbar--> */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* <!--begin::Toolbar container--> */}
                    <div id="kt_app_toolbar_container"
                        className="app-container container-xxl d-flex flex-stack">

                        {/* <!--begin::Actions--> */}
                        <div className="d-flex align-items-center gap-2 gap-lg-3">
                            {/* <!--begin::Filter menu--> */}
                            <div className="m-0">
                                {/* <!--begin::Menu toggle--> */}
                                <a href="#" className="btn btn-sm btn-flex btn-secondary fw-bold"
                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>Filter</a>
                                {/* <!--end::Menu toggle--> */}
                                {/* <!--begin::Menu 1--> */}
                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                    data-kt-menu="true" id="kt_menu_64b0bed8daf30">
                                    {/* <!--begin::Header--> */}
                                    <div className="px-7 py-5">
                                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                    </div>
                                    {/* <!--end::Header--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator border-gray-200"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Form--> */}
                                    <div className="px-7 py-5">
                                        {/* <!--begin::Input group--> */}
                                        <div className="mb-10">
                                            {/* <!--begin::Label--> */}
                                            <label className="form-label fw-semibold">Status:</label>
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Input--> */}
                                            <div>
                                                <select className="form-select form-select-solid"
                                                    data-kt-select2="true"
                                                    data-close-on-select="false"
                                                    data-placeholder="Select option"
                                                    data-dropdown-parent="#kt_menu_64b0bed8daf30"
                                                    data-allow-clear="true">
                                                    <option></option>
                                                    <option value="1">Approved</option>
                                                    <option value="2">Pending</option>
                                                    <option value="2">In Process</option>
                                                    <option value="2">Rejected</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Input--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div className="mb-10">
                                            {/* <!--begin::Label--> */}
                                            <label className="form-label fw-semibold">Member Type:</label>
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Options--> */}
                                            <div className="d-flex">
                                                {/* <!--begin::Options--> */}
                                                <label
                                                    className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                    <input className="form-check-input" type="checkbox"
                                                        value="1" />
                                                    <span className="form-check-label">Author</span>
                                                </label>
                                                {/* <!--end::Options--> */}
                                                {/* <!--begin::Options--> */}
                                                <label
                                                    className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="checkbox"
                                                        value={2} checked={isChecked} />
                                                    <span className="form-check-label">Customer</span>
                                                </label>
                                                {/* <!--end::Options--> */}
                                            </div>
                                            {/* <!--end::Options--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Input group--> */}
                                        <div className="mb-10">
                                            {/* <!--begin::Label--> */}
                                            <label className="form-label fw-semibold">Notifications:</label>
                                            {/* <!--end::Label--> */}
                                            {/* <!--begin::Switch--> */}
                                            <div
                                                className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    name="notifications" checked={isChecked} />
                                                <label className="form-check-label">Enabled</label>
                                            </div>
                                            {/* <!--end::Switch--> */}
                                        </div>
                                        {/* <!--end::Input group--> */}
                                        {/* <!--begin::Actions--> */}
                                        <div className="d-flex justify-content-end">
                                            <button type="reset"
                                                className="btn btn-sm btn-light btn-active-light-primary me-2"
                                                data-kt-menu-dismiss="true">Reset</button>
                                            <button type="submit" className="btn btn-sm btn-primary"
                                                data-kt-menu-dismiss="true">Apply</button>
                                        </div>
                                        {/* <!--end::Actions--> */}
                                    </div>
                                    {/* <!--end::Form--> */}
                                </div>
                                {/* <!--end::Menu 1--> */}
                            </div>
                            {/* <!--end::Filter menu--> */}
                            {/* <!--begin::Secondary button--> */}
                            {/* <!--end::Secondary button--> */}
                            {/* <!--begin::Primary button--> */}
                            <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal"
                                data-bs-target="#kt_modal_create_app">Create</a>
                            {/* <!--end::Primary button--> */}
                        </div>
                        {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Toolbar container--> */}
                </div>
                {/* <!--end::Toolbar--> */}
                {/* <!--begin::Content--> */}
                <div id="kt_app_content" className="app-content flex-column-fluid">
                    {/* <!--begin::Content container--> */}
                    <div id="kt_app_content_container" className="app-container container-xxl">
                        {/* <!--begin::Card--> */}
                        <div
                            className="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
                            style={{
                                backgroundSize: 'auto calc(100% + 10rem)',
                                backgroundPositionX: '100%',
                                backgroundImage: "url('assets/media/illustrations/sketchy-1/4.png')"
                            }}
                        >
                            {/* <!--begin::Card header--> */}
                            <div className="card-header pt-10">
                                <div className="d-flex align-items-center">
                                    {/* <!--begin::Icon--> */}
                                    <div className="symbol symbol-circle me-5">
                                        <div
                                            className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
                                            <i className="ki-duotone ki-abstract-47 fs-2x text-primary">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Title--> */}
                                    <div className="d-flex flex-column">
                                        <h2 className="mb-1">File Manager</h2>
                                        <div className="text-muted fw-bold">
                                            <a href="#">Keenthemes</a>
                                            <span className="mx-3">|</span>
                                            <a href="#">File Manager</a>
                                            <span className="mx-3">|</span>2.6 GB
                                            <span className="mx-3">|</span>758 items
                                        </div>
                                    </div>
                                    {/* <!--end::Title--> */}
                                </div>
                            </div>
                            {/* <!--end::Card header--> */}
                            {/* <!--begin::Card body--> */}
                            <div className="card-body pb-0">
                                {/* <!--begin::Navs--> */}
                                <div className="d-flex overflow-auto h-55px">
                                    <ul
                                        className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-semibold flex-nowrap">
                                        {/* <!--begin::Nav item--> */}
                                        <li className="nav-item">
                                            <a className="nav-link text-active-primary me-6 active"
                                                href="#">Files</a>
                                        </li>
                                        {/* <!--end::Nav item--> */}
                                        {/* <!--begin::Nav item--> */}
                                        <li className="nav-item">
                                            <a className="nav-link text-active-primary me-6"
                                                href="#">Settings</a>
                                        </li>
                                        {/* <!--end::Nav item--> */}
                                    </ul>
                                </div>
                                {/* <!--begin::Navs--> */}
                            </div>
                            {/* <!--end::Card body--> */}
                        </div>
                        {/* <!--end::Card--> */}
                        {/* <!--begin::Card--> */}
                        <div className="card card-flush">
                            {/* <!--begin::Card header--> */}
                            <div className="card-header pt-8">
                                <div className="card-title">
                                    {/* <!--begin::Search--> */}
                                    <div className="d-flex align-items-center position-relative my-1">
                                        <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                        <input type="text" data-kt-filemanager-table-filter="search"
                                            className="form-control form-control-solid w-250px ps-15"
                                            placeholder="Search Files & Folders" />
                                    </div>
                                    {/* <!--end::Search--> */}
                                </div>
                                {/* <!--begin::Card toolbar--> */}
                                <div className="card-toolbar">
                                    {/* <!--begin::Toolbar--> */}
                                    <div className="d-flex justify-content-end"
                                        data-kt-filemanager-table-toolbar="base">

                                        {/* <!--begin::Export--> */}

                                        {/* <!--end::Export--> */}
                                        {/* <!--begin::Add customer--> */}
                                        <button type="button" className="btn btn-flex btn-primary"
                                            data-bs-toggle="modal" data-bs-target="#kt_modal_upload">
                                            <i className="ki-duotone ki-folder-up fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>Upload Files</button>
                                        {/* <!--end::Add customer--> */}
                                    </div>
                                    {/* <!--end::Toolbar--> */}
                                    {/* <!--begin::Group actions--> */}
                                    <div className="d-flex justify-content-end align-items-center d-none"
                                        data-kt-filemanager-table-toolbar="selected">
                                        <div className="fw-bold me-5">
                                            <span className="me-2"
                                                data-kt-filemanager-table-select="selected_count"></span>Selected
                                        </div>
                                        <button type="button" className="btn btn-danger"
                                            data-kt-filemanager-table-select="delete_selected">Delete
                                            Selected</button>
                                    </div>
                                    {/* <!--end::Group actions--> */}
                                </div>
                                {/* <!--end::Card toolbar--> */}
                            </div>
                            {/* <!--end::Card header--> */}
                            {/* <!--begin::Card body--> */}
                            <div className="card-body">
                                {/* <!--begin::Table header--> */}
                                <div className="d-flex flex-stack">
                                    {/* <!--begin::Folder path--> */}
                                    <div className="badge badge-lg badge-light-primary">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <i className="ki-duotone ki-abstract-32 fs-2x text-primary me-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            <a href="#">Home</a>
                                            <i className="ki-duotone ki-right fs-2x text-primary mx-1"></i>
                                            <Link to="/dashboard">Folders</Link>
                                            <i className="ki-duotone ki-right fs-2x text-primary mx-1"></i>Files
                                        </div>
                                    </div>
                                    {/* <!--end::Folder path--> */}
                                    {/* <!--begin::Folder Stats--> */}
                                    <div className="badge badge-lg badge-primary">
                                        <span id="kt_file_manager_items_counter">{folderFiles.length} items</span>
                                    </div>
                                    {/* <!--end::Folder Stats--> */}
                                </div>
                                {/* <!--end::Table header--> */}
                                {/* <!--begin::Table--> */}
                                <table id="kt_file_manager_list" data-kt-filemanager-table="files"
                                    className="table align-middle table-row-dashed fs-6 gy-5">
                                    <thead>
                                        <tr
                                            className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="w-10px pe-2">
                                                <div
                                                    className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                    <input className="form-check-input" type="checkbox"
                                                        data-kt-check="true"
                                                        data-kt-check-target="#kt_file_manager_list .form-check-input"
                                                        value="1" />
                                                </div>
                                            </th>
                                            <th className="min-w-250px">Name</th>
                                            <th className="min-w-10px">Size</th>
                                            <th className="min-w-125px">Last Modified</th>
                                            <th className="w-125px"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                    {folderFiles.map((file, index) => (<>
                                                    <React.Fragment key={index}></React.Fragment>
                                        <tr>
                                            <td>
                                                <div
                                                    className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="checkbox"
                                                        value="1" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className="ki-duotone ki-files fs-2x text-primary me-4"></i>
                                                    <a href="#"
                                                        className="text-gray-800 text-hover-primary">{file.name}</a>
                                                </div>
                                            </td>
                                            <td>{file.size} kb</td>
                                            <td>{file.lastModified}</td>
                                            <td className="text-end"
                                                data-kt-filemanager-table="action_dropdown">
                                                <div className="d-flex justify-content-end">
                                                    {/* <!--begin::Share link--> */}
                                                    <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                        <button type="button"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end">
                                                            <i className="ki-duotone ki-fasten fs-5 m-0">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </button>
                                                        {/* <!--begin::Menu--> */}
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                                                            data-kt-menu="true">
                                                            {/* <!--begin::Card--> */}
                                                            <div className="card card-flush">
                                                                <div className="card-body p-5">
                                                                    {/* <!--begin::Loader--> */}
                                                                    <div className="d-flex"
                                                                        data-kt-filemanger-table="copy_link_generator">
                                                                        {/* <!--begin::Spinner--> */}
                                                                        <div className="me-5"
                                                                            data-kt-indicator="on">
                                                                            <span
                                                                                className="indicator-progress">
                                                                                <span
                                                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                            </span>
                                                                        </div>
                                                                        {/* <!--end::Spinner--> */}
                                                                        {/* <!--begin::Label--> */}
                                                                        <div className="fs-6 text-dark">
                                                                            Generating Share Link...</div>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Loader--> */}
                                                                    {/* <!--begin::Link--> */}
                                                                    <div className="d-flex flex-column text-start d-none"
                                                                        data-kt-filemanger-table="copy_link_result">
                                                                        <div className="d-flex mb-3">
                                                                            <i
                                                                                className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                            <div className="fs-6 text-dark">
                                                                                Share Link Generated</div>
                                                                        </div>
                                                                        <input type="text"
                                                                            className="form-control form-control-sm"
                                                                            value="https://path/to/file/or/folder/" />
                                                                        <div
                                                                            className="text-muted fw-normal mt-2 fs-8 px-3">
                                                                            Read only.
                                                                            <a href="../../demo1/dist/apps/file-manager/settings/.html"
                                                                                className="ms-2">Change
                                                                                permissions</a>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--end::Link--> */}
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Card--> */}
                                                        </div>
                                                        {/* <!--end::Menu--> */}
                                                    </div>
                                                    {/* <!--end::Share link--> */}
                                                    {/* <!--begin::More--> */}
                                                    <div className="ms-2">
                                                        <button type="button"
                                                            className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end">
                                                            <i className="ki-duotone ki-dots-square fs-5 m-0">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                                <span className="path4"></span>
                                                            </i>
                                                        </button>
                                                        {/* <!--begin::Menu--> */}
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                                                            data-kt-menu="true">
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Download
                                                                    File</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-filemanager-table="rename">Rename</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-filemanager-table-filter="move_row"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_move_to_folder">Move
                                                                    to folder</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a onClick={() => handleRemoveFolderFile(file.name)}
                                                                    className="menu-link text-danger px-3"
                                                                    data-kt-filemanager-table-filter="delete_row">Delete</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                        </div>
                                                        {/* <!--end::Menu--> */}
                                                    </div>
                                                    {/* <!--end::More--> */}
                                                </div>
                                            </td>
                                        </tr>
                                        </>
                                    ))
}
                                    </tbody>
                                </table>
                                {/* <!--end::Table--> */}
                            </div>
                            {/* <!--end::Card body--> */}
                        </div>
                        {/* <!--end::Card--> */}
                        {/* <!--begin::Upload template--> */}
                        <table className="d-none">
                            <tr id="kt_file_manager_new_folder_row" data-kt-filemanager-template="upload">
                                <td></td>
                                <td id="kt_file_manager_add_folder_form" className="fv-row">
                                    <div className="d-flex align-items-center">
                                        {/* <!--begin::Folder icon--> */}
                                        <span id="kt_file_manager_folder_icon">
                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        {/* <!--end::Folder icon--> */}
                                        {/* <!--begin:Input--> */}
                                        <input type="text" name="new_folder_name"
                                            placeholder="Enter theggg folder name"
                                            className="form-control mw-250px me-3" />
                                        {/* <!--end:Input--> */}
                                        {/* <!--begin:Submit button--> */}
                                        <button className="btn btn-icon btn-light-primary me-3"
                                            id="kt_file_manager_add_folder">
                                            <span className="indicator-label">
                                                <i className="ki-duotone ki-check fs-1"></i>
                                            </span>
                                            <span className="indicator-progress">
                                                <span
                                                    className="spinner-border spinner-border-sm align-middle"></span>
                                            </span>
                                        </button>
                                        {/* <!--end:Submit button--> */}
                                        {/* <!--begin:Cancel button--> */}
                                        <button className="btn btn-icon btn-light-danger"
                                            id="kt_file_manager_cancel_folder">
                                            <span className="indicator-label">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </span>
                                            <span className="indicator-progress">
                                                <span
                                                    className="spinner-border spinner-border-sm align-middle"></span>
                                            </span>
                                        </button>
                                        {/* <!--end:Cancel button--> */}
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        {/* <!--end::Upload template--> */}
                        {/* <!--begin::Rename template--> */}
                        <div className="d-none" data-kt-filemanager-template="rename">
                            <div className="fv-row">
                                <div className="d-flex align-items-center">
                                    <span id="kt_file_manager_rename_folder_icon"></span>
                                    <input type="text" id="kt_file_manager_rename_input"
                                        name="rename_folder_name" placeholder="Enter the new folder name"
                                        className="form-control mw-250px me-3" value="" />
                                    <button className="btn btn-icon btn-light-primary me-3"
                                        id="kt_file_manager_rename_folder">
                                        <i className="ki-duotone ki-check fs-1"></i>
                                    </button>
                                    <button className="btn btn-icon btn-light-danger"
                                        id="kt_file_manager_rename_folder_cancel">
                                        <span className="indicator-label">
                                            <i className="ki-duotone ki-cross fs-1">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        <span className="indicator-progress">
                                            <span
                                                className="spinner-border spinner-border-sm align-middle"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!--end::Rename template--> */}
                        {/* <!--begin::Action template--> */}
                        <div className="d-none" data-kt-filemanager-template="action">
                            <div className="d-flex justify-content-end">
                                {/* <!--begin::Share link--> */}
                                <div className="ms-2" data-kt-filemanger-table="copy_link">
                                    <button type="button"
                                        className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-fasten fs-5 m-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </button>
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px"
                                        data-kt-menu="true">
                                        {/* <!--begin::Card--> */}
                                        <div className="card card-flush">
                                            <div className="card-body p-5">
                                                {/* <!--begin::Loader--> */}
                                                <div className="d-flex"
                                                    data-kt-filemanger-table="copy_link_generator">
                                                    {/* <!--begin::Spinner--> */}
                                                    <div className="me-5" data-kt-indicator="on">
                                                        <span className="indicator-progress">
                                                            <span
                                                                className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Spinner--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="fs-6 text-dark">Generating Share Link...
                                                    </div>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Loader--> */}
                                                {/* <!--begin::Link--> */}
                                                <div className="d-flex flex-column text-start d-none"
                                                    data-kt-filemanger-table="copy_link_result">
                                                    <div className="d-flex mb-3">
                                                        <i
                                                            className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                        <div className="fs-6 text-dark">Share Link Generated
                                                        </div>
                                                    </div>
                                                    <input type="text" className="form-control form-control-sm"
                                                        value="https://path/to/file/or/folder/" />
                                                    <div className="text-muted fw-normal mt-2 fs-8 px-3">Read
                                                        only.
                                                        <a href="../../demo1/dist/apps/file-manager/settings/.html"
                                                            className="ms-2">Change permissions</a>
                                                    </div>
                                                </div>
                                                {/* <!--end::Link--> */}
                                            </div>
                                        </div>
                                        {/* <!--end::Card--> */}
                                    </div>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Share link--> */}
                                {/* <!--begin::More--> */}
                                <div className="ms-2">
                                    <button type="button"
                                        className="btn btn-sm btn-icon btn-light btn-active-light-primary"
                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-dots-square fs-5 m-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4"
                                        data-kt-menu="true">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">Download File</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3"
                                                data-kt-filemanager-table="rename">Rename</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3"
                                                data-kt-filemanager-table-filter="move_row"
                                                data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link text-danger px-3"
                                                data-kt-filemanager-table-filter="delete_row">Delete</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                    </div>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::More--> */}
                            </div>
                        </div>
                        {/* <!--end::Action template--> */}
                        {/* <!--begin::Checkbox template--> */}
                        <div className="d-none" data-kt-filemanager-template="checkbox">
                            <div className="form-check form-check-sm form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="1" />
                            </div>
                        </div>
                        {/* <!--end::Checkbox template--> */}
                        {/* <!--begin::Modals--> */}
                        {/* <!--begin::Modal - Upload File--> */}
                        <div className="modal fade" id="kt_modal_upload" tabIndex={-1} aria-hidden="true">
                            {/* <!--begin::Modal dialog--> */}
                            <div className="modal-dialog modal-dialog-centered mw-650px">
                                {/* <!--begin::Modal content--> */}
                                <div className="modal-content">
                                    {/* <!--begin::Form--> */}
                                    <form className="form" action="none" id="kt_modal_upload_form">
                                        {/* <!--begin::Modal header--> */}
                                        <div className="modal-header">
                                            {/* <!--begin::Modal title--> */}
                                            <h2 className="fw-bold">Upload files</h2>
                                            {/* <!--end::Modal title--> */}
                                            {/* <!--begin::Close--> */}
                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                data-bs-dismiss="modal">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                            {/* <!--end::Close--> */}
                                        </div>
                                        {/* <!--end::Modal header--> */}
                                        {/* <!--begin::Modal body--> */}
                                        <div className="modal-body pt-10 pb-15 px-lg-17">
                                            {/* <!--begin::Input group--> */}
                                            <div className="form-group">
                                                {/* <!--begin::Dropzone--> */}
                                                <div className="dropzone dropzone-queue mb-2"
                                                    id="kt_modal_upload_dropzone">
                                                    {/* <!--begin::Controls--> */}
                                                    <div className="dropzone-panel mb-4">
                                                        <a 
                                                        onClick={handleButtonClick}
                                                            className="dropzone-select btn btn-sm btn-primary me-2">Attach
                                                            files</a >
                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                style={{ display: 'none' }}
                                                                onChange={handleFileChange}
                                                            />
                                                        <a
                                                             onClick={handleUploadAll}
                                                            className= {`${files.length === 0 ? 'dropzone-upload btn btn-sm btn-light-primary me-2' : 'btn btn-sm btn-light-primary'}`}>Upload
                                                            All </a>
                                                        <a
                                                         onClick={handleRemoveAll}
                                                            className= {`${files.length === 0 ? 'dropzone-remove-all btn btn-sm btn-light-primary' : 'btn btn-sm btn-light-primary'}`} >Remove
                                                            All</a>
                                                    </div>
                                                    {/* <!--end::Controls--> */}
                                                    {/* <!--begin::Items--> */}

                                                    {files.map((file, index) => (<>
                                                    <React.Fragment key={index}></React.Fragment>
                                                    <div className="dropzone-items wm-200px">
                                                        <div className="dropzone-item p-5" style={{ display: "none1" }}>
                                                            {/* <!--begin::File--> */}
                                                            <div className="dropzone-file333">
                                                                <div className="dropzone-filename333 text-dark"
                                                                    title="some_image_file_name.jpg">
                                                                    <span
                                                                        data-dz-name="">{file.name}</span>
                                                                    <strong>(
                                                                        <span
                                                                            data-dz-size="">{file.size} KB</span>)</strong>
                                                                </div>
                                                                <div className="dropzone-error mt-0"
                                                                    data-dz-errormessage=""></div>
                                                            </div>
                                                            {/* <!--end::File--> */}
                                                            {/* <!--begin::Progress--> */}
                                                            <div className="dropzone-progress">
                                                                <div className="progress bg-gray-300">
                                                                    <div className="progress-bar bg-primary"
                                                                        role="progressbar" aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                        aria-valuenow={0}
                                                                        data-dz-uploadprogress=""></div>
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Progress--> */}
                                                            {/* <!--begin::Toolbar--> */}
                                                            <div className="dropzone-toolbar">
                                                                <span className="dropzone-start">
                                                                    <i
                                                                        onClick={() => handleUploadFile(file.name)}
                                                                        className="ki-duotone ki-to-right fs-1"></i>
                                                                </span>
                                                                <span className="dropzone-cancel"
                                                                    data-dz-remove=""
                                                                    style={{ display: "none" }}>
                                                                    <i className="ki-duotone ki-cross fs-2"
                                                                     
                                                                    >
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="dropzone-delete"
                                                                    data-dz-remove="">
                                                                    <i className="ki-duotone ki-cross fs-2"
                                                                    onClick={() => handleRemoveFile(file.name)}

                                                                    >
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </div>
                                                            {/* <!--end::Toolbar--> */}
                                                        </div>
                                                    </div>
                                                    </>

                                                    )
                                                    )}
                                                    {/* <!--end::Items--> */}
                                                </div>
                                                {/* <!--end::Dropzone--> */}
                                                {/* <!--begin::Hint--> */}
                                                <span className="form-text fs-6 text-muted">Max file size is 1MB
                                                    per file.</span>
                                                {/* <!--end::Hint--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                        </div>
                                        {/* <!--end::Modal body--> */}
                                    </form>
                                    {/* <!--end::Form--> */}
                                </div>
                            </div>
                        </div>
                        {/* <!--end::Modal - Upload File--> */}
                        {/* <!--begin::Modal - New Product--> */}
                        <div className="modal fade" id="kt_modal_move_to_folder" tabIndex={-1}
                            aria-hidden="true">
                            {/* <!--begin::Modal dialog--> */}
                            <div className="modal-dialog modal-dialog-centered mw-650px">
                                {/* <!--begin::Modal content--> */}
                                <div className="modal-content">
                                    {/* <!--begin::Form--> */}
                                    <form className="form" action="#" id="kt_modal_move_to_folder_form">
                                        {/* <!--begin::Modal header--> */}
                                        <div className="modal-header">
                                            {/* <!--begin::Modal title--> */}
                                            <h2 className="fw-bold">Move to folder</h2>
                                            {/* <!--end::Modal title--> */}
                                            {/* <!--begin::Close--> */}
                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                data-bs-dismiss="modal">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </div>
                                            {/* <!--end::Close--> */}
                                        </div>
                                        {/* <!--end::Modal header--> */}
                                        {/* <!--begin::Modal body--> */}
                                        <div className="modal-body pt-10 pb-15 px-lg-17">
                                            {/* <!--begin::Input group--> */}
                                            <div className="form-group fv-row">
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="0"
                                                            id="kt_modal_move_to_folder_0" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_0">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>account
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="1"
                                                            id="kt_modal_move_to_folder_1" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_1">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>apps
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="2"
                                                            id="kt_modal_move_to_folder_2" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_2">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>widgets
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="3"
                                                            id="kt_modal_move_to_folder_3" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_3">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>assets
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="4"
                                                            id="kt_modal_move_to_folder_4" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_4">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>documentation
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="5"
                                                            id="kt_modal_move_to_folder_5" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_5">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>layouts
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="6"
                                                            id="kt_modal_move_to_folder_6" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_6">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>modals
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="7"
                                                            id="kt_modal_move_to_folder_7" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_7">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>authentication
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="8"
                                                            id="kt_modal_move_to_folder_8" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_8">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>dashboards
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                <div className='separator separator-dashed my-5'></div>
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex">
                                                    {/* <!--begin::Checkbox--> */}
                                                    <div
                                                        className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3"
                                                            name="move_to_folder" type="radio" value="9"
                                                            id="kt_modal_move_to_folder_9" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label"
                                                            htmlFor="kt_modal_move_to_folder_9">
                                                            <div className="fw-bold">
                                                                <i
                                                                    className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>pages
                                                            </div>
                                                        </label>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Checkbox--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Action buttons--> */}
                                            <div className="d-flex flex-center mt-12">
                                                {/* <!--begin::Button--> */}
                                                <button type="button" className="btn btn-primary"
                                                    id="kt_modal_move_to_folder_submit">
                                                    <span className="indicator-label">Save</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span
                                                            className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                                {/* <!--end::Button--> */}
                                            </div>
                                            {/* <!--begin::Action buttons--> */}
                                        </div>
                                        {/* <!--end::Modal body--> */}
                                    </form>
                                    {/* <!--end::Form--> */}
                                </div>
                            </div>
                        </div>
                        {/* <!--end::Modal - Move file--> */}
                        {/* <!--end::Modals--> */}
                    </div>
                    {/* <!--end::Content container--> */}
                </div>
                {/* <!--end::Content--> */}
            </div >
            {/* <!--end::Content wrapper--> */}
            {/* <!--begin::Footer--> */}
            <div id="kt_app_footer" className="app-footer">
                {/* <!--begin::Footer container--> */}
                <div
                    className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                    {/* <!--begin::Copyright--> */}
                    <div className="text-dark order-2 order-md-1">
                        <span className="text-muted fw-semibold me-1">2023&copy;</span>
                        <a href="https://keenthemes.com" target="_blank"
                            className="text-gray-800 text-hover-primary">Keenthemes</a>
                    </div>
                    {/* <!--end::Copyright--> */}
                    {/* <!--begin::Menu--> */}
                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                        <li className="menu-item">
                            <a href="https://keenthemes.com" target="_blank"
                                className="menu-link px-2">About</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://devs.keenthemes.com" target="_blank"
                                className="menu-link px-2">Support</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://1.envato.market/EA4JP" target="_blank"
                                className="menu-link px-2">Purchase</a>
                        </li>
                    </ul>
                    {/* <!--end::Menu--> */}
                </div>
                {/* <!--end::Footer container--> */}
            </div>
            {/* <!--end::Footer--> */}
        </div >
    )
}

export { Files }
