<Modal on:close>
  <span slot="header">Create Jar</span>
  <form on:submit|preventDefault={handleSubmit}>
    <Input label="Title" name="title" bind:value={values.title} />
    <Input
      type="number"
      label="Amount"
      name="amount"
      bind:value={values.amount}
    />
    <Button disabled={!values.title || !values.amount} type="submit">
      Save
    </Button>
  </form>
</Modal>

<script lang="ts">
import { createEventDispatcher } from "svelte";
import Modal from "./Modal.svelte";
import Input from "./Input.svelte";
import Button from "./Button.svelte";
import { createJar } from "../utils/file";

const dispatch = createEventDispatcher();

let values = {
  title: "",
  amount: null,
};

async function handleSubmit() {
  if (values.title && values.amount) {
    await createJar({
      title: values.title,
      amount: values.amount,
      history:
        values.amount >= 0
          ? [{ amount: values.amount!, date: new Date().getTime() }]
          : [],
    });
    dispatch("close");
  }
}
</script>
