import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { Folders } from './components/Folders'
import { FIles } from './components/FIles'
const accountBreadCrumbs: Array<PageLink> = [
    {
        title: 'File Manager',
        path: '/file-manager/folders',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const ManagerPage: React.FC = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        <Folders />
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='folders'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>Folders</PageTitle>
                            <Folders />
                        </>
                    }
                />
                <Route
                    path='files'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>FIles</PageTitle>
                            <FIles />
                        </>
                    }
                />
                <Route index element={<Navigate to='/file-manager/folders' />} />
            </Route>
        </Routes>
    )
}

export default ManagerPage
