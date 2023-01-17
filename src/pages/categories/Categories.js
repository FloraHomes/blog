import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { ApiCall, ApiRoutes, config } from '../../api';
import { AddCategory } from './AddCategory';
import TableStriped from './Table';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
const initialState = {
  title: '',
  description: '',
  image: '',
  color_code: '#4c35a9',
};

export const Categories = () => {
  const [formData, setFormData] = useState(initialState);
  const imgRef = useRef();

  const addNewCategory = async (data) => {
    const response = await ApiCall.post(
      ApiRoutes.addNewCategoy,
      data,
      (
        await config()
      ).headers
    );
    return response.data;
  };
  const addCategoryMutation = useMutation(addNewCategory, {
    onSuccess: (data) => {
      console.log(data);
      if (data?.errors || data?.error) {
        return toast.error(data?.message ? data?.message : data?.error);
      } else {
        toast.success(data?.message);
        imgRef.current.value = null;
        setFormData(initialState);
        refetch();
      }
    },
    onError: (data) => {
      return toast.error(data?.error);
    },
  });
  const { isLoading, error, data, refetch } = useQuery(
    'allCategories',
    async () => {
      const response = await ApiCall.get(
        ApiRoutes.allCategories,
        (
          await config()
        ).headers
      );
      return response.data;
    }
  );
  if (isLoading) return 'Loading...';
  const onSubmit = async (data) => {
    let formDataApi = new FormData();
    formDataApi.append('title', data.title);
    formDataApi.append('details', data.description);
    formDataApi.append('image', data.image);
    formDataApi.append('color_code', data.color_code);
    formDataApi.append('added_by', '63b88cfaea20bfedc6360b53');
    if (!isLoading) addCategoryMutation.mutate(formDataApi);
  };
  return (
    <div className='container mt-5'>
      <AddCategory
        imgRef={imgRef}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <TableStriped data={data?.categories} />
    </div>
  );
};
