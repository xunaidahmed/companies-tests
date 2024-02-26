import React from 'react';


export default class CartTable extends React.Component {
    render() {
        return (
            <>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="h5">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">QTY</th>
                                <th scope="col">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                <div class="d-flex align-items-center">
                                    <img src="https://i.imgur.com/2DsA49b.webp" class="img-fluid rounded-3"
                                    style={{ width: "120px" }} alt="Book" />
                                    <div class="flex-column ms-4">
                                    <p class="mb-2">Thinking, Fast and Slow</p>
                                    <p class="mb-0">Daniel Kahneman</p>
                                    </div>
                                </div>
                                </th>
                                <td class="align-middle">
                                <p class="mb-0" style={{ fontWeight: "500"}}>Digital</p>
                                </td>
                                <td class="align-middle">
                                <div class="d-flex flex-row">
                                    <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i class="fas fa-minus"></i>
                                    </button>

                                    <input id="form1" min="0" name="quantity" value="2" type="number"
                                    class="form-control form-control-sm" style={{ width: "50px"}} />

                                    <button class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                </td>
                                <td class="align-middle">
                                <p class="mb-0" style={{ fontWeight: "500"}}>$9.99</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="border-bottom-0">
                                <div class="d-flex align-items-center">
                                    <img src="https://i.imgur.com/Oj1iQUX.webp" class="img-fluid rounded-3" style={{ width: "120px" }} alt="Book" />
                                    <div class="flex-column ms-4">
                                        <p class="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                                        <p class="mb-0">Yuval Noah Harari</p>
                                    </div>
                                </div>
                                </th>
                                <td class="align-middle border-bottom-0">
                                    <p class="mb-0" style={{ fontWeight: "500"}}>Paperback</p>
                                </td>
                                <td class="align-middle border-bottom-0">
                                <div class="d-flex flex-row">
                                    <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"><i class="fas fa-minus"></i></button>
                                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control form-control-sm" style={{ width: "50px"}} />
                                    <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i class="fas fa-plus"></i></button>
                                </div>
                                </td>
                                <td class="align-middle border-bottom-0"><p class="mb-0" style={{ fontWeight: "500"}}>$13.50</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
