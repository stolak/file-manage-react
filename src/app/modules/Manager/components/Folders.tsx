/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import {
    ChartsWidget1,
    ListsWidget5,
    TablesWidget1,
    TablesWidget5,
} from '../../../../_metronic/partials/widgets'

export function Folders() {

 

    return (
        <>
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
                            <a href="#">Keenthemes55</a>
                            <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                            <a href="#">themes</a>
                            <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>
                            <a href="#">html</a>
                            <i className="ki-duotone ki-right fs-2 text-primary mx-1"></i>demo1
                        </div>
                    </div>
                    {/* <!--end::Folder path--> */}
                    {/* <!--begin::Folder Stats--> */}
                    <div className="badge badge-lg badge-primary">
                        <span id="kt_file_manager_items_counter">82 items</span>
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
                        <tr>
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
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">account</a>
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


                        <tr>
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td data-order="apps">
                                <div className="d-flex align-items-center">
                                    <span className="icon-wrapper">
                                        <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">apps</a>
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


                        <tr>
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td data-order="widgets">
                                <div className="d-flex align-items-center">
                                    <span className="icon-wrapper">
                                        <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">widgets</a>
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


                        <tr>
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td data-order="assets">
                                <div className="d-flex align-items-center">
                                    <span className="icon-wrapper">
                                        <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">assets</a>
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

                        <tr>
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td data-order="documentation">
                                <div className="d-flex align-items-center">
                                    <span className="icon-wrapper">
                                        <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">documentation</a>
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


                        <tr>
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" />
                                </div>
                            </td>
                            <td data-order="layouts">
                                <div className="d-flex align-items-center">
                                    <span className="icon-wrapper">
                                        <i className="ki-duotone ki-folder fs-2x text-primary me-4">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                    <a href="../../demo1/dist/apps/file-manager/files/.html"
                                        className="text-gray-800 text-hover-primary">layouts</a>
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
                                                        {/* <!--end::Spinner-->
                                                        <!--begin::Label--> */}
                                                        <div className="fs-6 text-dark">
                                                            Generating Share Link...
                                                        </div>
                                                        {/* <!--end::Label--> */}
                                                    </div>
                                                    {/* <!--end::Loader-->
                                                    <!--begin::Link--> */}
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
                                        {/* <!--end::Menu-->
                                        <!--end::Share link--> */}
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
                                            {/* <!--end::Menu item-->
                                            <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-kt-filemanager-table="rename">Rename</a>
                                            </div>
                                            {/* <!--end::Menu item-->
                                            <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">Download
                                                    Folder</a>
                                            </div>
                                            {/* <!--end::Menu item-->
                                            <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-kt-filemanager-table-filter="move_row"
                                                    data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">Move
                                                    to folder</a>
                                            </div>
                                            {/* <!--end::Menu item-->
                                            <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link text-danger px-3"
                                                    data-kt-filemanager-table-filter="delete_row">Delete</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                        </div>
                                        {/* <!--end::Menu-->
                                        <!--end::More--> */}
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
