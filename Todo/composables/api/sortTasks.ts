import { SupabaseClient } from "@supabase/supabase-js";

export const sortTasks = (async (status:string) => {
    const nuxtApp = useNuxtApp();
    const supabase = nuxtApp.$supabase as SupabaseClient;
    if(status === '4'){
        const { data, error } = await supabase.from("tasks").select("*");
        return { data, error };
    }else{
        const { data, error } = await supabase.from("tasks").select("*").eq("status", status);
        return { data, error };
    }
});