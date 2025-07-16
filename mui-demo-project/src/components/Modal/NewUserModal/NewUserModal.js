import React, { useEffect, useState } from "react";
import BasicModal from "../../commons/basicModal/BasicModal";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./style.scss";

const phoneReg=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

const NewUserModal = ({ open, handleClose,addNewUser, users }) => {

  const defaultValue = {
    userId: '',
    email: '',
    phoneNumber: ''
  }
  const [values, setValues] = useState(defaultValue)

  useEffect(() => {
    if (open) {
      setValues(defaultValue)
    }
  },[open]);

  const validationSchema = Yup.object().shape({
    userId: Yup.string().required("User Id is required").min(6,"User Id field required minimum 6 charactor."),
    email: Yup.string().required("Email is required").email("Please enter valid email address."),
    phoneNumber: Yup.string().required("Phone Number is required").matches(phoneReg, "Please enter valid phone number"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Pass the schema to yupResolver
  });

  const addUser = (data) => {
    console.log(users)
    addNewUser(data);
  };

  const handleOnchangeInput = (value) => {
    setValues(value);
  }

  const getContent = () => {
    return (
      <Box>
        <TextField
          id="outlined-basic"
          label="User ID"
          variant="outlined"
          name="userId"
          required
          {...register("userId")}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message} 
          value={values.userId}
          onChange={(event => handleOnchangeInput({...values, userId : event.target.value}))}
          className="basic-modal-input"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          required
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message} 
          value={values.email}
          onChange={(event => handleOnchangeInput({...values, email : event.target.value}))}
          className="basic-modal-input"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          required
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message} 
          value={values.phoneNumber}
          onChange={(event => handleOnchangeInput({...values,phoneNumber : event.target.value}))}
          className="basic-modal-input"
        />
        {/* <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" /> */}
      </Box>

      
    );
  };

  return (
    <BasicModal
      open={open}
      handleClose={handleClose}
      title="New User"
      subTitle="Fill out input buttons and hit 'submit' button"
      content={getContent()}
      onSubmit={handleSubmit((data) => addNewUser(data))}
    />
  );
};

export default NewUserModal;
