// ** React Imports
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { ApiCall, ApiRoutes, config } from '../../api';
import { simpleConfig } from '../../api/env';

import logo from '../../assets/FHGC weblogo.png';
import WebRoutes from '../../common/WebRoutes';
import useAuth from '../../hooks/useAuth';
import useLoader from '../../hooks/useLoader';

const initialState = {
  email: '',
  password: '',
};
export const AdminLogin = () => {
  const [formInput, setFormInput] = useState(initialState);
  const { userLogin } = useAuth();
  const { loading, setLoading } = useLoader();

  const loginHandler = async () => {
    setLoading(true);
    const response = await ApiCall.post(
      ApiRoutes.login,
      formInput,
      (
        await simpleConfig()
      ).headers
    );
    setLoading(false);
    if (!response.ok) {
      return toast.error(
        response?.data.error ? response?.data.error : response?.data.message
      );
    } else {
      toast.success(response?.data?.message);
      userLogin(response?.data?.data);
    }
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  return (
    <div className=' d-flex justify-content-center container'>
      <div className='col-lg-4'>
        <Card className='mb-0 mt-5'>
          <CardBody>
            <Link className='d-flex justify-content-center' to={WebRoutes.home}>
              <img
                style={{ width: '180px', height: '50px' }}
                className='my-3'
                src={logo}
                alt='logo'
              />
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Welcome to Florahomes Blog admin! 👋
            </CardTitle>

            <Form
              className='auth-login-form mt-2'
              onSubmit={(e) => e.preventDefault()}
            >
              <div className='mb-3'>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input
                  name='email'
                  onChange={onChangeInput}
                  type='email'
                  id='login-email'
                  placeholder='floraadmin@example.com'
                  autoFocus
                />
              </div>
              <div className='mb-3'>
                <Label className='form-label' for='login-email'>
                  Password
                </Label>
                <Input
                  name='password'
                  onChange={onChangeInput}
                  type='password'
                  placeholder='*****'
                />
              </div>

              <Button onClick={loginHandler} color='primary' block>
                Sign in
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
