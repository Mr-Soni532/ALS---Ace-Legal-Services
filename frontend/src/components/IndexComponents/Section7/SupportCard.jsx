import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const SupportCard = ({ imagesrc, text, description, delay }) => (
  <Card
    data-aos="fade-up"
    data-aos-delay={delay}
    className="Supportcard"
    style={{ width: 240, background: "transparent" }}
    cover={
      <img
        style={{ width: "150px", height: "150px" }}
        alt="example"
        src={imagesrc}
      />
    }
  >
    <Meta title={text} description={description} />
  </Card>
);

export default SupportCard;
