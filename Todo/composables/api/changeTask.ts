import { SupabaseClient } from "@supabase/supabase-js";

export const changeTask = async (arg: {id:number, title: string, status:string }) => {
    const nuxtApp = useNuxtApp();
    const supabase = nuxtApp.$supabase as SupabaseClient;
    const { data, error } = await supabase.from("tasks").update({
        title: arg.title,
        status: arg.status
    }).eq("id", arg.id)
    return { data, error };
};