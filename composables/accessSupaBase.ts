import { createClient } from '@supabase/supabase-js';
const access = {
    url:"https://ayyxmyyohgpaqsyrxoyz.supabase.co/",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eXhteXlvaGdwYXFzeXJ4b3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNTc0ODQsImV4cCI6MjAxMDczMzQ4NH0.hvzS7fD_9fayDi_PPlxh1nyTlwABy2gxJX4jMHezNrQ"
}
const cnx = createClient(access.url,access.token);
cnx.auth.signInWithPassword({
    email:"pool@pool.pool",
    password:"123456"
});
export const SupaBaseCnx = cnx;