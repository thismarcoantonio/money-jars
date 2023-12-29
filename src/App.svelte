<Header on:create-jar={() => (isCreatingJar = true)} />
<div class="jars-list">
  <div class="jars-list__content">
    {#each jars as jar, index}
      <Jar on:click={() => setActiveJarIndex(index)} {jar} />
    {/each}
  </div>
</div>
{#if activeJarIndex != null}
  <JarModal
    on:close={() => (activeJarIndex = null)}
    jar={jars[activeJarIndex]}
  />
{/if}
{#if isCreatingJar}
  <CreateJarModal on:close={() => (isCreatingJar = false)} />
{/if}

<script lang="ts">
import Header from "./lib/components/Header.svelte";
import Jar from "./lib/components/Jar.svelte";
import JarModal from "./lib/components/JarModal.svelte";
import CreateJarModal from "./lib/components/CreateJarModal.svelte";

let activeJarIndex: number | null = null;
let isCreatingJar: boolean = false;

const jars = [
  {
    title: "1st jar",
    amount: 300,
    history: [
      { amount: -120, date: new Date().getTime() },
      { amount: 500, date: new Date().getTime() },
      { amount: -320, date: new Date().getTime() },
    ],
  },
  {
    title: "2nd jar",
    amount: 320,
    history: [
      { amount: -20, date: new Date().getTime() },
      { amount: -39.99, date: new Date().getTime() },
      { amount: -42.99, date: new Date().getTime() },
      { amount: 500, date: new Date().getTime() },
    ],
  },
];

function setActiveJarIndex(index: number) {
  activeJarIndex = index;
}
</script>

<style>
.jars-list {
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 64px;
}

.jars-list::-webkit-scrollbar {
  display: none;
}

.jars-list__content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  padding-left: 16px;
  align-items: flex-start;
}
</style>
