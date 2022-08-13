<script>
  import DiGithub from "svelte-icons/di/DiGithub.svelte";
  import { base } from "$app/paths";
</script>

<nav class="h-[3.75rem] sticky top-0 z-[2] py-2 px-4">
  <div class="flex-items-center flex-1">
    <a href={base} class="flex-items-center mr-4">
      <img alt="Captain face" class="h-8 mr-2" src="{base}/images/logo.png" />
      <b>CPea's Journey</b>
    </a>
    <a class="mr-4" href={base}> Works </a>
    <a class="mr-4" href="{base}/blogs"> Blogs </a>
  </div>
  <a
    href="https://github.com/cpea2506"
    target="_blank"
    class="flex-items-center"
  >
    <div class="w-10">
      <DiGithub />
    </div>
  </a>
</nav>
