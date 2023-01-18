import React from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import tempImg from '../../../assets/card-3.jpg';
import tempImg2 from '../../../assets/card-2.jpg';
import './blog.css';
import { Link } from 'react-router-dom';
import BlogSidebar from '../../../components/blogs/BlogSidebar';
import { useQuery } from 'react-query';
import moment from 'moment';
import { ApiCall, ApiRoutes } from '../../../api';
import { simpleConfig } from '../../../api/env';

const tags = [
  { name: 'website', color: 'primary' },
  { name: 'hello', color: 'info' },
  { name: 'construction', color: 'success' },
  { name: 'sales', color: 'primary' },
  { name: 'property', color: 'danger' },
];
function BlogList() {
  const { isLoading, error, data } = useQuery('allBlogs', () => getBlogs());

  const getBlogs = async () => {
    const response = await ApiCall.get(
      ApiRoutes.allBlogs(1, 200),
      (
        await simpleConfig()
      ).headers
    );
    return response.data;
  };
  if (isLoading) return 'Loading...';
  console.log(data);
  return (
    <div className='main-blogs-container'>
      <Row className='hero-section-blog'></Row>
      <Row className='container mt-5'>
        <Col md={9}>
          <Row>
            {data?.blogs.map((item, index) => {
              return (
                <Col md={6} key={index} className='mb-5 '>
                  <Card className='blog-card h-100 '>
                    <Link>
                      <CardImg
                        className='blog-img'
                        src={item?.image ? item.image : tempImg2}
                      />
                    </Link>
                    <CardBody>
                      <CardTitle
                        className='blog-title'
                        style={{ height: '50px', lineHeight: '1.5rem' }}
                      >
                        <Link>{item.title}</Link>
                      </CardTitle>
                      <div>
                        <div>
                          <small className='text-muted me-1'>by</small>
                          <small>
                            <Link className='publisher-name'>
                              {item.userFullName}
                            </Link>
                          </small>
                          <span className='text-muted ms-1 me-1'>|</span>
                          <small className='text-muted'>
                            {moment(item.created_at).format(' MMMM Do YYYY')}
                          </small>
                        </div>
                      </div>
                      <div className='my-1 py-2'>
                        {tags.map((item, index) => (
                          <a
                            key={index}
                            href='/'
                            onClick={(e) => e.preventDefault()}
                          >
                            <Badge className='me-1' color={item.color} pill>
                              {item.name}
                            </Badge>
                          </a>
                        ))}
                      </div>
                      <CardText
                        style={{ height: '60px', lineHeight: '1.2rem' }}
                      >
                        {item?.abstract}
                      </CardText>
                      <hr />
                      <div className='d-flex justify-content-between align-items-center justify-self-end'>
                        <Link to={`/pages/blog/detail/1`}>
                          <span className='text-body blog-comments'>
                            {item.comment ? item.comments : '0'} Comments
                          </span>
                        </Link>
                        <Link
                          className='text-button'
                          to={`/blog-details/${item.slug}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col md={3}>
          <BlogSidebar />
        </Col>
      </Row>
    </div>
  );
}

export default BlogList;
