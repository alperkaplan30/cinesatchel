import { Search } from "@mui/icons-material";
import "./searchBar.scss"

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="search"></input>
      <Search className="searchIcon"/>
    </div>
  )
}

export default SearchBar