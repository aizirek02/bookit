import { Col, Divider, Row } from "antd";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const style = {
  background: "green",
  padding: "8px 0",
  height: "50px",
  width: "80px",
};
const TicketList = () => (
  <>
    <Divider orientation="left">Flight Seats</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={3}>
        <div style={style}>1</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>2</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>3</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>4</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>5</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>6</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>7</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>8</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>9</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>10</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>11</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>12</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>13</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>14</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>15</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>16</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>17</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>18</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>19</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>20</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>21</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>22</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>23</div>
      </Col>
      <Col className="gutter-row" span={3}>
        <div style={style}>24</div>
      </Col>
    </Row>
  </>
);

export default TicketList;
