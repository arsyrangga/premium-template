import React from "react";

function TableArtikel({ onAddArtikel }) {
  return (
    <div class="main-panel w-100">
      <div class="content-wrapper">
        <button className="btn btn-primary mb-3" onClick={onAddArtikel}>
          Tambah Artikel
        </button>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Artikel</h4>
            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <table id="order-listing" class="table sortable-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>content ID</th>
                        <th>title</th>
                        <th>deskripsi</th>
                        <th>image</th>
                        <th>category</th>
                        <th>created at</th>
                        <th>slug</th>
                        <th>publish</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                      <TableContent />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TableContent = () => {
  return (
    <tr>
      <td>1</td>
      <td>2012/08/03</td>
      <td>Berita hangat</td>
      <td className="table-overflow">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        ipsa magnam in ratione vel. Magni odit, quod numquam fuga neque
        distinctio delectus totam quis at corporis porro ut eaque eligendi.
      </td>
      <td>$1500</td>
      <td>Nasional</td>
      <td>2021/23/07</td>
      <td></td>
      <td>
        <label class="badge badge-info">Published</label>
      </td>
      <td style={{ display: "flex", gap: "8px" }}>
        <button class="btn btn-outline-primary">edit</button>
        <button class="btn btn-outline-danger">delete</button>
      </td>
    </tr>
  );
};
export default TableArtikel;
