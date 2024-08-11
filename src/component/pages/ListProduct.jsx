import React from 'react'
import { NavLink } from 'react-router-dom'

const ListProduct = () => {
    return (
        <div className='mt-3'>
            <h4 className='text-secondary fs-6'>Products List</h4>
            {/* <a href="#" className="btn mb-3 text-white fw-bold" style={{ background: '#ef6e15' }}>New product</a> */}
            <NavLink to="/create-product" className='btn mb-3 text-white fw-bold' style={{background:'#ef6e15'}}>New Product</NavLink>
            <div className="form-group d-flex mb-4">
                <input type="text" className="form-control w-25" placeholder="Search products..." />
                <button type="button" className="btn" style={{ background: '#ff9219' }}>Search</button>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className='border-end-0' style={{ background: '#f9fafc'}}><input type="checkbox" /></th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc'}}>NAME</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc'}}>IMG</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc'}}>PRICE</th>
                        <th className='text-secondary border-0' style={{ background: '#f9fafc'}}>TYPE</th>
                        <th className='border-start-0' style={{ background: '#f9fafc'}}/>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-end-0 pt-4'><input type="checkbox" /></td>
                        <td className='border-0 pt-4 fw-bold'>Product 3</td>
                        <td className='border-0'><img src="https://picsum.photos/200/200" width={50} /></td>
                        <td className='border-0 pt-4 fw-bold'>4999</td>
                        <td className='border-0 pt-4 fw-bold'>A</td>
                        <td className='text-end border-start-0 pt-4'>
                            <NavLink to="/update-product" className="me-2 text-decoration-none fw-bold" style={{ color: '#f3601b' }}>Edit</NavLink>
                            <a className="me-2 text-decoration-none fw-bold ps-1 border-none" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>Delete</a>
                            <a href="#" className="me-2 text-decoration-none fw-bold px-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>View detail</a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border-end-0 pt-4'><input type="checkbox" /></td>
                        <td className='border-0 pt-4 fw-bold'>Product 2</td>
                        <td className='border-0'><img src="https://picsum.photos/100/100" width={50} /></td>
                        <td className='border-0 pt-4 fw-bold'>3999</td>
                        <td className='border-0 pt-4 fw-bold'>B</td>
                        <td className='text-end border-start-0 pt-4'>
                            <NavLink to="/update-product" className="me-2 text-decoration-none fw-bold" style={{ color: '#f3601b' }}>Edit</NavLink>
                            <a href="#" className="me-2 text-decoration-none fw-bold ps-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>Delete</a>
                            <a href="#" className="me-2 text-decoration-none fw-bold px-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>View detail</a>
                        </td>
                    </tr>
                    <tr>
                        <td className='border-end-0 pt-4'><input type="checkbox" /></td>
                        <td className='border-0 pt-4 fw-bold'>Product 1</td>
                        <td className='border-0'><img src="https://picsum.photos/300/300" width={50} /></td>
                        <td className='border-0 pt-4 pt-4 fw-bold'>2999</td>
                        <td className='border-0 pt-4 pt-4 fw-bold'>A</td>
                        <td className='text-end border-start-0 pt-4'>
                            <NavLink to="/update-product" className="me-2 text-decoration-none fw-bold" style={{ color: '#f3601b' }}>Edit</NavLink>
                            <a href="#" className="me-2 text-decoration-none fw-bold ps-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>Delete</a>
                            <a href="#" className="me-2 text-decoration-none fw-bold px-1" style={{ borderLeft: '2px solid #f3601b', color: '#f3601b' }}>View detail</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colSpan={3} className='p-2 border border-end-0' style={{ background: '#f9fafc'}}>Showing 1 to 3 of 3 results</td>
                    <td colSpan={3} style={{fontWeight:'700',background:'#f9fafc'}} className='text-end'>Per page: 10 <i className="fa fa-angle-down me-2" style={{ background: '#f9fafc'}}></i></td>
                </tfoot>
            </table>
        </div>

    )
}

export default ListProduct