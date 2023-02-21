import React from "react";

export const View = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <h4>Upload images</h4>
            <form action="/upload" method="POST" encType="multipart/form-data">
              <div>
                <input type="file" name="file" id="input-files" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
