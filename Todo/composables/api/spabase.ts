import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types/schema";


export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    const supabase = createClient<Database>(
        runtimeConfig.public.SUPABASE_URL as string,
        runtimeConfig.public.SUPABASE_KEY as string
    );
    
    nuxtApp.$supabase = supabase;
});