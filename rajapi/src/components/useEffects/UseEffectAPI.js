import React, { useEffect, useState } from 'react'

function UseEffectAPI() {

    const [users, setUsers] = useState([]);

const getUsers = async () =>{
    const response = await fetch ('https://api.github.com/users');
    setUsers (await response.json());
}

useEffect(() => {
    getUsers();
}, []);



    return (
        <>
            

            <div className="container-fluid mt-5">
                <h1 className="text-center">List of Github Users</h1>
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            return(
                                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src={curElem.avatar_url} className="" alt="Images" width="155" /></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4><span className="textLeft">{curElem.title}</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Articles</span>
                                                        <span className="number1">38</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Followers</span>
                                                        <span className="number2">980</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Rating</span>
                                                        <span className="number3">8.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                        
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI
