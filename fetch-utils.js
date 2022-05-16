// Enter Supabase Information
const SUPABASE_URL = 'https://icyrbwltlybmigeljxmh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeXJid2x0bHlibWlnZWxqeG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMxMzMsImV4cCI6MTk2Nzg3OTEzM30.kUzjWO4wi0A9AVcWdFt_BG9uq-HBZoAR2aZ4IRN55yw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
    
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });
    if (response.user){
        return response.user;
    } else {
        console.error(response.error);
    }

    
}

// export async function checkAuth() {}

// export async function redirectIfLoggedIn() {}

// export async function logout() {}
