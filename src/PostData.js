import React from 'react';

async function PostData() {
    try {
        const Response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await Response.json();
        return data
    }
    catch (e) {
        console.log(e)
    }

}



export async function UserData(username, email) {

    try {
        const Response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}&&email=${email}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await Response.json();

        return data;

    } catch (e) {
        alert(e);
    }
}

export default PostData;