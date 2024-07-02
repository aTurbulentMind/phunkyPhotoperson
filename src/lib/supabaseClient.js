import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://adgdwehuxdddcwmfhudx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZ2R3ZWh1eGRkZGN3bWZodWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NDY5MjMsImV4cCI6MjAzNDIyMjkyM30.MpxDNSoRD3zp6FXPXLOStxpY2PG9llWDaVhrRrJU7_M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
