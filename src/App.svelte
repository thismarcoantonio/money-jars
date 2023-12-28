<Header on:create-jar={() => (isCreatingJar = true)} />
<div class="jars-list">
  {#each jars as jar, index}
    <button on:click={() => setActiveJarIndex(index)}>
      <Jar jar={jar} />
    </button>
  {/each}
</div>
{#if activeJarIndex != null}
  <JarModal on:close={() => (activeJarIndex = null)} jar={jars[activeJarIndex]} />
{/if}
{#if isCreatingJar}
  <CreateJarModal on:close={() => (isCreatingJar = false)} />
{/if}

<script lang="ts">
import Header from "./lib/components/Header.svelte";
import Jar from './lib/components/Jar.svelte';
import JarModal from './lib/components/JarModal.svelte';
import CreateJarModal from './lib/components/CreateJarModal.svelte';

let activeJarIndex: number | null = null;
let isCreatingJar: boolean = false;

const jars = [
  { title: '1st jar', amount: 300, history: [{ amount: 120, date: new Date() }] },
  { title: '2nd jar', amount: 320, history: [{ amount: 20, date: new Date() }] },
];

function setActiveJarIndex(index: number) {
  activeJarIndex = index;
}
</script>

<style>
.jars-list {
  display: flex;
}
</style>
