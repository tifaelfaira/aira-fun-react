import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://ylemidfxfvquhwphztjb.supabase.co"

const SUPABASE_ANON_KEY = "sb_publishable_HJ1hf6OL4mNu-doQCE2-Xg_HmaFrDkK"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)  