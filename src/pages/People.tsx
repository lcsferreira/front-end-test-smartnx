import { useEffect, useState } from "react";
import { Character } from "../api/models/Character";
import { getCharacters } from "../api/services/characters";

import { Input, Table, Pagination } from "antd";

const { Search } = Input;
const People = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  const loadCharacters = async (page: number) => {
    setLoading(true);
    const response = await getCharacters(page, search);
    setCharacters(response.results);
    setTotal(response.count);
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters(page);
  }, [page, search]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Birth Year",
      dataIndex: "birth_year",
      key: "birth_year",
    },
    {
      title: "Eye Color",
      dataIndex: "eye_color",
      key: "eye_color",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Hair Color",
      dataIndex: "hair_color",
      key: "hair_color",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
    },
    {
      title: "Skin Color",
      dataIndex: "skin_color",
      key: "skin_color",
    },
    {
      title: "Homeworld",
      dataIndex: "homeworld",
      key: "homeworld",
    },
    {
      title: "Films",
      dataIndex: "films",
      key: "films",
    },
    {
      title: "Species",
      dataIndex: "species",
      key: "species",
    },
    {
      title: "Starships",
      dataIndex: "starships",
      key: "starships",
    },
    {
      title: "Vehicles",
      dataIndex: "vehicles",
      key: "vehicles",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Edited",
      dataIndex: "edited",
      key: "edited",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Search
        placeholder="Search characters"
        onSearch={(value) => setSearch(value)}
        style={{ marginBottom: "20px" }}
      />
      <Table
        columns={columns}
        dataSource={characters}
        loading={loading}
        pagination={false}
        rowKey="name"
      />
      <Pagination
        current={page}
        total={total}
        pageSize={10}
        onChange={(page) => setPage(page)}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default People;
