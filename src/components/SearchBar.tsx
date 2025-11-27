interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSearch(inputValue);
  };
  console.log(search);
  return (
    <input
      type="text"
      placeholder="포켓몬 이름 검색"
      value={search}
      onChange={onchange}
    />
  );
};

export default SearchBar;
