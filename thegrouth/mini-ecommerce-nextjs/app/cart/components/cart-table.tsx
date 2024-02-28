

export default function CartTable()
{
  return (
    <>
      <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="h5">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Unit Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                    <div className="d-flex align-items-center">
                        <img src="https://i.imgur.com/2DsA49b.webp" className="img-fluid rounded-3" style={{ width: "120px" }} alt="Book" />
                        <div className="flex-column ms-4">
                        <p className="mb-2">Thinking, Fast and Slow</p>
                        <p className="mb-0">Daniel Kahneman</p>
                        </div>
                    </div>
                    </th>
                    <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500"}}>Digital</p>
                    </td>
                    <td className="align-middle">
                    <div className="d-flex flex-row">
                        <button className="btn btn-link px-2">
                        <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" style={{ width: "50px"}} />

                        <button className="btn btn-link px-2">
                        <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    </td>
                    <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500"}}>$9.99</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="border-bottom-0">
                    <div className="d-flex align-items-center">
                        <img src="https://i.imgur.com/Oj1iQUX.webp" className="img-fluid rounded-3" style={{ width: "120px" }} alt="Book" />
                        <div className="flex-column ms-4">
                            <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                            <p className="mb-0">Yuval Noah Harari</p>
                        </div>
                    </div>
                    </th>
                    <td className="align-middle border-bottom-0">
                        <p className="mb-0" style={{ fontWeight: "500"}}>Paperback</p>
                    </td>
                    <td className="align-middle border-bottom-0">
                    <div className="d-flex flex-row">
                        <button className="btn btn-link px-2"><i className="fas fa-minus"></i></button>
                        <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm" style={{ width: "50px"}} />
                        <button className="btn btn-link px-2"><i className="fas fa-plus"></i></button>
                    </div>
                    </td>
                    <td className="align-middle border-bottom-0"><p className="mb-0" style={{ fontWeight: "500"}}>$13.50</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  );
}
