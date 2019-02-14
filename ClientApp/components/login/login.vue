<template>
    <div>
        <div>
            <label for="email">電子郵件1</label>
            <input id="email" name="email" type="text" v-model="email">
        </div>
        <div>
            <label for="password">密碼</label>
            <input id="password" name="password" type="password" v-model="password">
        </div>
        <p>電子郵件{{email}}</p>
        <p>密碼{{password}}</p>
        <button @click="login">Login</button>
    </div>
</template>

<script src="./login.ts"></script>