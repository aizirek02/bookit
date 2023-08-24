import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button, Select, Space, DatePicker } from "antd";
import { Col, Divider, Row } from "antd";

function UserForm(props) {
  let filteredSeat = [];
  const options = [
    {
      value: "Bishkek",
      label: "Bishkek",
    },
    {
      value: "Osh",
      label: "Osh",
    },
    {
      value: "Jalalabad",
      label: "Jalalabad",
    },
    {
      value: "Naryn",
      label: "Naryn",
    },
    {
      value: "Talas",
      label: "Talas",
    },
    {
      value: "Batken",
      label: "Batken",
    },
    {
      value: "Ysyk-Kol",
      label: "Ysyk-Kol",
    },
  ];
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [date, setDate] = useState("");

  const handleCityFromChange = (selectedOption) => {
    setCityFrom(selectedOption);
  };

  const handleCityToChange = (selectedOption) => {
    setCityTo(selectedOption);
  };

  const handleDateChange = (selectedOption) => {
    setDate(selectedOption);
  };
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [seat, setSeat] = useState("");
  const [filterSeat, setFilterSeat] = useState([]);

  const handleClick = (event) => {
    let elemId = event.currentTarget.id;
    setSeat(event.currentTarget.id);

    for (var i = 1; i < 25; i++) {
      console.log(filteredSeat);
      if (elemId == "seat" + i) {
        event.currentTarget.style.backgroundColor = "blue";
        setSeat("seat" + i);
      } else if (!filterSeat.includes("seat" + i)) {
        let otherElem = document.getElementById("seat" + i);
        otherElem.style.backgroundColor = "transparent";
      }
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSearch = (event) => {
    fetch("http://localhost:3002/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let users = response;
        let filteredUsers = [];
        let filteredSeats = [];
        let dateStr = date["$d"].toLocaleDateString();

        for (var i = 0; i < users.length; i++) {
          if (
            cityFrom == users[i].cityFrom &&
            cityTo == users[i].cityTo &&
            dateStr == new Date(users[i].date).toLocaleDateString()
          ) {
            filteredUsers.push(users[i]);
            filteredSeats.push(users[i].seat);
          }
        }
        setFilterSeat(filteredSeats);

        for (var i = 0; i < filteredUsers.length; i++) {
          let busySeat = document.getElementById(filteredUsers[i].seat);
          busySeat.style.backgroundColor = "red";
          busySeat.style["pointer-events"] = "none";
          busySeat.style.opacity = "0.7";
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`REGİSTRATİON SUCCESSFUL!`);
    window.location.reload();

    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        seat: seat,
        cityFrom: cityFrom,
        cityTo: cityTo,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
      });
  };

  return (
    <>
      <Select
        className="cityClass"
        options={options}
        onChange={handleCityFromChange}
        showSearch
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
      />
      <br />
      <Select
        className="cityClass"
        options={options}
        onChange={handleCityToChange}
        showSearch
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
      />
      <br />

      <DatePicker
        className="dateClass"
        options={date}
        onChange={handleDateChange}
        cellRender={(current) => {
          const style = {};
          if (current.date() === 1) {
            style.border = "1px solid #1677ff";
            style.borderRadius = "50%";
          }
          return (
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          );
        }}
      />
      <br />
      <Space
        direction="vertical"
        style={{
          width: "40%",
        }}
      />
      <Button
        style={{
          width: "600px",
          height: "40px",
        }}
        onClick={handleSearch}
        type="primary"
        block
      >
        Search a Ticket
      </Button>
      <Divider className="seatHeaderClass" orientation="left">
        Flight Seats
      </Divider>
      <Row id="seats" gutter={[16, 24]}>
        <Col className="gutter-row" span={3}>
          <div id="seat1" onClick={handleClick}>
            1
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat2" onClick={handleClick}>
            2
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat3" onClick={handleClick}>
            3
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat4" onClick={handleClick}>
            4
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat5" onClick={handleClick}>
            5
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat6" onClick={handleClick}>
            6
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat7" onClick={handleClick}>
            7
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat8" onClick={handleClick}>
            8
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat9" onClick={handleClick}>
            9
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat10" onClick={handleClick}>
            10
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat11" onClick={handleClick}>
            11
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat12" onClick={handleClick}>
            12
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat13" onClick={handleClick}>
            13
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat14" onClick={handleClick}>
            14
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat15" onClick={handleClick}>
            15
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat16" onClick={handleClick}>
            16
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat17" onClick={handleClick}>
            17
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat18" onClick={handleClick}>
            18
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat19" onClick={handleClick}>
            19
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat20" onClick={handleClick}>
            20
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat21" onClick={handleClick}>
            21
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat22" onClick={handleClick}>
            22
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat23" onClick={handleClick}>
            23
          </div>
        </Col>
        <Col className="gutter-row" span={3}>
          <div id="seat24" onClick={handleClick}>
            24
          </div>
        </Col>
      </Row>
      <Input
        className="nameClass"
        size="large"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        prefix={<UserOutlined />}
      />
      <br />
      <Input
        className="secondNameClass"
        size="large"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Surname"
        prefix={<UserOutlined />}
      />
      <br />
      <Button
        style={{
          width: "600px",
          height: "40px",
        }}
        onClick={handleSubmit}
        type="primary"
        block
      >
        Submit
      </Button>
    </>
  );
}

export default UserForm;
