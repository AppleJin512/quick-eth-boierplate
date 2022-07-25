<script>
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
  import CustomWeb3Connector from './components/CustomWeb3Connector.svelte';
</script>

<Router {routes} />
<CustomWeb3Connector />
