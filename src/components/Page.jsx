import React, { useState, useEffect } from "react";
import axios from "axios";

import List from "./List";

export default () => {
  // Create State variable to hold page number
  const [page, setPage] = useState(1);
  // Create State variable to hold per page number
  const [perPage, setPerPage] = useState(10);
  // Create State variable to hold all of the objects
  const [albums, setAlbums] = useState([]);

  //Fetch Albums from Server (JSON Placeholder)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(resp => {
        setAlbums(resp.data);
      })
      .catch(err => {
        console.error(err);
        setAlbums([]);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <label htmlFor="perPageSpinner">Select Number per Page</label>
        <input
          id="perPageSpinner"
          max="25"
          min="5"
          size="3"
          value={perPage}
          type="number"
          onChange={e => setPerPage(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Page {page}</h5>
        <List
          page={page}
          perPage={perPage}
          totalRecs={albums.length}
          albums={albums.slice((page - 1) * perPage, page * perPage)}
          changePage={p => setPage(p)}
        />
      </div>
    </div>
  );
};
