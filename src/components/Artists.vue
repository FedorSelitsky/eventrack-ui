<template>
  <div>
    <div class="m-b">
      <h1 class="m-a-0">Artists</h1>
    </div>
    <div class="row row-lg">
      <div v-for="artist in artists" :key="artist.id" class="col-xs-4 col-sm-4 col-md-3">
        <div class="item">
          <div class="item-media rounded">
            <a
              href="#"
              class="item-media-content"
              :style="{ 'background-image': `url(${artist.thumb_url})` }"
            ></a>
          </div>
          <div class="item-info text-center">
            <div class="item-title text-ellipsis">
              <a href="#">{{ artist.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Artists extends Vue {
  private artists = [];

  mounted() {
    axios
      .get('/api/artists', { params: { per_page: 12 } })
      .then(response => (this.artists = response.data.results));
  }
}
</script>

<style>
</style>
