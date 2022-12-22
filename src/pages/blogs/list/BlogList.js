import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import tempImg from "../../../assets/card-3.jpg";
import tempImg2 from "../../../assets/card-2.jpg";
import "./blog.css";
import { Link } from "react-router-dom";
import { data } from "./dummydata";
import BlogSidebar from "../../../components/blogs/BlogSidebar";

function BlogList() {
  const tags = [
    { name: "website", color: "primary" },
    { name: "hello", color: "info" },
    { name: "construction", color: "success" },
    { name: "sales", color: "primary" },
    { name: "property", color: "danger" },
  ];
  return (
    <Container style={{ marginTop: "100px" }} className="main-blogs-container">
      <Row>
        <Col md={9}>
          <Row>
            {data.blogList.map((item, index) => {
              return (
                <Col md={6} className="mb-5 ">
                  <Card className="blog-card h-100 ">
                    <Link>
                      <CardImg src={index % 2 == 0 ? tempImg : tempImg2} />
                    </Link>
                    <CardBody>
                      <CardTitle
                        className="blog-title"
                        style={{ height: "50px", lineHeight: "1.5rem" }}
                      >
                        <Link>{item.title}</Link>
                      </CardTitle>
                      <div>
                        <div>
                          <small className="text-muted me-1">by</small>
                          <small>
                            <Link className="publisher-name">
                              {item.userFullName}
                            </Link>
                          </small>
                          <span className="text-muted ms-1 me-1">|</span>
                          <small className="text-muted">
                            {item.blogPosted}
                          </small>
                        </div>
                      </div>
                      <div className="my-1 py-2">
                        {tags.map((item) => (
                          <a
                            key={index}
                            href="/"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Badge className="me-1" color={item.color} pill>
                              {item.name}
                            </Badge>
                          </a>
                        ))}
                      </div>
                      <CardText
                        className="blog-content-truncate"
                        style={{ height: "60px", lineHeight: "1.2rem" }}
                      >
                        {item.excerpt}
                      </CardText>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center justify-self-end">
                        <Link to={`/pages/blog/detail/1`}>
                          <span className="text-body blog-comments">
                            {item.comment} Comments
                          </span>
                        </Link>
                        <Link
                          className="text-button"
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
