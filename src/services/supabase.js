import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://ikcjnlxyslcnimbjdeww.supabase.co"

const SUPABASE_ANON_KEY = "sb_publishable_buiuxuQHg6691r6OMUPlbg_Cfcizv0Z"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 