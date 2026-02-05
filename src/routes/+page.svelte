<script lang="ts">
    let { data } = $props();
</script>

<h1>Users</h1>

<ul>
    {#each data.users as u (u.id)}
        <li>
            <strong>ID:</strong> {u.id} | 
            <strong>Age:</strong> {u.age ?? 'N/A'}
        </li>
    {:else}
        <p>No users found in the database.</p>
    {/each}
</ul>

<style>
    li {
        margin-bottom: 0.5rem;
        font-family: monospace;
    }
</style>