import React from "react";
import { Card } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import baisri from "../images/home-learn.png";

export interface ICardData {
  key: number;
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface CardCarouselProps {
  dataList: ICardData[];
  baseUrl?: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ dataList, baseUrl }) => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <div style={{ margin: "0 5rem" }}>
        <Carousel ssr itemClass="image-item" responsive={responsive}>
          {dataList.map((item) => (
            <Card
              className="card-product"
              key={item.title}
              cover={
                <img
                  alt="example"
                  src={item.image ? item.image : baisri}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              }
              onClick={() => navigate(`${baseUrl}/${item.id}`)}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CardCarousel;
