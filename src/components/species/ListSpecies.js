import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
//import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getSpecies, updateSpecie, deleteSpecie } from "../../services/firebaseService"; // Ajuste o caminho conforme necessário

const ListSpecies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getSpecies(); // Ajuste conforme sua função de busca de dados
      setData(fetchedData);
    };

    fetchData();
  }, []);

  // const handleAdd = () => {
  //   const newData = { name: "Novo Item" }; // Ajuste conforme necessário
    
  //   addSpecie(newData);
  //   setData([...data, newData]);
  // };

  const handleEdit = (id) => {
    const updatedData = { name: "Item Atualizado" }; // Ajuste conforme necessário
    updateSpecie(id, updatedData);
    setData(
      data.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const handleDelete = (id) => {
    deleteSpecie(id);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(item.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {/* <IconButton aria-label="add" onClick={handleAdd}>
        <AddIcon />
      </IconButton> */}
    </div>
  );
};

export default ListSpecies;