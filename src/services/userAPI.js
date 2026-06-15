import { supabase } from './supabase'

export const userAPI = {
    // Register user baru
    async register(userData) {
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    email: userData.email,
                    password: userData.password,
                    full_name: userData.full_name || null,
                    role: userData.role || 'admin'
                }
            ])
            .select()
        
        if (error) throw error
        return data
    },

    // Login user
    async login(email, password) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .single()
        
        if (error) throw error
        if (!data) throw new Error("Email atau password salah!")
        
        return data
    },

    // Get all users
    async fetchUsers() {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false })
        
        if (error) throw error
        return data
    },

    // Update user
    async updateUser(id, userData) {
        const { data, error } = await supabase
            .from('users')
            .update(userData)
            .eq('id', id)
            .select()
        
        if (error) throw error
        return data
    },

    // Delete user
    async deleteUser(id) {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', id)
        
        if (error) throw error
        return true
    }
}