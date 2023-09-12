mycb = (r)=>{
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(r)
    }

    let fetchRes = fetch("http://localhost:3000/api", options );
    fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    });
};

