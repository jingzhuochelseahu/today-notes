import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ccgaqinrvkzhlxuijyml.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjZ2FxaW5ydmt6aGx4dWlqeW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNDY0MTMsImV4cCI6MTk5NDgyMjQxM30.80uz0KG7BD2V5Td-DnIEiKH4cwKNvmE7G8-AR3vpwW4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
