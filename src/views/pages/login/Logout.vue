
<script>
import router from '@/router'
export default {
created () {
       this.$store.dispatch("auth/logOut").then(() => {
        router.push('/')
      })
    }
}
</script>
