import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AttendeeService from "../../../services/AttendeeService";

const AttendeeCount = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [initialLoading, setInitialLoading] = useState(false);

    useEffect(() => {
        AttendeeService.getAllAttendeeCount().then((res) => {
          setInitialLoading(true);
            setCount(res);
            setTotal(res*100);
        }).catch((err) => {
            console.log(err);
        });
    },[])

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div className="card text-white mb-3" style={{backgroundColor: "#8C9EFF", maxWidth: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "25px"}}>
        <div className="card-header">No. of Registered Attendees</div>
        <div className="card-body text-center">
          <CircularProgress color="inherit" hidden={initialLoading}/>
          <h2 hidden={!initialLoading} className="card-title">{count}</h2>
        </div>
      </div>
      <div className="card text-white mb-3" style={{backgroundColor: "#B388FF", maxWidth: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "25px"}}>
        <div className="card-header">Total Earned from Attendees</div>
        <div className="card-body text-center">
        <CircularProgress color="inherit" hidden={initialLoading}/>
          <h2 hidden={!initialLoading} className="card-title">${total}</h2>
        </div>
      </div>
    </div>
  );
};

export default AttendeeCount;
