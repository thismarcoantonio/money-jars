<Modal contained on:close>
  <div slot="header">Add amount</div>
  <form on:submit|preventDefault={handleSubmit}>
    <Input label="Amount" name="amount" bind:value={amount} type="number" />
    <div class="add-amount__form-actions">
      <Button on:click={handleClose} fullWidth variant="secondary">
        Cancel
      </Button>
      <Button disabled={!amount} fullWidth type="submit">Save</Button>
    </div>
  </form>
</Modal>

<script lang="ts">
import { createEventDispatcher } from "svelte";
import Modal from "./Modal.svelte";
import Input from "./Input.svelte";
import Button from "./Button.svelte";
import { addAmount } from "../utils/file";
import type { Jar } from "../types/Jar";

export let jarId: Jar["id"];
let amount: number | null = null;

const dispatch = createEventDispatcher();

async function handleSubmit(event: SubmitEvent) {
  if (amount) {
    await addAmount({ id: jarId, amount });
    (event.target as HTMLFormElement).reset();
    handleClose();
  }
}

function handleClose() {
  dispatch("close");
}
</script>

<style>
.add-amount__form-actions {
  gap: 8px;
  display: flex;
}
</style>
