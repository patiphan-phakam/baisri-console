import { Row, Col, Image, message } from "antd";
import "../../styles/login.css";
import logo from "../../images/logo-mb.png";
import { useEffect, useState } from "react";
import FormRegister from "./components/formRegister";
import { TUserRegister } from "../../types/loginTypes";
import LogoutServicce from "./services/logout-service";

const LoginPage: React.FC<{}> = () => {
  const [remenber, setRemember] = useState(false);

  useEffect(() => {
    const bsRemember = localStorage.getItem("bsRemember");
    if (bsRemember) {
      if (bsRemember === "true") {
        console.log(bsRemember);
        setRemember(true);
      }
    }
  }, []);

  const handleRegister = (data: TUserRegister) => {
    const register = LogoutServicce.createUser(data);
    if (!register) {
      message.error("Register failed.");
      return;
    }
    message.success("Register successfully.");
  };

  return (
    <div className="login-page">
      <Row>
        <Col md={15}>
          <div className="left-side"></div>
        </Col>
        <Col md={9}>
          <div className="right-side">
            <div className="login-form">
              <Row justify={"center"}>
                <Image preview={false} src={logo} width={"50%"} />
              </Row>
              <div style={{ marginTop: "2rem" }}>
                <FormRegister
                  remenber={remenber}
                  setRemember={setRemember}
                  handleRegister={handleRegister}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;