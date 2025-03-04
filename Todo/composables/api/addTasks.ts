import type { Database } from "@/types/schema";
import { SupabaseClient } from "@supabase/supabase-js";

export const addTasks = async (title: string) => {
    const nuxtApp = useNuxtApp();
    const supabase = nuxtApp.$supabase as SupabaseClient;
    const { data, error } = await supabase.from("tasks").insert({
        title: title,
        status :"0"
    })
    return { data, error };
};