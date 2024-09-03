export async function get_tokens_from_code(code) {
    try {
        const data = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || "",
            code: code,
            redirect_uri: process.env.NEXT_PUBLIC_COGNITO_CALLBACK_URI || ""
        }).toString();

        const response = await fetch(process.env.NEXT_PUBLIC_COGNITO_APP_OAUTH_URL || "",
            {
                method: "POST",
                cache: "no-store",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data.toString()
            })

        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

export async function what_is_my_type() {
    try {
        const response = await fetch(
            (process.env.NEXT_PUBLIC_API_URL || "") + (process.env.NEXT_PUBLIC_CHECK_URL || ""),
            {
                method: "GET",
                cache: "no-store",
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken": localStorage.getItem("id_token") || ""
                }
            }
        )
        const response_json = await response.json()
        return response_json["body"]["user_type"]
    } catch (e) { }
}

export async function permanently_set_my_type(type) {
    try {
        const queryString = new URLSearchParams({
            user_type: type
        }).toString();
        const response = await fetch(
            `${(process.env.NEXT_PUBLIC_API_URL || "")}${(process.env.NEXT_PUBLIC_SET_USE_TYPE_URL || "")}?${queryString}`,
            {
                method: "PUT",
                cache: "no-store",
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken": localStorage.getItem("id_token") || ""
                }
            },
        )
        const response_json = response.json()
        return response_json;
    } catch (e) {}
}

export const choose_lead_selling_type = async (router, user_type) => {
    if (user_type !== "seller" && user_type !== "buyer") { return; }
    
    const ERROR_MESSAGE = "Something went wrong. Likely, you have already chosen to buy or sell leads. If you'd like to change this, you'll need to create a new account.";
    const response = await permanently_set_my_type("seller");
    
    if ("message" in response && response["message"] == 'Unauthorized') {
        router.push('/');
        return;
    } 
    else if (response['statusCode'] !== 200) {
        alert(ERROR_MESSAGE)
        return;
    }
    switch (user_type) {
        case "seller":
            router.push('/s/dash');
            break;
        case "buyer":
            router.push('/b/dash');
            break;
    }
}