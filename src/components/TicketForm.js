import React from "react";
import { Select } from "antd";
import { DatePicker, Button, Space } from "antd";

function TicketForm() {
  return (
    <div>
      <Select
        showSearch
        style={{ width: 300 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Bishkek",
          },
          {
            value: "2",
            label: "Osh",
          },
          {
            value: "3",
            label: "Jalalabad",
          },
          {
            value: "4",
            label: "Naryn",
          },
          {
            value: "5",
            label: "Talas",
          },
          {
            value: "6",
            label: "Batken",
          },
          {
            value: "6",
            label: "Ysyk-Kol",
          },
        ]}
      />
      <br />
      <Select
        showSearch
        style={{ width: 300 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Bishkek",
          },
          {
            value: "2",
            label: "Osh",
          },
          {
            value: "3",
            label: "Jalalabad",
          },
          {
            value: "4",
            label: "Naryn",
          },
          {
            value: "5",
            label: "Talas",
          },
          {
            value: "6",
            label: "Batken",
          },
          {
            value: "6",
            label: "Ysyk-Kol",
          },
        ]}
      />
      <br />

      <DatePicker
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
      <Button type="primary" block>
        Search a Ticket
      </Button>
    </div>
  );
}

export default TicketForm;
