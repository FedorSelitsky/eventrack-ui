<template>
  <div>
    <div class="row-col">
      <div class="col-sm w m-b">
        <div class="item w rounded">
          <div class="item-media">
            <div
              class="item-media-content"
              :style="{ 'background-image': `url(${artist.thumb_url})` }"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="p-l-md no-padding-xs">
          <div class="page-title">
            <h2 class="inline">{{ artist.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { Artist } from '../types';

@Component
export default class ArtistPage extends Vue {
  @Prop({ default: {} })
  private artist!: Artist;

  private mounted(): void {
    this.getArtist();
  }

  private getArtist(): void {
    axios
      .get('/api/artists/' + this.$route.params.id)
      .then(response => {
        this.artist = response.data;
        this.$store.commit('change', this.artist.image_url);
      });
  }
}
</script>

<style>
</style>
