import { useEffect, useState } from "react";
import { Character } from "../../api/models/Character";
import { getCharacters } from "../../api/services/characters";
import Row from "antd/es/row";
import { useDebounce } from "../../hooks/useDebounce";
import CharacterCard from "../../components/Characters/CharacterCard/index";
import { formatCharacter } from "../../helpers/formatCharacter";
import Button from "antd/es/button";

import {
  BackButton,
  Container,
  PaginationContainer,
  SearchBar,
  SearchInput,
} from "./style";
import Flex from "antd/es/flex";
import Spin from "antd/es/spin";

const People = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

  const loadCharacters = async (
    page: number,
    debouncedSearch: string
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await getCharacters(page, debouncedSearch);
      response.results.forEach((character: Character) => {
        formatCharacter(character);
      });
      setCharacters(response.results);
      setTotal(response.count);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(page, debouncedSearch);
  }, [page, debouncedSearch]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPage(1);
    setSearch(e.target.value);
  };

  return (
    <Container>
      <SearchBar>
        <BackButton to="/">
          <Button type="primary" color="primary">
            Voltar
          </Button>
        </BackButton>
        <SearchInput
          placeholder="Pesquisar por personagens"
          onSearch={handleSearch}
          onChange={handleSearchChange}
        />
      </SearchBar>
      <Row justify="center">
        {characters &&
          characters.map((character: Character) => (
            <CharacterCard
              key={character.url}
              character={character}
              loading={loading}
            />
          ))}
        {loading && characters.length === 0 && (
          <Flex align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        )}
      </Row>
      <PaginationContainer
        current={page}
        total={total}
        pageSize={10}
        showSizeChanger={false}
        onChange={(page) => setPage(page)}
        disabled={loading}
      />
    </Container>
  );
};

export default People;
