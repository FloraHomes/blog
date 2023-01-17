import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Col, Input, Label, Row } from 'reactstrap';

export const AddCategory = ({ onSubmit, formData, setFormData, imgRef }) => {
  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const imgUpload = (event) => {
    setFormData({ ...formData, image: event?.target.files[0] });
  };

  const changeColor = (value) => {
    setFormData({ ...formData, color_code: value.hex });
  };

  const addNewCategory = () => {
    let cate = {
      ...formData,
    };
    onSubmit(cate);
  };
  return (
    <div>
      <Row className='card flex-row p-3 mb-4'>
        <h3>Add New Category</h3>
        <Col md={8} lg={8}>
          <Label className='form-label' for='blog-edit-title'>
            Title
          </Label>
          <Input
            name='title'
            className='mb-3'
            value={formData.title}
            onChange={changeInput}
          />
          <Label className='form-label' for='blog-edit-title'>
            Description
          </Label>
          <Input
            type='textarea'
            className='mb-3'
            name='description'
            value={formData.description}
            onChange={changeInput}
          />
          <Label className='form-label' for='blog-edit-title'>
            Image
          </Label>
          <Input ref={imgRef} name='img' type='file' onChange={imgUpload} />
          <Button
            onClick={addNewCategory}
            className='w-50 mt-4 shadow-none'
            color='primary'
          >
            Add Category
          </Button>
        </Col>
        <Col
          md={4}
          lg={4}
          className='d-flex flex-column justify-content-center mt-sm-5 mt-md-0'
        >
          <div className='d-flex justify-content-center'>
            <h6>Select Color</h6>
            <div
              className='ms-3'
              style={{
                height: '20px',
                width: '40px',
                backgroundColor: formData?.color_code,
              }}
            />
          </div>
          <SketchPicker
            className='align-self-center'
            color={formData?.color_code}
            onChange={changeColor}
          />
        </Col>
      </Row>
    </div>
  );
};
