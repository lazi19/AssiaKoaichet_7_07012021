import { useState } from "react";


const useSignUp = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signUp = async (body) => {
        const url = "http://localhost:3000/api/user/signup"
        
        setData(null)
        setIsLoading(true);

        try {
            const resp = await  fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body
                    // : JSON.stringify({
                    //     lastname: data.lastname,
                    //     firstname: data.firstname,
                    //     mail: data.mail,
                    //     password: data.password,
                    //     // terms: data.terms,
                    //     // token,
                    // })
                    ,
            });

            const respData = await resp.json();

            setData(respData);
            
        } catch (e) {
            setData([]);
            setError(e);
        }

        setIsLoading(false);

        return data;
    };

    return { data, error, isLoading, signUp };
    
};

export default useSignUp;