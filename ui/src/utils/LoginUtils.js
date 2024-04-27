const fetchUserTokenFromBackend = async (formBody) => {
    // console.log('form data', formBody);
    const formData = new FormData();
    for (const entry of Object.entries(formBody)) {
        formData.append(entry[0], entry[1]);
    }
    console.log("form data", formData);
    const response = await fetch(
        `http://0.0.0.0:5555/login`,
        {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json'
            },
            'body': formData
        }
    );
    const jsonResponse = await response.json();
    if (response?.status === 200){
        console.log('login success', jsonResponse.access_token);
        return jsonResponse.access_token;
    }
    return null;
}

export default fetchUserTokenFromBackend;