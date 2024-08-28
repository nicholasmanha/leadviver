require('dotenv').config({ path: '../.env' });
const axios = require('axios');

async function get_tokens_from_code(code) {
    try {
        const response = await axios.post(process.env.COGNITO_APP_OAUTH_URL, null, {
            params: {
                grant_type: 'authorization_code',
                client_id: process.env.COGNITO_CLIENT_ID,
                code: code,
                redirect_uri: process.env.COGNITO_CALLBACK_URI
            }
        })

        return {
            id_token: response.data.id_token,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token
        }
    } catch (error) {
        throw error;
    }
}

async function test() {
    let x = await get_tokens_from_code("ccad6209-2b9a-45a2-a148-80f85e2defe6")
    console.log(x)
}

test()