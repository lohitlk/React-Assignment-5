import React from 'react'

function Home(props) {
    console.log(props.loginData.email)
    return (
        <div>
            <h1>{props.loginData.email}</h1>
            {/* <h1>Home</h1>
            <h3>Registered data</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Re-Password</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        props.registerData.map((value,idx)=>{
                            for(var data in value){
                                return <td key={data}>{`${value[data]}`}</td>
                            }
                           
                        })
                    }
                    
                        
                    </tr>
                   
                </tbody>
            </table><br/><br/>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Psssword</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        props.loginData.map((value,idx)=>{
                           return <td key={value+idx}>{value}</td>
                        })
                    }
                    
                        
                    </tr>
                   
                </tbody>
            </table> */}
        </div>
    )
}

export default Home
