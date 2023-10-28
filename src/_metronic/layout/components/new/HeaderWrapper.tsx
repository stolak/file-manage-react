/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export function HeaderWrapper() {

    const isChecked = true;
    return (

        <>
            {/* <!--begin::Header--> */}
            <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false">
                {/* <!--begin::Header container--> */}
                <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                    {/* <!--begin::Sidebar mobile toggle--> */}
                    <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                        <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                            <i className="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </div>
                    </div>
                    {/* <!--end::Sidebar mobile toggle--> */}
                    {/* <!--begin::Mobile logo--> */}
                    <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                        <a href="../../demo1/dist/index.html" className="d-lg-none">
                            <img alt="Logo" src="assets/media/logos/default-small.svg" className="h-30px" />
                        </a>
                    </div>
                    {/* <!--end::Mobile logo--> */}
                    {/* <!--begin::Header wrapper--> */}
                    <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">

                        {/* <!--begin::Navbar--> */}
                        <div className="app-navbar flex-shrink-0">
                            {/* <!--begin::Search--> */}
                            <div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
                                {/* <!--begin::Search--> */}
                                <div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                                    {/* <!--begin::Search toggle--> */}
                                    <div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                                        <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px">
                                            <i className="ki-duotone ki-magnifier fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    {/* <!--end::Search toggle--> */}
                                    {/* <!--begin::Menu--> */}
                                    <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                                        {/* <!--begin::Wrapper--> */}
                                        <div data-kt-search-element="wrapper">
                                            {/* <!--begin::Form--> */}
                                            <form data-kt-search-element="form" className="w-100 position-relative mb-3" autoComplete="off">
                                                {/* <!--begin::Icon--> */}
                                                <i className="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Input--> */}
                                                <input type="text" className="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
                                                {/* <!--end::Input--> */}
                                                {/* <!--begin::Spinner--> */}
                                                <span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                                                    <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                                </span>
                                                {/* <!--end::Spinner--> */}
                                                {/* <!--begin::Reset--> */}
                                                <span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                                                    <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                                {/* <!--end::Reset--> */}
                                                {/* <!--begin::Toolbar--> */}
                                                <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                                                    {/* <!--begin::Preferences toggle--> */}
                                                    <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                                                        <i className="ki-duotone ki-setting-2 fs-2">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    {/* <!--end::Preferences toggle--> */}
                                                    {/* <!--begin::Advanced search toggle--> */}
                                                    <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                                                        <i className="ki-duotone ki-down fs-2"></i>
                                                    </div>
                                                    {/* <!--end::Advanced search toggle--> */}
                                                </div>
                                                {/* <!--end::Toolbar--> */}
                                            </form>
                                            {/* <!--end::Form--> */}
                                            {/* <!--begin::Separator--> */}
                                            <div className="separator border-gray-200 mb-6"></div>
                                            {/* <!--end::Separator--> */}
                                            {/* <!--begin::Recently viewed--> */}
                                            <div data-kt-search-element="results" className="d-none">
                                                {/* <!--begin::Items--> */}
                                                <div className="scroll-y mh-200px mh-lg-350px">
                                                    {/* <!--begin::Category title--> */}
                                                    <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                                                    {/* <!--end::Category title--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Karina Clark</span>
                                                            <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img src="assets/media/avatars/300-2.jpg" alt="" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Olivia Bold</span>
                                                            <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img src="assets/media/avatars/300-9.jpg" alt="" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Ana Clark</span>
                                                            <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img src="assets/media/avatars/300-14.jpg" alt="" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Nick Pitola</span>
                                                            <span className="fs-7 fw-semibold text-muted">Art Director</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <img src="assets/media/avatars/300-11.jpg" alt="" />
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Edward Kulnic</span>
                                                            <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Category title--> */}
                                                    <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                                                    {/* <!--end::Category title--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Company Rbranding</span>
                                                            <span className="fs-7 fw-semibold text-muted">UI Design</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Company Re-branding</span>
                                                            <span className="fs-7 fw-semibold text-muted">Web Development</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Business Analytics App</span>
                                                            <span className="fs-7 fw-semibold text-muted">Administration</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                            <span className="fs-7 fw-semibold text-muted">Marketing</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column justify-content-start fw-semibold">
                                                            <span className="fs-6 fw-semibold">Tower Group Website</span>
                                                            <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Category title--> */}
                                                    <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                                                    {/* <!--end::Category title--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-notepad fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                    <span className="path5"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                            <span className="fs-7 fw-semibold text-muted">#45670</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-frame fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                                                            <span className="fs-7 fw-semibold text-muted">#45690</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                                                            <span className="fs-7 fw-semibold text-muted">#21090</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                                                            <span className="fs-7 fw-semibold text-muted">#34560</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </a>
                                                    {/* <!--end::Item--> */}
                                                </div>
                                                {/* <!--end::Items--> */}
                                            </div>
                                            {/* <!--end::Recently viewed--> */}
                                            {/* <!--begin::Recently viewed--> */}
                                            <div className="mb-5" data-kt-search-element="main">
                                                {/* <!--begin::Heading--> */}
                                                <div className="d-flex flex-stack fw-semibold mb-4">
                                                    {/* <!--begin::Label--> */}
                                                    <span className="text-muted fs-6 me-2">Recently Searched:</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Heading--> */}
                                                {/* <!--begin::Items--> */}
                                                <div className="scroll-y mh-200px mh-lg-325px">
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-laptop fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                                                            <span className="fs-7 text-muted fw-semibold">#45789</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                                                            <span className="fs-7 text-muted fw-semibold">#84050</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-chart fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                                                            <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                                                            <span className="fs-7 text-muted fw-semibold">#67945</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-sms fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                                                            <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-bank fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                                                            <span className="fs-7 text-muted fw-semibold">#45690</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-40px me-4">
                                                            <span className="symbol-label bg-light">
                                                                <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="d-flex flex-column">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                                                            <span className="fs-7 text-muted fw-semibold">#24005</span>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                </div>
                                                {/* <!--end::Items--> */}
                                            </div>
                                            {/* <!--end::Recently viewed--> */}
                                            {/* <!--begin::Empty--> */}
                                            <div data-kt-search-element="empty" className="text-center d-none">
                                                {/* <!--begin::Icon--> */}
                                                <div className="pt-10 pb-10">
                                                    <i className="ki-duotone ki-search-list fs-4x opacity-50">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </div>
                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Message--> */}
                                                <div className="pb-15 fw-semibold">
                                                    <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                                    <div className="text-muted fs-7">Please try again with a different query</div>
                                                </div>
                                                {/* <!--end::Message--> */}
                                            </div>
                                            {/* <!--end::Empty--> */}
                                        </div>
                                        {/* <!--end::Wrapper--> */}
                                        {/* <!--begin::Preferences--> */}
                                        <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                                            {/* <!--begin::Heading--> */}
                                            <h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                {/* <!--begin::Radio group--> */}
                                                <div className="nav-group nav-group-fluid">
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="type" value="has" checked={isChecked} />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="type" value="users" />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="type" value="orders" />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="type" value="projects" />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                </div>
                                                {/* <!--end::Radio group--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                {/* <!--begin::Radio group--> */}
                                                <div className="nav-group nav-group-fluid">
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="attachment" value="has" checked={isChecked} />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                    {/* <!--begin::Option--> */}
                                                    <label>
                                                        <input type="radio" className="btn-check" name="attachment" value="any" />
                                                        <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                                    </label>
                                                    {/* <!--end::Option--> */}
                                                </div>
                                                {/* <!--end::Radio group--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="mb-5">
                                                <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                                                    <option value="next">Within the next</option>
                                                    <option value="last">Within the last</option>
                                                    <option value="between">Between</option>
                                                    <option value="on">On</option>
                                                </select>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="row mb-8">
                                                {/* <!--begin::Col--> */}
                                                <div className="col-6">
                                                    <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                                                </div>
                                                {/* <!--end::Col--> */}
                                                {/* <!--begin::Col--> */}
                                                <div className="col-6">
                                                    <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                                                        <option value="days">Days</option>
                                                        <option value="weeks">Weeks</option>
                                                        <option value="months">Months</option>
                                                        <option value="years">Years</option>
                                                    </select>
                                                </div>
                                                {/* <!--end::Col--> */}
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Actions--> */}
                                            <div className="d-flex justify-content-end">
                                                <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                                <a href="../../demo1/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                            </div>
                                            {/* <!--end::Actions--> */}
                                        </form>
                                        {/* <!--end::Preferences--> */}
                                        {/* <!--begin::Preferences--> */}
                                        <form data-kt-search-element="preferences" className="pt-1 d-none">
                                            {/* <!--begin::Heading--> */}
                                            <h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="pb-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                                                    <input className="form-check-input" type="checkbox" value="1" checked={isChecked} />
                                                </label>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                                                    <input className="form-check-input" type="checkbox" value="1" checked={isChecked} />
                                                </label>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                                                    <input className="form-check-input" type="checkbox" value="1" />
                                                </label>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                                                    <input className="form-check-input" type="checkbox" value="1" checked={isChecked} />
                                                </label>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="py-4 border-bottom">
                                                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                    <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                                                    <input className="form-check-input" type="checkbox" value="1" />
                                                </label>
                                            </div>
                                            {/* <!--end::Input group--> */}
                                            {/* <!--begin::Actions--> */}
                                            <div className="d-flex justify-content-end pt-7">
                                                <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                                <button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
                                            </div>
                                            {/* <!--end::Actions--> */}
                                        </form>
                                        {/* <!--end::Preferences--> */}
                                    </div>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Search--> */}
                            </div>
                            {/* <!--end::Search--> */}
                            {/* <!--begin::Activities--> */}
                            <div className="app-navbar-item ms-1 ms-md-4">
                                {/* <!--begin::Drawer toggle--> */}
                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" id="kt_activities_toggle">
                                    <i className="ki-duotone ki-messages fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                        <span className="path5"></span>
                                    </i>
                                </div>
                                {/* <!--end::Drawer toggle--> */}
                            </div>
                            {/* <!--end::Activities--> */}
                            {/* <!--begin::Notifications--> */}
                            <div className="app-navbar-item ms-1 ms-md-4">
                                {/* <!--begin::Menu- wrapper--> */}
                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
                                    <i className="ki-duotone ki-notification-status fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </div>
                                {/* <!--begin::Menu--> */}
                                <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
                                    {/* <!--begin::Heading--> */}
                                    <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: "url('assets/media/misc/menu-header-bg.jpg')" }}>
                                        {/* <!--begin::Title--> */}
                                        <h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
                                            <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                                        {/* <!--end::Title--> */}
                                        {/* <!--begin::Tabs--> */}
                                        <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                            </li>
                                        </ul>
                                        {/* <!--end::Tabs--> */}
                                    </div>
                                    {/* <!--end::Heading--> */}
                                    {/* <!--begin::Tab content--> */}
                                    <div className="tab-content">
                                        {/* <!--begin::Tab panel--> */}
                                        <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                            {/* <!--begin::Items--> */}
                                            <div className="scroll-y mh-325px my-5 px-8">
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-primary">
                                                                <i className="ki-duotone ki-abstract-28 fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                                                            <div className="text-gray-400 fs-7">Phase 1 development</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">1 hr</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-danger">
                                                                <i className="ki-duotone ki-information fs-2 text-danger">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                                                            <div className="text-gray-400 fs-7">Confidential staff documents</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">2 hrs</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-warning">
                                                                <i className="ki-duotone ki-briefcase fs-2 text-warning">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                                                            <div className="text-gray-400 fs-7">Corporeate staff profiles</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">5 hrs</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-success">
                                                                <i className="ki-duotone ki-abstract-12 fs-2 text-success">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                                                            <div className="text-gray-400 fs-7">New frontend admin theme</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">2 days</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-primary">
                                                                <i className="ki-duotone ki-colors-square fs-2 text-primary">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                                                            <div className="text-gray-400 fs-7">Product launch status update</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">21 Jan</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-info">
                                                                <i className="ki-duotone ki-picture fs-2 text-info"></i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                                                            <div className="text-gray-400 fs-7">Collection of banner images</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">21 Jan</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center">
                                                        {/* <!--begin::Symbol--> */}
                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-warning">
                                                                <i className="ki-duotone ki-color-swatch fs-2 text-warning">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                    <span className="path5"></span>
                                                                    <span className="path6"></span>
                                                                    <span className="path7"></span>
                                                                    <span className="path8"></span>
                                                                    <span className="path9"></span>
                                                                    <span className="path10"></span>
                                                                    <span className="path11"></span>
                                                                    <span className="path12"></span>
                                                                    <span className="path13"></span>
                                                                    <span className="path14"></span>
                                                                    <span className="path15"></span>
                                                                    <span className="path16"></span>
                                                                    <span className="path17"></span>
                                                                    <span className="path18"></span>
                                                                    <span className="path19"></span>
                                                                    <span className="path20"></span>
                                                                    <span className="path21"></span>
                                                                </i>
                                                            </span>
                                                        </div>
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <div className="mb-0 me-2">
                                                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                                            <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                                        </div>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">20 March</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                            </div>
                                            {/* <!--end::Items--> */}
                                            {/* <!--begin::View more--> */}
                                            <div className="py-3 text-center border-top">
                                                <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                    <i className="ki-duotone ki-arrow-right fs-5">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i></a>
                                            </div>
                                            {/* <!--end::View more--> */}
                                        </div>
                                        {/* <!--end::Tab panel--> */}
                                        {/* <!--begin::Tab panel--> */}
                                        <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="d-flex flex-column px-9">
                                                {/* <!--begin::Section--> */}
                                                <div className="pt-10 pb-0">
                                                    {/* <!--begin::Title--> */}
                                                    <h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
                                                    {/* <!--end::Title--> */}
                                                    {/* <!--begin::Text--> */}
                                                    <div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                                    {/* <!--end::Text--> */}
                                                    {/* <!--begin::Action--> */}
                                                    <div className="text-center mt-5 mb-9">
                                                        <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                    </div>
                                                    {/* <!--end::Action--> */}
                                                </div>
                                                {/* <!--end::Section--> */}
                                                {/* <!--begin::Illustration--> */}
                                                <div className="text-center px-4">
                                                    <img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
                                                </div>
                                                {/* <!--end::Illustration--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Tab panel--> */}
                                        {/* <!--begin::Tab panel--> */}
                                        <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                            {/* <!--begin::Items--> */}
                                            <div className="scroll-y mh-325px my-5 px-8">
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Just now</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">2 hrs</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">5 hrs</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">2 days</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">1 week</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Mar 5</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">May 15</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Apr 3</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Jun 30</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Jul 10</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Sep 10</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <div className="d-flex flex-stack py-4">
                                                    {/* <!--begin::Section--> */}
                                                    <div className="d-flex align-items-center me-2">
                                                        {/* <!--begin::Code--> */}
                                                        <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                        {/* <!--end::Code--> */}
                                                        {/* <!--begin::Title--> */}
                                                        <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Section--> */}
                                                    {/* <!--begin::Label--> */}
                                                    <span className="badge badge-light fs-8">Dec 10</span>
                                                    {/* <!--end::Label--> */}
                                                </div>
                                                {/* <!--end::Item--> */}
                                            </div>
                                            {/* <!--end::Items--> */}
                                            {/* <!--begin::View more--> */}
                                            <div className="py-3 text-center border-top">
                                                <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                    <i className="ki-duotone ki-arrow-right fs-5">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i></a>
                                            </div>
                                            {/* <!--end::View more--> */}
                                        </div>
                                        {/* <!--end::Tab panel--> */}
                                    </div>
                                    {/* <!--end::Tab content--> */}
                                </div>
                                {/* <!--end::Menu--> */}
                                {/* <!--end::Menu wrapper--> */}
                            </div>
                            {/* <!--end::Notifications--> */}
                            {/* <!--begin::Chat--> */}
                            <div className="app-navbar-item ms-1 ms-md-4">
                                {/* <!--begin::Menu wrapper--> */}
                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative" id="kt_drawer_chat_toggle">
                                    <i className="ki-duotone ki-message-text-2 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </i>
                                    <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                                </div>
                                {/* <!--end::Menu wrapper--> */}
                            </div>
                            {/* <!--end::Chat--> */}
                            {/* <!--begin::My apps links--> */}
                            <div className="app-navbar-item ms-1 ms-md-4">
                                {/* <!--begin::Menu wrapper--> */}
                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-element-11 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </div>
                                {/* <!--begin::My apps--> */}
                                <div className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px" data-kt-menu="true">
                                    {/* <!--begin::Card--> */}
                                    <div className="card">
                                        {/* <!--begin::Card header--> */}
                                        <div className="card-header">
                                            {/* <!--begin::Card title--> */}
                                            <div className="card-title">My Apps</div>
                                            {/* <!--end::Card title--> */}
                                            {/* <!--begin::Card toolbar--> */}
                                            <div className="card-toolbar">
                                                {/* <!--begin::Menu--> */}
                                                <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n3" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end">
                                                    <i className="ki-duotone ki-setting-3 fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                    </i>
                                                </button>
                                                {/* <!--begin::Menu 3--> */}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                    {/* <!--begin::Heading--> */}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                    </div>
                                                    {/* <!--end::Heading--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Create Invoice</a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                            <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                                <i className="ki-duotone ki-information fs-6">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span></a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Generate Bill</a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">Subscription</span>
                                                            <span className="menu-arrow"></span>
                                                        </a>
                                                        {/* <!--begin::Menu sub--> */}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Plans</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Billing</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Statements</a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            {/* <!--begin::Menu separator--> */}
                                                            <div className="separator my-2"></div>
                                                            {/* <!--end::Menu separator--> */}
                                                            {/* <!--begin::Menu item--> */}
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content px-3">
                                                                    {/* <!--begin::Switch--> */}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/* <!--begin::Input--> */}
                                                                        <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={isChecked} name="notifications" />
                                                                        {/* <!--end::Input--> */}
                                                                        {/* <!--end::Label--> */}
                                                                        <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </label>
                                                                    {/* <!--end::Switch--> */}
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                        </div>
                                                        {/* <!--end::Menu sub--> */}
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    {/* <!--begin::Menu item--> */}
                                                    <div className="menu-item px-3 my-1">
                                                        <a href="#" className="menu-link px-3">Settings</a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                </div>
                                                {/* <!--end::Menu 3--> */}
                                                {/* <!--end::Menu--> */}
                                            </div>
                                            {/* <!--end::Card toolbar--> */}
                                        </div>
                                        {/* <!--end::Card header--> */}
                                        {/* <!--begin::Card body--> */}
                                        <div className="card-body py-5">
                                            {/* <!--begin::Scroll--> */}
                                            <div className="mh-450px scroll-y me-n5 pe-5">
                                                {/* <!--begin::Row--> */}
                                                <div className="row g-2">
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/amazon.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">AWS</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/angular-icon-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">AngularJS</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/atica.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Atica</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/beats-electronics.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Music</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/codeigniter.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Codeigniter</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/bootstrap-4.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Bootstrap</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/google-tag-manager.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">GTM</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/disqus.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Disqus</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/dribbble-icon-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Dribble</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/google-play-store.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Play Store</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/google-podcasts.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Podcasts</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/figma-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Figma</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/github.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Github</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/gitlab.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Gitlab</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Instagram</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                    {/* <!--begin::Col--> */}
                                                    <div className="col-4">
                                                        <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                            <img src="assets/media/svg/brand-logos/pinterest-p.svg" className="w-25px h-25px mb-2" alt="" />
                                                            <span className="fw-semibold">Pinterest</span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Col--> */}
                                                </div>
                                                {/* <!--end::Row--> */}
                                            </div>
                                            {/* <!--end::Scroll--> */}
                                        </div>
                                        {/* <!--end::Card body--> */}
                                    </div>
                                    {/* <!--end::Card--> */}
                                </div>
                                {/* <!--end::My apps--> */}
                                {/* <!--end::Menu wrapper--> */}
                            </div>
                            {/* <!--end::My apps links--> */}
                            {/* <!--begin::User menu--> */}
                            <div className="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
                                {/* <!--begin::Menu wrapper--> */}
                                <div className="cursor-pointer symbol symbol-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <img src="assets/media/avatars/300-3.jpg" className="rounded-3" alt="user" />
                                </div>
                                {/* <!--begin::User account menu--> */}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-50px me-5">
                                                <img alt="Logo" src="assets/media/avatars/300-3.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Username--> */}
                                            <div className="d-flex flex-column">
                                                <div className="fw-bold d-flex align-items-center fs-5">Robert Fox
                                                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">robert@kt.com</a>
                                            </div>
                                            {/* <!--end::Username--> */}
                                        </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator my-2"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo1/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo1/dist/apps/projects/list.html" className="menu-link px-5">
                                            <span className="menu-text">My Projects</span>
                                            <span className="menu-badge">
                                                <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                            </span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                        <a href="#" className="menu-link px-5">
                                            <span className="menu-title">My Subscription</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        {/* <!--begin::Menu sub--> */}
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/billing.html" className="menu-link px-5">Billing</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">Payments</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                                    <span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
                                                        <i className="ki-duotone ki-information-5 fs-5">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                        </i>
                                                    </span></a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu separator--> */}
                                            <div className="separator my-2"></div>
                                            {/* <!--end::Menu separator--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3">
                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked={isChecked} name="notifications" />
                                                        <span className="form-check-label text-muted fs-7">Notifications</span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                        </div>
                                        {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator my-2"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                        <a href="#" className="menu-link px-5">
                                            <span className="menu-title position-relative">Mode
                                                <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                                                    <i className="ki-duotone ki-night-day theme-light-show fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                        <span className="path6"></span>
                                                        <span className="path7"></span>
                                                        <span className="path8"></span>
                                                        <span className="path9"></span>
                                                        <span className="path10"></span>
                                                    </i>
                                                    <i className="ki-duotone ki-moon theme-dark-show fs-2">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span></span>
                                        </a>
                                        {/* <!--begin::Menu--> */}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3 my-0">
                                                <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                                    <span className="menu-icon" data-kt-element="icon">
                                                        <i className="ki-duotone ki-night-day fs-2">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                            <span className="path5"></span>
                                                            <span className="path6"></span>
                                                            <span className="path7"></span>
                                                            <span className="path8"></span>
                                                            <span className="path9"></span>
                                                            <span className="path10"></span>
                                                        </i>
                                                    </span>
                                                    <span className="menu-title">Light</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3 my-0">
                                                <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                                    <span className="menu-icon" data-kt-element="icon">
                                                        <i className="ki-duotone ki-moon fs-2">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </span>
                                                    <span className="menu-title">Dark</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3 my-0">
                                                <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                                    <span className="menu-icon" data-kt-element="icon">
                                                        <i className="ki-duotone ki-screen fs-2">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </i>
                                                    </span>
                                                    <span className="menu-title">System</span>
                                                </a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                        </div>
                                        {/* <!--end::Menu--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                        <a href="#" className="menu-link px-5">
                                            <span className="menu-title position-relative">Language
                                                <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                                    <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
                                        </a>
                                        {/* <!--begin::Menu sub--> */}
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
                                                    <span className="symbol symbol-20px me-4">
                                                        <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                                                    </span>English</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                                    <span className="symbol symbol-20px me-4">
                                                        <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                                                    </span>Spanish</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                                    <span className="symbol symbol-20px me-4">
                                                        <img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                                                    </span>German</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                                    <span className="symbol symbol-20px me-4">
                                                        <img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                                                    </span>Japanese</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                            {/* <!--begin::Menu item--> */}
                                            <div className="menu-item px-3">
                                                <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                                    <span className="symbol symbol-20px me-4">
                                                        <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                                                    </span>French</a>
                                            </div>
                                            {/* <!--end::Menu item--> */}
                                        </div>
                                        {/* <!--end::Menu sub--> */}
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5 my-1">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-5">
                                        <a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                </div>
                                {/* <!--end::User account menu--> */}
                                {/* <!--end::Menu wrapper--> */}
                            </div>
                            {/* <!--end::User menu--> */}
                            {/* <!--begin::Header menu toggle--> */}
                            <div className="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
                                <div className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
                                    <i className="ki-duotone ki-element-4 fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </div>
                            </div>
                            {/* <!--end::Header menu toggle--> */}
                            {/* <!--begin::Aside toggle--> */}
                            {/* <!--end::Header menu toggle--> */}
                        </div>
                        {/* <!--end::Navbar--> */}
                    </div>
                    {/* <!--end::Header wrapper--> */}
                </div>
                {/* <!--end::Header container--> */}
            </div>
            {/* <!--end::Header--> */}
        </>
    )
}
