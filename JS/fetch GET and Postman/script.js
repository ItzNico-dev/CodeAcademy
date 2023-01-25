fetch('https://3ab3dff7-6d62-4abe-98e4-d98a85f07d6a.mock.pstmn.io/posts')
.then((res) => res.json())
.then((data) => console.log(data))

fetch('https://3ab3dff7-6d62-4abe-98e4-d98a85f07d6a.mock.pstmn.io/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        test: 'test'
    })

})
.then((res) => res.json())
.then((data) => console.log(data))