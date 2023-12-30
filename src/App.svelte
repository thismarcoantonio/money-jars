<Header on:create-jar={() => (isCreatingJar = true)} />
<div class="jars-list">
  {#if loading}
    <div class="jars-list__message">gLoading...</div>
  {:else if jars.length}
    <div class="jars-list__content">
      {#each jars as jar, index}
        <Jar on:click={() => setActiveJarIndex(index)} {jar} />
      {/each}
    </div>
  {:else}
    <div class="jars-list__message">No jars created yet!</div>
  {/if}
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
import { onMount } from "svelte";
import Header from "./lib/components/Header.svelte";
import Jar from "./lib/components/Jar.svelte";
import JarModal from "./lib/components/JarModal.svelte";
import CreateJarModal from "./lib/components/CreateJarModal.svelte";
import { getJars } from "./lib/utils/file";
import type { Jar as JarType } from "./lib/types/Jar";

let activeJarIndex: number | null = null;
let isCreatingJar: boolean = false;

let loading: boolean = false;
let jars: JarType[] = [];

onMount(async () => {
  jars = await getJars();
});

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

.jars-list__message {
  padding: 16px;
  text-align: center;
  font-size: 18px;
  opacity: 0.8;
}
</style>
