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
import { data1 } from './dummydata';
import BlogSidebar from '../../../components/blogs/BlogSidebar';
import { useQuery } from 'react-query';
import moment from 'moment';

const tags = [
  { name: 'website', color: 'primary' },
  { name: 'hello', color: 'info' },
  { name: 'construction', color: 'success' },
  { name: 'sales', color: 'primary' },
  { name: 'property', color: 'danger' },
];
function BlogList() {
  const { isLoading, error, data } = useQuery('allBlogs', () =>
    fetch('http://localhost:7000/api/blog/all?currentpage=1&perpage=200').then(
      (res) => res.json()
    )
  );
  if (isLoading) return 'Loading...';
  return (
    <Container style={{ marginTop: '100px' }} className='main-blogs-container'>
      <Row>
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
                        className='blog-content-truncate'
                        style={{ height: '60px', lineHeight: '1.2rem' }}
                      >
                        {item.details}
                      </CardText>
                      <hr />
                      <div className='d-flex justify-content-between align-items-center justify-self-end'>
                        <Link to={`/pages/blog/detail/1`}>
                          <span className='text-body blog-comments'>
                            {item.comment} Comments
                          </span>
                        </Link>
                        <Link
                          className='text-button'
                          to={`/blog-details/${item.id}`}
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
    </Container>
  );
}

export default BlogList;
