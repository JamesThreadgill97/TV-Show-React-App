import React from "react";
import ShowCard from "../ShowCard";

export default function ShowDataCard({ showData }) {
  return (
    <div>
      {showData.map((s) => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}
    </div>
  );
}
