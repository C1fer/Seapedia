import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pruyznckhbwbkimjoydh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydXl6bmNraGJ3YmtpbWpveWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NjU2MDAsImV4cCI6MTk5NzQ0MTYwMH0.idb0cdpoZgskY9qCQthiJbd0uVmbQFrzAOj5DcGu1RY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase