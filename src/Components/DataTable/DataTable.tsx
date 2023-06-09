import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";

const columns: {
  field: keyof any | "id";
  label: string;
  hide: boolean;
  width: number;
}[] = [
  { field: "InstanceId", label: "", hide: true, width: 2 },
  { field: "id", label: "", hide: true, width: 2 },
  {
    field: "ConsumedQuantity",
    label: "ConsumedQuantity",
    hide: false,
    width: 200,
  },
  { field: "Cost", label: "Cost", hide: false, width: 220 },
  { field: "Date", label: "Date", hide: false, width: 220 },
  { field: "MeterCategory", label: "Meter Category", hide: false, width: 220 },
  { field: "ResourceGroup", label: "Resource Group", hide: false, width: 220 },
  {
    field: "ResourceLocation",
    label: "Resource Location",
    hide: false,
    width: 100,
  },
  { field: "UnitOfMeasure", label: "Unit Of Measure", hide: false, width: 100 },
  { field: "Location", label: "Location", hide: false, width: 220 },
  { field: "ServiceName", label: "ServiceName", hide: false, width: 220 },
];

const DataTableComponent = ({ data, title }: { data: any[]; title: string }) => {
  const userColumns: any[] = [
    ...columns.map((col, index) => ({
      field: col.field,
      flex: 1,
      headerName: col.label,
      width: col.width,
      hideable: col.hide,
    })),
  ];

  const gridRows = useMemo(() => {
    return data.map((i, index) => ({ ...i, id: index }));
  }, [data]);

  return (
    <div className="datatable">
      <div className="datatableTitle">{title}</div>
      <DataGrid
        className="datagrid"
        sx={{
          ".MuiToolbar-root": {
            color: "gray",
          },
        }}
        disableColumnMenu
        pageSizeOptions={[10, 25, 50, 100]}
        columnVisibilityModel={{
          id: false,
          InstanceId: false,
        }}
        rows={gridRows}
        columns={userColumns}
        pagination
        paginationMode="client"
      />
    </div>
  );
};

export default DataTableComponent;
