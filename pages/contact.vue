<template>
  <div>
    <p>
      Please to the message via
      <a
        href="https://twitter.com/livejam_db"
        rel="noopener"
        target="_blank"
      ><IconTwitter style="margin-right: 2px;" />Twitter</a> or
      <a
        :href="`${app.repositoryUrl}/issues`"
        rel="noopener"
        target="_blank"
      ><IconGitHub style="margin-right: 3px;" />GitHub Issues</a>.
    </p>
  </div>
</template>

<script>
import { APP_REPOSITORY_URL } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        repositoryUrl: APP_REPOSITORY_URL
      }
    }
  }
}
</script>
