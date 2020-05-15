import React from "react";

// Destructuring Props to extact the valuses I want. Don't want to use props.*
export default ({ page, albums, totalRecs, perPage, changePage }) => {
  // Calculate Pages
  const totalPages = totalRecs > 0 ? Math.ceil(totalRecs / perPage) : 1;
  // Start 5 pages back or at the first page
  const startPage = page - 5 > 0 ? page - 5 : 1;
  // End 5 pages forward or at the last page
  const lastPage = page + 5 > totalPages ? totalPages : page + 5;
  return (
    <div className="col-9">
      <ul className="list-group">
        {albums.map(entry => (
          <li key={entry.id} className="list-group-item">
            {entry.title}
          </li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {startPage === 1 && page === 1 ? (
            <li className="page-item disabled">
              <button
                className="page-link"
                onClick={() => changePage(startPage)}
              >
                {startPage}
              </button>
            </li>
          ) : startPage === 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => changePage(startPage)}
              >
                {startPage}
              </button>
            </li>
          ) : (
            <li className="page-item">
              <button className="page-link" onClick={() => changePage(1)}>
                1
              </button>
            </li>
          )}

          {lastPage - startPage > 1
            ? [...new Array(lastPage - startPage + 1)].map((_, p) => {
                const pno = startPage + p;
                if (pno === page && pno !== startPage && pno !== totalPages) {
                  return (
                    <li key={p} className="page-item disabled">
                      <button
                        className="page-link"
                        onClick={() => changePage(pno)}
                      >
                        {pno}
                      </button>
                    </li>
                  );
                } else if (pno !== startPage && pno !== totalPages) {
                  return (
                    <li key={p} className="page-item">
                      <button
                        className="page-link"
                        onClick={() => changePage(pno)}
                      >
                        {pno}
                      </button>
                    </li>
                  );
                } else {
                  return null;
                }
              })
            : null}

          {lastPage === totalPages && page === totalPages ? (
            <li className="page-item disabled">
              <button className="page-link" onClick={() => changePage(page)}>
                {page}
              </button>
            </li>
          ) : (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => changePage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
