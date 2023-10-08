<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseClient()
const router = useRouter()

const loading = ref(false)
const email = ref('')
const password = ref('')

const handleSignUp = async () => {
  try {
    loading.value = true
    const { error, data } = await supabase.auth.signUp({ 
        email: email.value, 
        
        password: password.value,

        options: {

        emailRedirectTo: 'http://localhost:3000/confirm',
    }
    })
    if ( error ) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}

</script>

<template>
    <div class="bg-zinc-900 dark:bg-zinc-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 class="text-3xl text-white">T A Y T E</h1>
        <div class=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
                    sign up
                </h1>
                <form @submit.prevent="handleSignUp" class="space-y-4 md:space-y-6" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">your email</label>
                        <input v-model="email" type="email" name="email" id="email" class="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" >
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">password</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:bg-zinc-700 dark:border-zinc-600 dark:focus:ring-primary-600 dark:ring-offset-zinc-800" >
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-zinc-500 dark:text-zinc-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-white hover:underline dark:text-white">Forgot password?</a>
                    </div>
                    <input :value="loading ? 'Loading' : 'create account'" :disabled="loading" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />
                    <NuxtLink to="/confirm">
                        <p class="text-sm font-light text-zinc-500 dark:text-zinc-400">
                        Already have an account? <a class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                    </p>
                    </NuxtLink>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
  </template>