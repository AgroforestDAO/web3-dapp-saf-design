import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { getMentors } from "../services/firebaseService"; // Ajuste o caminho conforme necessário

const ListMentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const mentorsList = await getMentors();
      setMentors(mentorsList);
    };

    fetchMentors();
  }, [mentors]);

  return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Mentores
      </Typography>
      <Card>
        <CardContent>
          <List>
            {mentors.map((mentor) => (
              <ListItem key={mentor.id}>
                <ListItemText primary={mentor.name} secondary={mentor.email} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListMentors;
