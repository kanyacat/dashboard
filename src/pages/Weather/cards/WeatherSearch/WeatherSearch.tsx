import { FormEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchButton, SearchTextField } from "./styled";
import { CardWrapper } from "../../components/CardWrapper/CardWrapper";
import { SearchResult } from "../../components/SearchResult/SearchResult";

export const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [formData, setFormData] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(city);
  };

  return (
    <CardWrapper
      styles={{
        gridArea: "search",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchTextField setCity={setCity} />
          <SearchButton type="submit" variant="contained">
            <SearchIcon
              sx={{
                color: "#121211",
                "&:hover": {
                  fill: "#fff",
                },
              }}
            />
          </SearchButton>
        </div>
      </form>
      <SearchResult city={formData.toLowerCase()} />
    </CardWrapper>
  );
};
