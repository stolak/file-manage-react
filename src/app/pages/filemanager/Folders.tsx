/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react'
// import { useIntl } from 'react-intl'
// import { PageLink, PageTitle } from '../../../_metronic/layout/core'

// import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'
// import { Link } from 'react-router-dom'
// import { Dropdown1 } from '../../../_metronic/partials'
// import { useLocation } from 'react-router'

import CreateNewFolder from './CreateFolder';
import { Link } from 'react-router-dom';

export function Folders() {

    const folders = [
        { "id": 1, 'name': "account" },
        { "id": 2, 'name': "apps" },
        { "id": 3, 'name': "widgets" },
        { "id": 4, 'name': "assets" },
        { "id": 5, 'name': "documentation" },
        { "id": 6, 'name': "layouts" }
    ]
    const total = folders.length

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalRecords, setTotalRecords] = useState(0);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('https://api.example.com/your-endpoint')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setTotalRecords(data.length);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);



    return (
        <>
            <div className="d-flex flex-column flex-column-fluid">
                {/* <!--begin::Content--> */}
                <div id="kt_app_content" className="app-content flex-column-fluid">

                    {/* <!--begin::Content container--> */}
                    <div id="kt_app_content_container" className="app-container container-xxl">
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
                                        <input type="text" data-kt-filemanager-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Files & Folders" />
                                    </div>
                                    {/* <!--end::Search--> */}
                                </div>
                                {/* <!--begin::Card toolbar--> */}
                                <div className="card-toolbar">
                                    {/* <!--begin::Toolbar--> */}
                                    <div className="d-flex justify-content-end" data-kt-filemanager-table-toolbar="base">
                                        {/* <!--begin::Export--> */}
                                        <button
                                            type="button"
                                            className="btn btn-flex btn-light-primary me-3"
                                            id="kt_file_manager_new_folder"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <i className="ki-duotone ki-add-folder fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>New Folder
                                        </button>
                                        {/* <!--end::Export--> */}
                                        {/* <!--begin::Add customer--> */}
                                        {/* <button type="button" className="btn btn-flex btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_upload">
                                            <i className="ki-duotone ki-folder-up fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>Upload Files</button> */}
                                        {/* <!--end::Add customer--> */}

                                        <CreateNewFolder show={showModal} onHide={() => setShowModal(false)} />
                                    </div>
                                    {/* <!--end::Toolbar--> */}
                                    {/* <!--begin::Group actions--> */}
                                    <div className="d-flex justify-content-end align-items-center d-none" data-kt-filemanager-table-toolbar="selected">
                                        <div className="fw-bold me-5">
                                            <span className="me-2" data-kt-filemanager-table-select="selected_count"></span>Selected</div>
                                        <button type="button" className="btn btn-danger" data-kt-filemanager-table-select="delete_selected">Delete Selected</button>
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
                                            <i className="ki-duotone ki-abstract-32 fs-2 text-primary me-3">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                            <Link to="/dashboard">Folder</Link>
                                            {/* <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                                            <a href="#">themes</a>
                                            <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                                            <a href="#">html</a>
                                            <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>demo1 */}
                                        </div>
                                    </div>
                                    {/* <!--end::Folder path--> */}
                                    {/* <!--begin::Folder Stats--> */}
                                    <div className="badge badge-lg badge-primary">
                                        <span id="kt_file_manager_items_counter">{total} items</span>
                                    </div>
                                    {/* <!--end::Folder Stats--> */}
                                </div>
                                {/* <!--end::Table header--> */}
                                {/* <!--begin::Table--> */}
                                <table id="kt_file_manager_list" data-kt-filemanager-table="folders"
                                    className="table align-middle table-row-dashed fs-6 gy-5">
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="w-10px pe-2">
                                                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                    <input className="form-check-input" type="checkbox" data-kt-check="true"
                                                        data-kt-check-target="#kt_file_manager_list .form-check-input" value="1" />
                                                </div>
                                            </th>
                                            <th className="min-w-250px">Name</th>
                                            <th className="min-w-10px">Size</th>
                                            <th className="min-w-125px">Last Modified</th>
                                            <th className="w-125px"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {folders.map((folder, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                    </div>
                                                </td>
                                                <td data-order="account">
                                                    <div className="d-flex align-items-center">
                                                        <span className="icon-wrapper">
                                                            <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </span>
                                                        <Link to={`/dashboard/upload-file/${folder.id}`}
                                                            className="text-gray-800 text-hover-primary">{folder.name}</Link>
                                                    </div>
                                                </td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td className="text-end" data-kt-filemanager-table="action_dropdown">
                                                    <div className="d-flex justify-content-end">
                                                        {/* <!--begin::Share link--> */}
                                                        <div className="ms-2" data-kt-filemanger-table="copy_link">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary"
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
                                                                        <div className="d-flex" data-kt-filemanger-table="copy_link_generator">
                                                                            {/* <!--begin::Spinner--> */}
                                                                            <div className="me-5" data-kt-indicator="on">
                                                                                <span className="indicator-progress">
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
                                                                                <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                                                <div className="fs-6 text-dark">
                                                                                    Share Link Generated</div>
                                                                            </div>
                                                                            <input type="text" className="form-control form-control-sm"
                                                                                value="https://path/to/file/or/folder/" />
                                                                            <div className="text-muted fw-normal mt-2 fs-8 px-3">
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
                                                            {/* <!--end::Share link--> */}
                                                        </div>
                                                        {/* <!--begin::More--> */}


                                                        <div className="ms-2">
                                                            <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary me-2"
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
                                                                    <a href="../../demo1/dist/apps/file-manager/files.html"
                                                                        className="menu-link px-3">View</a>
                                                                </div>
                                                                {/* <!--end::Menu item--> */}
                                                                {/* <!--begin::Menu item--> */}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                                                </div>
                                                                {/* <!--end::Menu item--> */}
                                                                {/* <!--begin::Menu item--> */}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">Download
                                                                        Folder</a>
                                                                </div>
                                                                {/* <!--end::Menu item--> */}
                                                                {/* <!--begin::Menu item--> */}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row"
                                                                        data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move
                                                                        to folder</a>
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
                                                            {/* <!--end::More--> */}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>

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
                                        <input type="text" name="new_folder_name" placeholder="Enter the folder name" className="form-control mw-250px me-3" />
                                        {/* <!--end:Input--> */}
                                        {/* <!--begin:Submit button--> */}
                                        <button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_add_folder">
                                            <span className="indicator-label">
                                                <i className="ki-duotone ki-check fs-1"></i>
                                            </span>
                                            <span className="indicator-progress">
                                                <span className="spinner-border spinner-border-sm align-middle"></span>
                                            </span>
                                        </button>
                                        {/* <!--end:Submit button--> */}
                                        {/* <!--begin:Cancel button--> */}
                                        <button className="btn btn-icon btn-light-danger" id="kt_file_manager_cancel_folder">
                                            <span className="indicator-label">
                                                <i className="ki-duotone ki-cross fs-1">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                            </span>
                                            <span className="indicator-progress">
                                                <span className="spinner-border spinner-border-sm align-middle"></span>
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
                                    <input type="text" id="kt_file_manager_rename_input" name="rename_folder_name" placeholder="Enter the new folder name" className="form-control mw-250px me-3" value="" />
                                    <button className="btn btn-icon btn-light-primary me-3" id="kt_file_manager_rename_folder">
                                        <i className="ki-duotone ki-check fs-1"></i>
                                    </button>
                                    <button className="btn btn-icon btn-light-danger" id="kt_file_manager_rename_folder_cancel">
                                        <span className="indicator-label">
                                            <i className="ki-duotone ki-cross fs-1">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        <span className="indicator-progress">
                                            <span className="spinner-border spinner-border-sm align-middle"></span>
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
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-fasten fs-5 m-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </button>
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px" data-kt-menu="true">
                                        {/* <!--begin::Card--> */}
                                        <div className="card card-flush">
                                            <div className="card-body p-5">
                                                {/* <!--begin::Loader--> */}
                                                <div className="d-flex" data-kt-filemanger-table="copy_link_generator">
                                                    {/* <!--begin::Spinner--> */}
                                                    <div className="me-5" data-kt-indicator="on">
                                                        <span className="indicator-progress">
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </div>
                                                    {/* <!--end::Spinner--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <div className="fs-6 text-dark">Generating Share Link...</div>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Loader--> */}
                                                {/* <!--begin::Link--> */}
                                                <div className="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                    <div className="d-flex mb-3">
                                                        <i className="ki-duotone ki-check fs-2 text-success me-3"></i>
                                                        <div className="fs-6 text-dark">Share Link Generated</div>
                                                    </div>
                                                    <input type="text" className="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                    <div className="text-muted fw-normal mt-2 fs-8 px-3">Read only.
                                                        <a href="../../demo1/dist/apps/file-manager/settings/.html" className="ms-2">Change permissions</a></div>
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
                                    <button type="button" className="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i className="ki-duotone ki-dots-square fs-5 m-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                        </i>
                                    </button>
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">Download File</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move to folder</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">Delete</a>
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
                                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                                                <div className="dropzone dropzone-queue mb-2" id="kt_modal_upload_dropzone">
                                                    {/* <!--begin::Controls--> */}
                                                    <div className="dropzone-panel mb-4">
                                                        <a className="dropzone-select btn btn-sm btn-primary me-2">Attach files</a>
                                                        <a className="dropzone-upload btn btn-sm btn-light-primary me-2">Upload All</a>
                                                        <a className="dropzone-remove-all btn btn-sm btn-light-primary">Remove All</a>
                                                    </div>
                                                    {/* <!--end::Controls--> */}
                                                    {/* <!--begin::Items--> */}
                                                    <div className="dropzone-items wm-200px">
                                                        <div className="dropzone-item p-5" style={{ display: "none" }}>
                                                            {/* <!--begin::File--> */}
                                                            <div className="dropzone-file">
                                                                <div className="dropzone-filename text-dark" title="some_image_file_name.jpg">
                                                                    <span data-dz-name="">some_image_file_name.jpg</span>
                                                                    <strong>(
                                                                        <span data-dz-size="">340kb</span>)</strong>
                                                                </div>
                                                                <div className="dropzone-error mt-0" data-dz-errormessage=""></div>
                                                            </div>
                                                            {/* <!--end::File--> */}
                                                            {/* <!--begin::Progress--> */}
                                                            <div className="dropzone-progress">
                                                                <div className="progress bg-gray-300">
                                                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} data-dz-uploadprogress=""></div>
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Progress--> */}
                                                            {/* <!--begin::Toolbar--> */}
                                                            <div className="dropzone-toolbar">
                                                                <span className="dropzone-start">
                                                                    <i className="ki-duotone ki-to-right fs-1"></i>
                                                                </span>
                                                                <span className="dropzone-cancel" data-dz-remove="" style={{ display: "none" }}>
                                                                    <i className="ki-duotone ki-cross fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                                <span className="dropzone-delete" data-dz-remove="">
                                                                    <i className="ki-duotone ki-cross fs-2">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </div>
                                                            {/* <!--end::Toolbar--> */}
                                                        </div>
                                                    </div>
                                                    {/* <!--end::Items--> */}
                                                </div>
                                                {/* <!--end::Dropzone--> */}
                                                {/* <!--begin::Hint--> */}
                                                <span className="form-text fs-6 text-muted">Max file size is 1MB per file.</span>
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
                        <div className="modal fade" id="kt_modal_move_to_folder" tabIndex={-1} aria-hidden="true">
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
                                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="0" id="kt_modal_move_to_folder_0" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_0">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>account</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="1" id="kt_modal_move_to_folder_1" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_1">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>apps</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="2" id="kt_modal_move_to_folder_2" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_2">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>widgets</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="3" id="kt_modal_move_to_folder_3" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_3">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>assets</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="4" id="kt_modal_move_to_folder_4" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_4">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>documentation</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="5" id="kt_modal_move_to_folder_5" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_5">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>layouts</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="6" id="kt_modal_move_to_folder_6" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_6">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>modals</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="7" id="kt_modal_move_to_folder_7" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_7">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>authentication</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="8" id="kt_modal_move_to_folder_8" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_8">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>dashboards</div>
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
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        {/* <!--begin::Input--> */}
                                                        <input className="form-check-input me-3" name="move_to_folder" type="radio" value="9" id="kt_modal_move_to_folder_9" />
                                                        {/* <!--end::Input--> */}
                                                        {/* <!--begin::Label--> */}
                                                        <label className="form-check-label" htmlFor="kt_modal_move_to_folder_9">
                                                            <div className="fw-bold">
                                                                <i className="ki-duotone ki-folder fs-2 text-primary me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>pages</div>
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
                                                <button type="button" className="btn btn-primary" id="kt_modal_move_to_folder_submit">
                                                    <span className="indicator-label">Save</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
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
            </div>
            {/* <!--end::Content wrapper--> */}
        </>
    )
}
