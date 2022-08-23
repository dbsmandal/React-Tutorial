import React from 'react'

export default function TableMap() {
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
        },

    ]

    return (
        <>
            <div>
                <h1>Handle Array With List</h1>
                {
                    students.map((dbs) =>
                        <div style={{ backgroundColor: "skyblue" }}>
                            <h2>Name: {dbs.Name}</h2>
                            <h2>Email:{dbs.Email}</h2>
                            <h2>Contact:{dbs.Contact}</h2>
                        </div>)

                }
            </div>
            <div>
                <h1>Handle Array With List create a table </h1>
                <table border={2} style={{ backgroundColor: "skyblue" }}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact No </td>
                    </tr>

                    {
                        students.map((dbs) =>
                            <tr>
                                <td>{dbs.Name}</td>
                                <td>{dbs.Email}</td>
                                <td>{dbs.Contact}</td>

                            </tr>
                        )
                    }
                </table>

            </div>
        </>

    )
}

//how to use map function 
//1.create a Array(students) 
//2.Define a map function like that students.map(()=>);
//3.Define a data name like (dbs)"you can choose any name "
//4. After that put the name in map funtion like that students.map((dbs)=> "Here you can take div and use the data inside Students Array like that {dbs.Name}{dbs.Email}{dbs.Contact}") 