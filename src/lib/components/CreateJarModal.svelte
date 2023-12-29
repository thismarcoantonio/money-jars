<Modal on:close>
  <span slot="header">Create Jar</span>
  <form on:submit|preventDefault={handleSubmit}>
    <Input label="Title" name="name" bind:value={values.name} />
    <Input
      type="number"
      label="Amount"
      name="amount"
      bind:value={values.amount}
    />
    <Button>Save</Button>
  </form>
</Modal>

<script lang="ts">
import { createEventDispatcher } from "svelte";
import Modal from "./Modal.svelte";
import Input from "./Input.svelte";
import Button from "./Button.svelte";

const dispatch = createEventDispatcher();

let values = {
  name: "",
  amount: null,
};

function handleSubmit() {
  dispatch("close");
}
</script>
