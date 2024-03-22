<template>
  <header>
    <h1>Get started</h1>
    <h1>Register</h1>
  </header>
  <!--  -->
  <main>
    <form>
      <fieldset>
        <div class="">
          <label for="name">Name</label>
          <input type="search" id="name" placeholder="Surname first" required />
        </div>
        <div class="">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Ex. example@domain.com" required />
        </div>
        <div class="">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="" required />
        </div>
        <div class="">
          <label for="confirm_password">Confirm Password</label>
          <input type="password" id="confirm_password" placeholder="" required />
        </div>
        <div class="">
          <button>Register</button>
        </div>
      </fieldset>
    </form>
  </main>
  <!--  -->
  <footer>
    Already have an account?
    <RouterLink class="" :to="$PATH.login">Log in</RouterLink>
  </footer>
</template>
