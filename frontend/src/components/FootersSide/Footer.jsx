import { Typography } from "antd";
import React from "react";
import '../../utlis/css/footer.css'

const FooterSide = () => {
  return (
    <div className="FooterSide">
        <Typography.Link href="tel:+916291953764">+91 6291953764</Typography.Link>
        <Typography.Link href="#" target={'_blank'}>Privacy Policy</Typography.Link>
        <Typography.Link href="#" target={'_blank'}>Terms of Use</Typography.Link>
    </div>
  )
};

export default FooterSide;