/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useLayout } from '../../core'

const AsideDefault = () => {
    const { config } = useLayout()
    const { classes } = useLayout()
    const [link, setLink] = useState<string>('projects')

    return (
        <>
            {/* <!--begin::Sidebar--> */}
            <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                {/* <!--begin::Logo--> */}
                <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                    {/* <!--begin::Logo image--> */}
                    <a href="../../demo1/dist/index.html">
                        <img alt="Logo" src="assets/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default" />
                        <img alt="Logo" src="assets/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize" />
                    </a>



                    <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
                        <i className="ki-duotone ki-black-left-line fs-3 rotate-180">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </div>
                    {/* // <!--end::Sidebar toggle--> */}
                </div>

                <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                    {/* <!--begin::Menu wrapper--> */}
                    <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                        {/* <!--begin::Scroll wrapper--> */}
                        <div id="kt_app_sidebar_menu_scroll" className="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                            {/* <!--begin::Menu--> */}
                            <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                {/* <!--begin:Menu item--> */}
                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                    {/* <!--begin:Menu link--> */}
                                    <span className="menu-link">
                                        <span className="menu-icon">
                                            <i className="ki-duotone ki-element-11 fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </span>
                                        <span className="menu-title">Dashboards</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/* <!--end:Menu link--> */}
                                    {/* <!--begin:Menu sub--> */}
                                    <div className="menu-sub menu-sub-accordion">
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item">
                                            {/* <!--begin:Menu link--> */}
                                            <a className="menu-link" href="../../demo1/dist/index.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Default</span>
                                            </a>
                                            {/* <!--end:Menu link--> */}
                                        </div>
                                    </div>
                                    {/* <!--end:Menu sub--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                                {/* <!--begin:Menu item--> */}
                                <div className="menu-item pt-5">
                                    {/* <!--begin:Menu content--> */}
                                    <div className="menu-content">
                                        <span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
                                    </div>
                                    {/* <!--end:Menu content--> */}
                                </div>
                                {/* <!--end:Menu item--> */}



                                {/* <!--begin:Menu item--> */}
                                <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                                    {/* <!--begin:Menu link--> */}
                                    <span className="menu-link">
                                        <span className="menu-icon">
                                            <i className="ki-duotone ki-switch fs-2">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </span>
                                        <span className="menu-title">File Manager</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/* <!--end:Menu link--> */}
                                    {/* <!--begin:Menu sub--> */}
                                    <div className="menu-sub menu-sub-accordion">
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item">
                                            {/* <!--begin:Menu link--> */}
                                            <Link className="menu-link" to="/">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Folders</span>
                                            </Link>
                                            {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                        {/* <!--begin:Menu item--> */}
                                        <div className="menu-item">
                                            {/* <!--begin:Menu link--> */}
                                            {/* <Link className="navbar-brand" to="/">
                                                Inister News
                                            </Link> */}
                                            <Link className="menu-link" to="/file">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Files</span>
                                            </Link>
                                            {/* <!--end:Menu link--> */}
                                        </div>
                                        {/* <!--end:Menu item--> */}
                                    </div>
                                    {/* <!--end:Menu sub--> */}
                                </div>
                                {/* <!--end:Menu item--> */}
                            </div>
                            {/* <!--end::Menu--> */}
                        </div>
                        {/* <!--end::Scroll wrapper--> */}
                    </div>
                    {/* <!--end::Menu wrapper--> */}
                </div>
                {/* // <!--end::sidebar menu--> */}


                {/* // <!--begin::Footer--> */}
                <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
                    <a href="https://preview.keenthemes.com/html/metronic/docs" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
                        <span className="btn-label">Docs & Components</span>
                        <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </a>
                </div>
                {/* // <!--end::Footer--> */}
            </div>
            {/* // <!--end::Sidebar--> */}
        </>
    )
}

export { AsideDefault }
