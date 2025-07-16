import { Card, CardContent } from "@mui/material";
import React from "react";

const BasicCard = ({ header, content }) => {

  const cardStyle={
    width: "80%",
    margin: "50px auto",
  }

  return (
    <Card sx={cardStyle}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;
