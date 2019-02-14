import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    // initial data => 就是data() { return {}}
    email: string = '';
    password: string = '';

    // lifecycle hook
    mounted(): void {
        this.greet()
    }

    // computed
    get computedMsg(): string {
        return 'computed ' + this.email;
    }

    // method
    greet():void {
        console.log('greeting: hello login!');
    }

    login(): void {
        console.log(`email: ${this.email}, password: ${this.password}`);
    }
}