import { SupabaseClient } from "@supabase/supabase-js";

export const deleteTask = async (id: number) => {
    const nuxtApp = useNuxtApp();
    const supabase = nuxtApp.$supabase as SupabaseClient;
    const { data, error } = await supabase.from("tasks").delete().eq("id", id)
    return { data, error };
};