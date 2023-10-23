import React from "react";
import ShowCard from "../ShowCard";
import { useShows } from "../../contexts";

export default function ShowDataCard() {
  const { sortedShows } = useShows();
  return (
    <div>
      {sortedShows.map((s) => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}
    </div>
  );
}
