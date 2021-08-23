import React, { useContext, useEffect } from 'react'
import './listList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ListContext } from "../../context/listContext/ListContext"
import { getLists, deleteLists } from "../../context/listContext/apiCalls"

export default function ListList() {
    const { lists, dispatch } = useContext(ListContext)

    useEffect(() => {
        getLists(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteLists(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/list/" + params.row._id, list: params.row }}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                getRowId={r => r._id}
            />
        </div>
    )
}
