import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { data1 } from '../list/dummydata';
import tempImg2 from '../../../assets/card-2.jpg';
import BlogSidebar from '../../../components/blogs/BlogSidebar';

function BlogDetails() {
  const [blogData, setBlogData] = useState(data1.blogList[0]);
  const tags = [
    { name: 'website', color: 'primary' },
    { name: 'hello', color: 'info' },
    { name: 'construction', color: 'success' },
    { name: 'sales', color: 'primary' },
    { name: 'property', color: 'danger' },
  ];
  return (
    <div>
      <Row className='m-4 container'>
        {blogData !== null ? (
          <Col lg='9'>
            <Col sm='12'>
              <Card className='mb-3'>
                <CardImg
                  src={tempImg2}
                  className='img-fluid'
                  top
                  style={{ height: '60vh' }}
                />
                <CardBody>
                  <CardTitle tag='h4'>{blogData.title}</CardTitle>
                  <div className='d-flex'>
                    <div>
                      <small className='text-muted me-25'>by</small>
                      <small>
                        <a
                          className='text-body'
                          href='/'
                          onClick={(e) => e.preventDefault()}
                        >
                          {blogData.userFullName}
                        </a>
                      </small>
                      <span className='text-muted ms-50 me-25'>|</span>
                      <small className='text-muted'>
                        {blogData.createdTime}
                      </small>
                    </div>
                  </div>
                  <div className='my-1 py-2'>
                    {tags.map((item, index) => (
                      <a
                        key={index + 'i'}
                        href='/'
                        onClick={(e) => e.preventDefault()}
                      >
                        <Badge className='me-1' color={item.color} pill>
                          {item.name}
                        </Badge>
                      </a>
                    ))}
                  </div>{' '}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData.content,
                    }}
                  ></div>
                  <div className='d-flex'>
                    {/* <div>
                    <Avatar
                      img={cmtImg}
                      className="me-2"
                      imgHeight="60"
                      imgWidth="60"
                    />
                  </div> */}
                    <div>
                      <h6 className='fw-bolder'>Willie Clark</h6>
                      <CardText className='mb-0'>
                        "Donut fruitcake soufflé apple pie candy canes jujubes
                        croissant chocolate bar ice cream. Apple pie caramels
                        lemon drops halvah liquorice carrot cake. Tiramisu
                        brownie lemon drops. Apple pie caramels lemon drops
                        halvah liquorice carrot cake. Tiramisu brownie lemon
                        drops Apple pie caramels lemon drops halvah liquorice
                        carrot cake. Tiramisu brownie lemon drops. Apple pie
                        caramels lemon drops halvah liquorice carrot cake.
                        Tiramisu brownie lemon drops Apple pie caramels lemon
                        drops halvah liquorice carrot cake. Tiramisu brownie
                        lemon drops. Apple pie caramels lemon drops halvah
                        liquorice carrot cake. Tiramisu brownie lemon drops
                        Apple pie caramels lemon drops halvah liquorice carrot
                        cake. Tiramisu brownie lemon drops. Apple pie caramels
                        lemon drops halvah liquorice carrot cake. Tiramisu
                        brownie lemon drops Apple pie caramels lemon drops
                        halvah liquorice carrot cake. Tiramisu brownie lemon
                        drops. Apple pie caramels lemon drops halvah liquorice
                        carrot cake. Tiramisu brownie lemon drops Apple pie
                        caramels lemon drops halvah liquorice carrot cake.
                        Tiramisu brownie lemon drops. Apple pie caramels lemon
                        drops halvah liquorice carrot cake. Tiramisu brownie
                        lemon drops Apple pie caramels lemon drops halvah
                        liquorice carrot cake. Tiramisu brownie lemon drops.
                        Apple pie caramels lemon drops halvah liquorice carrot
                        cake. Tiramisu brownie lemon drops Apple pie caramels
                        lemon drops halvah liquorice carrot cake. Tiramisu
                        brownie lemon drops. Apple pie caramels lemon drops
                        halvah liquorice carrot cake. Tiramisu brownie lemon
                        drops Apple pie caramels lemon drops halvah liquorice
                        carrot cake. Tiramisu brownie lemon drops. Apple pie
                        caramels lemon drops halvah liquorice carrot cake.
                        Tiramisu brownie lemon drops Apple pie caramels lemon
                        drops halvah liquorice carrot cake. Tiramisu brownie
                        lemon drops. Apple pie caramels lemon drops halvah
                        liquorice carrot cake. Tiramisu brownie lemon drops
                        Apple pie caramels lemon drops halvah liquorice carrot
                        cake. Tiramisu brownie lemon drops. Apple pie caramels
                        lemon drops halvah liquorice carrot cake. Tiramisu
                        brownie lemon drops Apple pie caramels lemon drops
                        halvah liquorice carrot cake. Tiramisu brownie lemon
                        drops. Apple pie caramels lemon drops halvah liquorice
                        carrot cake. Tiramisu brownie lemon drops",
                      </CardText>
                    </div>
                  </div>
                  <hr className='my-2' />
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex align-items-center me-1'>
                        <a
                          className='me-50'
                          href='/'
                          onClick={(e) => e.preventDefault()}
                        ></a>
                      </div>
                      <div className='d-flex align-items-cente'>
                        <a
                          className='me-50'
                          href='/'
                          onClick={(e) => e.preventDefault()}
                        ></a>
                        <a href='/' onClick={(e) => e.preventDefault()}>
                          <div className='text-body align-middle'>
                            {blogData?.bookmarked}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <h6 className='section-label'>Leave a Comment</h6>
              <Card>
                <CardBody>
                  <Form className='form' onSubmit={(e) => e.preventDefault()}>
                    <Row>
                      <Col sm='6'>
                        <div className='mb-2'>
                          <Input placeholder='Name' />
                        </div>
                      </Col>
                      <Col sm='6'>
                        <div className='mb-2'>
                          <Input type='email' placeholder='Email' />
                        </div>
                      </Col>
                      <Col sm='6'>
                        <div className='mb-2'>
                          <Input type='url' placeholder='Website' />
                        </div>
                      </Col>
                      <Col sm='12'>
                        <div className='mb-2'>
                          <Input
                            className='mb-2'
                            type='textarea'
                            rows='4'
                            placeholder='Comment'
                          />
                        </div>
                      </Col>
                      <Col sm='12'>
                        <div className='form-check mb-2'>
                          <Input type='checkbox' id='save-data-checkbox' />
                          <Label
                            className='form-check-label'
                            for='save-data-checkbox'
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </Label>
                        </div>
                      </Col>
                      <Col sm='12'>
                        <Button color='primary'>Post Comment</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Col>
        ) : null}
        <Col sm={3}>
          <BlogSidebar />
        </Col>
      </Row>
    </div>
  );
}

export default BlogDetails;
