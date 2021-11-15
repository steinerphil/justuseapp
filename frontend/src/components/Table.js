import {DataGrid} from "@mui/x-data-grid";

export const Table = ({tableData, selectionModel, setSelectionModel}) => {


    const columns = [
        {field: 'id', headerName: 'ID', width: 200},
        {field: 'title', headerName: 'Produktname', width: 180},
        {field: 'price', headerName: 'Preis', type: 'number', width: 110},
    ];

    const rows = tableData.map(({id, title, price}) => {
        return {id, title, price}
    });

    return (
        <>
            <div style={{height: 400, minWidth: 600, maxWidth: 680}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={selectionModel}
                />
            </div>
        </>

    )

}