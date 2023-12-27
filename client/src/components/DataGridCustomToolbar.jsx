import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import FlexBeetwen from "./FlexBetween";

export const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
}) => {
  return (
    <GridToolbarContainer>
      <FlexBeetwen width="100%">
        <FlexBeetwen>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBeetwen>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          //Buscara todo el rato que uno escriba si no ponemos las props en el index
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBeetwen>
    </GridToolbarContainer>
  );
};
