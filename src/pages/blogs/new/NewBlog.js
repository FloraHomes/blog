// ** React Imports
import { useState, useEffect } from 'react';

// ** Third Party Components
import Select from 'react-select';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './newblog.css';
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { ApiCall, ApiRoutes, config } from '../../../api';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const initialContent = ``;
const NewBlog = () => {
  const contentBlock = htmlToDraft(initialContent);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  const [title, setTitle] = useState(''),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [selectedCategories, setSelectedCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(null),
    [image, setImage] = useState();

  const {
    isLoading,
    error,
    data: categoriesApi,
  } = useQuery('allCategories', async () => {
    const response = await ApiCall.get(
      ApiRoutes.allCategories,
      (
        await config()
      ).headers
    );
    return response.data;
  });
  useEffect(() => {
    if (categoriesApi?.categories) {
      let tempCats = [];
      categoriesApi?.categories.map((cat) => {
        tempCats = [...tempCats, { value: cat._id, label: cat.title }];
      });
      setBlogCategories(tempCats);
    }
  }, [categoriesApi]);

  if (isLoading) return 'Loading...';

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    setImage(e?.target.files[0]);
    reader.onload = function () {
      setFeaturedImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const addNewBlog = async () => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('details', content);
    formData.append('image', image);
    formData.append('author', '6391d57d2d933999f0401dd6');
    for (var i = 0; i < selectedCategories.length; i++) {
      formData.append('categories[]', selectedCategories[i]);
    }

    const response = await ApiCall.post(
      ApiRoutes.addNewBlog,
      formData,
      (
        await config()
      ).headers
    );
    console.log({ response });
    if (response.ok) {
      toast.success(response?.data.message);
      setImage(null);
      setFeaturedImg(null);
      setTitle('');
      setContent(editorState);
    } else {
      toast.error(response?.data.error);
    }

    // }else
  };
  return (
    <div className='container mt-5'>
      <Row>
        <Col sm='12'>
          <Card>
            <CardBody>
              <div className='d-flex'>
                <div>
                  <h3>New Blog</h3>
                </div>
              </div>
              <Form className='mt-2' onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col md='6' className='mb-2'>
                    <Label className='form-label' for='blog-edit-title'>
                      Title
                    </Label>
                    <Input
                      id='blog-edit-title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col md='6' className='mb-2'>
                    <Label className='form-label' for='blog-edit-category'>
                      Category
                    </Label>
                    {blogCategories ? (
                      <Select
                        id='blog-edit-category'
                        isClearable={false}
                        value={selectedCategories}
                        isMulti
                        name='colors'
                        options={blogCategories}
                        className='react-select'
                        classNamePrefix='select'
                        onChange={(data) => setSelectedCategories(data)}
                      />
                    ) : null}
                  </Col>
                  <Col md='6' className='mb-2'>
                    <Label className='form-label' for='blog-edit-status'>
                      Author
                    </Label>
                    <Input
                      id='blog-edit-title'
                      value={'Sheraz Sab'}
                      disabled={true}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col sm='12' className='mb-2'>
                    <h5 className='form-label mt-4'>Content</h5>
                    <div className='border p-2 mb-3 editor'>
                      <Editor
                        editorState={content}
                        onEditorStateChange={(data) => setContent(data)}
                      />
                    </div>
                  </Col>
                  <Col className='mb-2' sm='12'>
                    <div className='border rounded p-2'>
                      <h4 className='mb-1'>Featured Image</h4>
                      <div className='d-flex flex-column flex-md-row'>
                        <img
                          className='rounded me-2 mb-1 mb-md-0'
                          src={
                            featuredImg
                              ? featuredImg
                              : 'https://via.placeholder.com/1500/d4d4d4/808080?Text=image'
                          }
                          alt='featured img'
                          width='170'
                          height='110'
                        />
                        <div>
                          <div className='d-inline-block'>
                            <div className='mb-0'>
                              <Input
                                type='file'
                                id='exampleCustomFileBrowser'
                                name='customFile'
                                onChange={onChange}
                                accept='.jpg, .png, .gif'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className='mt-50'>
                    <Button
                      onClick={addNewBlog}
                      color='primary'
                      className='ms-1 p-2'
                    >
                      Add new blog
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NewBlog;
