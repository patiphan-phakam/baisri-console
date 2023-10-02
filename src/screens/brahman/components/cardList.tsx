import React from "react";
import { Card, Col, Image, Rate, Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

interface CardCarouselProps {
  dataList: any;
  baseUrl?: string;
}

const CardList: React.FC<CardCarouselProps> = ({ dataList, baseUrl }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "0 3rem" }}>
        <Row>
          {dataList.products.map((item: any, index: number) => (
            <Col md={8} key={index} style={{ marginTop: "1em" }}>
              <Card
                className="card-product"
                key={index}
                cover={
                  <Image
                    preview={false}
                    alt="example"
                    src={item.productImages[0].productImageSource}
                  />
                }
                onClick={() => navigate(`${baseUrl}/${item.productId}`)}
              >
                <Meta title={item.productName} />
                <Row>
                  <Col md={6} sm={12}>
                    <p className="card-price-custom">{`฿${item.productPrice}`}</p>
                  </Col>
                  <Col md={18} style={{ textAlign: "right" }} sm={12}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={5}
                      className="card-rate-custom"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="card-description-custom">{`${dataList.user.fullName}`}</p>
                  </Col>
                  <Col md={12} style={{ textAlign: "right" }}>
                    <p className="card-description-custom">
                      {dataList.user.province}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
