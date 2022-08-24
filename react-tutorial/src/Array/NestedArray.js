import React from 'react'
import { Table } from 'react-bootstrap'


export default function NestedArray() {
    const students = [
        {
            Name: 'Dipak Mandal',
            username:"user1",
            Email: 'dbsmandal@gmial.com',
            Contact: '9734078407',
            Address:[
                {
                    PS:"ratua",
                    Dist:"malda",
                    City:"kolkata",
                    pin:"732125"
    
                },
                {
                    PS:"new",
                    Dist:"ert city",
                    City:"bangalore",
                    pin:"712545"
    
                }
            ]

        },
        {
            Name: 'Sourav pandit',
            username:"user2",
            Email: 'Sourav@gmial.com',
            Contact: '9735125478',
            Address:[
            {
                PS:"patoli",
                Dist:"patna",
                City:"patna",
                pin:"712545"

            },
            {
                PS:"gtttttt",
                Dist:"soucth city",
                City:"bangalore",
                pin:"712545"

            }]
        },
        {
            Name: 'Abhishek Kumar Singh',
            username:"user3",
            Email: 'Abhishek@gmial.com',
            Contact: '8145987456',
            Address:[
                {
                    PS:"bikaspuri",
                    Dist:"delgi",
                    City:"delhi",
                    pin:"110245"
    
                },
                {
                    PS:"ddddd",
                    Dist:"soucth city",
                    City:"bangalore",
                    pin:"712545"
    
                }
            ]
            
        },
        {
            Name: 'Akshay Bunny',
            username:"user4",
            Email: 'Akshay@gmial.com',
            Contact: '6945875214',
            Address:[  {
                PS:"rangoli",
                Dist:"soucth city",
                City:"bangalore",
                pin:"712545"

            },
            {
                PS:"klklklklklkl",
                Dist:"soucth city",
                City:"bangalore",
                pin:"712545"

            }]
          
        }

    ]
  return (
   <>
<h1>Nested Array Table</h1>

<Table style={{backgroundColor:"lightgreen",border:"5px solid black"}}>
    <tbody>
        <tr>
        <td>Serial No</td>
            <td>Name</td>
            <td>Email</td>
            <td>User Name</td>
            <td>Contact</td>
            <td>Address</td>
        </tr>
        {
            students.map((dbs,kp)=>
            <tr key={kp}>
                 <td>{kp+1}</td>
            <td>{dbs.Name}</td>
            <td>{dbs.Email}</td>
            <td>{dbs.username}</td>
            <td>{dbs.Contact}</td>
            <td>
                <Table style={{backgroundColor:"skyblue" ,border:"2px solid yellow"}}>
                    <tbody>
                    <tr>
                          
                            <td>Police Station</td>
                            <td>District</td>
                            <td>City</td>
                            <td>Postal Code</td>


                        </tr>
                        {
                        dbs.Address.map((dbsnew,kpnew)=>
                        <tr key={kpnew}>
                            <td>{dbsnew.PS}</td>
                            <td>{dbsnew.Dist}</td>
                            <td>{dbsnew.City}</td>
                            <td>{dbsnew.pin}</td>


                        </tr>
                        )}
                    </tbody>
                </Table>
            </td>
        </tr>
            )
        }
    </tbody>
</Table>



   </>
  )
}
