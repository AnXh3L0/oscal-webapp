<template>
  <v-layout row wrap>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="logo">
              <a href="https://osc.al"><img src="../assets/logo.png"></a>
            </div>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
            <div class="infos body-2">
              <p><v-icon>book</v-icon> Version: {{ version }}</p>
              <p><v-icon>alarm</v-icon> Timestamp: {{ timestamp }}</p>
              <p><v-icon>fingerprint</v-icon> Author: <a href="http://lushka.al">Anxhelo Lushka</a></p>
              <p><v-icon>code</v-icon> Code / Feedback: <a href="https://github.com/AnXh3L0/oscal-webapp">Github</a></p>
              <p>This is the official OSCAL 2018 schedule progressive webapp.</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import config from '../../config'

export default {
  name: 'about',
  data: () => ({
    version: config.version,
    timestamp: config.timestamp
  })
}
</script>

<style>
  .card {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  .logo {
    text-align: center;
  }

  .infos p {
    margin-bottom: 7px;
  }
</style>


