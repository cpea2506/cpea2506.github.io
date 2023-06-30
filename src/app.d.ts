// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface Platform {}
    interface PageData {
        repos: GitHubRepo[];
        languages: GitHubLanguages;
    }
    // interface PrivateEnv {}
    // interface PublicEnv {}
    // interface Session {}
    // interface Stuff {}
}
