import React from "react";
import MyTextField from "../StyledComponents/MyTextField";

const EditForm = ({ change, value, editSubmit, id }) => {
  return (
    <form onSubmit={(e) => editSubmit(e, id)}>
      <MyTextField isEditing change={change} value={value} />
    </form>
  );
};

export default EditForm;
