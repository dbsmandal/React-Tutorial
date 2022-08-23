import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'


export default function TableBoots() {
    const students = [
        {
            Name: 'Dipak Mandal',
            Email: 'dbsmandal@gmial.com',
            Contact: '9734078407'
        },
        {
            Name: 'Sourav pandit',
            Email: 'Sourav@gmial.com',
            Contact: '9735125478'
        },
        {
            Name: 'Abhishek Kumar Singh',
            Email: 'Abhishek@gmial.com',
            Contact: '8145987456'
        },
        {
            Name: 'Akshay Bunny',
            Email: 'Akshay@gmial.com',
            Contact: '6945875214'
        }

    ]
    return (
        <>
            <Table striped bordered hover size="sm">
                <tbody>
                   
                    <tr>
                          
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact No</td>

                    </tr>
                   
                   
                    {
                        students.map((data, i) =>
                            <tr key={i}>
                                      

                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Contact}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>


        </>

    )
}
