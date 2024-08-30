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
    return "seller";
}