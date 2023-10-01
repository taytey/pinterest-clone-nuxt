<template> 
<nav class="bg-white dark:bg-zinc-900 opacity-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 <h1 class="text-2xl text-white">T A Y T E</h1>
  <div class="hover:transition-all duration-1000 flex md:order-2">
    <NuxtLink to="/login">
      
      <button type="button" class="hover:transition-all duration-1000 text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">create account</button>
  
    </NuxtLink>
      
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
      <li>
        <NuxtLink to="/" class="hover:transition-all duration-1000 block py-2 pl-3 pr-4 text-white bg-zinc-700 rounded md:bg-transparent md:text-zinc-700 md:p-0 md:dark:text-zinc-500">H O M E</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/board" class="hover:transition-all duration-1000 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">B O A R D</NuxtLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  <slot />
</template>