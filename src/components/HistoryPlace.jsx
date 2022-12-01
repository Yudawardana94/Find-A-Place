import React from "react";
import { useSelector } from "react-redux";
import "./HistoryPlace.css";
import { List } from "antd";

function HistoryPlace() {
  const placeHistory = useSelector((state) => state.places.history);
  return (
    <div className="history-block">
      <h3>History Place</h3>
      <List
        size="small"
        dataSource={placeHistory}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </div>
  );
}

export default HistoryPlace;
