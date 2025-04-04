import type { Database } from "@/types/schema";
import { SupabaseClient } from "@supabase/supabase-js";

export const getTasks = async () => {
    const nuxtApp = useNuxtApp();
    const supabase = nuxtApp.$supabase as SupabaseClient;
    const { data, error } = await supabase.from("tasks").select("*").order("id", { ascending: false });
    return { data, error };
};